package com.smartlabtrack.dto;

import jakarta.validation.constraints.NotBlank;

public class ResultDTO {

    @NotBlank(message = "Sample ID is required")
    private String sampleId;

    @NotBlank(message = "Test name is required")
    private String testName;

    @NotBlank(message = "Result value is required")
    private String resultValue;

    private String unit;
    private String technicianName;
    private String remarks;

    public ResultDTO() {}

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public String getTestName() { return testName; }
    public void setTestName(String testName) { this.testName = testName; }

    public String getResultValue() { return resultValue; }
    public void setResultValue(String resultValue) { this.resultValue = resultValue; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public String getTechnicianName() { return technicianName; }
    public void setTechnicianName(String technicianName) { this.technicianName = technicianName; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
}
