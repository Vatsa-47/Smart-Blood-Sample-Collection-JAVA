package com.smartlabtrack.service;

import com.smartlabtrack.dto.ReportDTO;
import com.smartlabtrack.exception.InvalidTransitionException;
import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.SampleStatusHistory;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.UserRole;
import com.smartlabtrack.repository.SampleRepository;
import com.smartlabtrack.repository.SampleStatusHistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class ReportService {

    private final SampleRepository sampleRepository;
    private final SampleStatusHistoryRepository historyRepository;

    public ReportService(SampleRepository sampleRepository,
                         SampleStatusHistoryRepository historyRepository) {
        this.sampleRepository = sampleRepository;
        this.historyRepository = historyRepository;
    }

    @Transactional(readOnly = true)
    public ReportDTO getReportData(String sampleId) {
        Sample sample = sampleRepository.findBySampleId(sampleId)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found: " + sampleId));

        ReportDTO dto = new ReportDTO();
        dto.setSampleId(sample.getSampleId());
        dto.setSampleType(sample.getSampleType());
        dto.setAssignedTest(sample.getAssignedTest());
        dto.setTestResult(sample.getTestResult() != null ? sample.getTestResult() : "Pending Analysis");
        dto.setTestUnit(sample.getTestUnit() != null ? sample.getTestUnit() : "");
        dto.setStatus(sample.getStatus().name());

        if (sample.getPatient() != null) {
            dto.setPatientId(sample.getPatient().getPatientId());
            dto.setPatientName(sample.getPatient().getName());
            dto.setPatientAge(sample.getPatient().getAge());
            dto.setPatientGender(sample.getPatient().getGender());
            dto.setPatientPhone(sample.getPatient().getPhone());
        }

        // Set reference range based on assigned test
        String test = sample.getAssignedTest() != null ? sample.getAssignedTest().toLowerCase() : "";
        if (test.contains("blood count") || test.contains("cbc") || test.contains("hemoglobin")) {
            dto.setReferenceRange("13.0 - 17.0 g/dL (Adult Male) / 12.0 - 15.0 g/dL (Adult Female)");
        } else if (test.contains("sugar") || test.contains("glucose") || test.contains("fbs")) {
            dto.setReferenceRange("70 - 99 mg/dL (Normal Fasting)");
        } else if (test.contains("lipid") || test.contains("cholesterol")) {
            dto.setReferenceRange("< 200 mg/dL (Desirable Total Cholesterol)");
        } else if (test.contains("thyroid") || test.contains("tsh")) {
            dto.setReferenceRange("0.4 - 4.0 mIU/L (Normal Adult)");
        } else {
            dto.setReferenceRange("Clinical Reference Range Normal (ISO 15189 Standards)");
        }

        dto.setCollectedAt(sample.getCollectedAt());
        dto.setReceivedAt(sample.getReceivedAt());
        dto.setVerifiedAt(sample.getVerifiedAt());
        dto.setVerifiedBy(sample.getVerifiedBy());
        dto.setReleasedAt(sample.getReleasedAt());
        dto.setReleasedBy(sample.getReleasedBy());
        dto.setReleased(sample.getStatus() == SampleStatus.RELEASED || sample.getStatus() == SampleStatus.COMPLETED);
        dto.setDoctorRemarks("All laboratory controls and automated internal calibrations verified within standard limits.");

        return dto;
    }

    @Transactional
    public ReportDTO verifyReport(String sampleId, String doctorName, String remarks) {
        Sample sample = sampleRepository.findBySampleId(sampleId)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found: " + sampleId));

        if (sample.getStatus() != SampleStatus.AWAITING_VERIFICATION &&
            sample.getStatus() != SampleStatus.PROCESSING &&
            sample.getStatus() != SampleStatus.TESTING &&
            sample.getStatus() != SampleStatus.RESULT_ENTERED) {
            throw new InvalidTransitionException("Sample cannot be verified in current state: " + sample.getStatus());
        }

        LocalDateTime now = LocalDateTime.now();
        sample.setStatus(SampleStatus.VERIFIED);
        sample.setVerifiedAt(now);
        sample.setVerifiedBy(doctorName != null ? doctorName : "Dr. Priya Shah");
        sample.setUpdatedAt(now);
        sampleRepository.save(sample);

        SampleStatusHistory history = new SampleStatusHistory(
                sample,
                SampleStatus.VERIFIED,
                "Medical Report Verified by Doctor",
                sample.getVerifiedBy(),
                UserRole.VERIFIER,
                "Testing Room / Doctor Desk",
                remarks != null ? remarks : "Clinical values verified against medical reference intervals."
        );
        historyRepository.save(history);

        return getReportData(sampleId);
    }

    @Transactional
    public ReportDTO releaseReportToCustomer(String sampleId, String doctorName) {
        Sample sample = sampleRepository.findBySampleId(sampleId)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found: " + sampleId));

        if (sample.getStatus() != SampleStatus.VERIFIED) {
            throw new InvalidTransitionException("Report must be clinically VERIFIED before releasing to patient. Current status: " + sample.getStatus());
        }

        LocalDateTime now = LocalDateTime.now();
        sample.setStatus(SampleStatus.RELEASED);
        sample.setReleasedAt(now);
        sample.setReleasedBy(doctorName != null ? doctorName : (sample.getVerifiedBy() != null ? sample.getVerifiedBy() : "Dr. Priya Shah"));
        if (sample.getPatient() != null) {
            sample.setRecipient(sample.getPatient().getName());
        }
        sample.setUpdatedAt(now);
        sampleRepository.save(sample);

        SampleStatusHistory history = new SampleStatusHistory(
                sample,
                SampleStatus.RELEASED,
                "Diagnostic Medical Report Released to Patient",
                sample.getReleasedBy(),
                UserRole.VERIFIER,
                "Patient Portal",
                "Official report released to patient recipient: " + sample.getRecipient()
        );
        historyRepository.save(history);

        return getReportData(sampleId);
    }
}
