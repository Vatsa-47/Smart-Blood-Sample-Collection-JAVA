package com.smartlabtrack.repository;

import com.smartlabtrack.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    Optional<Appointment> findByAppointmentId(String appointmentId);
    List<Appointment> findByCustomerCustomerIdOrderByCreatedAtDesc(String customerId);
    List<Appointment> findAllByOrderByScheduledDateAsc();
}
