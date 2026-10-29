package com.smartlabtrack.config;

import com.smartlabtrack.model.*;
import com.smartlabtrack.model.enums.Priority;
import com.smartlabtrack.model.enums.SampleStatus;
import com.smartlabtrack.model.enums.UserRole;
import com.smartlabtrack.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;
    private final PatientRepository patientRepository;
    private final AppointmentRepository appointmentRepository;
    private final SampleRepository sampleRepository;
    private final SampleStatusHistoryRepository historyRepository;
    private final AlertRepository alertRepository;
    private final TestEntityRepository testEntityRepository;
    private final StorageLocationRepository storageLocationRepository;

    public DataInitializer(UserRepository userRepository,
                           CustomerRepository customerRepository,
                           PatientRepository patientRepository,
                           AppointmentRepository appointmentRepository,
                           SampleRepository sampleRepository,
                           SampleStatusHistoryRepository historyRepository,
                           AlertRepository alertRepository,
                           TestEntityRepository testEntityRepository,
                           StorageLocationRepository storageLocationRepository) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.patientRepository = patientRepository;
        this.appointmentRepository = appointmentRepository;
        this.sampleRepository = sampleRepository;
        this.historyRepository = historyRepository;
        this.alertRepository = alertRepository;
        this.testEntityRepository = testEntityRepository;
        this.storageLocationRepository = storageLocationRepository;
    }

    @Override
    @Transactional
    public void run(String... args) {
        seedUsers();
        seedCustomersAndPatients();
        seedTestsCatalog();
        seedDemoSamples();
        seedAppointments();
        seedInitialAlerts();
        seedStorageLocations();
    }

    private void seedUsers() {
        if (userRepository.count() == 0) {
            userRepository.save(new User("admin", "admin123", "Admin User", UserRole.ADMIN));
            userRepository.save(new User("collector", "col123", "Ravi Kumar", UserRole.COLLECTOR));
            userRepository.save(new User("labtech", "tech123", "Lab Technician", UserRole.LAB_TECHNICIAN));
            userRepository.save(new User("verifier", "doc123", "Dr. Priya Shah", UserRole.VERIFIER));
        }
    }

    private void seedCustomersAndPatients() {
        if (customerRepository.count() == 0) {
            customerRepository.save(new Customer("CUST-01", "Demo Patient 01 (Rohan Sharma)", "rohan.sharma@example.com", "9811002233", "Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103"));
            customerRepository.save(new Customer("CUST-02", "Demo Patient 02 (Pooja Verma)", "pooja.verma@example.com", "9822113344", "Villa 12, Palm Meadows, Whitefield, Bengaluru 560066"));
            customerRepository.save(new Customer("CUST-03", "Demo Patient 03 (Amitabh Sen)", "amitabh.sen@example.com", "9833224455", "34, 12th Main, Indiranagar, Bengaluru 560038"));
            customerRepository.save(new Customer("CUST-04", "Demo Patient 04 (Deepika Patel)", "deepika.patel@example.com", "9844335566", "89, 4th Cross, Koramangala 3rd Block, Bengaluru 560034"));
            customerRepository.save(new Customer("CUST-05", "Demo Patient 05 (Kavita Iyer)", "kavita.iyer@example.com", "9855446677", "15, 8th Main, Malleshwaram, Bengaluru 560003"));
        }

        if (patientRepository.count() == 0) {
            patientRepository.save(new Patient("P101", "Demo Patient 01 (Rohan Sharma)", 34, "Male", "9811002233", "Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103"));
            patientRepository.save(new Patient("P102", "Demo Patient 02 (Pooja Verma)", 28, "Female", "9822113344", "Villa 12, Palm Meadows, Whitefield, Bengaluru 560066"));
            patientRepository.save(new Patient("P103", "Demo Patient 03 (Amitabh Sen)", 52, "Male", "9833224455", "34, 12th Main, Indiranagar, Bengaluru 560038"));
            patientRepository.save(new Patient("P104", "Demo Patient 04 (Deepika Patel)", 41, "Female", "9844335566", "89, 4th Cross, Koramangala 3rd Block, Bengaluru 560034"));
            patientRepository.save(new Patient("P105", "Demo Patient 05 (Kavita Iyer)", 60, "Female", "9855446677", "15, 8th Main, Malleshwaram, Bengaluru 560003"));
        }
    }

    private void seedTestsCatalog() {
        if (testEntityRepository.count() == 0) {
            testEntityRepository.save(new TestEntity("CBC", "Complete Blood Count (CBC)", "Hematology", "g/dL", "13.0 - 17.0 g/dL"));
            testEntityRepository.save(new TestEntity("FBS", "Fasting Blood Sugar", "Biochemistry", "mg/dL", "70 - 99 mg/dL"));
            testEntityRepository.save(new TestEntity("LIPID", "Lipid Profile", "Biochemistry", "mg/dL", "< 200 mg/dL"));
            testEntityRepository.save(new TestEntity("THYROID", "Thyroid Profile (T3/T4/TSH)", "Endocrinology", "mIU/L", "0.4 - 4.0 mIU/L"));
            testEntityRepository.save(new TestEntity("URINE", "Routine Urine Analysis", "Clinical Pathology", "pH", "4.6 - 8.0"));
        }
    }

    @Transactional
    public void seedDemoSamples() {
        if (sampleRepository.count() == 0) {
            Patient p1 = patientRepository.findByPatientId("P101").orElse(null);
            Patient p2 = patientRepository.findByPatientId("P102").orElse(null);
            Patient p3 = patientRepository.findByPatientId("P103").orElse(null);
            Patient p4 = patientRepository.findByPatientId("P104").orElse(null);
            Patient p5 = patientRepository.findByPatientId("P105").orElse(null);

            createDemoSample("SLT-2026-000001", p1, "Blood", Priority.NORMAL, "Complete Blood Count (CBC)", "Ravi Kumar (Demo Collector)");
            createDemoSample("SLT-2026-000002", p2, "Blood", Priority.URGENT, "Fasting Blood Sugar", "Ravi Kumar (Demo Collector)");
            createDemoSample("SLT-2026-000003", p3, "Urine", Priority.NORMAL, "Routine Urine Analysis", "Sneha Patil (Demo Collector)");
            createDemoSample("SLT-2026-000004", p4, "Blood", Priority.STAT, "Lipid Profile", "Ravi Kumar (Demo Collector)");
            createDemoSample("SLT-2026-000005", p5, "Blood", Priority.NORMAL, "Thyroid Profile (T3/T4/TSH)", "Sneha Patil (Demo Collector)");
        }
    }

    private void createDemoSample(String id, Patient patient, String type, Priority priority, String test, String collector) {
        Sample sample = new Sample(id, patient, type, priority, SampleStatus.SCHEDULED, test, collector, "Patient Home");
        sample.setTestUnit("Standard");
        sampleRepository.save(sample);

        SampleStatusHistory history = new SampleStatusHistory(
                sample, SampleStatus.SCHEDULED, "Home Collection Scheduled", "Admin User",
                UserRole.ADMIN, "Patient Home", "Initial booking created. Sample container assigned."
        );
        historyRepository.save(history);
    }

    private void seedAppointments() {
        if (appointmentRepository.count() == 0) {
            customerRepository.findByCustomerId("CUST-01").ifPresent(c -> {
                LocalDate tomorrow = LocalDate.now().plusDays(1);
                appointmentRepository.save(new Appointment(
                        "APT-108291",
                        c,
                        "Demo Patient 01 (Rohan Sharma)",
                        "9811002233",
                        tomorrow,
                        "08:00 AM - 10:00 AM",
                        c.getAddress(),
                        "Complete Blood Count (CBC)",
                        "Ravi Kumar (Demo Collector)",
                        "SLT-2026-000001"
                ));
            });
        }
    }

    private void seedInitialAlerts() {
        if (alertRepository.count() == 0) {
            alertRepository.save(new Alert("DEMO_INFO", "5 Physical Demo QR Labels generated for presentation.", "SLT-2026-000001", "INFO"));
            alertRepository.save(new Alert("DELAY_WARNING", "BS202600019 testing exceeded 60 minutes threshold.", "BS202600019", "DANGER"));
        }
    }

    private void seedStorageLocations() {
        if (storageLocationRepository.count() == 0) {
            storageLocationRepository.save(new StorageLocation("SLT-2026-000001", "Cold Storage Unit 1", "Rack A", "Slot 04", "Lab Technician"));
            storageLocationRepository.save(new StorageLocation("SLT-2026-000002", "Deep Freezer -20C", "Rack B", "Slot 12", "Lab Technician"));
        }
    }

    @Transactional
    public void resetDemoData() {
        String[] demoIds = {"SLT-2026-000001", "SLT-2026-000002", "SLT-2026-000003", "SLT-2026-000004", "SLT-2026-000005"};
        for (String id : demoIds) {
            sampleRepository.findBySampleIdIgnoreCase(id).ifPresent(sample -> {
                sample.setStatus(SampleStatus.SCHEDULED);
                sample.setCurrentLocation("Patient Home");
                sample.setTestResult(null);
                sample.setCollectedAt(null);
                sample.setReceivedAt(null);
                sample.setProcessedAt(null);
                sample.setVerifiedAt(null);
                sample.setVerifiedBy(null);
                sample.setReleasedAt(null);
                sample.setReleasedBy(null);
                sample.setRecipient(null);
                sampleRepository.save(sample);

                historyRepository.deleteAll(historyRepository.findBySampleIdOrderByTimestampDesc(sample.getId()));

                SampleStatusHistory resetHistory = new SampleStatusHistory(
                        sample, SampleStatus.SCHEDULED, "Home Collection Scheduled", "Admin User",
                        UserRole.ADMIN, "Patient Home", "Demo data reset: restored to SCHEDULED."
                );
                historyRepository.save(resetHistory);
            });
        }
    }
}
