package com.smartlabtrack.service;

import com.smartlabtrack.dto.SampleStatusHistoryDTO;
import com.smartlabtrack.dto.TrackingDTO;
import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.SampleStatusHistory;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.repository.SampleRepository;
import com.smartlabtrack.repository.SampleStatusHistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrackingService {

    private final SampleRepository sampleRepository;
    private final SampleStatusHistoryRepository historyRepository;

    public TrackingService(SampleRepository sampleRepository,
                           SampleStatusHistoryRepository historyRepository) {
        this.sampleRepository = sampleRepository;
        this.historyRepository = historyRepository;
    }

    @Transactional(readOnly = true)
    public TrackingDTO getTrackingTimeline(String sampleId) {
        Sample sample = sampleRepository.findBySampleId(sampleId)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found: " + sampleId));

        TrackingDTO dto = new TrackingDTO();
        dto.setSampleId(sample.getSampleId());
        dto.setPatientName(sample.getPatient() != null ? sample.getPatient().getName() : "Unknown");
        dto.setAssignedTest(sample.getAssignedTest());
        dto.setStatus(sample.getStatus());
        dto.setVerifiedBy(sample.getVerifiedBy());
        dto.setReleasedAt(sample.getReleasedAt());
        dto.setRecipient(sample.getRecipient());
        dto.setReportReady(sample.getStatus() == SampleStatus.RELEASED || sample.getStatus() == SampleStatus.COMPLETED);

        // Map status to customer-friendly label
        switch (sample.getStatus()) {
            case SCHEDULED: dto.setStatusLabel("Collection Scheduled"); break;
            case COLLECTED: dto.setStatusLabel("Sample Collected"); break;
            case IN_TRANSPORT: dto.setStatusLabel("In Transit to Central Lab"); break;
            case RECEIVED: dto.setStatusLabel("Received at Central Lab"); break;
            case PROCESSING:
            case TESTING: dto.setStatusLabel("Testing in Progress"); break;
            case RESULT_ENTERED:
            case AWAITING_VERIFICATION: dto.setStatusLabel("Doctor is Reviewing Your Report"); break;
            case VERIFIED: dto.setStatusLabel("Report Verified — Preparing Delivery"); break;
            case RELEASED:
            case COMPLETED: dto.setStatusLabel("Report Ready & Released"); break;
            default: dto.setStatusLabel(sample.getStatus().name()); break;
        }

        // Build 5 patient-friendly milestone steps
        int currentRank = getStatusRank(sample.getStatus());
        List<TrackingDTO.TrackingStepDTO> steps = new ArrayList<>();

        steps.add(new TrackingDTO.TrackingStepDTO(
                "Home Collection Booked",
                currentRank >= 1,
                currentRank == 1,
                sample.getCreatedAt() != null ? sample.getCreatedAt().toString() : "Confirmed",
                "Appointment confirmed and phlebotomist allocated."
        ));
        steps.add(new TrackingDTO.TrackingStepDTO(
                "Sample Collected & Tagged",
                currentRank >= 2,
                currentRank == 2,
                sample.getCollectedAt() != null ? sample.getCollectedAt().toString() : "Pending",
                "Phlebotomist verified barcodes and secured the specimen."
        ));
        steps.add(new TrackingDTO.TrackingStepDTO(
                "Received & Testing at Lab",
                currentRank >= 3,
                currentRank == 3,
                sample.getReceivedAt() != null ? sample.getReceivedAt().toString() : "In Transit",
                "Delivered under cold chain custody and analyzed."
        ));
        steps.add(new TrackingDTO.TrackingStepDTO(
                "Doctor Review & Verification",
                currentRank >= 4,
                currentRank == 4,
                sample.getVerifiedAt() != null ? sample.getVerifiedAt().toString() : "Pending Verification",
                "Medical pathologist reviewed and approved test findings."
        ));
        steps.add(new TrackingDTO.TrackingStepDTO(
                "Diagnostic Report Released",
                currentRank >= 5,
                currentRank == 5,
                sample.getReleasedAt() != null ? sample.getReleasedAt().toString() : "Awaiting Release",
                "Certified digital medical report released to patient."
        ));

        dto.setSteps(steps);

        List<SampleStatusHistory> histories = historyRepository.findBySampleSampleIdOrderByTimestampAsc(sampleId);
        List<SampleStatusHistoryDTO> historyDTOs = histories.stream()
                .map(h -> new SampleStatusHistoryDTO(h.getTimestamp(), h.getStatus(), h.getAction(),
                        h.getPerformedBy(), h.getUserRole(), h.getLocation(), h.getNotes()))
                .collect(Collectors.toList());
        dto.setChainOfCustody(historyDTOs);

        return dto;
    }

    private int getStatusRank(SampleStatus status) {
        switch (status) {
            case SCHEDULED: return 1;
            case COLLECTED:
            case IN_TRANSPORT: return 2;
            case RECEIVED:
            case PROCESSING:
            case TESTING: return 3;
            case RESULT_ENTERED:
            case AWAITING_VERIFICATION:
            case VERIFIED: return 4;
            case RELEASED:
            case COMPLETED: return 5;
            default: return 1;
        }
    }
}
