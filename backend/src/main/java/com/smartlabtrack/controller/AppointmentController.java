package com.smartlabtrack.controller;

import com.smartlabtrack.dto.AppointmentRequestDTO;
import com.smartlabtrack.model.Appointment;
import com.smartlabtrack.service.AppointmentService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping
    public ResponseEntity<Appointment> bookAppointment(@Valid @RequestBody AppointmentRequestDTO request) {
        return ResponseEntity.ok(appointmentService.bookAppointment(request));
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<Appointment>> getCustomerAppointments(@PathVariable String customerId) {
        return ResponseEntity.ok(appointmentService.getAppointmentsForCustomer(customerId));
    }

    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok(appointmentService.getAllAppointments());
    }
}
