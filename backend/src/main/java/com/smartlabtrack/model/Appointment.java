package com.smartlabtrack.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String appointmentId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(nullable = false)
    private String patientName;

    private String patientPhone;

    @Column(nullable = false)
    private LocalDate scheduledDate;

    @Column(nullable = false)
    private String timeSlot;

    @Column(length = 500, nullable = false)
    private String address;

    private String testType;

    @Column(nullable = false)
    private String status = "CONFIRMED";

    private String assignedCollector;

    private String sampleId;

    private LocalDateTime createdAt = LocalDateTime.now();

    public Appointment() {}

    public Appointment(String appointmentId, Customer customer, String patientName, String patientPhone,
                       LocalDate scheduledDate, String timeSlot, String address, String testType,
                       String assignedCollector, String sampleId) {
        this.appointmentId = appointmentId;
        this.customer = customer;
        this.patientName = patientName;
        this.patientPhone = patientPhone;
        this.scheduledDate = scheduledDate;
        this.timeSlot = timeSlot;
        this.address = address;
        this.testType = testType;
        this.assignedCollector = assignedCollector;
        this.sampleId = sampleId;
        this.status = "CONFIRMED";
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getAppointmentId() { return appointmentId; }
    public void setAppointmentId(String appointmentId) { this.appointmentId = appointmentId; }

    public Customer getCustomer() { return customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public String getPatientPhone() { return patientPhone; }
    public void setPatientPhone(String patientPhone) { this.patientPhone = patientPhone; }

    public LocalDate getScheduledDate() { return scheduledDate; }
    public void setScheduledDate(LocalDate scheduledDate) { this.scheduledDate = scheduledDate; }

    public String getTimeSlot() { return timeSlot; }
    public void setTimeSlot(String timeSlot) { this.timeSlot = timeSlot; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getTestType() { return testType; }
    public void setTestType(String testType) { this.testType = testType; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getAssignedCollector() { return assignedCollector; }
    public void setAssignedCollector(String assignedCollector) { this.assignedCollector = assignedCollector; }

    public String getSampleId() { return sampleId; }
    public void setSampleId(String sampleId) { this.sampleId = sampleId; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
