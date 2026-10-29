package com.smartlabtrack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.smartlabtrack.model.enums.Priority;
import com.smartlabtrack.model.enums.SampleStatus;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "samples")
public class Sample {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String sampleId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "collection_request_id")
    @JsonIgnore
    private CollectionRequest collectionRequest;

    @Column(nullable = false)
    private String sampleType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Priority priority = Priority.NORMAL;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SampleStatus status = SampleStatus.SCHEDULED;

    /**
     * Security Rule: QR Token encodes ONLY this identifier / token.
     * Never encode sensitive patient medical history inside the QR code.
     */
    @Column(nullable = false)
    private String qrToken;

    private String barcodeValue;

    private String assignedTest;

    private String testResult;

    private String testUnit;

    private String collectorName;

    private String currentLocation;

    private LocalDateTime collectedAt;
    private LocalDateTime receivedAt;
    private LocalDateTime processedAt;
    private LocalDateTime verifiedAt;
    private String verifiedBy;
    private LocalDateTime releasedAt;
    private String releasedBy;
    private String recipient;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "sample", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("timestamp DESC")
    @JsonIgnore
    private List<SampleStatusHistory> statusHistories = new ArrayList<>();

    public Sample() {}

    public Sample(String sampleId, Patient patient, String sampleType, Priority priority,
                  SampleStatus status, String assignedTest, String collectorName, String currentLocation) {
        this.sampleId = sampleId;
        this.patient = patient;
        this.sampleType = sampleType;
        this.priority = priority;
        this.status = status;
        this.qrToken = sampleId;
        this.barcodeValue = sampleId;
        this.assignedTest = assignedTest;
        this.collectorName = collectorName;
        this.currentLocation = currentLocation;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public Patient getPatient() { return patient; }
    public void setPatient(Patient patient) { this.patient = patient; }

    public CollectionRequest getCollectionRequest() { return collectionRequest; }
    public void setCollectionRequest(CollectionRequest collectionRequest) { this.collectionRequest = collectionRequest; }

    public String getSampleType() { return sampleType; }
    public void setSampleType(String sampleType) { this.sampleType = sampleType; }

    public Priority getPriority() { return priority; }
    public void setPriority(Priority priority) { this.priority = priority; }

    public SampleStatus getStatus() { return status; }
    public void setStatus(SampleStatus status) { this.status = status; }

    public String getQrToken() { return qrToken; }
    public void setQrToken(String qrToken) { this.qrToken = qrToken; }

    public String getBarcodeValue() { return barcodeValue; }
    public void setBarcodeValue(String barcodeValue) { this.barcodeValue = barcodeValue; }

    public String getAssignedTest() { return assignedTest; }
    public void setAssignedTest(String assignedTest) { this.assignedTest = assignedTest; }

    public String getTestResult() { return testResult; }
    public void setTestResult(String testResult) { this.testResult = testResult; }

    public String getTestUnit() { return testUnit; }
    public void setTestUnit(String testUnit) { this.testUnit = testUnit; }

    public String getCollectorName() { return collectorName; }
    public void setCollectorName(String collectorName) { this.collectorName = collectorName; }

    public String getCurrentLocation() { return currentLocation; }
    public void setCurrentLocation(String currentLocation) { this.currentLocation = currentLocation; }

    public LocalDateTime getCollectedAt() { return collectedAt; }
    public void setCollectedAt(LocalDateTime collectedAt) { this.collectedAt = collectedAt; }

    public LocalDateTime getReceivedAt() { return receivedAt; }
    public void setReceivedAt(LocalDateTime receivedAt) { this.receivedAt = receivedAt; }

    public LocalDateTime getProcessedAt() { return processedAt; }
    public void setProcessedAt(LocalDateTime processedAt) { this.processedAt = processedAt; }

    public LocalDateTime getVerifiedAt() { return verifiedAt; }
    public void setVerifiedAt(LocalDateTime verifiedAt) { this.verifiedAt = verifiedAt; }

    public String getVerifiedBy() { return verifiedBy; }
    public void setVerifiedBy(String verifiedBy) { this.verifiedBy = verifiedBy; }

    public LocalDateTime getReleasedAt() { return releasedAt; }
    public void setReleasedAt(LocalDateTime releasedAt) { this.releasedAt = releasedAt; }

    public String getReleasedBy() { return releasedBy; }
    public void setReleasedBy(String releasedBy) { this.releasedBy = releasedBy; }

    public String getRecipient() { return recipient; }
    public void setRecipient(String recipient) { this.recipient = recipient; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public List<SampleStatusHistory> getStatusHistories() { return statusHistories; }
    public void setStatusHistories(List<SampleStatusHistory> statusHistories) { this.statusHistories = statusHistories; }

    public void addHistory(SampleStatusHistory history) {
        statusHistories.add(history);
        history.setSample(this);
    }
}
