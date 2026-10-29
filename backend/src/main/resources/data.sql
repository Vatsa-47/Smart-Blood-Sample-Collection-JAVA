-- =============================================================================
-- SmartLabTrack Initial Seed Data for MySQL
-- Database: smartlabtrack
-- =============================================================================

INSERT INTO users (id, username, password, full_name, role, online) VALUES
(1, 'admin', 'admin123', 'Admin User', 'ADMIN', TRUE),
(2, 'collector', 'col123', 'Ravi Kumar', 'COLLECTOR', TRUE),
(3, 'labtech', 'tech123', 'Lab Technician', 'LAB_TECHNICIAN', TRUE),
(4, 'verifier', 'doc123', 'Dr. Priya Shah', 'VERIFIER', TRUE);

INSERT INTO customers (id, customer_id, name, email, phone, address) VALUES
(1, 'CUST-01', 'Demo Patient 01 (Rohan Sharma)', 'rohan.sharma@example.com', '9811002233', 'Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103'),
(2, 'CUST-02', 'Demo Patient 02 (Pooja Verma)', 'pooja.verma@example.com', '9822113344', 'Villa 12, Palm Meadows, Whitefield, Bengaluru 560066'),
(3, 'CUST-03', 'Demo Patient 03 (Amitabh Sen)', 'amitabh.sen@example.com', '9833224455', '34, 12th Main, Indiranagar, Bengaluru 560038'),
(4, 'CUST-04', 'Demo Patient 04 (Deepika Patel)', 'deepika.patel@example.com', '9844335566', '89, 4th Cross, Koramangala 3rd Block, Bengaluru 560034'),
(5, 'CUST-05', 'Demo Patient 05 (Kavita Iyer)', 'kavita.iyer@example.com', '9855446677', '15, 8th Main, Malleshwaram, Bengaluru 560003');

INSERT INTO patients (id, patient_id, name, age, gender, phone, address) VALUES
(1, 'P101', 'Demo Patient 01 (Rohan Sharma)', 34, 'Male', '9811002233', 'Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103'),
(2, 'P102', 'Demo Patient 02 (Pooja Verma)', 28, 'Female', '9822113344', 'Villa 12, Palm Meadows, Whitefield, Bengaluru 560066'),
(3, 'P103', 'Demo Patient 03 (Amitabh Sen)', 52, 'Male', '9833224455', '34, 12th Main, Indiranagar, Bengaluru 560038'),
(4, 'P104', 'Demo Patient 04 (Deepika Patel)', 41, 'Female', '9844335566', '89, 4th Cross, Koramangala 3rd Block, Bengaluru 560034'),
(5, 'P105', 'Demo Patient 05 (Kavita Iyer)', 60, 'Female', '9855446677', '15, 8th Main, Malleshwaram, Bengaluru 560003');

INSERT INTO appointments (id, appointment_id, customer_id, patient_name, patient_phone, scheduled_date, time_slot, address, test_type, status, assigned_collector, sample_id) VALUES
(1, 'APT-108291', 1, 'Demo Patient 01 (Rohan Sharma)', '9811002233', CURDATE() + INTERVAL 1 DAY, '08:00 AM - 10:00 AM', 'Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103', 'Complete Blood Count (CBC)', 'CONFIRMED', 'Ravi Kumar (Demo Collector)', 'SLT-2026-000001');

INSERT INTO tests (id, test_code, name, department, unit, normal_range) VALUES
(1, 'CBC', 'Complete Blood Count (CBC)', 'Hematology', 'g/dL', '13.0 - 17.0'),
(2, 'FBS', 'Fasting Blood Sugar', 'Biochemistry', 'mg/dL', '70 - 100'),
(3, 'RUA', 'Routine Urine Analysis', 'Clinical Pathology', 'Standard', 'Normal'),
(4, 'LIPID', 'Lipid Profile', 'Biochemistry', 'mg/dL', '< 200'),
(5, 'THYROID', 'Thyroid Profile (T3/T4/TSH)', 'Endocrinology', 'µIU/mL', '0.4 - 4.0');

-- 5 University Demo Samples (All initialized in SCHEDULED status)
INSERT INTO samples (id, sample_id, patient_id, sample_type, priority, status, qr_token, barcode_value, assigned_test, test_unit, collector_name, current_location, created_at, updated_at) VALUES
(1, 'SLT-2026-000001', 1, 'Blood', 'NORMAL', 'SCHEDULED', 'SLT-2026-000001', 'SLT-2026-000001', 'Complete Blood Count (CBC)', 'g/dL', 'Ravi Kumar (Demo Collector)', 'Patient Home', NOW(), NOW()),
(2, 'SLT-2026-000002', 2, 'Blood', 'URGENT', 'SCHEDULED', 'SLT-2026-000002', 'SLT-2026-000002', 'Fasting Blood Sugar', 'mg/dL', 'Ravi Kumar (Demo Collector)', 'Patient Home', NOW(), NOW()),
(3, 'SLT-2026-000003', 3, 'Urine', 'NORMAL', 'SCHEDULED', 'SLT-2026-000003', 'SLT-2026-000003', 'Routine Urine Analysis', 'Standard', 'Sneha Patil (Demo Collector)', 'Patient Home', NOW(), NOW()),
(4, 'SLT-2026-000004', 4, 'Blood', 'STAT', 'SCHEDULED', 'SLT-2026-000004', 'SLT-2026-000004', 'Lipid Profile', 'mg/dL', 'Ravi Kumar (Demo Collector)', 'Patient Home', NOW(), NOW()),
(5, 'SLT-2026-000005', 5, 'Blood', 'NORMAL', 'SCHEDULED', 'SLT-2026-000005', 'SLT-2026-000005', 'Thyroid Profile (T3/T4/TSH)', 'µIU/mL', 'Sneha Patil (Demo Collector)', 'Patient Home', NOW(), NOW());

INSERT INTO sample_status_histories (sample_id, status, action, performed_by, user_role, location, timestamp, notes) VALUES
(1, 'SCHEDULED', 'Home Collection Scheduled', 'Admin User', 'ADMIN', 'Patient Home', NOW(), 'Initial booking created. Sample container assigned.'),
(2, 'SCHEDULED', 'Home Collection Scheduled', 'Admin User', 'ADMIN', 'Patient Home', NOW(), 'Urgent fasting blood sugar pickup.'),
(3, 'SCHEDULED', 'Home Collection Scheduled', 'Admin User', 'ADMIN', 'Patient Home', NOW(), 'Sterile urine container assigned.'),
(4, 'SCHEDULED', 'Home Collection Scheduled', 'Admin User', 'ADMIN', 'Patient Home', NOW(), 'STAT emergency cardiac panel request.'),
(5, 'SCHEDULED', 'Home Collection Scheduled', 'Admin User', 'ADMIN', 'Patient Home', NOW(), 'Senior citizen routine endocrinology panel.');
