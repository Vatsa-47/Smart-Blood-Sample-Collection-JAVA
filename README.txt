<<<<<<< HEAD
================================================================================
SmartLabTrack Prototype v11 — QR/Barcode Scanning & Digital Chain of Custody
================================================================================

PROJECT OVERVIEW:
SmartLabTrack is a laboratory sample tracking and logistics management system.
Instead of manual sample searching and manual status updating, physical samples 
are tracked via QR/barcode scans at each handoff stage, similar to modern 
logistics tracking (e.g. Amazon / Zepto).

--------------------------------------------------------------------------------
5 DEMO SAMPLES & PHYSICAL LABELS FOR PRESENTATION
--------------------------------------------------------------------------------
1. SLT-2026-000001 (Blood - Complete Blood Count - SCHEDULED)
2. SLT-2026-000002 (Blood - Fasting Blood Sugar - URGENT - SCHEDULED)
3. SLT-2026-000003 (Urine - Routine Urine Analysis - SCHEDULED)
4. SLT-2026-000004 (Blood - Lipid Profile - STAT - SCHEDULED)
5. SLT-2026-000005 (Blood - Thyroid Profile - SCHEDULED)

Printable Stickers:
Navigate to "Sample Labels" in the sidebar and click [ PRINT DEMO LABELS ].
An A4 layout displays all 5 realistic stickers with scannable QR codes and barcodes.

--------------------------------------------------------------------------------
HOW TO DEMONSTRATE THE SAMPLE WORKFLOW TO TEACHERS
--------------------------------------------------------------------------------
1. Start with Collector role:
   - Switch role to "COLLECTOR" (Ravi Kumar)
   - Click "SCAN SAMPLE" (or click "Test Scan" on SLT-2026-000001)
   - Camera scans the QR code (or enter SLT-2026-000001 manually)
   - Click [ Confirm Collection ] -> Status changes to COLLECTED
   - Click "SCAN SAMPLE" again -> Click [ Handover for Transport ] -> Status = IN_TRANSPORT

2. Switch role to Lab Technician:
   - Switch role to "LAB_TECHNICIAN" (Lab Technician)
   - Click "SCAN SAMPLE" and scan the SAME sample (SLT-2026-000001)
   - Click [ Receive at Lab ] -> Status changes to RECEIVED (Location: Lab Reception)
   - Scan again -> Click [ Begin Processing ] -> Status changes to PROCESSING
   - Enter test result (e.g. 14.2 g/dL) -> Click [ Save Result ] -> Status = TESTING

3. Switch role to Verifier / Doctor:
   - Switch role to "VERIFIER" (Dr. Priya Shah)
   - Click "SCAN SAMPLE" and scan SLT-2026-000001
   - Reviews reported test result (14.2 g/dL)
   - Click [ Medically Verify & Authorize ] -> Status changes to VERIFIED

4. Switch role to Admin / Storage:
   - Switch role to "ADMIN"
   - Scan SLT-2026-000001
   - Click [ Archive to Storage ] -> Status changes to COMPLETED (Rack B / Slot 14)

5. Reset Demo Data:
   - Click "Switch Demo Role" -> "Reset Demo Samples" (or on the Labels page)
   - Restores all 5 demo samples back to SCHEDULED for the next demonstration!

--------------------------------------------------------------------------------
HOW TO RUN THE APPLICATION
--------------------------------------------------------------------------------
Frontend:
- Simply double-click `index.html` in any web browser (Chrome, Edge, Firefox).
- Or run with VS Code Live Server / any local web server.
- Operates 100% offline with zero external dependencies!

Backend (Java + Spring Boot):
- Open the `backend/` folder in IntelliJ IDEA, Eclipse, or VS Code.
- Run `SmartLabTrackApplication.java` (Java 17/21).
- Runs on `http://localhost:8080`.
- H2 In-Memory DB Console: `http://localhost:8080/h2-console`
- MySQL is also supported (configurable in `application.properties`).

Demo Login Credentials:
=======
SmartLabTrack Prototype v10

UI polish:
- Fixed the profile card overlap shown in v9.
- User name, role and online status now stay in a clean profile row.
- Switch Demo Role is a separate compact button below the profile.
- The role menu opens above the profile card and no longer covers the user's name.
- Kept the role-based sidebar and role-specific dashboards from v9.

Demo:
>>>>>>> fda16b2306074309a0a55a30c178699da46c6189
admin / admin123
