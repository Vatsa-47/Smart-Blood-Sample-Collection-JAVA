---
marp: true
theme: default
paginate: true
size: 16:9
header: 'SmartLabTrack • QR/Barcode Sample Tracking & Digital Chain of Custody'
footer: 'Department of Computer Science & Engineering • Academic Project Presentation'
style: |
  section {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    padding: 45px 60px;
    background-color: #f8fafc;
    color: #0f172a;
    font-size: 1.15rem;
  }
  section.lead {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  }
  section.lead h1 {
    font-size: 2.6rem;
    color: #0284c7;
    margin-bottom: 0.3rem;
    font-weight: 800;
  }
  section.lead h2 {
    font-size: 1.35rem;
    color: #0f766e;
    font-weight: 600;
    margin-top: 0;
  }
  h1 {
    color: #0284c7;
    font-size: 2.1rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 6px;
  }
  h2 {
    color: #0f766e;
    font-size: 1.45rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  h3 {
    color: #1e293b;
    font-size: 1.15rem;
    margin-bottom: 0.3rem;
  }
  p, li {
    line-height: 1.5;
    color: #334155;
  }
  ul {
    margin-top: 0.4rem;
  }
  li {
    margin-bottom: 0.35rem;
  }
  strong {
    color: #0f172a;
  }
  .badge {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .badge-blue { background: #e0f2fe; color: #0284c7; }
  .badge-teal { background: #ccfbf1; color: #0f766e; }
  .badge-green { background: #dcfce7; color: #16a34a; }
  .badge-orange { background: #fef3c7; color: #d97706; }
  .badge-red { background: #fee2e2; color: #dc2626; }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 12px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-top: 10px;
  }
  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px 20px;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
  }
  .card-highlight {
    border-left: 5px solid #0284c7;
  }
  .card-teal {
    border-left: 5px solid #0f766e;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
    margin-top: 12px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }
  th {
    background-color: #0284c7;
    color: #ffffff;
    padding: 8px 12px;
    text-align: left;
    font-weight: 700;
  }
  td {
    padding: 8px 12px;
    border-bottom: 1px solid #e2e8f0;
    color: #334155;
  }
  tr:nth-child(even) td {
    background-color: #f8fafc;
  }
  code {
    background: #e2e8f0;
    color: #0f172a;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Consolas', monospace;
    font-size: 0.9em;
  }
  blockquote {
    border-left: 4px solid #0284c7;
    background: #f0f9ff;
    padding: 10px 18px;
    margin: 12px 0;
    border-radius: 0 8px 8px 0;
    font-size: 0.95rem;
    color: #0369a1;
  }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->

# SmartLabTrack
## Laboratory Sample Tracking & Digital Chain-of-Custody System
### QR / Barcode Handoff Verification for Modern Clinical Diagnostics

<div style="margin-top: 25px; font-size: 1rem; color: #475569;">
  <strong>Academic Project Presentation</strong> • Bachelor of Technology / Engineering<br>
  Domain: Healthcare Informatics • Cloud & Web Systems • Supply Chain Logistics
</div>

<div style="margin-top: 20px;">
  <span class="badge badge-blue">Java 17/21</span>
  <span class="badge badge-teal">Spring Boot 3</span>
  <span class="badge badge-green">Hibernate / JPA</span>
  <span class="badge badge-orange">QR & Barcode Vision</span>
  <span class="badge badge-blue">Chain of Custody</span>
</div>

---

# 1. Problem Statement

### Challenges in Traditional Clinical Pathology Workflows

* ❌ **Manual Record Search & Status Logging:** Technicians spend significant time manually searching patient names and updating spreadsheets or traditional CRUD screens.
* ❌ **Specimen Mix-ups & Lost Tubes:** Blood and urine tubes change hands multiple times (patient home $\rightarrow$ transit $\rightarrow$ lab reception $\rightarrow$ testing room $\rightarrow$ storage) without verifiable handoff records.
* ❌ **Missing Chain-of-Custody:** When tests are delayed or specimens hemolyze, there is no tamper-proof record of who held the specimen and at what timestamp.
* ❌ **No Transition Validation:** Accidental clicks in legacy systems allow impossible states (e.g. marking a sample as *Completed* before it is *Received* at the laboratory).

> **Core Research Question:** *How can physical QR/barcode scanning eliminate manual search and guarantee an unbroken, auditable digital chain of custody from patient bedside to cold storage?*

---

# 2. Proposed Solution: Logistics-Grade Sample Tracking

### Inspired by Modern Supply Chain Systems (Amazon Logistics / Zepto)

Instead of manually navigating and editing sample records, **every physical handoff requires a scan**:

<div class="grid-2">
  <div class="card card-highlight">
    <h3>📦 Physical QR / Barcode Label</h3>
    <p>Every sample tube receives a printable sticker containing a unique identifier (e.g. <code>SLT-2026-000001</code>). The QR code encodes <strong>only the token</strong>—zero sensitive medical data.</p>
  </div>
  <div class="card card-teal">
    <h3>🔍 Scan-Driven Handoff Verification</h3>
    <p>Scanning the tube on mobile/laptop camera automatically identifies the record, checks role permissions, validates current status, and prompts the <strong>exact authorized next action</strong>.</p>
  </div>
</div>

<div class="grid-2" style="margin-top: 14px;">
  <div class="card card-teal">
    <h3>🛡️ Smart State Transition Engine</h3>
    <p>The backend strictly enforces the workflow state machine. Invalid actions (e.g. <code>RECEIVED → COLLECTED</code>) are automatically rejected.</p>
  </div>
  <div class="card card-highlight">
    <h3>📜 Immutable Chain of Custody</h3>
    <p>Every scan logs the precise timestamp, staff identity, role, location, and action notes into an auditable custody log.</p>
  </div>
</div>

---

# 3. Complete Sample Lifecycle & Handoff Pipeline

```
Patient Request
       ↓
Home Collection Scheduled ─────────────── [Initial State: SCHEDULED]
       ↓
Collector Scans QR at Patient Home ────── [Action: COLLECT  → Status: COLLECTED]
       ↓
Handoff to Transport Courier ──────────── [Action: HANDOFF  → Status: IN_TRANSPORT]
       ↓
Lab Reception Scans QR ────────────────── [Action: RECEIVE  → Status: RECEIVED]
       ↓
Lab Technician Scans to Process ───────── [Action: PROCESS  → Status: PROCESSING]
       ↓
Test Executed & Result Entered ────────── [Action: RESULT   → Status: TESTING]
       ↓
Doctor / Verifier Scans to Review ─────── [Action: VERIFY   → Status: VERIFIED]
       ↓
Storage Rack Recorded ─────────────────── [Action: STORE    → Status: COMPLETED]
```

---

# 4. QR Code Architecture & Privacy-First Security Rule

### Strict Medical Confidentiality Standard

<div class="grid-2">
  <div class="card card-highlight">
    <h3>🔒 What the QR Code Encodes</h3>
    <p><strong>ONLY</strong> the unique specimen identifier:</p>
    <div style="font-family: monospace; font-size: 1.3rem; color: #0284c7; padding: 10px; background: #f0f9ff; border-radius: 6px; text-align: center;">
      SLT-2026-000001
    </div>
    <p style="font-size: 0.9rem; color: #64748b;">Acts as a secure hardware pointer to the electronic medical record (EMR).</p>
  </div>
  <div class="card" style="border-left: 5px solid #dc2626;">
    <h3>🚫 What is NEVER Encoded in the QR</h3>
    <ul>
      <li>Patient Medical History or Diagnoses</li>
      <li>Doctor Prescriptions or Confidential Notes</li>
      <li>Diagnostic Test Results or Readings</li>
      <li>Patient Phone Number or Home Address</li>
    </ul>
    <p style="font-size: 0.85rem; color: #dc2626;"><strong>Compliance:</strong> Complies with HIPAA / DISHA medical data privacy standards.</p>
  </div>
</div>

---

# 5. Role-Based Access & Scanning Privileges

Each laboratory role is assigned specific privileges in the physical chain:

| Role | Permitted Scan Actions | Enforced Workflow Milestones |
|---|---|---|
| **Collector** <br>*(Ravi Kumar)* | • `COLLECT`<br>• `HANDOFF`<br>• `RECOLLECTION` | Scans scheduled sample at patient home $\rightarrow$ marks `COLLECTED`. Scans again upon courier pickup $\rightarrow$ marks `IN_TRANSPORT`. |
| **Lab Technician** <br>*(Lab Tech)* | • `RECEIVE`<br>• `PROCESS`<br>• `ENTER_RESULT`<br>• `STORE` | Scans incoming box $\rightarrow$ marks `RECEIVED`. Scans at analyzer $\rightarrow$ marks `PROCESSING`. Records quantitative test reading. |
| **Verifier / Doctor** <br>*(Dr. Priya Shah)* | • `VERIFY` | Scans specimen or opens queue $\rightarrow$ reviews recorded readings against biological reference ranges $\rightarrow$ marks `VERIFIED`. |
| **Administrator** <br>*(Admin User)* | • All Actions<br>• `STORE`<br>• Demo Reset | Full oversight across all workflows, cold storage allocation (Rack B / Slot 14), audit logs, and demo resetting. |

---

# 6. Smart State Transition & Validation Rules

### Backend-Enforced State Machine (Not Just Frontend Checks)

```
[SCHEDULED] ───(COLLECT)───► [COLLECTED] ───(HANDOFF)───► [IN_TRANSPORT]
                                                                  │
                                                              (RECEIVE)
                                                                  ▼
[COMPLETED] ◄───(STORE)─── [VERIFIED] ◄───(VERIFY)─── [PROCESSING / TESTING] ◄───(PROCESS)─── [RECEIVED]
```

### Transition Integrity Rules:
1. **No Duplicate Handoffs:** `COLLECTED → COLLECTED` is rejected with `InvalidTransitionException`.
2. **No Regressive Transitions:** `RECEIVED → COLLECTED` throws an HTTP 400 Bad Request error.
3. **Role Authorization Check:** If a Collector attempts to verify a test, system raises `UnauthorizedActionException` (HTTP 403 Forbidden).
4. **Prerequisite Check:** Cannot mark `VERIFIED` unless test results have been recorded.

---

# 7. Digital Chain of Custody & Audit Logging

Every physical scan generates a non-repudiable audit event in `SampleStatusHistory`:

```
---------------------------------------------------------------------------------------
Sample ID: SLT-2026-000001 • Specimen: Blood (EDTA) • Test: Complete Blood Count (CBC)
---------------------------------------------------------------------------------------
08:30 AM  │ SCHEDULED     │ Admin User     │ ADMIN      │ Patient Home
09:12 AM  │ COLLECTED     │ Ravi Kumar     │ COLLECTOR  │ Patient Home (Collected 5ml)
09:28 AM  │ IN_TRANSPORT  │ Ravi Kumar     │ COLLECTOR  │ Courier Vehicle (Ice pack 4°C)
10:05 AM  │ RECEIVED      │ Lab Technician │ TECH       │ Central Lab Reception
10:20 AM  │ PROCESSING    │ Lab Technician │ TECH       │ Main Laboratory (Centrifuge)
11:15 AM  │ TESTING       │ Lab Technician │ TECH       │ Testing Room (Result: 14.2 g/dL)
11:40 AM  │ VERIFIED      │ Dr. Priya Shah │ VERIFIER   │ Doctor Consultation Desk
12:00 PM  │ COMPLETED     │ Admin User     │ ADMIN      │ Cold Storage (Rack B / Slot 14)
---------------------------------------------------------------------------------------
```

> **Benefit:** Provides complete legal and clinical audit trails for accreditation (NABL / CAP / ISO 15189).

---

# 8. System Architecture: Full-Stack Monolith

Clean, beginner-friendly university architecture avoiding microservice complexity:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER (Browser / Mobile)                   │
│   index.html • style.css • app.js • jsqr.js (Camera) • qrcode.min.js   │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │ HTTP REST / JSON (CORS Enabled)
┌────────────────────────────────────▼───────────────────────────────────┐
│               SPRING BOOT BACKEND CONTROLLER LAYER                     │
│   SampleScanController • DemoController • AlertController              │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │ Service Invocation
┌────────────────────────────────────▼───────────────────────────────────┐
│                     SERVICE & BUSINESS LOGIC LAYER                     │
│   SampleScanService (Role Rules Engine & Transition State Machine)     │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │ Spring Data JPA / Hibernate
┌────────────────────────────────────▼───────────────────────────────────┐
│                     PERSISTENCE & DATABASE LAYER                       │
│   H2 In-Memory Database (Demo Mode)  /  MySQL 8.x (Production Mode)   │
└────────────────────────────────────────────────────────────────────────┘
```

---

# 9. REST API Specification

### Core Endpoints

#### 1. Scan Sample Token
* **Endpoint:** `GET /api/samples/scan/{sampleCode}?role=COLLECTOR`
* **Response:** Returns sample metadata, authorized patient demographics, current status, full chain-of-custody log, and array of `allowedActions`.

#### 2. Execute Scan Handoff Action
* **Endpoint:** `POST /api/samples/{id}/scan-action`
* **Payload:**
  ```json
  {
    "action": "COLLECT",
    "userRole": "COLLECTOR",
    "userName": "Ravi Kumar",
    "location": "Patient Home",
    "notes": "Collected 5ml EDTA tube from patient"
  }
  ```
* **Response:** Updated sample state and newly appended audit log entry.

#### 3. Reset Presentation Data
* **Endpoint:** `POST /api/demo/reset` $\rightarrow$ Resets the 5 demo specimens back to `SCHEDULED`.

---

# 10. Dual-Mode Scanning Experience

Designed for zero-hardware dependency so the presentation never fails:

<div class="grid-2">
  <div class="card card-highlight">
    <h3>📷 Mode A: WebRTC Camera Scanner</h3>
    <ul>
      <li>Uses HTML5 <code>navigator.mediaDevices.getUserMedia</code>.</li>
      <li>Real-time video feed with animated laser viewfinder.</li>
      <li>Pure JavaScript frame decoding using <strong>jsQR</strong>.</li>
      <li>Instant automatic detection when QR code enters frame.</li>
      <li>Camera facing switcher (Front / Back camera).</li>
    </ul>
  </div>
  <div class="card card-teal">
    <h3>⌨️ Mode B: Manual Fallback & Quick Pills</h3>
    <ul>
      <li><strong>Manual Entry:</strong> Text input for keyboard entry or barcode wedge scanners.</li>
      <li><strong>5 Quick-Scan Pills:</strong> One-click demo buttons:
        <br><code>[SLT-2026-000001]</code> <code>[SLT-2026-000002]</code>
        <br><code>[SLT-2026-000003]</code> <code>[SLT-2026-000004]</code>
        <br><code>[SLT-2026-000005]</code>
      </li>
      <li>Guarantees successful demo even if room lighting is dim or laptop lacks a camera.</li>
    </ul>
  </div>
</div>

---

# 11. 5 Official Demonstration Samples & Printable Labels

Included in both frontend state and backend SQL seed data:

| Sample ID | Specimen | Assigned Test | Priority | Collector | Initial Status |
|---|---|---|---|---|---|
| `SLT-2026-000001` | Blood | Complete Blood Count (CBC) | NORMAL | Ravi Kumar | `SCHEDULED` |
| `SLT-2026-000002` | Blood | Fasting Blood Sugar | URGENT | Ravi Kumar | `SCHEDULED` |
| `SLT-2026-000003` | Urine | Routine Urine Analysis | NORMAL | Sneha Patil | `SCHEDULED` |
| `SLT-2026-000004` | Blood | Lipid Profile | STAT | Ravi Kumar | `SCHEDULED` |
| `SLT-2026-000005` | Blood | Thyroid Profile (T3/T4/TSH) | NORMAL | Sneha Patil | `SCHEDULED` |

### Printable A4 Demo Sticker Sheet
* Navigate to **"Sample Labels"** in the sidebar $\rightarrow$ click **`[ 🖨 PRINT DEMO LABELS ]`**.
* Prints 5 realistic laboratory sticker cards with QR code, Code 128 barcode, and test name.

---

# 12. University Live Demonstration Walkthrough

### How to Present the Project to Teachers in 4 Minutes:

<div class="grid-2">
  <div class="card">
    <h3>1. Collector Stage</h3>
    <p>Role: <strong>Collector (Ravi Kumar)</strong><br>
    Scan <code>SLT-2026-000001</code> $\rightarrow$ Click <strong>[ Confirm Collection ]</strong>.<br>
    Status updates to <code>COLLECTED</code>.<br>
    Scan again $\rightarrow$ Click <strong>[ Handover for Transport ]</strong> $\rightarrow$ Status = <code>IN_TRANSPORT</code>.</p>
  </div>
  <div class="card">
    <h3>2. Lab Technician Stage</h3>
    <p>Role: <strong>Lab Technician</strong><br>
    Scan <code>SLT-2026-000001</code> $\rightarrow$ Click <strong>[ Receive at Lab ]</strong> $\rightarrow$ Status = <code>RECEIVED</code>.<br>
    Scan again $\rightarrow$ Click <strong>[ Begin Processing ]</strong>.<br>
    Enter result reading <code>14.2 g/dL</code> $\rightarrow$ Click <strong>[ Save Result ]</strong>.</p>
  </div>
</div>

<div class="grid-2" style="margin-top: 14px;">
  <div class="card">
    <h3>3. Clinical Verification Stage</h3>
    <p>Role: <strong>Verifier (Dr. Priya Shah)</strong><br>
    Scan <code>SLT-2026-000001</code> $\rightarrow$ System displays reported result <code>14.2 g/dL</code>.<br>
    Click <strong>[ Medically Verify & Authorize ]</strong> $\rightarrow$ Status = <code>VERIFIED</code>.</p>
  </div>
  <div class="card">
    <h3>4. Cold Storage & Chain Audit</h3>
    <p>Role: <strong>Admin User</strong><br>
    Scan <code>SLT-2026-000001</code> $\rightarrow$ Click <strong>[ Archive to Storage ]</strong> $\rightarrow$ Status = <code>COMPLETED</code>.<br>
    Open <strong>Tracking</strong> page to reveal the full unbroken Chain of Custody!</p>
  </div>
</div>

---

# 13. Presentation Demo Reset Feature

### Repeated Demonstrations Without Manual Database Cleaning

<div class="card card-highlight">
  <h3>🔄 One-Click Demo Reset</h3>
  <p>During vivas or teacher evaluations, multiple faculty members may ask to see the sample journey from the start. SmartLabTrack includes a built-in reset feature:</p>
  <ul>
    <li>Click <strong>"Switch Demo Role"</strong> $\rightarrow$ select <strong>"Reset Demo Samples"</strong>.</li>
    <li>Or navigate to the <strong>Sample Labels</strong> page and click <strong>[ ↺ RESET DEMO DATA ]</strong>.</li>
    <li>Instantly restores all 5 demo samples back to <code>SCHEDULED</code> at <em>Patient Home</em>.</li>
    <li>Clears temporary test results and resets the audit trail to the initial scheduled state.</li>
  </ul>
</div>

> **Safety:** In production mode, this endpoint is restricted strictly to demonstration and staging profiles.

---

# 14. Technology Stack & Implementation Details

<div class="grid-3">
  <div class="card card-highlight">
    <h3>Frontend</h3>
    <ul>
      <li>HTML5 Semantic UI</li>
      <li>Vanilla Modern JavaScript (ES6+)</li>
      <li>Design System CSS Tokens</li>
      <li><strong>jsQR:</strong> Camera vision</li>
      <li><strong>QRCode.js:</strong> 2D generator</li>
      <li>Custom SVG 1D Barcode</li>
      <li>Zero build step needed</li>
    </ul>
  </div>
  <div class="card card-teal">
    <h3>Backend (Java)</h3>
    <ul>
      <li>Java 17 / 21 LTS</li>
      <li>Spring Boot 3.2.x</li>
      <li>Spring MVC (REST API)</li>
      <li>Spring Data JPA</li>
      <li>Hibernate ORM</li>
      <li>Jakarta Bean Validation</li>
      <li>Maven Build Tool</li>
    </ul>
  </div>
  <div class="card">
    <h3>Database & Ops</h3>
    <ul>
      <li><strong>H2 Database:</strong> In-memory mode for zero-setup demo</li>
      <li><strong>MySQL 8.x:</strong> Production relational DB option</li>
      <li>H2 Web Console enabled</li>
      <li>CORS Filter enabled</li>
      <li>100% Offline Capable</li>
    </ul>
  </div>
</div>

---

# 15. Key Advantages & Future Enhancements

### Key Differentiators of SmartLabTrack
* ⚡ **Eliminates Manual Search Friction:** 1-second camera scan replaces typing and searching records.
* 🛡️ **Zero Specimen Loss:** Every handoff is registered to a named individual and timestamp.
* 🔒 **Patient Privacy Preserved:** Zero sensitive medical information printed on physical barcodes.
* 📱 **Hardware Independent:** Runs on smartphones, tablets, laptops, or dedicated barcode guns.

### Future Scope for Production Deployment
1. **IoT Temperature Sensors:** Bluetooth/NFC sensors logging temperature fluctuations during transit.
2. **GPS Geofencing:** Auto-verifying collector coordinates at patient home upon sample scan.
3. **Automated Analyzer HL7/FHIR Integration:** Bidirectional interfacing with lab analyzers (Sysmex, Roche).
4. **Patient SMS/WhatsApp Tracking:** Live status link sent to patients like delivery packages.

---

<!-- _class: lead -->
<!-- _header: '' -->

# Thank You!
## Questions & Live Demonstration

<div style="margin-top: 30px; font-size: 1.1rem; color: #475569;">
  <strong>SmartLabTrack • Blood Sample Collection & Laboratory Management System</strong><br>
  Digital Chain-of-Custody via QR & Barcode Handoff Verification
</div>

<div style="margin-top: 25px;">
  <span class="badge badge-blue">Ready for Demonstration</span>
  <span class="badge badge-teal">http://localhost:8080/api/samples</span>
</div>
