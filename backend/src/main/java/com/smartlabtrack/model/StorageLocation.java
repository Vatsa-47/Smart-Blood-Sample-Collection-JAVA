package com.smartlabtrack.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "storage_locations")
public class StorageLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String sampleId;

    private String refrigerator;

    private String rack;

    private String slot;

    private LocalDateTime storedAt = LocalDateTime.now();

    private String storedBy;

    public StorageLocation() {}

    public StorageLocation(String sampleId, String refrigerator, String rack, String slot, String storedBy) {
        this.sampleId = sampleId;
        this.refrigerator = refrigerator;
        this.rack = rack;
        this.slot = slot;
        this.storedBy = storedBy;
        this.storedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public String getRefrigerator() { return refrigerator; }
    public void setRefrigerator(String refrigerator) { this.refrigerator = refrigerator; }

    public String getRack() { return rack; }
    public void setRack(String rack) { this.rack = rack; }

    public String getSlot() { return slot; }
    public void setSlot(String slot) { this.slot = slot; }

    public LocalDateTime getStoredAt() { return storedAt; }
    public void setStoredAt(LocalDateTime storedAt) { this.storedAt = storedAt; }

    public String getStoredBy() { return storedBy; }
    public void setStoredBy(String storedBy) { this.storedBy = storedBy; }
}
