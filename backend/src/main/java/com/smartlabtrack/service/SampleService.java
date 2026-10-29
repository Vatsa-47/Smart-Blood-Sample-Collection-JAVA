package com.smartlabtrack.service;

import com.smartlabtrack.dto.SampleCreateDTO;
import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.model.Patient;
import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.SampleStatusHistory;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.UserRole;
import com.smartlabtrack.repository.PatientRepository;
import com.smartlabtrack.repository.SampleRepository;
import com.smartlabtrack.repository.SampleStatusHistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SampleService {

    private final SampleRepository sampleRepository;
    private final PatientRepository patientRepository;
    private final SampleStatusHistoryRepository historyRepository;

    public SampleService(SampleRepository sampleRepository,
                         PatientRepository patientRepository,
                         SampleStatusHistoryRepository historyRepository) {
        this.sampleRepository = sampleRepository;
        this.patientRepository = patientRepository;
        this.historyRepository = historyRepository;
    }

    @Transactional(readOnly = true)
    public List<Sample> getAllSamples() {
        return sampleRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Sample getSampleBySampleId(String sampleId) {
        return sampleRepository.findBySampleId(sampleId)
                .orElseThrow(() -> new ResourceNotFoundException("Sample not found: " + sampleId));
    }

    @Transactional
    public Sample createSample(SampleCreateDTO dto) {
        Patient patient = patientRepository.findByPatientId(dto.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + dto.getPatientId()));

        long nextNum = sampleRepository.count() + 1;
        String sampleId = String.format("SLT-2026-%06d", nextNum);

        String collector = dto.getCollectorName() != null ? dto.getCollectorName() : "Ravi Kumar (Demo Collector)";
        Sample sample = new Sample(
                sampleId,
                patient,
                dto.getSampleType(),
                dto.getPriority(),
                SampleStatus.SCHEDULED,
                dto.getAssignedTest(),
                collector,
                "Patient Home"
        );
        sample.setTestUnit("Standard");

        Sample saved = sampleRepository.save(sample);

        SampleStatusHistory history = new SampleStatusHistory(
                saved,
                SampleStatus.SCHEDULED,
                "Sample Registered & QR Code Generated",
                "System Admin",
                UserRole.ADMIN,
                "Patient Home",
                "Assigned test: " + dto.getAssignedTest()
        );
        historyRepository.save(history);

        return saved;
    }
}
