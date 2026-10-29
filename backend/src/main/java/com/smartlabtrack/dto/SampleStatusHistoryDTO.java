package com.smartlabtrack.dto;

import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.UserRole;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class SampleStatusHistoryDTO {

    private String timestamp;
    private SampleStatus status;
    private String action;
    private String performedBy;
    private UserRole userRole;
    private String location;
    private String notes;

    public SampleStatusHistoryDTO() {}

    public SampleStatusHistoryDTO(LocalDateTime time, SampleStatus status, String action,
                                  String performedBy, UserRole userRole, String location, String notes) {
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("hh:mm a, dd-MMM-yyyy");
        this.timestamp = time != null ? time.format(fmt) : "";
        this.status = status;
        this.action = action;
        this.performedBy = performedBy;
        this.userRole = userRole;
        this.location = location;
        this.notes = notes;
    }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }

    public SampleStatus getStatus() { return status; }
    public void setStatus(SampleStatus status) { this.status = status; }

    public String getAction() { return action; }
    public void setAction(String action) { this.action = action; }

    public String getPerformedBy() { return performedBy; }
    public void setPerformedBy(String performedBy) { this.performedBy = performedBy; }

    public UserRole getUserRole() { return userRole; }
    public void setUserRole(UserRole userRole) { this.userRole = userRole; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
