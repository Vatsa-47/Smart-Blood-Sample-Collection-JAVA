package com.smartlabtrack.dto;

import com.smartlabtrack.model.enums.ScanAction;
import com.smartlabtrack.model.enums.UserRole;
import jakarta.validation.constraints.NotNull;

public class ScanActionRequestDTO {

    @NotNull(message = "Scan action is required")
    private ScanAction action;

    @NotNull(message = "User role is required")
    private UserRole userRole;

    private String userName;

    private String location;

    private String resultValue;

    private String resultUnit;

    private String notes;

    public ScanActionRequestDTO() {}

    public ScanAction getAction() { return action; }
    public void setAction(ScanAction action) { this.action = action; }

    public UserRole getUserRole() { return userRole; }
    public void setUserRole(UserRole userRole) { this.userRole = userRole; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getResultValue() { return resultValue; }
    public void setResultValue(String resultValue) { this.resultValue = resultValue; }

    public String getResultUnit() { return resultUnit; }
    public void setResultUnit(String resultUnit) { this.resultUnit = resultUnit; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
