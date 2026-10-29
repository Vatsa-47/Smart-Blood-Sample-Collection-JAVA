-- =============================================================================
-- SmartLabTrack Database Schema (MySQL 8.x / MariaDB / H2 compatible)
-- Database: smartlabtrack
-- =============================================================================

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    role VARCHAR(50) NOT NULL,
    online BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS customers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    phone VARCHAR(30) NOT NULL,
    address VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    age INT,
    gender VARCHAR(20),
    phone VARCHAR(30),
    address VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS appointments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    appointment_id VARCHAR(50) NOT NULL UNIQUE,
    customer_id BIGINT NOT NULL,
    patient_name VARCHAR(150) NOT NULL,
    patient_phone VARCHAR(30),
    scheduled_date DATE NOT NULL,
    time_slot VARCHAR(50) NOT NULL,
    address VARCHAR(500) NOT NULL,
    test_type VARCHAR(150),
    status VARCHAR(50) NOT NULL DEFAULT 'CONFIRMED',
    assigned_collector VARCHAR(150),
    sample_id VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE IF NOT EXISTS collection_requests (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    request_id VARCHAR(50) NOT NULL UNIQUE,
    patient_id BIGINT NOT NULL,
    collector_name VARCHAR(150),
    scheduled_address VARCHAR(500),
    scheduled_time DATETIME,
    status VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE IF NOT EXISTS samples (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sample_id VARCHAR(50) NOT NULL UNIQUE,
    patient_id BIGINT NOT NULL,
    collection_request_id BIGINT,
    sample_type VARCHAR(50) NOT NULL,
    priority VARCHAR(20) NOT NULL DEFAULT 'NORMAL',
    status VARCHAR(50) NOT NULL DEFAULT 'SCHEDULED',
    qr_token VARCHAR(100) NOT NULL,
    barcode_value VARCHAR(100),
    assigned_test VARCHAR(150),
    test_result VARCHAR(100),
    test_unit VARCHAR(50),
    collector_name VARCHAR(150),
    current_location VARCHAR(200),
    collected_at DATETIME,
    received_at DATETIME,
    processed_at DATETIME,
    verified_at DATETIME,
    verified_by VARCHAR(150),
    released_at DATETIME,
    released_by VARCHAR(150),
    recipient VARCHAR(150),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (collection_request_id) REFERENCES collection_requests(id)
);

CREATE TABLE IF NOT EXISTS sample_status_histories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sample_id BIGINT NOT NULL,
    status VARCHAR(50) NOT NULL,
    action VARCHAR(200) NOT NULL,
    performed_by VARCHAR(150) NOT NULL,
    user_role VARCHAR(50),
    location VARCHAR(200),
    timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    notes VARCHAR(1000),
    FOREIGN KEY (sample_id) REFERENCES samples(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tests (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    test_code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    department VARCHAR(100),
    unit VARCHAR(50),
    normal_range VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS sample_tests (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sample_id BIGINT NOT NULL,
    test_id BIGINT NOT NULL,
    status VARCHAR(50) DEFAULT 'ASSIGNED',
    result VARCHAR(100),
    FOREIGN KEY (sample_id) REFERENCES samples(id) ON DELETE CASCADE,
    FOREIGN KEY (test_id) REFERENCES tests(id)
);

CREATE TABLE IF NOT EXISTS results (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sample_id BIGINT NOT NULL,
    test_name VARCHAR(150),
    result_value VARCHAR(100),
    unit VARCHAR(50),
    technician_name VARCHAR(150),
    verifier_name VARCHAR(150),
    remarks VARCHAR(500),
    verified_at DATETIME,
    FOREIGN KEY (sample_id) REFERENCES samples(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS alerts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    alert_type VARCHAR(100) NOT NULL,
    message VARCHAR(500) NOT NULL,
    sample_id VARCHAR(50),
    severity VARCHAR(20),
    resolved BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS storage_locations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sample_id VARCHAR(50) NOT NULL UNIQUE,
    refrigerator VARCHAR(50),
    rack VARCHAR(50),
    slot VARCHAR(50),
    stored_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    stored_by VARCHAR(150)
);
