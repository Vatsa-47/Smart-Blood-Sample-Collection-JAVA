package com.smartlabtrack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.UserRole;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "sample_status_histories")
public class SampleStatusHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sample_id", nullable = false)
    @JsonIgnore
    private Sample sample;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SampleStatus status;

    @Column(nullable = false)
    private String action;

    @Column(nullable = false)
    private String performedBy;

    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    private String location;

    @Column(nullable = false)
    private LocalDateTime timestamp = LocalDateTime.now();

    @Column(length = 1000)
    private String notes;

    public SampleStatusHistory() {}

    public SampleStatusHistory(Sample sample, SampleStatus status, String action, String performedBy,
                               UserRole userRole, String location, String notes) {
        this.sample = sample;
        this.status = status;
        this.action = action;
        this.performedBy = performedBy;
        this.userRole = userRole;
        this.location = location;
        this.notes = notes;
        this.timestamp = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Sample getSample() { return sample; }
    public void setSample(Sample sample) { this.sample = sample; }

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

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
