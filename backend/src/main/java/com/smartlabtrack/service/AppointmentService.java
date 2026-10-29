package com.smartlabtrack.service;

import com.smartlabtrack.dto.AppointmentRequestDTO;
import com.smartlabtrack.exception.InvalidTransitionException;
import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.model.Appointment;
import com.smartlabtrack.model.Customer;
import com.smartlabtrack.repository.AppointmentRepository;
import com.smartlabtrack.repository.CustomerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final CustomerRepository customerRepository;

    public AppointmentService(AppointmentRepository appointmentRepository,
                              CustomerRepository customerRepository) {
        this.appointmentRepository = appointmentRepository;
        this.customerRepository = customerRepository;
    }

    @Transactional
    public Appointment bookAppointment(AppointmentRequestDTO dto) {
        // Business Rule: Earliest appointment is Tomorrow. Same-day booking is strictly disallowed.
        LocalDate tomorrow = LocalDate.now().plusDays(1);
        if (dto.getScheduledDate().isBefore(tomorrow)) {
            throw new InvalidTransitionException(
                    "Home collection appointments must be scheduled at least 1 day in advance (Earliest: " + tomorrow + "). Same-day booking is not permitted.");
        }

        Customer customer = customerRepository.findByCustomerId(dto.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer not found: " + dto.getCustomerId()));

        String aptId = "APT-" + (100000 + new Random().nextInt(900000));
        String assignedCollector = "Ravi Kumar (Demo Collector)";
        String sampleId = "SLT-2026-000001"; // Associated demo sample pipeline

        Appointment appointment = new Appointment(
                aptId,
                customer,
                dto.getPatientName(),
                dto.getPatientPhone(),
                dto.getScheduledDate(),
                dto.getTimeSlot(),
                dto.getAddress(),
                dto.getTestType() != null ? dto.getTestType() : "Complete Blood Count (CBC)",
                assignedCollector,
                sampleId
        );

        return appointmentRepository.save(appointment);
    }

    @Transactional(readOnly = true)
    public List<Appointment> getAppointmentsForCustomer(String customerId) {
        return appointmentRepository.findByCustomerCustomerIdOrderByCreatedAtDesc(customerId);
    }

    @Transactional(readOnly = true)
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAllByOrderByScheduledDateAsc();
    }
}
