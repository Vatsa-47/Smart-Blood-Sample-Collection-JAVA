package com.smartlabtrack.dto;

import com.smartlabtrack.model.enums.Priority;
import jakarta.validation.constraints.NotBlank;

public class SampleCreateDTO {

    @NotBlank(message = "Patient ID is required")
    private String patientId;

    @NotBlank(message = "Sample type is required")
    private String sampleType;

    private Priority priority = Priority.NORMAL;

    @NotBlank(message = "Assigned test is required")
    private String assignedTest;

    private String collectorName;

    public SampleCreateDTO() {}

    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }

    public String getSampleType() { return sampleType; }
    public void setSampleType(String sampleType) { this.sampleType = sampleType; }

    public Priority getPriority() { return priority; }
    public void setPriority(Priority priority) { this.priority = priority; }

    public String getAssignedTest() { return assignedTest; }
    public void setAssignedTest(String assignedTest) { this.assignedTest = assignedTest; }

    public String getCollectorName() { return collectorName; }
    public void setCollectorName(String collectorName) { this.collectorName = collectorName; }
}
