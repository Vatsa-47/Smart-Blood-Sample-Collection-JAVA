package com.smartlabtrack.service;

import com.smartlabtrack.dto.ResultDTO;
import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.model.Alert;
import com.smartlabtrack.model.Result;
import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.SampleStatusHistory;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.UserRole;
import com.smartlabtrack.repository.AlertRepository;
import com.smartlabtrack.repository.ResultRepository;
import com.smartlabtrack.repository.SampleRepository;
import com.smartlabtrack.repository.SampleStatusHistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ResultService {

    private final ResultRepository resultRepository;
    private final SampleRepository sampleRepository;
    private final SampleStatusHistoryRepository historyRepository;
    private final AlertRepository alertRepository;

    public ResultService(ResultRepository resultRepository,
                         SampleRepository sampleRepository,
                         SampleStatusHistoryRepository historyRepository,
                         AlertRepository alertRepository) {
        this.resultRepository = resultRepository;
        this.sampleRepository = sampleRepository;
        this.historyRepository = historyRepository;
        this.alertRepository = alertRepository;
    }

    @Transactional
    public Result recordResult(ResultDTO dto) {
        Sample sample = sampleRepository.findBySampleId(dto.getSampleId())
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found: " + dto.getSampleId()));

        sample.setTestResult(dto.getResultValue());
        if (dto.getUnit() != null) {
            sample.setTestUnit(dto.getUnit());
        }
        sample.setStatus(SampleStatus.AWAITING_VERIFICATION);
        sample.setUpdatedAt(LocalDateTime.now());
        sampleRepository.save(sample);

        Result result = new Result(sample, dto.getTestName(), dto.getResultValue(), dto.getUnit(), dto.getTechnicianName());
        result.setRemarks(dto.getRemarks());
        Result saved = resultRepository.save(result);

        // Chain of custody update
        SampleStatusHistory history = new SampleStatusHistory(
                sample,
                SampleStatus.AWAITING_VERIFICATION,
                "Test Result Recorded & Submitted for Doctor Verification",
                dto.getTechnicianName() != null ? dto.getTechnicianName() : "Lab Technician",
                UserRole.LAB_TECHNICIAN,
                "Testing Room",
                "Value: " + dto.getResultValue() + " " + (dto.getUnit() != null ? dto.getUnit() : "")
        );
        historyRepository.save(history);

        // Check for potential panic / critical values (e.g. Glucose > 200 or Hemoglobin < 7)
        try {
            double val = Double.parseDouble(dto.getResultValue().replaceAll("[^0-9.]", ""));
            if (dto.getTestName().toLowerCase().contains("sugar") || dto.getTestName().toLowerCase().contains("glucose")) {
                if (val > 200 || val < 60) {
                    alertRepository.save(new Alert("CRITICAL_RESULT", "Critical glucose value (" + val + " mg/dL) for sample " + sample.getSampleId(), sample.getSampleId(), "DANGER"));
                }
            }
        } catch (Exception ignored) {}

        return saved;
    }

    @Transactional(readOnly = true)
    public List<Result> getResultsForSample(String sampleId) {
        return resultRepository.findBySampleSampleId(sampleId);
    }
}
