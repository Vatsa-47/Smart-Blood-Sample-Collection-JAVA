package com.smartlabtrack.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "collection_requests")
public class CollectionRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String requestId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    private String collectorName;

    private String scheduledAddress;

    private LocalDateTime scheduledTime;

    private String status;

    public CollectionRequest() {}

    public CollectionRequest(String requestId, Patient patient, String collectorName, String scheduledAddress, LocalDateTime scheduledTime, String status) {
        this.requestId = requestId;
        this.patient = patient;
        this.collectorName = collectorName;
        this.scheduledAddress = scheduledAddress;
        this.scheduledTime = scheduledTime;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRequestId() { return requestId; }
    public void setRequestId(String requestId) { this.requestId = requestId; }

    public Patient getPatient() { return patient; }
    public void setPatient(Patient patient) { this.patient = patient; }

    public String getCollectorName() { return collectorName; }
    public void setCollectorName(String collectorName) { this.collectorName = collectorName; }

    public String getScheduledAddress() { return scheduledAddress; }
    public void setScheduledAddress(String scheduledAddress) { this.scheduledAddress = scheduledAddress; }

    public LocalDateTime getScheduledTime() { return scheduledTime; }
    public void setScheduledTime(LocalDateTime scheduledTime) { this.scheduledTime = scheduledTime; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
