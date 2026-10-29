package com.smartlabtrack.dto;

import com.smartlabtrack.model.enums.SampleStatus;
import java.time.LocalDateTime;
import java.util.List;

public class TrackingDTO {

    private String sampleId;
    private String patientName;
    private String assignedTest;
    private SampleStatus status;
    private String statusLabel;
    private boolean reportReady;
    private String verifiedBy;
    private LocalDateTime releasedAt;
    private String recipient;
    private List<TrackingStepDTO> steps;
    private List<SampleStatusHistoryDTO> chainOfCustody;

    public TrackingDTO() {}

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public String getAssignedTest() { return assignedTest; }
    public void setAssignedTest(String assignedTest) { this.assignedTest = assignedTest; }

    public SampleStatus getStatus() { return status; }
    public void setStatus(SampleStatus status) { this.status = status; }

    public String getStatusLabel() { return statusLabel; }
    public void setStatusLabel(String statusLabel) { this.statusLabel = statusLabel; }

    public boolean isReportReady() { return reportReady; }
    public void setReportReady(boolean reportReady) { this.reportReady = reportReady; }

    public String getVerifiedBy() { return verifiedBy; }
    public void setVerifiedBy(String verifiedBy) { this.verifiedBy = verifiedBy; }

    public LocalDateTime getReleasedAt() { return releasedAt; }
    public void setReleasedAt(LocalDateTime releasedAt) { this.releasedAt = releasedAt; }

    public String getRecipient() { return recipient; }
    public void setRecipient(String recipient) { this.recipient = recipient; }

    public List<TrackingStepDTO> getSteps() { return steps; }
    public void setSteps(List<TrackingStepDTO> steps) { this.steps = steps; }

    public List<SampleStatusHistoryDTO> getChainOfCustody() { return chainOfCustody; }
    public void setChainOfCustody(List<SampleStatusHistoryDTO> chainOfCustody) { this.chainOfCustody = chainOfCustody; }

    public static class TrackingStepDTO {
        private String stepName;
        private boolean completed;
        private boolean active;
        private String timestamp;
        private String description;

        public TrackingStepDTO() {}

        public TrackingStepDTO(String stepName, boolean completed, boolean active, String timestamp, String description) {
            this.stepName = stepName;
            this.completed = completed;
            this.active = active;
            this.timestamp = timestamp;
            this.description = description;
        }

        public String getStepName() { return stepName; }
        public void setStepName(String stepName) { this.stepName = stepName; }

        public boolean isCompleted() { return completed; }
        public void setCompleted(boolean completed) { this.completed = completed; }

        public boolean isActive() { return active; }
        public void setActive(boolean active) { this.active = active; }

        public String getTimestamp() { return timestamp; }
        public void setTimestamp(String timestamp) { this.timestamp = timestamp; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
    }
}
