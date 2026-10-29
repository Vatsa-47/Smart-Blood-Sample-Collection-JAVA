package com.smartlabtrack.service;

import com.smartlabtrack.dto.SampleStatusHistoryDTO;
import com.smartlabtrack.dto.ScanActionRequestDTO;
import com.smartlabtrack.dto.ScanResponseDTO;
import com.smartlabtrack.exception.InvalidTransitionException;
import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.exception.UnauthorizedActionException;
import com.smartlabtrack.model.Alert;
import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.SampleStatusHistory;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.ScanAction;
import com.smartlabtrack.model.enums.UserRole;
import com.smartlabtrack.repository.AlertRepository;
import com.smartlabtrack.repository.SampleRepository;
import com.smartlabtrack.repository.SampleStatusHistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SampleScanService {

    private final SampleRepository sampleRepository;
    private final SampleStatusHistoryRepository historyRepository;
    private final AlertRepository alertRepository;

    public SampleScanService(SampleRepository sampleRepository,
                             SampleStatusHistoryRepository historyRepository,
                             AlertRepository alertRepository) {
        this.sampleRepository = sampleRepository;
        this.historyRepository = historyRepository;
        this.alertRepository = alertRepository;
    }

    /**
     * Finds sample by Sample ID, QR token, or Barcode value.
     * Enforces role-based data filtering and returns permitted next actions.
     */
    @Transactional(readOnly = true)
    public ScanResponseDTO scanSample(String sampleCode, UserRole role) {
        Sample sample = findSampleByCode(sampleCode);

        ScanResponseDTO dto = new ScanResponseDTO();
        dto.setSampleId(sample.getSampleId());
        dto.setSampleType(sample.getSampleType());
        dto.setPriority(sample.getPriority());
        dto.setStatus(sample.getStatus());
        dto.setCurrentLocation(sample.getCurrentLocation());
        dto.setAssignedTest(sample.getAssignedTest());
        dto.setTestResult(sample.getTestResult());
        dto.setTestUnit(sample.getTestUnit());

        dto.setVerifiedBy(sample.getVerifiedBy());
        dto.setReleasedAt(sample.getReleasedAt());
        dto.setReleasedBy(sample.getReleasedBy());
        dto.setRecipient(sample.getRecipient());

        // Authorized patient info: Demographics only
        if (sample.getPatient() != null) {
            dto.setPatientName(sample.getPatient().getName());
            dto.setPatientAge(sample.getPatient().getAge());
            dto.setPatientGender(sample.getPatient().getGender());
        }

        // Determine allowed next actions for this specific role and current status
        dto.setAllowedActions(determineAllowedActions(sample.getStatus(), role));

        // Populate Chain of Custody audit trail
        List<SampleStatusHistory> histories = historyRepository.findBySampleSampleIdOrderByTimestampAsc(sample.getSampleId());
        List<SampleStatusHistoryDTO> historyDTOs = histories.stream()
                .map(h -> new SampleStatusHistoryDTO(h.getTimestamp(), h.getStatus(), h.getAction(),
                        h.getPerformedBy(), h.getUserRole(), h.getLocation(), h.getNotes()))
                .collect(Collectors.toList());
        dto.setChainOfCustody(historyDTOs);

        dto.setMessage("Sample " + sample.getSampleId() + " identified successfully.");
        return dto;
    }

    /**
     * Executes handoff/status transition upon physical QR/Barcode scan.
     * Validates transition rules, updates status, and appends to Chain of Custody.
     */
    @Transactional
    public ScanResponseDTO executeScanAction(String sampleCode, ScanActionRequestDTO request) {
        Sample sample = findSampleByCode(sampleCode);

        // 1. Validate role authorization and status transition
        validateAction(sample, request.getAction(), request.getUserRole());

        // 2. Perform state transition
        SampleStatus newStatus = sample.getStatus();
        String location = request.getLocation();
        LocalDateTime now = LocalDateTime.now();

        switch (request.getAction()) {
            case COLLECT:
                newStatus = SampleStatus.COLLECTED;
                location = location != null ? location : "Patient Home";
                sample.setCollectedAt(now);
                break;
            case HANDOFF:
                newStatus = SampleStatus.IN_TRANSPORT;
                location = location != null ? location : "On the way to Lab";
                break;
            case RECEIVE:
                newStatus = SampleStatus.RECEIVED;
                location = location != null ? location : "Lab Reception";
                sample.setReceivedAt(now);
                break;
            case PROCESS:
                newStatus = SampleStatus.PROCESSING;
                location = location != null ? location : "Main Laboratory";
                sample.setProcessedAt(now);
                break;
            case ENTER_RESULT:
            case RESULT_ENTERED:
                newStatus = SampleStatus.AWAITING_VERIFICATION;
                location = location != null ? location : "Testing Room";
                if (request.getResultValue() != null) {
                    sample.setTestResult(request.getResultValue());
                }
                if (request.getResultUnit() != null) {
                    sample.setTestUnit(request.getResultUnit());
                }
                break;
            case VERIFY:
            case VERIFY_RESULT:
                newStatus = SampleStatus.VERIFIED;
                location = location != null ? location : "Testing Room / Doctor Desk";
                sample.setVerifiedAt(now);
                sample.setVerifiedBy(request.getUserName() != null ? request.getUserName() : "Dr. Priya Shah");
                break;
            case RELEASE_REPORT:
                newStatus = SampleStatus.RELEASED;
                location = location != null ? location : "Patient Portal / Delivered";
                sample.setReleasedAt(now);
                sample.setReleasedBy(request.getUserName() != null ? request.getUserName() : (sample.getVerifiedBy() != null ? sample.getVerifiedBy() : "Dr. Priya Shah"));
                if (sample.getPatient() != null) {
                    sample.setRecipient(sample.getPatient().getName());
                }
                break;
            case STORE:
                newStatus = SampleStatus.COMPLETED;
                location = location != null ? location : "Cold Storage (Rack B / Slot 14)";
                break;
            case RECOLLECTION:
                newStatus = SampleStatus.SCHEDULED;
                location = "Patient Home";
                alertRepository.save(new Alert("RECOLLECTION_REQUEST",
                        "Recollection requested for " + sample.getSampleId() + ": " + request.getNotes(),
                        sample.getSampleId(), "WARNING"));
                break;
        }

        sample.setStatus(newStatus);
        sample.setCurrentLocation(location);
        sample.setUpdatedAt(now);
        sampleRepository.save(sample);

        // 3. Append to Chain of Custody audit history
        String actionDescription = formatActionDescription(request.getAction());
        String actorName = request.getUserName() != null ? request.getUserName() : request.getUserRole().name();
        SampleStatusHistory history = new SampleStatusHistory(
                sample, newStatus, actionDescription, actorName,
                request.getUserRole(), location, request.getNotes()
        );
        historyRepository.save(history);

        return scanSample(sample.getSampleId(), request.getUserRole());
    }

    /**
     * Enforces smart transition and role permission rules.
     */
    private void validateAction(Sample sample, ScanAction action, UserRole role) {
        SampleStatus current = sample.getStatus();

        // Admin is restricted from clinical actions (verification and report release)
        if (role == UserRole.ADMIN) {
            if (action == ScanAction.RELEASE_REPORT || action == ScanAction.VERIFY || action == ScanAction.VERIFY_RESULT) {
                throw new UnauthorizedActionException("Administrative role cannot verify or release patient medical reports. This clinical action is reserved for the Doctor/Verifier.");
            }
            return;
        }

        // Collector rules
        if (role == UserRole.COLLECTOR) {
            if (action == ScanAction.COLLECT) {
                if (current != SampleStatus.SCHEDULED) {
                    throw new InvalidTransitionException("Cannot COLLECT sample with status " + current + ". Must be SCHEDULED.");
                }
                return;
            } else if (action == ScanAction.HANDOFF) {
                if (current != SampleStatus.COLLECTED) {
                    throw new InvalidTransitionException("Cannot HANDOFF sample with status " + current + ". Must be COLLECTED.");
                }
                return;
            } else if (action == ScanAction.RECOLLECTION) {
                return;
            }
            throw new UnauthorizedActionException("Collector is not authorized to perform action: " + action);
        }

        // Lab Technician rules
        if (role == UserRole.LAB_TECHNICIAN) {
            if (action == ScanAction.RECEIVE) {
                if (current != SampleStatus.COLLECTED && current != SampleStatus.IN_TRANSPORT) {
                    throw new InvalidTransitionException("Cannot RECEIVE sample with status " + current + ". Must be COLLECTED or IN_TRANSPORT.");
                }
                return;
            } else if (action == ScanAction.PROCESS) {
                if (current != SampleStatus.RECEIVED) {
                    throw new InvalidTransitionException("Cannot begin PROCESSING on sample with status " + current + ". Must be RECEIVED at lab.");
                }
                return;
            } else if (action == ScanAction.ENTER_RESULT || action == ScanAction.RESULT_ENTERED) {
                if (current != SampleStatus.PROCESSING && current != SampleStatus.TESTING) {
                    throw new InvalidTransitionException("Cannot enter test result on sample with status " + current + ". Must be in PROCESSING.");
                }
                return;
            } else if (action == ScanAction.STORE) {
                if (current != SampleStatus.VERIFIED && current != SampleStatus.RELEASED) {
                    throw new InvalidTransitionException("Cannot STORE sample until it has been VERIFIED/RELEASED.");
                }
                return;
            }
            throw new UnauthorizedActionException("Lab Technician is not authorized to perform action: " + action);
        }

        // Verifier / Doctor rules: Can verify result, then release report to patient
        if (role == UserRole.VERIFIER) {
            if (action == ScanAction.VERIFY || action == ScanAction.VERIFY_RESULT) {
                if (current != SampleStatus.TESTING && current != SampleStatus.RESULT_ENTERED && current != SampleStatus.AWAITING_VERIFICATION && current != SampleStatus.PROCESSING) {
                    throw new InvalidTransitionException("Cannot VERIFY sample with status " + current + ". Test result must be recorded first.");
                }
                return;
            } else if (action == ScanAction.RELEASE_REPORT) {
                if (current != SampleStatus.VERIFIED) {
                    throw new InvalidTransitionException("Cannot RELEASE report to patient until it has been VERIFIED by doctor.");
                }
                return;
            }
            throw new UnauthorizedActionException("Doctor/Verifier is not authorized to perform action: " + action);
        }

        throw new UnauthorizedActionException("Role " + role + " has no permissions for action " + action);
    }

    private List<ScanAction> determineAllowedActions(SampleStatus status, UserRole role) {
        List<ScanAction> actions = new ArrayList<>();
        if (role == UserRole.ADMIN) {
            // Admin monitors samples and audit trails; no clinical workflow actions assigned
            return actions;
        }

        switch (role) {
            case COLLECTOR:
                if (status == SampleStatus.SCHEDULED) {
                    actions.add(ScanAction.COLLECT);
                    actions.add(ScanAction.RECOLLECTION);
                } else if (status == SampleStatus.COLLECTED) {
                    actions.add(ScanAction.HANDOFF);
                }
                break;
            case LAB_TECHNICIAN:
                if (status == SampleStatus.COLLECTED || status == SampleStatus.IN_TRANSPORT) {
                    actions.add(ScanAction.RECEIVE);
                } else if (status == SampleStatus.RECEIVED) {
                    actions.add(ScanAction.PROCESS);
                } else if (status == SampleStatus.PROCESSING || status == SampleStatus.TESTING) {
                    actions.add(ScanAction.ENTER_RESULT);
                } else if (status == SampleStatus.VERIFIED || status == SampleStatus.RELEASED) {
                    actions.add(ScanAction.STORE);
                }
                break;
            case VERIFIER:
                if (status == SampleStatus.TESTING || status == SampleStatus.PROCESSING || status == SampleStatus.RESULT_ENTERED || status == SampleStatus.AWAITING_VERIFICATION) {
                    actions.add(ScanAction.VERIFY);
                } else if (status == SampleStatus.VERIFIED) {
                    actions.add(ScanAction.RELEASE_REPORT);
                }
                break;
            case CUSTOMER:
                break;
        }
        return actions;
    }

    private String formatActionDescription(ScanAction action) {
        switch (action) {
            case COLLECT: return "Sample Collected at Patient Home";
            case HANDOFF: return "Sent for Transport";
            case RECEIVE: return "Received at Laboratory";
            case PROCESS: return "Processing Started on Automated Analyzer";
            case ENTER_RESULT:
            case RESULT_ENTERED: return "Test Result Entered";
            case VERIFY:
            case VERIFY_RESULT: return "Result Verified by Doctor";
            case RELEASE_REPORT: return "Report Released to Patient";
            case STORE: return "Sample Archived to Cold Storage";
            case RECOLLECTION: return "Recollection Requested";
            default: return action.name();
        }
    }

    private Sample findSampleByCode(String code) {
        return sampleRepository.findBySampleIdIgnoreCase(code)
                .or(() -> sampleRepository.findByQrTokenIgnoreCase(code))
                .or(() -> sampleRepository.findByBarcodeValueIgnoreCase(code))
                .orElseThrow(() -> new ResourceNotFoundException("No sample found matching code: " + code));
    }
}
