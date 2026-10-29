# SmartLabTrack v2.0 — Java Spring Boot & MySQL Backend Architecture
**University Academic Project Specification & Documentation**

---

## 1. System Architecture Overview

SmartLabTrack v2.0 is built on a **3-Tier Enterprise Java Architecture**:

```
+-----------------------------------------------------------------------------------+
|                           PRESENTATION TIER (Frontend)                            |
|             HTML5 + CSS3 + Vanilla JavaScript + HTML5 Camera Scanner              |
|          Runs in the browser; communicates strictly via REST JSON APIs            |
+-----------------------------------------------------------------------------------+
                                      |  HTTP / REST (JSON)
                                      v
+-----------------------------------------------------------------------------------+
|                        APPLICATION LOGIC TIER (Java Backend)                      |
|                                                                                   |
|  [Spring Security 6]  <-- Stateless Filter Chain, CORS, Role-Based Access Guard  |
|          |                                                                        |
|  [REST Controllers]   <-- Customer, Appointment, SampleScan, Tracking, Reports... |
|          |                                                                        |
|  [Service Layer]      <-- SampleScanService, AppointmentService, ReportService... |
|          |                * 1-day advance booking enforcement                     |
|          |                * Role-guarded QR state transition machine              |
|          |                * Doctor verification & patient release authority        |
|          |                * Chain-of-custody audit trail append                   |
|          |                                                                        |
|  [Spring Data JPA]    <-- Hibernate ORM, Entity Relationships, Transactions       |
+-----------------------------------------------------------------------------------+
                                      |  JDBC (Port 3306)
                                      v
+-----------------------------------------------------------------------------------+
|                             DATABASE TIER (Persistence)                           |
|                         MySQL Database: `smartlabtrack`                           |
|             Persistent Tables, Foreign Keys, Audit Logs, Constraints              |
+-----------------------------------------------------------------------------------+
```

---

## 2. Java Source Code Location & Package Structure

All Java source code resides in the [`backend/src/main/java/com/smartlabtrack/`](file:///c:/Users/sriva/OneDrive/Desktop/SmartLabTrack_Prototype_v2.0/backend/src/main/java/com/smartlabtrack/) directory.

```
backend/
├── pom.xml                                      # Maven dependencies & build plugins
├── src/
│   ├── main/
│   │   ├── java/com/smartlabtrack/
│   │   │   ├── SmartLabTrackApplication.java     # Spring Boot Main Entry Point
│   │   │   │
│   │   │   ├── config/                          # Configuration & Security
│   │   │   │   ├── SecurityConfig.java          # Spring Security 6 Filter Chain & CORS
│   │   │   │   ├── WebConfig.java               # Global CORS WebMvcConfigurer
│   │   │   │   └── DataInitializer.java         # CommandLineRunner Database Seeder
│   │   │   │
│   │   │   ├── model/                           # JPA Entities (Database Tables)
│   │   │   │   ├── User.java                    # System users & credentials
│   │   │   │   ├── Customer.java                # Registered patient/customer profiles
│   │   │   │   ├── Patient.java                 # Clinical patient demographics
│   │   │   │   ├── Appointment.java             # Home collection appointment bookings
│   │   │   │   ├── CollectionRequest.java       # Phlebotomist collection work orders
│   │   │   │   ├── Sample.java                  # Physical specimen record & QR token
│   │   │   │   ├── SampleStatusHistory.java     # Immutable chain-of-custody audit trail
│   │   │   │   ├── TestEntity.java              # Laboratory test investigation catalog
│   │   │   │   ├── SampleTest.java              # Sample-to-Test mapping
│   │   │   │   ├── Result.java                  # Observed quantitative test values
│   │   │   │   ├── Alert.java                   # Critical Panic values & delay alerts
│   │   │   │   ├── StorageLocation.java         # Freezer rack and slot allocation
│   │   │   │   └── enums/
│   │   │   │       ├── UserRole.java            # ADMIN, COLLECTOR, LAB_TECHNICIAN, VERIFIER, CUSTOMER
│   │   │   │       ├── SampleStatus.java        # SCHEDULED, COLLECTED, IN_TRANSPORT, RECEIVED...
│   │   │   │       ├── ScanAction.java          # COLLECT, HANDOFF, RECEIVE, PROCESS, VERIFY...
│   │   │   │       └── Priority.java            # NORMAL, URGENT, STAT
│   │   │   │
│   │   │   ├── repository/                      # Spring Data JPA Repositories
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── CustomerRepository.java
│   │   │   │   ├── PatientRepository.java
│   │   │   │   ├── AppointmentRepository.java
│   │   │   │   ├── SampleRepository.java
│   │   │   │   ├── SampleStatusHistoryRepository.java
│   │   │   │   ├── TestEntityRepository.java
│   │   │   │   ├── ResultRepository.java
│   │   │   │   ├── AlertRepository.java
│   │   │   │   └── StorageLocationRepository.java
│   │   │   │
│   │   │   ├── service/                         # Core Business Logic & State Machine
│   │   │   │   ├── CustomerService.java         # Customer lookup & demo profile access
│   │   │   │   ├── AppointmentService.java      # 1-day advance validation & booking
│   │   │   │   ├── PatientService.java          # Demographics management
│   │   │   │   ├── SampleService.java           # Sample registration & ID generation
│   │   │   │   ├── SampleScanService.java       # QR scanning, role validation & handoffs
│   │   │   │   ├── TrackingService.java         # Live customer progress timeline
│   │   │   │   ├── TestService.java             # Diagnostic test investigation catalog
│   │   │   │   ├── ResultService.java           # Result entry & panic value alerts
│   │   │   │   ├── ReportService.java           # Doctor clinical verification & release
│   │   │   │   ├── AlertService.java            # Turnaround time & critical alert tracking
│   │   │   │   └── StorageService.java          # Cold storage specimen archiving
│   │   │   │
│   │   │   ├── controller/                      # REST API Endpoints (@RestController)
│   │   │   │   ├── CustomerController.java      # /api/customers
│   │   │   │   ├── AppointmentController.java   # /api/appointments
│   │   │   │   ├── PatientController.java       # /api/patients
│   │   │   │   ├── SampleScanController.java    # /api/samples, /scan/{code}, /scan-action
│   │   │   │   ├── TrackingController.java      # /api/tracking/{sampleId}
│   │   │   │   ├── TestController.java          # /api/tests
│   │   │   │   ├── ResultController.java        # /api/results
│   │   │   │   ├── ReportController.java        # /api/reports/{sampleId}
│   │   │   │   ├── AlertController.java         # /api/alerts
│   │   │   │   ├── StorageController.java       # /api/storage
│   │   │   │   └── DemoController.java          # /api/demo/reset
│   │   │   │
│   │   │   ├── dto/                             # Data Transfer Objects
│   │   │   │   ├── ScanActionRequestDTO.java
│   │   │   │   ├── ScanResponseDTO.java
│   │   │   │   ├── SampleStatusHistoryDTO.java
│   │   │   │   ├── AppointmentRequestDTO.java
│   │   │   │   ├── SampleCreateDTO.java
│   │   │   │   ├── ResultDTO.java
│   │   │   │   ├── ReportDTO.java
│   │   │   │   └── TrackingDTO.java
│   │   │   │
│   │   │   └── exception/                       # Custom Exception Handling
│   │   │       ├── InvalidTransitionException.java
│   │   │       ├── UnauthorizedActionException.java
│   │   │       ├── ResourceNotFoundException.java
│   │   │       └── GlobalExceptionHandler.java
│   │   │
│   │   └── resources/
│   │       ├── application.properties           # MySQL Connection Settings
│   │       ├── application-h2.properties        # Fallback H2 in-memory profile
│   │       ├── schema.sql                       # DDL Script for MySQL
│   │       └── data.sql                         # Initial Seed Data for MySQL
```

---

## 3. Entity Relationships & Data Model

```
 Customer (1) --------< (M) Appointment
                             | (creates)
                             v
 Patient (1) ---------< (M) Sample (1) -------< (M) SampleStatusHistory (Audit)
                             | (1)
                             +------> (M) Result
                             | (1)
                             +------> (1) StorageLocation
```

### Key Entity Responsibilities:
1. **`Customer.java`**: Represents registered customers. Links to multiple home collection appointments.
2. **`Appointment.java`**: Stores booked home collection visits. Validates scheduled date (minimum 1 day in advance).
3. **`Patient.java`**: Stores medical demographics (Name, Age, Gender, Phone, Address).
4. **`Sample.java`**: Core entity holding physical tracking token (`SLT-2026-XXXXXX`), specimen type, status, `verifiedBy`, `verifiedAt`, `releasedBy`, `releasedAt`, and `recipient`.
5. **`SampleStatusHistory.java`**: Immutable audit records capturing each physical handoff with timestamp, actor name, role, GPS/facility location, and notes.
6. **`Result.java`**: Observed test findings with reference ranges and technician/verifier signatures.
7. **`Alert.java`**: Flags critical out-of-range panic values or transport delays exceeding SLA.

---

## 4. Business Logic Implemented in Java Services

### 4.1 Advance Booking Validation (`AppointmentService.java`)
```java
LocalDate tomorrow = LocalDate.now().plusDays(1);
if (dto.getScheduledDate().isBefore(tomorrow)) {
    throw new InvalidTransitionException("Home collection appointments must be scheduled at least 1 day in advance. Same-day booking is not permitted.");
}
```

### 4.2 Role-Guarded State Machine (`SampleScanService.java`)
The Java backend strictly enforces the physical handoff lifecycle:

$$\text{SCHEDULED} \xrightarrow[\text{COLLECTOR}]{\text{COLLECT}} \text{COLLECTED} \xrightarrow[\text{COLLECTOR}]{\text{HANDOFF}} \text{IN\_TRANSPORT} \xrightarrow[\text{LAB\_TECH}]{\text{RECEIVE}} \text{RECEIVED} \xrightarrow[\text{LAB\_TECH}]{\text{PROCESS}} \text{PROCESSING} \xrightarrow[\text{LAB\_TECH}]{\text{ENTER\_RESULT}} \text{AWAITING\_VERIFICATION} \xrightarrow[\text{VERIFIER}]{\text{VERIFY}} \text{VERIFIED} \xrightarrow[\text{VERIFIER}]{\text{RELEASE}} \text{RELEASED}$$

- **Admin Separation**: If `role == UserRole.ADMIN` attempts `RELEASE_REPORT` or `VERIFY`, Java throws `UnauthorizedActionException`:
  > *"Administrative role cannot verify or release patient medical reports. This clinical action is reserved for the Doctor/Verifier."*
- **Sequence Enforcement**: An unverified sample cannot be released; an uncollected sample cannot be received at the lab.

### 4.3 Doctor Verification & Patient Release (`ReportService.java`)
- `verifyReport(sampleId, doctorName, remarks)`: Clinically approves results, sets `verifiedAt`, `verifiedBy`, and appends an audit history entry.
- `releaseReportToCustomer(sampleId, doctorName)`: Confirms `VERIFIED` status, transitions to `RELEASED`, records `releasedAt`, sets `recipient` to the patient's name, and exposes the certified report to the customer portal.

---

## 5. Spring Security & Access Configuration (`SecurityConfig.java`)

- **Spring Security 6** with `SecurityFilterChain` bean.
- **CSRF**: Disabled (`csrf.disable()`) for stateless REST API operation.
- **CORS**: `CorsConfigurationSource` allows incoming cross-origin requests from web browsers.
- **Session Management**: Configured as `SessionCreationPolicy.STATELESS`.
- **Endpoints**: `/api/**` open for API calls; supports `X-Demo-Role` and `X-Demo-User` headers for role simulation.

---

## 6. MySQL Database Configuration

### Configuration in `backend/src/main/resources/application.properties`:
```properties
server.port=8080
spring.application.name=SmartLabTrack-Backend

# Primary MySQL Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/smartlabtrack?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver

# Hibernate ORM Dialect
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
```

---

## 7. Complete REST API Catalog

| HTTP Method | Endpoint | Description | Role Authorization |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/samples` | List all tracked samples | All |
| **GET** | `/api/samples/{id}` | Get sample details by ID | All |
| **POST** | `/api/samples` | Register sample & generate ID | Admin / Collector |
| **GET** | `/api/samples/scan/{code}` | Scan physical QR / barcode | Role-filtered response |
| **POST** | `/api/samples/{id}/scan-action` | Execute physical handoff | Collector / Tech / Doctor |
| **GET** | `/api/tracking/{sampleId}` | Customer live progress timeline | Customer / All |
| **GET** | `/api/reports/{sampleId}` | Get certified diagnostic report | Doctor / Customer |
| **POST** | `/api/reports/{sampleId}/verify` | Doctor approves test findings | Doctor / Verifier only |
| **POST** | `/api/reports/{sampleId}/release` | Release report to patient | Doctor / Verifier only |
| **GET** | `/api/customers` | List registered customers | All |
| **POST** | `/api/appointments` | Book home collection | Customer |
| **GET** | `/api/appointments/customer/{id}` | Customer appointment list | Customer |
| **GET** | `/api/patients` | List patient demographics | Admin / Collector |
| **GET** | `/api/tests` | Laboratory test catalog | All |
| **POST** | `/api/results` | Record quantitative results | Lab Technician |
| **GET** | `/api/alerts` | Active TAT & Panic alerts | Admin / Lab Tech |
| **PUT** | `/api/alerts/{id}/resolve` | Resolve an alert | Admin |
| **GET** | `/api/storage` | Cold storage freezer inventory | Lab Tech / Admin |
| **POST** | `/api/demo/reset` | Reset demo data to SCHEDULED | Admin / Presentation |

---

## 8. Division of Responsibilities: Java vs JavaScript

| Component / Functionality | Implemented In | Description |
| :--- | :--- | :--- |
| **Device Camera Stream** | JavaScript (`app.js`) | `navigator.mediaDevices.getUserMedia` for video feed |
| **QR Frame Decoding** | JavaScript (`jsQR`) | Decodes video frame pixels into raw string (`SLT-2026-000001`) |
| **Two-Stage Scanner UI** | JavaScript / CSS | Hides camera and renders sample card at top without scrolling |
| **Sample Lookup & Auth** | **Java (`SampleScanService`)** | Validates code against MySQL, checks role, returns allowed actions |
| **State Machine Engine** | **Java (`SampleScanService`)** | Enforces valid transitions; throws `InvalidTransitionException` |
| **Advance Booking Rule** | **Java (`AppointmentService`)** | Enforces minimum 1-day advance booking |
| **Sample ID Generation** | **Java (`SampleService`)** | Formats unique IDs (`SLT-2026-XXXXXX`) |
| **Result Verification** | **Java (`ReportService`)** | Doctors approve report, setting timestamp and signature |
| **Report Release** | **Java (`ReportService`)** | Doctor releases report to patient; blocks Admin from doing so |
| **Chain-of-Custody Log** | **Java (`SampleStatusHistory`)**| Persists immutable audit records in MySQL |
| **Critical Panic Alerts** | **Java (`ResultService`)** | Triggers alert when glucose > 200 or < 60 |
| **Persistent Storage** | **MySQL Database** | Relational tables for all entities |

---

## 9. How to Run & Demonstrate the Project

### Step 1: Start MySQL Database
1. Open MySQL Command Line or MySQL Workbench.
2. Ensure MySQL service is running on port 3306.
3. (Optional) Create the database manually if auto-creation is disabled:
   ```sql
   CREATE DATABASE IF NOT EXISTS smartlabtrack;
   ```

### Step 2: Start the Java Spring Boot Backend
Open a terminal in the project directory:
```bash
cd backend
mvn spring-boot:run
```
*(Or simply double-click `run-backend.bat`)*

The Spring Boot backend will start on **`http://localhost:8080`**:
- REST API: `http://localhost:8080/api/samples`
- Database initialized and seeded automatically by [`DataInitializer.java`](file:///c:/Users/sriva/OneDrive/Desktop/SmartLabTrack_Prototype_v2.0/backend/src/main/java/com/smartlabtrack/config/DataInitializer.java).

*(Note: If testing in an environment where MySQL is temporarily unavailable, simply run `mvn spring-boot:run -Dspring-boot.run.profiles=h2` to launch with embedded zero-config database).*

### Step 3: Open the Frontend
Open [`index.html`](file:///c:/Users/sriva/OneDrive/Desktop/SmartLabTrack_Prototype_v2.0/index.html) directly in any modern browser (Chrome, Edge, Firefox).

---

## 10. University Project Demonstration Script

Follow this script to demonstrate the complete workflow during presentation:

1. **Patient Home Booking**:
   - Top Bar: Click **Access / Switch Role** $\rightarrow$ select **Customer / Patient** $\rightarrow$ choose **Demo Patient 01 (Rohan Sharma)**.
   - Click **Book Home Collection**. Select today's date $\rightarrow$ notice Java/client validation blocks same-day booking. Select tomorrow's date $\rightarrow$ confirm booking.
   - View the live 5-step progress timeline.

2. **Phlebotomist Collection**:
   - Switch Role to **Phlebotomist / Collector**.
   - Click **Scan Sample** (camera icon). Select `SLT-2026-000001`.
   - Notice the camera immediately closes with zero scrolling needed. Click **[Confirm Collection]** $\rightarrow$ then click **[Send for Transport]**.

3. **Laboratory Reception & Processing**:
   - Switch Role to **Lab Technician**.
   - Click **Scan Sample** $\rightarrow$ select `SLT-2026-000001`.
   - Click **[Receive Sample]** $\rightarrow$ click **[Start Processing]**.
   - Click **[Enter Result]** $\rightarrow$ enter observed value `14.2 g/dL` $\rightarrow$ click **Save & Send for Verification**.
   - Status transitions to `AWAITING_VERIFICATION`.

4. **Doctor Verification & Patient Release**:
   - Switch Role to **Doctor / Verifier**.
   - Open report from "Reports Awaiting Verification" or scan `SLT-2026-000001`.
   - Click **[Verify Result]** $\rightarrow$ status becomes `VERIFIED`.
   - Click **[Release Report to Patient]** $\rightarrow$ status becomes `RELEASED` with doctor signature and release timestamp.

5. **Customer Access & Delivery**:
   - Switch Role back to **Customer / Patient**.
   - Notice the timeline has progressed to **Report Ready**.
   - Click **View Report** $\rightarrow$ displays official medical diagnostic sheet with doctor signature and reference ranges.
   - Click **Download Report**.

6. **Administrative Oversight**:
   - Switch Role to **System Administrator**.
   - View sample list and chain of custody showing:
     `Scheduled` $\rightarrow$ `Collected` $\rightarrow$ `In Transport` $\rightarrow$ `Received` $\rightarrow$ `Processing` $\rightarrow$ `Verified` $\rightarrow$ `Released`.
   - Verify Admin has oversight only and cannot clinically release reports.
