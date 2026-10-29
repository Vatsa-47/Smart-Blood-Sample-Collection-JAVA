package com.smartlabtrack.dto;

import com.smartlabtrack.model.enums.Priority;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.ScanAction;

import java.time.LocalDateTime;
import java.util.List;

public class ScanResponseDTO {

    private String sampleId;
    private String sampleType;
    private Priority priority;
    private SampleStatus status;
    private String currentLocation;
    private String assignedTest;
    private String testResult;
    private String testUnit;

    /**
     * Security Rule: Returns ONLY authorized patient metadata.
     * Sensitive medical history or diagnoses are never leaked in scan responses.
     */
    private String patientName;
    private Integer patientAge;
    private String patientGender;
    private String verifiedBy;
    private String releasedBy;
    private LocalDateTime releasedAt;
    private String recipient;

    private List<ScanAction> allowedActions;
    private List<SampleStatusHistoryDTO> chainOfCustody;
    private String message;

    public ScanResponseDTO() {}

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public String getSampleType() { return sampleType; }
    public void setSampleType(String sampleType) { this.sampleType = sampleType; }

    public Priority getPriority() { return priority; }
    public void setPriority(Priority priority) { this.priority = priority; }

    public SampleStatus getStatus() { return status; }
    public void setStatus(SampleStatus status) { this.status = status; }

    public String getCurrentLocation() { return currentLocation; }
    public void setCurrentLocation(String currentLocation) { this.currentLocation = currentLocation; }

    public String getAssignedTest() { return assignedTest; }
    public void setAssignedTest(String assignedTest) { this.assignedTest = assignedTest; }

    public String getTestResult() { return testResult; }
    public void setTestResult(String testResult) { this.testResult = testResult; }

    public String getTestUnit() { return testUnit; }
    public void setTestUnit(String testUnit) { this.testUnit = testUnit; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public Integer getPatientAge() { return patientAge; }
    public void setPatientAge(Integer patientAge) { this.patientAge = patientAge; }

    public String getPatientGender() { return patientGender; }
    public void setPatientGender(String patientGender) { this.patientGender = patientGender; }

    public String getVerifiedBy() { return verifiedBy; }
    public void setVerifiedBy(String verifiedBy) { this.verifiedBy = verifiedBy; }

    public LocalDateTime getReleasedAt() { return releasedAt; }
    public void setReleasedAt(LocalDateTime releasedAt) { this.releasedAt = releasedAt; }

    public String getReleasedBy() { return releasedBy; }
    public void setReleasedBy(String releasedBy) { this.releasedBy = releasedBy; }

    public String getRecipient() { return recipient; }
    public void setRecipient(String recipient) { this.recipient = recipient; }

    public List<ScanAction> getAllowedActions() { return allowedActions; }
    public void setAllowedActions(List<ScanAction> allowedActions) { this.allowedActions = allowedActions; }

    public List<SampleStatusHistoryDTO> getChainOfCustody() { return chainOfCustody; }
    public void setChainOfCustody(List<SampleStatusHistoryDTO> chainOfCustody) { this.chainOfCustody = chainOfCustody; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
