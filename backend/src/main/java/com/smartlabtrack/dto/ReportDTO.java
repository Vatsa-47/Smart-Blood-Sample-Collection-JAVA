package com.smartlabtrack.dto;

import java.time.LocalDateTime;

public class ReportDTO {

    private String sampleId;
    private String patientId;
    private String patientName;
    private Integer patientAge;
    private String patientGender;
    private String patientPhone;

    private String sampleType;
    private String assignedTest;
    private String testResult;
    private String testUnit;
    private String referenceRange;
    private String status;

    private LocalDateTime collectedAt;
    private LocalDateTime receivedAt;
    private LocalDateTime verifiedAt;
    private String verifiedBy;

    private LocalDateTime releasedAt;
    private String releasedBy;
    private String doctorRemarks;
    private boolean isReleased;

    public ReportDTO() {}

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public Integer getPatientAge() { return patientAge; }
    public void setPatientAge(Integer patientAge) { this.patientAge = patientAge; }

    public String getPatientGender() { return patientGender; }
    public void setPatientGender(String patientGender) { this.patientGender = patientGender; }

    public String getPatientPhone() { return patientPhone; }
    public void setPatientPhone(String patientPhone) { this.patientPhone = patientPhone; }

    public String getSampleType() { return sampleType; }
    public void setSampleType(String sampleType) { this.sampleType = sampleType; }

    public String getAssignedTest() { return assignedTest; }
    public void setAssignedTest(String assignedTest) { this.assignedTest = assignedTest; }

    public String getTestResult() { return testResult; }
    public void setTestResult(String testResult) { this.testResult = testResult; }

    public String getTestUnit() { return testUnit; }
    public void setTestUnit(String testUnit) { this.testUnit = testUnit; }

    public String getReferenceRange() { return referenceRange; }
    public void setReferenceRange(String referenceRange) { this.referenceRange = referenceRange; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCollectedAt() { return collectedAt; }
    public void setCollectedAt(LocalDateTime collectedAt) { this.collectedAt = collectedAt; }

    public LocalDateTime getReceivedAt() { return receivedAt; }
    public void setReceivedAt(LocalDateTime receivedAt) { this.receivedAt = receivedAt; }

    public LocalDateTime getVerifiedAt() { return verifiedAt; }
    public void setVerifiedAt(LocalDateTime verifiedAt) { this.verifiedAt = verifiedAt; }

    public String getVerifiedBy() { return verifiedBy; }
    public void setVerifiedBy(String verifiedBy) { this.verifiedBy = verifiedBy; }

    public LocalDateTime getReleasedAt() { return releasedAt; }
    public void setReleasedAt(LocalDateTime releasedAt) { this.releasedAt = releasedAt; }

    public String getReleasedBy() { return releasedBy; }
    public void setReleasedBy(String releasedBy) { this.releasedBy = releasedBy; }

    public String getDoctorRemarks() { return doctorRemarks; }
    public void setDoctorRemarks(String doctorRemarks) { this.doctorRemarks = doctorRemarks; }

    public boolean isReleased() { return isReleased; }
    public void setReleased(boolean released) { isReleased = released; }
}
