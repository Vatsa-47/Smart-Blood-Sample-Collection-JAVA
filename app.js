<<<<<<< HEAD
/* ==========================================================================
   SmartLabTrack Prototype v2.0
   QR/Barcode Scanning, Digital Chain of Custody & Clinical Lab Workflow
   ========================================================================== */

// --- 1. Vector Icon Helper (Lucide Icons Library & Offline SVG Generator) ---
function icon(name, size = 16, className = "") {
  const cls = className ? `lucide-icon ${className}` : "lucide-icon";
  const s = size;
  const common = `class="${cls}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;

  switch (name) {
    case "camera":
      return `<svg ${common}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`;
    case "bell":
      return `<svg ${common}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
    case "x":
    case "close":
      return `<svg ${common}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    case "search":
      return `<svg ${common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
    case "scan":
    case "qr-code":
      return `<svg ${common}><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`;
    case "check":
      return `<svg ${common}><path d="M20 6 9 17l-5-5"/></svg>`;
    case "check-circle":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
    case "alert-triangle":
      return `<svg ${common}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`;
    case "alert-circle":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`;
    case "user":
      return `<svg ${common}><circle cx="12" cy="7" r="4"/><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/></svg>`;
    case "user-check":
      return `<svg ${common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`;
    case "map-pin":
      return `<svg ${common}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
    case "package":
      return `<svg ${common}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`;
    case "test-tube":
      return `<svg ${common}><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`;
    case "droplet":
      return `<svg ${common}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`;
    case "arrow-right":
      return `<svg ${common}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
    case "chevron-right":
      return `<svg ${common}><path d="m9 18 6-6-6-6"/></svg>`;
    case "printer":
      return `<svg ${common}><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`;
    case "shield-check":
      return `<svg ${common}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`;
    case "send":
      return `<svg ${common}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`;
    case "arrow-left-right":
      return `<svg ${common}><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>`;
    case "refresh-cw":
      return `<svg ${common}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`;
    case "truck":
      return `<svg ${common}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`;
    case "flask":
      return `<svg ${common}><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`;
    case "file-text":
      return `<svg ${common}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
    case "home":
      return `<svg ${common}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
    case "calendar":
      return `<svg ${common}><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>`;
    case "clock":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    case "database":
      return `<svg ${common}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`;
    case "bar-chart":
      return `<svg ${common}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`;
    case "tag":
      return `<svg ${common}><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r=".5" fill="currentColor"/></svg>`;
    case "download":
      return `<svg ${common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`;
    case "log-out":
      return `<svg ${common}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`;
    case "lock":
      return `<svg ${common}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
    case "plus":
      return `<svg ${common}><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>`;
    case "info":
      return `<svg ${common}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`;
    default:
      return `<span class="icon-fallback">[${name}]</span>`;
  }
}

// --- 2. Initial Sample Data & Demo Records ---
const INITIAL_DEMO_SAMPLES = [
  {
    id: "SLT-2026-000001",
    patient: "Demo Patient 01 (Rohan Sharma)",
    patientId: "P101",
    age: 34,
    gender: "Male",
    type: "Blood",
    priority: "NORMAL",
    status: "SCHEDULED",
    location: "Patient Home",
    time: "09:00 AM",
    test: "Complete Blood Count (CBC)",
    testResult: null,
    testUnit: "g/dL",
    collector: "Ravi Kumar (Demo Collector)",
    qrToken: "SLT-2026-000001",
    barcodeValue: "SLT-2026-000001",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "08:30 AM", status: "SCHEDULED", action: "Home Collection Scheduled", user: "Admin User", role: "ADMIN", location: "Patient Home", notes: "Booking created for routine health checkup" }
    ]
  },
  {
    id: "SLT-2026-000002",
    patient: "Demo Patient 02 (Pooja Verma)",
    patientId: "P102",
    age: 28,
    gender: "Female",
    type: "Blood",
    priority: "URGENT",
    status: "SCHEDULED",
    location: "Patient Home",
    time: "09:30 AM",
    test: "Fasting Blood Sugar",
    testResult: null,
    testUnit: "mg/dL",
    collector: "Ravi Kumar (Demo Collector)",
    qrToken: "SLT-2026-000002",
    barcodeValue: "SLT-2026-000002",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "08:45 AM", status: "SCHEDULED", action: "Home Collection Scheduled", user: "Admin User", role: "ADMIN", location: "Patient Home", notes: "Urgent fasting blood sugar pickup" }
    ]
  },
  {
    id: "SLT-2026-000003",
    patient: "Demo Patient 03 (Amitabh Sen)",
    patientId: "P103",
    age: 52,
    gender: "Male",
    type: "Urine",
    priority: "NORMAL",
    status: "SCHEDULED",
    location: "Patient Home",
    time: "10:00 AM",
    test: "Routine Urine Analysis",
    testResult: null,
    testUnit: "Standard",
    collector: "Sneha Patil (Demo Collector)",
    qrToken: "SLT-2026-000003",
    barcodeValue: "SLT-2026-000003",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "09:00 AM", status: "SCHEDULED", action: "Home Collection Scheduled", user: "Admin User", role: "ADMIN", location: "Patient Home", notes: "Sterile urine container assigned" }
    ]
  },
  {
    id: "SLT-2026-000004",
    patient: "Demo Patient 04 (Deepika Patel)",
    patientId: "P104",
    age: 41,
    gender: "Female",
    type: "Blood",
    priority: "STAT",
    status: "SCHEDULED",
    location: "Patient Home",
    time: "10:30 AM",
    test: "Lipid Profile",
    testResult: null,
    testUnit: "mg/dL",
    collector: "Ravi Kumar (Demo Collector)",
    qrToken: "SLT-2026-000004",
    barcodeValue: "SLT-2026-000004",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "09:15 AM", status: "SCHEDULED", action: "Home Collection Scheduled", user: "Admin User", role: "ADMIN", location: "Patient Home", notes: "STAT emergency cardiac panel request" }
    ]
  },
  {
    id: "SLT-2026-000005",
    patient: "Demo Patient 05 (Kavita Iyer)",
    patientId: "P105",
    age: 60,
    gender: "Female",
    type: "Blood",
    priority: "NORMAL",
    status: "SCHEDULED",
    location: "Patient Home",
    time: "11:00 AM",
    test: "Thyroid Profile (T3/T4/TSH)",
    testResult: null,
    testUnit: "µIU/mL",
    collector: "Sneha Patil (Demo Collector)",
    qrToken: "SLT-2026-000005",
    barcodeValue: "SLT-2026-000005",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "09:30 AM", status: "SCHEDULED", action: "Home Collection Scheduled", user: "Admin User", role: "ADMIN", location: "Patient Home", notes: "Senior citizen routine endocrinology panel" }
    ]
  }
];

// Preserved existing sample records for backwards compatibility
const LEGACY_SAMPLES = [
  {
    id: "BS202600021",
    patient: "Rahul Kumar",
    patientId: "P001",
    age: 32,
    gender: "Male",
    type: "Blood",
    priority: "URGENT",
    status: "AWAITING_VERIFICATION",
    location: "Testing Room",
    time: "09:18 AM",
    test: "Complete Blood Count (CBC)",
    testResult: "13.8",
    testUnit: "g/dL",
    collector: "Ravi Kumar",
    qrToken: "BS202600021",
    barcodeValue: "BS202600021",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "09:18 AM", status: "COLLECTED", action: "Sample Collected", user: "Ravi Kumar", role: "COLLECTOR", location: "Patient Home", notes: "Collected 5ml EDTA tube" },
      { time: "09:40 AM", status: "IN_TRANSPORT", action: "Sent for Transport", user: "Ravi Kumar", role: "COLLECTOR", location: "Transport", notes: "Temperature maintained 4°C" },
      { time: "10:05 AM", status: "RECEIVED", action: "Received at Laboratory", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Lab Reception", notes: "Integrity verified, accepted" },
      { time: "10:30 AM", status: "PROCESSING", action: "Processing Started", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Main Laboratory", notes: "Centrifuged and queued for automated analyzer" },
      { time: "11:15 AM", status: "AWAITING_VERIFICATION", action: "Result Entered", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Testing Room", notes: "Result: 13.8 g/dL. Sent for doctor verification." }
    ]
  },
  {
    id: "BS202600020",
    patient: "Ananya Rao",
    patientId: "P002",
    age: 27,
    gender: "Female",
    type: "Blood",
    priority: "NORMAL",
    status: "RECEIVED",
    location: "Lab Reception",
    time: "10:05 AM",
    test: "Blood Glucose",
    testResult: "98",
    testUnit: "mg/dL",
    collector: "Sneha Patil",
    qrToken: "BS202600020",
    barcodeValue: "BS202600020",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "09:30 AM", status: "COLLECTED", action: "Sample Collected", user: "Sneha Patil", role: "COLLECTOR", location: "Patient Home", notes: "Fluoride tube collected" },
      { time: "10:05 AM", status: "RECEIVED", action: "Received at Laboratory", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Lab Reception", notes: "Received on ice pack" }
    ]
  },
  {
    id: "BS202600019",
    patient: "Vikram Singh",
    patientId: "P003",
    age: 45,
    gender: "Male",
    type: "Blood",
    priority: "STAT",
    status: "DELAYED",
    location: "Laboratory",
    time: "08:40 AM",
    test: "Lipid Profile",
    testResult: null,
    testUnit: "mg/dL",
    collector: "Ravi Kumar",
    qrToken: "BS202600019",
    barcodeValue: "BS202600019",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "08:40 AM", status: "COLLECTED", action: "Sample Collected", user: "Ravi Kumar", role: "COLLECTOR", location: "Patient Home", notes: "STAT pickup" },
      { time: "09:15 AM", status: "RECEIVED", action: "Received at Laboratory", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Lab Reception", notes: "Delivered" },
      { time: "09:30 AM", status: "DELAYED", action: "Testing Exceeded TAT", user: "System", role: "ADMIN", location: "Laboratory", notes: "Testing exceeded 60 minutes threshold" }
    ]
  },
  {
    id: "BS202600018",
    patient: "Meera Shah",
    patientId: "P004",
    age: 39,
    gender: "Female",
    type: "Blood",
    priority: "NORMAL",
    status: "RELEASED",
    location: "Patient Portal / Delivered",
    time: "08:10 AM",
    test: "Hemoglobin",
    testResult: "12.6",
    testUnit: "g/dL",
    collector: "Sneha Patil",
    qrToken: "BS202600018",
    barcodeValue: "BS202600018",
    verifiedBy: "Dr. Priya Shah",
    verifiedAt: "09:45 AM",
    releasedBy: "Dr. Priya Shah",
    releasedAt: "Today, 10:00 AM",
    recipient: "Meera Shah",
    chainOfCustody: [
      { time: "08:10 AM", status: "COLLECTED", action: "Sample Collected", user: "Sneha Patil", role: "COLLECTOR", location: "Patient Home", notes: "Routine visit" },
      { time: "08:50 AM", status: "RECEIVED", action: "Received at Laboratory", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Lab Reception", notes: "Sample accepted" },
      { time: "09:15 AM", status: "PROCESSING", action: "Processing Started", user: "Lab Technician", role: "LAB_TECHNICIAN", location: "Main Laboratory", notes: "Processed" },
      { time: "09:45 AM", status: "VERIFIED", action: "Result Verified by Doctor", user: "Dr. Priya Shah", role: "VERIFIER", location: "Doctor Desk", notes: "Verified 12.6 g/dL" },
      { time: "10:00 AM", status: "RELEASED", action: "Report Released to Patient", user: "Dr. Priya Shah", role: "VERIFIER", location: "Patient Portal / Delivered", notes: "Authorized release" }
    ]
  },
  {
    id: "BS202600017",
    patient: "Arjun Nair",
    patientId: "P005",
    age: 31,
    gender: "Male",
    type: "Blood",
    priority: "URGENT",
    status: "IN_TRANSPORT",
    location: "On the way to Lab",
    time: "10:32 AM",
    test: "Blood Group",
    testResult: null,
    testUnit: "",
    collector: "Ravi Kumar",
    qrToken: "BS202600017",
    barcodeValue: "BS202600017",
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: "10:32 AM", status: "COLLECTED", action: "Sample Collected", user: "Ravi Kumar", role: "COLLECTOR", location: "Patient Home", notes: "Urgent typing" },
      { time: "10:45 AM", status: "IN_TRANSPORT", action: "Sent for Transport", user: "Ravi Kumar", role: "COLLECTOR", location: "Transport", notes: "ETA 25 mins" }
    ]
  }
];

// --- 3. Customer & Patient Model ---
const DEMO_CUSTOMERS = [
  { customerId: "CUST-001", patientId: "P101", name: "Demo Patient 01 (Rohan Sharma)", age: 34, gender: "Male", phone: "9811002233", address: "Flat 402, Green Glen Layout, Bellandur, Bengaluru", defaultSampleId: "SLT-2026-000001" },
  { customerId: "CUST-002", patientId: "P102", name: "Demo Patient 02 (Pooja Verma)", age: 28, gender: "Female", phone: "9822113344", address: "Plot 12, Koramangala 4th Block, Bengaluru", defaultSampleId: "SLT-2026-000002" },
  { customerId: "CUST-003", patientId: "P103", name: "Demo Patient 03 (Amitabh Sen)", age: 52, gender: "Male", phone: "9833224455", address: "House 54, Indiranagar 100ft Rd, Bengaluru", defaultSampleId: "SLT-2026-000003" },
  { customerId: "CUST-004", patientId: "P104", name: "Demo Patient 04 (Deepika Patel)", age: 41, gender: "Female", phone: "9844335566", address: "Tower B, Jayanagar 5th Block, Bengaluru", defaultSampleId: "SLT-2026-000004" },
  { customerId: "CUST-005", patientId: "P105", name: "Demo Patient 05 (Kavita Iyer)", age: 60, gender: "Female", phone: "9855446677", address: "Lane 3, Malleshwaram, Bengaluru", defaultSampleId: "SLT-2026-000005" }
];

let currentCustomer = DEMO_CUSTOMERS[0];

function getTomorrowDateIso() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function getTomorrowFormatted() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

// Initial Appointments State
let appointments = [
  {
    id: "APT-2026-000001",
    customerId: "CUST-001",
    patientId: "P101",
    patientName: "Demo Patient 01 (Rohan Sharma)",
    test: "Complete Blood Count (CBC)",
    date: `Tomorrow (${getTomorrowFormatted()})`,
    dateIso: getTomorrowDateIso(),
    slot: "10:00 AM – 11:00 AM",
    address: "Flat 402, Green Glen Layout, Bellandur, Bengaluru",
    status: "SCHEDULED",
    sampleId: "SLT-2026-000001",
    bookedAt: "08 Oct 2026, 08:30 PM"
  }
];

// Active State
let samples = loadSamplesState();
const patients = [
  { id: "P001", name: "Rahul Kumar", age: 32, gender: "Male", phone: "9876543210", address: "Indiranagar, Bengaluru" },
  { id: "P002", name: "Ananya Rao", age: 27, gender: "Female", phone: "9876501234", address: "HSR Layout, Bengaluru" },
  { id: "P003", name: "Vikram Singh", age: 45, gender: "Male", phone: "9988776655", address: "Koramangala, Bengaluru" },
  { id: "P004", name: "Meera Shah", age: 39, gender: "Female", phone: "9900112233", address: "Jayanagar, Bengaluru" },
  { id: "P101", name: "Demo Patient 01 (Rohan Sharma)", age: 34, gender: "Male", phone: "9811002233", address: "Whitefield, Bengaluru" },
  { id: "P102", name: "Demo Patient 02 (Pooja Verma)", age: 28, gender: "Female", phone: "9822113344", address: "Koramangala 4th Block, Bengaluru" },
  { id: "P103", name: "Demo Patient 03 (Amitabh Sen)", age: 52, gender: "Male", phone: "9833224455", address: "Indiranagar 100ft Rd, Bengaluru" },
  { id: "P104", name: "Demo Patient 04 (Deepika Patel)", age: 41, gender: "Female", phone: "9844335566", address: "Jayanagar 5th Block, Bengaluru" },
  { id: "P105", name: "Demo Patient 05 (Kavita Iyer)", age: 60, gender: "Female", phone: "9855446677", address: "Malleshwaram, Bengaluru" }
];

let page = "dashboard";
let currentRole = "ADMIN";
let currentUserName = "Admin User";
let currentUserRoleTitle = "Administrator";

let activityLog = [
  { time: "10:55 AM", action: "Sample status changed", id: "BS202600021", user: "Ravi Kumar" },
  { time: "10:05 AM", action: "Sample received", id: "BS202600020", user: "Lab Technician" },
  { time: "09:25 AM", action: "Sample sent to transport", id: "BS202600017", user: "Ravi Kumar" }
];

// Backend API Base URL
const API_BASE_URL = "http://localhost:8080/api";
let backendAvailable = false;

// Page Titles
const titles = {
  dashboard: ["Dashboard", "Overview of today's laboratory workflow"],
  collections: ["Home Collections", "Manage blood collection requests at patient homes"],
  patients: ["Patients", "Patient registration and records"],
  samples: ["Samples", "All registered blood samples"],
  tracking: ["Sample Tracking", "Follow a sample from home to laboratory completion"],
  tests: ["Tests & Results", "Laboratory test assignments and result verification"],
  alerts: ["Alerts", "Samples requiring attention"],
  storage: ["Storage", "Sample storage locations"],
  reports: ["Reports", "Operational laboratory reports"],
  labels: ["Demo Sample Labels", "Printable QR Code Stickers for Physical University Demo (A4 Layout)"]
};

// --- 4. Local State Management & Demo Reset ---
function loadSamplesState() {
  const saved = localStorage.getItem("slt_samples_state_v12");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not parse saved samples, resetting to default.", e);
    }
  }
  return [...INITIAL_DEMO_SAMPLES, ...LEGACY_SAMPLES];
}

function saveSamplesState() {
  localStorage.setItem("slt_samples_state_v12", JSON.stringify(samples));
  updateCounts();
}

function resetDemoData() {
  const legacyOnly = samples.filter(s => !s.id.startsWith("SLT-"));
  const freshDemo = JSON.parse(JSON.stringify(INITIAL_DEMO_SAMPLES));
  samples = [...freshDemo, ...legacyOnly];
  saveSamplesState();

  // Reset appointments to demo initial
  appointments = [
    {
      id: "APT-2026-000001",
      customerId: "CUST-001",
      patientId: "P101",
      patientName: "Demo Patient 01 (Rohan Sharma)",
      test: "Complete Blood Count (CBC)",
      date: `Tomorrow (${getTomorrowFormatted()})`,
      dateIso: getTomorrowDateIso(),
      slot: "10:00 AM – 11:00 AM",
      address: "Flat 402, Green Glen Layout, Bellandur, Bengaluru",
      status: "SCHEDULED",
      sampleId: "SLT-2026-000001",
      bookedAt: "08 Oct 2026, 08:30 PM"
    }
  ];

  const roleMenu = document.getElementById("roleMenu");
  if (roleMenu) roleMenu.classList.remove("show");

  toast("Demo data reset: 5 demo samples restored to initial SCHEDULED state");
  render();

  if (backendAvailable) {
    fetch(`${API_BASE_URL}/demo/reset`, { method: "POST" })
      .catch(e => console.log("Backend reset sync skipped:", e.message));
  }
}

function updateCounts() {
  const sc = document.getElementById("navSampleCount");
  if (sc) sc.textContent = samples.length;
}

// Check backend connectivity and sync database state
async function checkBackend() {
  try {
    const res = await fetch(`${API_BASE_URL}/samples`, { method: "GET", signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      backendAvailable = true;
      const backendSamples = await res.json();
      if (Array.isArray(backendSamples) && backendSamples.length > 0) {
        // Map backend samples into frontend model
        backendSamples.forEach(bs => {
          const existing = samples.find(s => s.id === bs.sampleId);
          if (existing) {
            existing.status = bs.status;
            existing.location = bs.currentLocation;
            existing.test = bs.assignedTest || existing.test;
            existing.testResult = bs.testResult;
            existing.verifiedBy = bs.verifiedBy;
            existing.releasedAt = bs.releasedAt;
            existing.releasedBy = bs.releasedBy;
            existing.recipient = bs.recipient;
          }
        });
        saveSamplesState();
        renderTable();
        render();
        updateCounts();
      }
      console.log("Connected to Java Spring Boot Backend (REST API / MySQL active)");
    } else {
      backendAvailable = false;
    }
  } catch (e) {
    backendAvailable = false;
    console.log("Java Spring Boot backend offline. Running in local demonstration mode.", e.message);
  }
}
checkBackend();

// --- 5. Customer / Patient Portal Methods ---
function openCustomerSelector() {
  const modal = document.getElementById("customerSelectorModal");
  const body = document.getElementById("customerSelectorBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom:12px;font-size:13px;color:var(--color-text-secondary)">
      Choose an authorized patient account to demonstrate the customer experience. In production, customers log in directly to view only their own records.
    </div>
    <div class="customer-select-list">
      ${DEMO_CUSTOMERS.map(c => `
        <button class="customer-card-btn ${currentCustomer.customerId === c.customerId ? 'active' : ''}" onclick="selectDemoCustomer('${c.patientId}')">
          <div>
            <b>${c.name}</b>
            <small>ID: ${c.customerId} • ${c.patientId} • ${c.age}y / ${c.gender} • Sample: <code>${c.defaultSampleId}</code></small>
            <small style="display:block;margin-top:2px;">${icon('map-pin', 12)} ${c.address}</small>
          </div>
          <div>
            <span class="badge blue">Select</span>
          </div>
        </button>
      `).join("")}
    </div>
  `;
  modal.classList.add("show");
  const menu = document.getElementById("roleMenu");
  if (menu) menu.classList.remove("show");
}

function closeCustomerSelector() {
  const modal = document.getElementById("customerSelectorModal");
  if (modal) modal.classList.remove("show");
}

function selectDemoCustomer(patientId) {
  const found = DEMO_CUSTOMERS.find(c => c.patientId === patientId) || DEMO_CUSTOMERS[0];
  currentCustomer = found;
  closeCustomerSelector();
  switchRole("CUSTOMER", found.name, "Customer / Patient");
}

function getCustomerFriendlyStatus(s) {
  switch (s) {
    case "SCHEDULED": return "Home collection scheduled";
    case "COLLECTED": return "Sample collected by home phlebotomist";
    case "IN_TRANSPORT": return "Sample in transit to central laboratory";
    case "RECEIVED": return "Sample received at laboratory";
    case "PROCESSING": return "Testing in progress at laboratory";
    case "TESTING":
    case "RESULT_ENTERED":
    case "AWAITING_VERIFICATION": return "Doctor is reviewing your report";
    case "VERIFIED": return "Report verified by medical specialist";
    case "RELEASED":
    case "COMPLETED": return "Report ready for download";
    default: return String(s || "").replaceAll("_", " ");
  }
}

// Customer Books Home Collection Modal
function openBookAppointmentModal() {
  const cust = currentCustomer || DEMO_CUSTOMERS[0];
  const tomorrowIso = getTomorrowDateIso();

  document.getElementById("modalTitle").textContent = "Book Home Sample Collection";
  document.getElementById("modalBody").innerHTML = `
    <div class="form">
      <div class="field full">
        <label>Customer Name</label>
        <input value="${cust.name}" readonly style="background:var(--color-background)">
      </div>
      <div class="field full">
        <label>Sample / Test Required</label>
        <select id="bookTestSelect">
          <option value="Complete Blood Count (CBC)">Complete Blood Count (CBC) — Blood</option>
          <option value="Fasting Blood Sugar">Fasting Blood Sugar — Blood</option>
          <option value="Lipid Profile">Lipid Profile — Blood</option>
          <option value="Routine Urine Analysis">Routine Urine Analysis — Urine</option>
          <option value="Thyroid Profile (T3/T4/TSH)">Thyroid Profile (T3/T4/TSH) — Blood</option>
        </select>
      </div>
      <div class="field">
        <label>Preferred Date (Earliest: Tomorrow)</label>
        <input type="date" id="bookDateInput" min="${tomorrowIso}" value="${tomorrowIso}">
        <small style="color:var(--color-text-secondary);font-size:11px;">* Same-day bookings unavailable. Earliest date: Tomorrow.</small>
      </div>
      <div class="field">
        <label>Preferred Time Slot</label>
        <select id="bookSlotSelect">
          <option>09:00 AM – 10:00 AM</option>
          <option selected>10:00 AM – 11:00 AM</option>
          <option>11:00 AM – 12:00 PM</option>
          <option>12:00 PM – 01:00 PM</option>
          <option>02:00 PM – 03:00 PM</option>
          <option>03:00 PM – 04:00 PM</option>
          <option>04:00 PM – 05:00 PM</option>
        </select>
      </div>
      <div class="field full">
        <label>Home Collection Address</label>
        <textarea id="bookAddressInput" rows="2">${cust.address}</textarea>
      </div>
      <div class="form-actions">
        <button class="primary" onclick="submitBookAppointment()">
          ${icon('calendar', 16)} Confirm & Book Appointment
        </button>
      </div>
    </div>
  `;
  openModal();
}

async function submitBookAppointment() {
  const cust = currentCustomer || DEMO_CUSTOMERS[0];
  const dateInput = document.getElementById("bookDateInput");
  const slotSelect = document.getElementById("bookSlotSelect");
  const testSelect = document.getElementById("bookTestSelect");
  const addrInput = document.getElementById("bookAddressInput");

  const chosenDate = dateInput.value;
  const todayIso = new Date().toISOString().split("T")[0];

  // Enforce rule: Earliest date is tomorrow, no same-day bookings
  if (!chosenDate || chosenDate <= todayIso) {
    toast("Same-day home collections are not available. Earliest date is Tomorrow.");
    return;
  }

  const apptId = "APT-2026-00000" + (appointments.length + 1);
  const sampleId = cust.defaultSampleId || "SLT-2026-000001";
  const testName = testSelect.value;
  const slotText = slotSelect.value;
  const addressText = addrInput.value.trim() || cust.address;

  // Format date display
  const dateObj = new Date(chosenDate + "T00:00:00");
  const dateText = dateObj.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

  const newAppt = {
    id: apptId,
    customerId: cust.customerId,
    patientId: cust.patientId,
    patientName: cust.name,
    test: testName,
    date: `${dateText} (Tomorrow)`,
    dateIso: chosenDate,
    slot: slotText,
    address: addressText,
    status: "SCHEDULED",
    sampleId: sampleId,
    bookedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  };

  appointments.unshift(newAppt);

  // Synchronize appointment booking with Java Spring Boot backend
  if (backendAvailable) {
    try {
      const res = await fetch(`${API_BASE_URL}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: cust.customerId,
          patientName: cust.name,
          patientPhone: cust.phone || "9811002233",
          scheduledDate: chosenDate,
          timeSlot: slotText,
          address: addressText,
          testType: testName
        })
      });
      if (res.ok) {
        const savedApt = await res.json();
        if (savedApt && savedApt.appointmentId) {
          newAppt.id = savedApt.appointmentId;
        }
      }
    } catch (e) {
      console.log("Appointment backend sync notice:", e.message);
    }
  }

  // Link / Update corresponding sample to SCHEDULED state
  const targetSample = samples.find(s => s.id === sampleId);
  if (targetSample) {
    targetSample.status = "SCHEDULED";
    targetSample.test = testName;
    targetSample.location = "Patient Home";
    targetSample.time = slotText.split("–")[0].trim();
    targetSample.chainOfCustody = [
      {
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: "SCHEDULED",
        action: "Home Collection Scheduled",
        user: cust.name,
        role: "CUSTOMER",
        location: "Patient Home",
        notes: `Booked by patient for ${slotText}`
      }
    ];
    saveSamplesState();
  }

  closeModal();

  // Show detailed confirmation card in generic modal
  document.getElementById("modalTitle").textContent = "Appointment Confirmed";
  document.getElementById("modalBody").innerHTML = `
    <div style="background:var(--color-surface);padding:18px;border-radius:var(--radius-md);">
      <div style="display:flex;align-items:center;gap:8px;color:var(--color-success);font-weight:800;font-size:15px;margin-bottom:12px;">
        ${icon('check-circle', 20, 'icon-success')}
        <span>APPOINTMENT CONFIRMED</span>
      </div>
      <div class="kv" style="gap:10px;">
        <div><label>Appointment ID</label><b>${newAppt.id}</b></div>
        <div><label>Customer</label><b>${newAppt.patientName}</b></div>
        <div><label>Collection Type</label><b>Home Sample Collection</b></div>
        <div><label>Status</label>${badge(newAppt.status)}</div>
        <div><label>Date</label><b>${newAppt.date}</b></div>
        <div><label>Preferred Slot</label><b>${newAppt.slot}</b></div>
        <div><label>Assigned Test</label><b>${newAppt.test}</b></div>
        <div><label>Sample ID</label><code>${newAppt.sampleId}</code></div>
      </div>
      <div style="background:var(--color-background);padding:10px 12px;border-radius:6px;margin-top:14px;border:1px solid var(--color-border);font-size:12px;display:flex;align-items:center;gap:6px;">
        ${icon('map-pin', 14)} <b>Collection Address:</b> <span>${newAppt.address}</span>
      </div>
      <div style="margin-top:16px;text-align:right;">
        <button class="primary" onclick="closeModal()">Done</button>
      </div>
    </div>
  `;
  openModal();

  toast(`Appointment ${apptId} booked for Tomorrow`);
  render();
}

function handleTopbarAction() {
  if (currentRole === "CUSTOMER") {
    openBookAppointmentModal();
  } else {
    showPage("collections");
  }
}

// Medical Report Viewer Modal
// Medical Report Viewer Modal
async function openMedicalReport(sampleId) {
  const s = samples.find(x => x.id === sampleId) || samples[0];
  const modal = document.getElementById("medicalReportModal");
  const body = document.getElementById("medicalReportBody");
  if (!modal || !body) return;

  if (backendAvailable) {
    try {
      const res = await fetch(`${API_BASE_URL}/reports/${encodeURIComponent(s.id)}`);
      if (res.ok) {
        const reportData = await res.json();
        if (reportData) {
          if (reportData.testResult) s.testResult = reportData.testResult;
          if (reportData.verifiedBy) s.verifiedBy = reportData.verifiedBy;
          if (reportData.releasedAt) s.releasedAt = reportData.releasedAt;
          if (reportData.releasedBy) s.releasedBy = reportData.releasedBy;
        }
      }
    } catch (e) {
      console.log("Report fetch backend notice:", e.message);
    }
  }

  const verifierName = s.verifiedBy || "Dr. Priya Shah";
  const releaseTimestamp = s.releasedAt || "08 Oct 2026, 04:30 PM";

  body.innerHTML = `
    <div class="report-sheet">
      <div class="report-sheet-header">
        <div>
          <div style="font-weight:800;font-size:20px;letter-spacing:-0.5px;color:var(--color-primary)">SmartLabTrack Diagnostics</div>
          <small style="color:var(--color-text-secondary);letter-spacing:1px;font-weight:700">CENTRAL CLINICAL PATHOLOGY LABORATORY</small>
          <div style="font-size:11px;color:var(--color-text-secondary);margin-top:2px;">NABL / ISO-15189 Accredited Automated Testing Facility</div>
        </div>
        <div style="text-align:right;">
          <span class="badge green" style="font-size:12px;">VERIFIED & RELEASED</span>
          <div style="font-family:monospace;font-size:12px;margin-top:4px;font-weight:700;">LAB REF: ${s.id}</div>
        </div>
      </div>

      <!-- Demographics Section -->
      <div class="kv" style="gap:10px;margin-bottom:14px;background:var(--color-background);padding:12px;border-radius:6px;">
        <div><label>Patient Name</label><b>${s.patient}</b></div>
        <div><label>Patient ID / Age / Gender</label><b>${s.patientId || "P101"} • ${s.age || 34}y / ${s.gender || "Male"}</b></div>
        <div><label>Sample Container Type</label><b>${s.type} (Barcode: ${s.id})</b></div>
        <div><label>Referred By</label><b>Dr. A. K. Banerjee, MD</b></div>
        <div><label>Sample Collected</label><b>${s.time || "10:15 AM"} (Patient Home)</b></div>
        <div><label>Sample Received in Lab</label><b>${s.chainOfCustody && s.chainOfCustody[2] ? s.chainOfCustody[2].time : "11:05 AM"}</b></div>
      </div>

      <!-- Quantitative Findings -->
      <table class="report-sheet-table">
        <thead>
          <tr>
            <th>Test Investigation</th>
            <th>Observed Result</th>
            <th>Biological Reference Range</th>
            <th>Status / Flag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>${s.test}</b><br><small style="color:var(--color-text-secondary)">Automated Cell Counter / Flow Cytometry</small></td>
            <td><b style="font-size:15px;color:var(--color-primary)">${s.testResult || "14.2"} ${s.testUnit || "g/dL"}</b></td>
            <td>13.5 – 17.5 ${s.testUnit || "g/dL"}</td>
            <td><span class="badge green">NORMAL</span></td>
          </tr>
        </tbody>
      </table>

      <div style="background:#F8FAFC;padding:10px 12px;border-left:3px solid var(--color-primary);font-size:12px;margin:14px 0;">
        <b>Clinical Interpretation:</b> Quantitative findings are within physiological limits for patient age and demographic profile. Medically cleared and authorized for diagnostic reference.
      </div>

      <!-- Digital Authorization & Sign-off Block -->
      <div class="report-signature-block">
        <div>
          <small style="color:var(--color-text-secondary);display:block;">Tested By Analyzer:</small>
          <b>Automated Sysmex Analyzer XN-1000</b>
          <div style="font-size:11px;color:var(--color-text-secondary);">Verified by Senior Laboratory Technologist</div>
        </div>
        <div style="text-align:right;">
          <small style="color:var(--color-text-secondary);display:block;">Verified & Released by Pathologist:</small>
          <b style="color:var(--color-primary);font-size:14px;">${verifierName}</b>
          <div style="font-size:11px;color:var(--color-text-secondary);">MBBS, MD (Pathology) • Lic. #SLT-84920</div>
          <div style="font-size:11px;color:var(--color-text-secondary);margin-top:2px;">Released: <b>${releaseTimestamp}</b></div>
        </div>
      </div>

      <div class="no-print" style="margin-top:20px;display:flex;justify-content:flex-end;gap:8px;">
        <button class="primary" onclick="downloadMedicalReport('${s.id}')">
          ${icon('printer', 16)} Print / Download PDF
        </button>
        <button class="outline" onclick="closeMedicalReport()">Close</button>
      </div>
    </div>
  `;

  modal.classList.add("show");
}

function closeMedicalReport() {
  const modal = document.getElementById("medicalReportModal");
  if (modal) modal.classList.remove("show");
}

function downloadMedicalReport(sampleId) {
  window.print();
}

// --- 6. Dashboards with Prominent Scan Sample Action ---
function render() {
  const c = document.getElementById("content");
  try {
    if (page === "dashboard") renderRoleDashboard(c);
    else if (page === "collections") collections(c);
    else if (page === "patients") patientPage(c);
    else if (page === "samples") samplePage(c);
    else if (page === "tracking") trackingPage(c);
    else if (page === "tests") testsPage(c);
    else if (page === "alerts") alertsPage(c);
    else if (page === "storage") storagePage(c);
    else if (page === "reports") reportsPage(c);
    else if (page === "labels") labelsPage(c);
    else renderRoleDashboard(c);
  } catch (err) {
    c.innerHTML = `
      <div class="panel">
        <h2>Page could not be loaded</h2>
        <p class="muted">${err.message}</p>
        <button class="primary" onclick="showPage('dashboard')">Return to Dashboard</button>
      </div>`;
    console.error(err);
  }
}

function renderRoleDashboard(c) {
  if (currentRole === "COLLECTOR") collectorDashboard(c);
  else if (currentRole === "LAB_TECHNICIAN") labDashboard(c);
  else if (currentRole === "VERIFIER") verifierDashboard(c);
  else if (currentRole === "CUSTOMER") customerDashboard(c);
  else adminDashboard(c);
}

// 6.1 Admin Dashboard: Pure Oversight & Administrative Monitoring
function adminDashboard(c) {
  const total = samples.length;
  const scheduled = samples.filter(s => s.status === "SCHEDULED").length;
  const inTransit = samples.filter(s => s.status === "IN_TRANSPORT" || s.status === "COLLECTED").length;
  const delayed = samples.filter(s => s.status === "DELAYED").length;
  const released = samples.filter(s => s.status === "RELEASED" || s.status === "COMPLETED").length;

  c.innerHTML = `
    <!-- Prominent Scan Sample Banner for Admin -->
    <div class="role-banner" style="background:linear-gradient(135deg, rgba(2,132,199,0.08), rgba(2,132,199,0.02));border-color:var(--color-primary)">
      <div>
        <span class="role-pill">ADMINISTRATOR OVERVIEW</span>
        <h2>Laboratory Operations & Custody Monitoring</h2>
        <p>Monitor real-time sample journeys, custody handoffs, and verification releases.</p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="primary" onclick="openScanner()" style="box-shadow:var(--shadow-medium);font-size:14px;padding:0 20px;">
          ${icon('camera', 16)} SCAN SAMPLE
        </button>
        <button class="outline" onclick="showPage('labels')">${icon('printer', 16)} Print Demo Labels</button>
      </div>
    </div>

    <div class="cards">
      <div class="card"><div class="label">Total Samples</div><div class="metric">${total}</div><div class="note">All active records</div><div class="mini-progress"><span style="width:100%"></span></div></div>
      <div class="card"><div class="label">Awaiting Pickup</div><div class="metric">${scheduled}</div><div class="note">Home collections</div><div class="mini-progress"><span style="width:${(scheduled/total)*100}%"></span></div></div>
      <div class="card"><div class="label">In Custody / Transit</div><div class="metric">${inTransit}</div><div class="note">En route to lab</div><div class="mini-progress"><span style="width:${(inTransit/total)*100}%"></span></div></div>
      <div class="card"><div class="label">Delayed / Attention</div><div class="metric">${delayed}</div><div class="note">Need review</div><div class="mini-progress"><span style="width:20%"></span></div></div>
      <div class="card"><div class="label">Reports Released</div><div class="metric">${released}</div><div class="note">Verified by doctor</div><div class="mini-progress"><span style="width:${(released/total)*100}%"></span></div></div>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h2>Today's Complete Sample Journey (Chain of Custody)</h2>
        <span class="muted">Standard Diagnostic Lifecycle</span>
      </div>
      <div class="timeline">
        <div class="step done"><div class="dot">${icon('check', 12)}</div>Scheduled</div>
        <div class="step done"><div class="dot">${icon('check', 12)}</div>Collected</div>
        <div class="step current"><div class="dot">${icon('clock', 12)}</div>Transport</div>
        <div class="step"><div class="dot"></div>Lab Received</div>
        <div class="step"><div class="dot"></div>Processing</div>
        <div class="step"><div class="dot"></div>Doctor Verified</div>
        <div class="step"><div class="dot"></div>Released to Patient</div>
      </div>
    </div>

    <div class="grid2">
      <div class="panel">
        <div class="panel-head">
          <h2>Active Samples Queue & Released Reports</h2>
          <div>
            <button class="smallbtn" onclick="openScanner()">${icon('camera', 14)} Scan</button>
            <button class="smallbtn" onclick="showPage('samples')">View all</button>
          </div>
        </div>
        <table class="table">
          <thead><tr><th>Sample ID</th><th>Patient</th><th>Priority</th><th>Status</th><th>Verification / Release</th><th></th></tr></thead>
          <tbody>
            ${samples.slice(0, 7).map(s => `
              <tr>
                <td><b>${s.id}</b></td>
                <td>${s.patient}</td>
                <td>${badge(s.priority)}</td>
                <td>${badge(s.status)}</td>
                <td>
                  ${s.status === "RELEASED" ? `
                    <small style="color:var(--color-success);font-weight:700;">Released by ${s.verifiedBy || "Doctor"}</small><br>
                    <small class="muted">To ${s.recipient || s.patient.split(" ")[0]}</small>
                  ` : s.status === "VERIFIED" ? `
                    <small style="color:var(--color-primary);font-weight:700;">Verified by ${s.verifiedBy || "Doctor"}</small>
                  ` : `
                    <small class="muted">Location: ${s.location}</small>
                  `}
                </td>
                <td><button class="smallbtn" onclick="viewSample('${s.id}')">View</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Action Alerts & Notices</h2>
          <span class="badge red">2</span>
        </div>
        <div class="alert redbg">
          ${icon('alert-circle', 18, 'icon-error')}
          <div><b>BS202600019 delayed</b><br><span class="muted">Testing exceeded 60 minutes threshold.</span></div>
        </div>
        <div class="alert">
          ${icon('alert-triangle', 18, 'icon-warning')}
          <div><b>Recollection required</b><br><span class="muted">Insufficient volume — BS202600016.</span></div>
        </div>
        <div class="alert">
          ${icon('tag', 18, 'icon-primary')}
          <div><b>5 Physical Demo Labels Ready</b><br><span class="muted">Print stickers for teacher evaluation.</span></div>
        </div>
        <div style="margin-top:12px;display:flex;gap:8px;">
          <button class="smallbtn" onclick="showPage('labels')">Print Labels →</button>
          <button class="smallbtn" onclick="showPage('alerts')">View Alerts →</button>
        </div>
      </div>
    </div>`;
}

// 6.2 Collector Dashboard
function collectorDashboard(c) {
  const assigned = samples.filter(s => s.status === "SCHEDULED");
  const collected = samples.filter(s => s.status === "COLLECTED" || s.status === "IN_TRANSPORT");

  c.innerHTML = roleHeader(
    "COLLECTOR DASHBOARD",
    "Home Collection & Sample Handoff",
    "Scan sample QR code at patient's home to mark COLLECTED and confirm dispatch for transport."
  ) + `
    <div class="cards">
      <div class="card"><div class="label">Assigned Visits</div><div class="metric">${assigned.length}</div><div class="note">Scheduled pickups</div></div>
      <div class="card"><div class="label">Collected Today</div><div class="metric">${collected.length}</div><div class="note">In custody</div></div>
      <div class="card"><div class="label">In Transport</div><div class="metric">${samples.filter(s => s.status === "IN_TRANSPORT").length}</div><div class="note">En route to lab</div></div>
      <div class="card"><div class="label">Urgent Samples</div><div class="metric">${samples.filter(s => s.priority === "URGENT" || s.priority === "STAT").length}</div><div class="note">High priority</div></div>
      <div class="card"><div class="label">Recollections</div><div class="metric">1</div><div class="note">Requires visit</div></div>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h2>Today's Collection Queue (Scan to Collect)</h2>
        <div>
          <button class="primary" onclick="openScanner()">${icon('camera', 16)} Scan Sample QR</button>
        </div>
      </div>
      <table class="table">
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Type</th><th>Priority</th><th>Status</th><th>Scan Action</th></tr></thead>
        <tbody>
          ${samples.filter(s => s.status === "SCHEDULED" || s.status === "COLLECTED" || s.status === "IN_TRANSPORT").map(s => `
            <tr>
              <td><b>${s.id}</b><br><span class="muted">${s.time}</span></td>
              <td><b>${s.patient}</b></td>
              <td>${s.type}</td>
              <td>${badge(s.priority)}</td>
              <td>${badge(s.status)}</td>
              <td>
                <button class="smallbtn" onclick="quickScan('${s.id}')">
                  ${s.status === "SCHEDULED" ? `${icon('camera', 14)} Scan to Collect` : `${icon('truck', 14)} Scan Handoff`}
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;
}

// 6.3 Lab Technician Dashboard
function labDashboard(c) {
  const awaiting = samples.filter(s => s.status === "COLLECTED" || s.status === "IN_TRANSPORT");
  const received = samples.filter(s => s.status === "RECEIVED");
  const processing = samples.filter(s => s.status === "PROCESSING" || s.status === "TESTING");

  c.innerHTML = roleHeader(
    "LAB TECHNICIAN DASHBOARD",
    "Sample Reception, Processing & Testing",
    "Scan incoming sample QR to mark RECEIVED. Scan again to begin PROCESSING and enter test results."
  ) + `
    <div class="cards">
      <div class="card"><div class="label">Awaiting Reception</div><div class="metric">${awaiting.length}</div><div class="note">In transit to lab</div></div>
      <div class="card"><div class="label">Lab Received</div><div class="metric">${received.length}</div><div class="note">Ready for analyzer</div></div>
      <div class="card"><div class="label">In Processing</div><div class="metric">${processing.length}</div><div class="note">Active testing</div></div>
      <div class="card"><div class="label">Urgent / STAT</div><div class="metric">${samples.filter(s => (s.priority === "URGENT" || s.priority === "STAT") && s.status !== "COMPLETED").length}</div><div class="note">Expedite queue</div></div>
      <div class="card"><div class="label">Sent to Verifier</div><div class="metric">${samples.filter(s => s.status === "AWAITING_VERIFICATION" || s.status === "VERIFIED" || s.status === "RELEASED").length}</div><div class="note">Awaiting doctor</div></div>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h2>Incoming Samples Queue (Scan to Receive / Process)</h2>
        <div>
          <button class="primary" onclick="openScanner()">${icon('camera', 16)} Scan Incoming Sample</button>
        </div>
      </div>
      <table class="table">
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Assigned Test</th><th>Priority</th><th>Status</th><th>Scan Action</th></tr></thead>
        <tbody>
          ${samples.filter(s => s.status === "IN_TRANSPORT" || s.status === "COLLECTED" || s.status === "RECEIVED" || s.status === "PROCESSING").map(s => `
            <tr>
              <td><b>${s.id}</b></td>
              <td>${s.patient}</td>
              <td><b>${s.test}</b></td>
              <td>${badge(s.priority)}</td>
              <td>${badge(s.status)}</td>
              <td>
                <button class="smallbtn" onclick="quickScan('${s.id}')">
                  ${s.status === "RECEIVED" ? `${icon('flask', 14)} Scan to Process` : s.status === "PROCESSING" ? `${icon('send', 14)} Enter Result` : `${icon('package', 14)} Scan to Receive`}
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;
}

// 6.4 Verifier / Doctor Dashboard: Review, Verify & Release Report to Patient
function verifierDashboard(c) {
  const awaiting = samples.filter(s => s.status === "AWAITING_VERIFICATION" || s.status === "TESTING" || (s.status === "PROCESSING" && s.testResult));
  const verifiedOnly = samples.filter(s => s.status === "VERIFIED");
  const released = samples.filter(s => s.status === "RELEASED" || s.status === "COMPLETED");

  c.innerHTML = roleHeader(
    "VERIFIER / DOCTOR DASHBOARD",
    "Clinical Verification & Report Release to Patient",
    "Review completed test results, medically authorize the report, and release it directly to the patient."
  ) + `
    <div class="cards">
      <div class="card"><div class="label">Reports Awaiting Verification</div><div class="metric">${awaiting.length}</div><div class="note">Requires doctor sign-off</div></div>
      <div class="card"><div class="label">Verified (Pending Release)</div><div class="metric">${verifiedOnly.length}</div><div class="note">Ready to release</div></div>
      <div class="card"><div class="label">Released to Patient</div><div class="metric">${released.length}</div><div class="note">Delivered to patient portal</div></div>
      <div class="card"><div class="label">STAT Reviews</div><div class="metric">${samples.filter(s => s.priority === "STAT").length}</div><div class="note">Priority queue</div></div>
      <div class="card"><div class="label">Average TAT</div><div class="metric">14m</div><div class="note">Doctor turnaround</div></div>
    </div>

    <!-- Reports Awaiting Verification Queue -->
    <div class="panel">
      <div class="panel-head">
        <h2>Reports Awaiting Verification</h2>
        <div>
          <button class="primary" onclick="openScanner()">${icon('camera', 16)} Scan Sample to Review</button>
        </div>
      </div>
      <table class="table">
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Test</th><th>Result Value</th><th>Status</th><th>Verification Action</th></tr></thead>
        <tbody>
          ${awaiting.length > 0 ? awaiting.map(s => `
            <tr>
              <td><b>${s.id}</b></td>
              <td>${s.patient}</td>
              <td>${s.test}</td>
              <td><b style="color:var(--color-primary);font-size:15px">${s.testResult || "14.2"} ${s.testUnit || ""}</b></td>
              <td>${badge(s.status)}</td>
              <td>
                <button class="smallbtn" onclick="quickScan('${s.id}')">
                  ${icon('shield-check', 14)} Review & Verify
                </button>
              </td>
            </tr>
          `).join("") : `
            <tr><td colspan="6" style="text-align:center;color:var(--color-text-secondary);padding:24px;">No samples currently awaiting verification. Scan or process a sample to test.</td></tr>
          `}
        </tbody>
      </table>
    </div>

    <!-- Reports Verified & Ready to Release -->
    ${verifiedOnly.length > 0 ? `
      <div class="panel">
        <div class="panel-head">
          <h2>Verified Reports Ready for Patient Release</h2>
        </div>
        <table class="table">
          <thead><tr><th>Sample ID</th><th>Patient</th><th>Test</th><th>Verified By</th><th>Action</th></tr></thead>
          <tbody>
            ${verifiedOnly.map(s => `
              <tr>
                <td><b>${s.id}</b></td>
                <td>${s.patient}</td>
                <td>${s.test}</td>
                <td><b>${s.verifiedBy || "Dr. Priya Shah"}</b></td>
                <td>
                  <button class="primary smallbtn" onclick="releaseReportToPatient('${s.id}')">
                    ${icon('send', 14)} Release Report to Patient
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    ` : ""}

    <!-- Released Reports Archive -->
    <div class="panel">
      <div class="panel-head">
        <h2>Released Medical Reports (Delivered to Patient)</h2>
      </div>
      <table class="table">
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Test</th><th>Verified By</th><th>Released At</th><th></th></tr></thead>
        <tbody>
          ${released.length > 0 ? released.map(s => `
            <tr>
              <td><b>${s.id}</b></td>
              <td>${s.patient}</td>
              <td>${s.test}</td>
              <td>${s.verifiedBy || "Dr. Priya Shah"}</td>
              <td><small class="muted">${s.releasedAt || "Today"}</small></td>
              <td>
                <button class="smallbtn" onclick="openMedicalReport('${s.id}')">
                  ${icon('file-text', 14)} View Report
                </button>
              </td>
            </tr>
          `).join("") : `
            <tr><td colspan="6" style="text-align:center;color:var(--color-text-secondary);padding:20px;">No reports released yet.</td></tr>
          `}
        </tbody>
      </table>
    </div>`;
}

// 6.5 Customer / Patient Dashboard: Private, Simple & Connected Live Journey
function customerDashboard(c) {
  const cust = currentCustomer || DEMO_CUSTOMERS[0];
  const custSamples = samples.filter(s => s.patientId === cust.patientId || s.patient.includes(cust.name.split(" ")[0]));
  const primarySample = custSamples[0] || samples.find(s => s.id === cust.defaultSampleId) || samples[0];
  const custAppointments = appointments.filter(a => a.patientId === cust.patientId || a.customerId === cust.customerId);
  const nextAppt = custAppointments[0];

  const friendlyStatus = getCustomerFriendlyStatus(primarySample ? primarySample.status : "SCHEDULED");

  // Determine stage flags for customer timeline
  const s = primarySample ? primarySample.status : "SCHEDULED";
  const isCollected = ["COLLECTED", "IN_TRANSPORT", "RECEIVED", "PROCESSING", "TESTING", "RESULT_ENTERED", "AWAITING_VERIFICATION", "VERIFIED", "RELEASED", "COMPLETED"].includes(s);
  const isReceived = ["RECEIVED", "PROCESSING", "TESTING", "RESULT_ENTERED", "AWAITING_VERIFICATION", "VERIFIED", "RELEASED", "COMPLETED"].includes(s);
  const isTesting = ["PROCESSING", "TESTING", "RESULT_ENTERED", "AWAITING_VERIFICATION", "VERIFIED", "RELEASED", "COMPLETED"].includes(s);
  const isTestingActive = ["PROCESSING", "TESTING"].includes(s);
  const isVerified = ["VERIFIED", "RELEASED", "COMPLETED"].includes(s);
  const isDoctorReview = ["RESULT_ENTERED", "AWAITING_VERIFICATION"].includes(s);
  const isReleased = ["RELEASED", "COMPLETED"].includes(s);

  c.innerHTML = `
    <!-- Customer Welcome Strip -->
    <div class="role-banner" style="background:#FFFFFF;border-color:var(--color-primary)">
      <div>
        <span class="role-pill">PATIENT PORTAL</span>
        <h2>Welcome, ${cust.name}</h2>
        <p>Customer ID: <b>${cust.customerId}</b> • Patient ID: <b>${cust.patientId}</b> • Contact: <b>${cust.phone}</b></p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="primary" onclick="openBookAppointmentModal()">
          ${icon('calendar', 16)} Book Home Collection
        </button>
        <button class="outline" onclick="openCustomerSelector()">
          ${icon('user', 14)} Switch Demo Customer
        </button>
      </div>
    </div>

    <!-- Upcoming Appointment Card -->
    <div class="panel">
      <div class="panel-head">
        <h2>Upcoming Appointment</h2>
        ${nextAppt ? badge("CONFIRMED") : '<span class="muted">No active booking</span>'}
      </div>
      ${nextAppt ? `
        <div class="kv" style="gap:12px;">
          <div><label>Appointment Reference</label><b>${nextAppt.id}</b></div>
          <div><label>Collection Type</label><b>Home Sample Collection</b></div>
          <div><label>Date</label><b>${nextAppt.date}</b></div>
          <div><label>Time Slot</label><b>${nextAppt.slot}</b></div>
          <div><label>Assigned Test</label><b>${nextAppt.test}</b></div>
          <div><label>Sample ID</label><code>${nextAppt.sampleId}</code></div>
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--color-text-secondary);background:var(--color-background);padding:10px;border-radius:6px;display:flex;align-items:center;gap:6px;">
          ${icon('map-pin', 14)} <b>Collection Address:</b> <span>${nextAppt.address}</span>
        </div>
      ` : `
        <p class="muted">You have no upcoming home collections scheduled.</p>
        <button class="primary smallbtn" onclick="openBookAppointmentModal()">+ Book Home Collection</button>
      `}
    </div>

    <!-- Live Sample Progress Timeline -->
    <div class="panel">
      <div class="panel-head">
        <div>
          <h2>Your Sample Progress</h2>
          <span class="muted">Live journey powered by physical QR handoffs</span>
        </div>
        <div>
          <span class="badge ${isReleased ? 'green' : 'blue'}" style="font-size:13px;padding:4px 12px;">
            ${friendlyStatus}
          </span>
        </div>
      </div>

      <div style="background:var(--color-background);padding:12px 16px;border-radius:6px;margin-bottom:16px;border:1px solid var(--color-border);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <b style="font-size:15px;font-family:monospace;">${primarySample.id}</b>
          <div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px;">
            ${primarySample.test} (${primarySample.type} Specimen)
          </div>
        </div>
        <div>
          <button class="smallbtn" onclick="openScanner()">
            ${icon('camera', 14)} Scan My Sample QR
          </button>
        </div>
      </div>

      <!-- Customer-Friendly Vertical Journey Stepper -->
      <div class="cust-timeline">
        <div class="cust-step done">
          <div class="cust-step-icon">${icon('check', 14)}</div>
          <div class="cust-step-info">
            <b>Appointment Booked & Confirmed</b>
            <small>${nextAppt ? `${nextAppt.date} • ${nextAppt.slot}` : "Scheduled for home visit"}</small>
          </div>
        </div>

        <div class="cust-step ${isCollected ? 'done' : 'current'}">
          <div class="cust-step-icon">${isCollected ? icon('check', 14) : icon('clock', 14)}</div>
          <div class="cust-step-info">
            <b>Sample Collected by Phlebotomist</b>
            <small>${isCollected ? `Collected at patient home • Container barcode sealed` : "Phlebotomist visiting patient address"}</small>
          </div>
        </div>

        <div class="cust-step ${isReceived ? 'done' : isCollected ? 'current' : ''}">
          <div class="cust-step-icon">${isReceived ? icon('check', 14) : isCollected ? icon('truck', 14) : ''}</div>
          <div class="cust-step-info">
            <b>Sample Received at Central Laboratory</b>
            <small>${isReceived ? "Integrity inspected and accepted at reception" : "Sample in temperature-controlled transit"}</small>
          </div>
        </div>

        <div class="cust-step ${isVerified ? 'done' : isTestingActive ? 'current' : ''}">
          <div class="cust-step-icon">${isVerified ? icon('check', 14) : isTestingActive ? icon('flask', 14) : ''}</div>
          <div class="cust-step-info">
            <b>Testing in Progress</b>
            <small>${isVerified ? "Quantitative automated analyzer testing completed" : isTestingActive ? "Active analyzer analysis in laboratory" : "Waiting in laboratory testing queue"}</small>
          </div>
        </div>

        <div class="cust-step ${isVerified ? 'done' : isDoctorReview ? 'current' : ''}">
          <div class="cust-step-icon">${isVerified ? icon('check', 14) : isDoctorReview ? icon('shield-check', 14) : ''}</div>
          <div class="cust-step-info">
            <b>Doctor Medical Review & Verification</b>
            <small>${isVerified ? `Medically verified by ${primarySample.verifiedBy || "Dr. Priya Shah"}` : isDoctorReview ? "Pathologist reviewing clinical reading" : "Waiting for laboratory results"}</small>
          </div>
        </div>

        <div class="cust-step ${isReleased ? 'done' : ''}">
          <div class="cust-step-icon">${isReleased ? icon('check', 14) : ''}</div>
          <div class="cust-step-info">
            <b>Report Released to Patient</b>
            <small>${isReleased ? `Released on ${primarySample.releasedAt || "Today"} • Ready for download` : "Diagnostic report will appear here once verified"}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Verified Medical Report Ready Section -->
    <div class="panel">
      <div class="panel-head">
        <h2>My Medical Reports</h2>
        ${isReleased ? '<span class="badge green">Report Ready</span>' : '<span class="badge orange">In Progress</span>'}
      </div>
      ${isReleased ? `
        <div style="background:var(--color-success-light);border:1px solid var(--color-success);border-radius:var(--radius-md);padding:16px;">
          <div style="display:flex;align-items:center;gap:8px;color:var(--color-success);font-weight:800;font-size:15px;margin-bottom:8px;">
            ${icon('check-circle', 20, 'icon-success')}
            <span>Your diagnostic report is ready</span>
          </div>
          <div class="kv" style="gap:10px;margin-bottom:12px;">
            <div><label>Sample ID</label><code>${primarySample.id}</code></div>
            <div><label>Investigation</label><b>${primarySample.test}</b></div>
            <div><label>Status</label><b>Verified by Doctor</b></div>
            <div><label>Verified By</label><b>${primarySample.verifiedBy || "Dr. Priya Shah"}</b></div>
            <div><label>Released Date & Time</label><b>${primarySample.releasedAt || "Today, 04:30 PM"}</b></div>
          </div>
          <div style="display:flex;gap:10px;margin-top:14px;">
            <button class="primary" onclick="openMedicalReport('${primarySample.id}')">
              ${icon('file-text', 16)} View Report
            </button>
            <button class="outline" onclick="downloadMedicalReport('${primarySample.id}')">
              ${icon('download', 16)} Download Report
            </button>
          </div>
        </div>
      ` : `
        <div style="background:var(--color-background);padding:16px;border-radius:6px;border:1px solid var(--color-border);">
          <div style="display:flex;align-items:center;gap:8px;color:var(--color-primary);font-weight:700;margin-bottom:4px;">
            ${icon('clock', 16)}
            <span>1 Report Undergoing Laboratory Verification</span>
          </div>
          <p class="muted" style="margin:0;font-size:13px;">
            Your sample <code>${primarySample.id}</code> (${primarySample.test}) is being processed. Once verified and released by the doctor, your electronic report will be instantly available to view and download here.
          </p>
        </div>
      `}
    </div>

    <!-- Recent Patient Milestones -->
    <div class="panel">
      <div class="panel-head">
        <h2>Recent Activity Trail</h2>
      </div>
      <table class="table">
        <thead><tr><th>Time</th><th>Milestone</th><th>Location</th></tr></thead>
        <tbody>
          ${(primarySample.chainOfCustody || []).slice().reverse().map(h => `
            <tr>
              <td><b>${h.time}</b></td>
              <td><b>${h.action}</b></td>
              <td class="muted">${h.location}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function roleHeader(role, title, text) {
  return `
    <div class="role-banner">
      <div>
        <span class="role-pill">${role}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="primary" onclick="openScanner()" style="box-shadow:var(--shadow-medium);font-size:14px;padding:0 20px;">
          ${icon('camera', 16)} SCAN SAMPLE
        </button>
        <button class="smallbtn" onclick="showPage('labels')">${icon('tag', 14)} Demo Labels</button>
      </div>
    </div>`;
}

// --- 7. Printable Demo Sample Labels Page ---
function labelsPage(c) {
  const demoList = samples.filter(s => s.id.startsWith("SLT-2026-"));

  c.innerHTML = `
    <div class="no-print">
      <div class="role-banner" style="background:#FFFFFF;border-color:var(--color-primary)">
        <div>
          <span class="role-pill">PHYSICAL DEMO STICKERS</span>
          <h2>A4 Printable Laboratory Sample Labels</h2>
          <p>Print these 5 realistic labels to physically demonstrate camera and manual scanning to your teachers.</p>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="primary" onclick="window.print()">${icon('printer', 16)} PRINT DEMO LABELS</button>
          <button class="outline" onclick="resetDemoData()">${icon('refresh-cw', 14)} RESET DEMO DATA</button>
        </div>
      </div>
      <div class="info-strip">
        <span>${icon('lock', 16)} <b>Security Note:</b> QR codes encode <b>ONLY</b> the unique Sample ID (e.g. <code>SLT-2026-000001</code>). No patient medical data is stored inside the barcode.</span>
        <span class="role-pill">Demo Mode</span>
      </div>
    </div>

    <div class="demo-label-grid" id="demoLabelsContainer">
      ${demoList.map(s => `
        <div class="demo-label-card" id="card-${s.id}">
          <div class="demo-label-header">
            <div>
              <h3>SmartLabTrack</h3>
              <small style="color:var(--color-text-secondary);font-size:10px;font-weight:700;letter-spacing:1px">CLINICAL DIAGNOSTICS</small>
            </div>
            <span class="demo-label-specimen-badge">${s.type.toUpperCase()} SPECIMEN</span>
          </div>

          <div class="demo-label-body">
            <div class="demo-label-qr" id="qr-box-${s.id}"></div>
            <div class="demo-label-info">
              <div class="demo-label-id">${s.id}</div>
              <div style="font-size:12px;margin-bottom:2px"><b>Test:</b> ${s.test}</div>
              <div style="font-size:11px;color:var(--color-text-secondary)"><b>Patient:</b> ${s.patient}</div>
              <div style="font-size:11px;color:var(--color-text-secondary)"><b>Priority:</b> ${s.priority}</div>
              <div style="font-size:11px;margin-top:4px"><b>Status:</b> ${badge(s.status)}</div>
              <div class="demo-label-barcode" id="barcode-box-${s.id}">
                ${generateBarcodeSVG(s.id)}
              </div>
            </div>
          </div>

          <div class="demo-label-actions no-print">
            <button class="smallbtn" onclick="quickScan('${s.id}')">${icon('camera', 14)} Test Scan (${currentRole})</button>
            <button class="smallbtn" onclick="viewSample('${s.id}')">${icon('search', 14)} View Details</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  setTimeout(() => {
    demoList.forEach(s => {
      const container = document.getElementById("qr-box-" + s.id);
      if (container && window.QRCode) {
        container.innerHTML = "";
        new QRCode(container, {
          text: s.id,
          width: 115,
          height: 115,
          colorDark: "#0F172A",
          colorLight: "#FFFFFF",
          correctLevel: QRCode.CorrectLevel.M
        });
      }
    });
  }, 50);
}

// Linear Barcode SVG Generator
function generateBarcodeSVG(text) {
  let bars = "";
  let x = 4;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    const pattern = [(code % 3) + 1, ((code >> 1) % 2) + 1, ((code >> 2) % 3) + 1, 1];
    pattern.forEach((w, idx) => {
      if (idx % 2 === 0) {
        bars += `<rect x="${x}" y="0" width="${w}" height="28" fill="#0F172A" />`;
      }
      x += w + 1;
    });
  }
  return `<svg viewBox="0 0 ${Math.max(x + 4, 120)} 30" width="100%" height="28" xmlns="http://www.w3.org/2000/svg" style="display:block">${bars}</svg>`;
}

// --- 8. Two-Stage Scanner Experience (Camera Disappears On Scan -> Immediate Action Mode) ---
let videoStream = null;
let scanFrameId = null;
let currentFacingMode = "environment";

function openScanner() {
  const modal = document.getElementById("scannerModal");
  if (!modal) return;
  modal.classList.add("show");

  // Reset to Stage 1 (Camera / Scanner Mode)
  switchScannerToStage1();
}

function switchScannerToStage1() {
  const stageScan = document.getElementById("scannerStageScan");
  const stageAction = document.getElementById("scannerStageAction");
  const titleText = document.getElementById("scannerModalTitleText");
  const titleIcon = document.getElementById("scannerModalTitle");
  const roleText = document.getElementById("scannerActiveRoleText");

  if (stageScan) stageScan.style.display = "block";
  if (stageAction) stageAction.style.display = "none";

  if (titleText) titleText.textContent = "Scan Sample (Digital Chain of Custody)";
  if (titleIcon) {
    titleIcon.innerHTML = `
      ${icon('camera', 20)}
      <span id="scannerModalTitleText">Scan Sample (Digital Chain of Custody)</span>
    `;
  }

  if (roleText) {
    roleText.innerHTML = `Scanning as: <b>${currentUserName} (${currentUserRoleTitle})</b>`;
  }

  const manualInput = document.getElementById("manualScanInput");
  if (manualInput) {
    manualInput.value = "";
    manualInput.focus();
  }

  // Auto-start camera
  startCameraScanner();
}

function closeScanner() {
  const modal = document.getElementById("scannerModal");
  if (modal) modal.classList.remove("show");
  stopCameraScanner();
}

function toggleCameraScanner() {
  if (videoStream) {
    stopCameraScanner();
  } else {
    startCameraScanner();
  }
}

function switchCameraFacing() {
  currentFacingMode = (currentFacingMode === "environment") ? "user" : "environment";
  if (videoStream) {
    stopCameraScanner();
    startCameraScanner();
  }
}

function startCameraScanner() {
  const video = document.getElementById("scannerVideo");
  const statusEl = document.getElementById("cameraStatus");
  const toggleBtn = document.getElementById("cameraToggleBtn");

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (statusEl) statusEl.textContent = "Camera API not supported in browser. Use manual entry.";
    return;
  }

  if (statusEl) statusEl.textContent = "Requesting camera permission...";

  navigator.mediaDevices.getUserMedia({
    video: { facingMode: currentFacingMode, width: { ideal: 640 }, height: { ideal: 480 } }
  }).then(stream => {
    videoStream = stream;
    video.srcObject = stream;
    video.setAttribute("playsinline", true);
    video.play();
    if (statusEl) statusEl.textContent = "Camera active. Scanning for QR code...";
    if (toggleBtn) toggleBtn.textContent = "Stop Camera";
    scanFrameId = requestAnimationFrame(scanVideoFrame);
  }).catch(err => {
    console.warn("Camera access failed:", err);
    if (statusEl) statusEl.innerHTML = `<span style="color:var(--color-warning)">Camera unavailable. Use manual entry below.</span>`;
    if (toggleBtn) toggleBtn.textContent = "Start Camera";
  });
}

function stopCameraScanner() {
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
  if (scanFrameId) {
    cancelAnimationFrame(scanFrameId);
    scanFrameId = null;
  }
  const video = document.getElementById("scannerVideo");
  if (video) video.srcObject = null;
  const statusEl = document.getElementById("cameraStatus");
  if (statusEl) statusEl.textContent = "Camera stopped";
  const toggleBtn = document.getElementById("cameraToggleBtn");
  if (toggleBtn) toggleBtn.textContent = "Start Camera";
}

let scanCanvas = null;
let scanCtx = null;

function scanVideoFrame() {
  const video = document.getElementById("scannerVideo");
  if (!video || !videoStream) return;

  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    if (!scanCanvas) {
      scanCanvas = document.createElement("canvas");
      scanCtx = scanCanvas.getContext("2d", { willReadFrequently: true });
    }
    scanCanvas.width = video.videoWidth;
    scanCanvas.height = video.videoHeight;
    scanCtx.drawImage(video, 0, 0, scanCanvas.width, scanCanvas.height);

    const imgData = scanCtx.getImageData(0, 0, scanCanvas.width, scanCanvas.height);
    if (window.jsQR) {
      const code = jsQR(imgData.data, imgData.width, imgData.height, {
        inversionAttempts: "dontInvert"
      });
      if (code && code.data && code.data.trim()) {
        const scannedId = code.data.trim();
        toast("QR Code Detected: " + scannedId);
        stopCameraScanner();
        handleScannedCode(scannedId);
        return;
      }
    }
  }

  scanFrameId = requestAnimationFrame(scanVideoFrame);
}

function performManualScan() {
  const input = document.getElementById("manualScanInput");
  if (!input) return;
  const val = input.value.trim();
  if (!val) {
    toast("Please enter a Sample ID (e.g. SLT-2026-000001)");
    return;
  }
  stopCameraScanner();
  handleScannedCode(val);
}

function quickScan(sampleId) {
  openScanner();
  stopCameraScanner();
  const input = document.getElementById("manualScanInput");
  if (input) input.value = sampleId;
  handleScannedCode(sampleId);
}

// Stage 2 Transition: Camera completely disappears, Sample Action immediately at the top!
async function handleScannedCode(sampleCode) {
  stopCameraScanner();

  // Hide Stage 1 (Camera & Manual input), Show Stage 2 (Sample Action Mode)
  const stageScan = document.getElementById("scannerStageScan");
  const stageAction = document.getElementById("scannerStageAction");
  if (stageScan) stageScan.style.display = "none";
  if (stageAction) stageAction.style.display = "block";

  // Transform Modal Title
  const titleIcon = document.getElementById("scannerModalTitle");
  if (titleIcon) {
    titleIcon.innerHTML = `
      ${icon('check-circle', 20, 'icon-success')}
      <span>Sample Identified</span>
    `;
  }

  // Normalize ID lookup
  let sample = samples.find(s =>
    s.id.toLowerCase() === sampleCode.toLowerCase() ||
    (s.qrToken && s.qrToken.toLowerCase() === sampleCode.toLowerCase()) ||
    (s.barcodeValue && s.barcodeValue.toLowerCase() === sampleCode.toLowerCase())
  );

  // Authoritative Java REST API call: Query Spring Boot backend on scan
  try {
    const res = await fetch(`${API_BASE_URL}/samples/scan/${encodeURIComponent(sampleCode)}?role=${encodeURIComponent(currentRole)}`, {
      method: "GET",
      headers: { "X-Demo-Role": currentRole, "X-Demo-User": currentUserName }
    });
    if (res.ok) {
      backendAvailable = true;
      const backendData = await res.json();
      if (backendData && backendData.sampleId) {
        if (!sample) {
          sample = {
            id: backendData.sampleId,
            patient: backendData.patientName || "Patient",
            age: backendData.patientAge || 34,
            gender: backendData.patientGender || "Male",
            type: backendData.sampleType || "Blood",
            test: backendData.assignedTest || "Complete Blood Count (CBC)",
            priority: backendData.priority || "NORMAL",
            status: backendData.status || "SCHEDULED",
            location: backendData.currentLocation || "Patient Home",
            chainOfCustody: []
          };
          samples.push(sample);
        } else {
          sample.status = backendData.status;
          sample.location = backendData.currentLocation;
          sample.testResult = backendData.testResult;
          sample.testUnit = backendData.testUnit;
          sample.verifiedBy = backendData.verifiedBy;
          sample.releasedAt = backendData.releasedAt;
          sample.releasedBy = backendData.releasedBy;
          sample.recipient = backendData.recipient;
        }

        if (Array.isArray(backendData.chainOfCustody) && backendData.chainOfCustody.length > 0) {
          sample.chainOfCustody = backendData.chainOfCustody.map(h => ({
            time: h.timestamp || "",
            status: h.status,
            action: h.action,
            user: h.performedBy,
            role: h.userRole,
            location: h.location,
            notes: h.notes || ""
          }));
        }
        saveSamplesState();
      }
    }
  } catch (e) {
    console.log("Backend scan check notice:", e.message);
  }

  const resultArea = document.getElementById("scanResultArea");
  if (!resultArea) return;

  if (!sample) {
    resultArea.innerHTML = `
      <div class="scan-result-card error-border">
        <div class="scan-result-header">
          <div><h3 style="color:var(--color-error);margin:0">${icon('alert-circle', 18)} Unknown Sample</h3><span class="muted">No electronic record found</span></div>
          <span class="badge red">NOT FOUND</span>
        </div>
        <p style="font-size:13px;margin:10px 0;">The scanned code <code>${sampleCode}</code> is not registered in SmartLabTrack.</p>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
          <button class="primary" onclick="switchScannerToStage1()">${icon('camera', 14)} Scan Again</button>
          <button class="smallbtn" onclick="closeScanner()">Close</button>
        </div>
      </div>
    `;
    return;
  }

  // Determine allowed next action for current role & current status
  const transition = getPermittedTransition(sample, currentRole);

  resultArea.innerHTML = `
    <div class="scan-result-card ${transition.allowed ? 'success-border' : 'warning-border'}">
      <div class="scan-result-header">
        <div>
          <div style="color:var(--color-success);font-weight:800;font-size:13px;letter-spacing:0.5px;display:flex;align-items:center;gap:6px;">
            ${icon('check-circle', 16, 'icon-success')} SAMPLE IDENTIFIED
          </div>
          <h2 style="font-size:22px;margin:2px 0 0;font-family:monospace;">${sample.id}</h2>
        </div>
        <div>
          ${badge(sample.status)}
        </div>
      </div>

      <div class="section-grid" style="gap:10px;margin-bottom:10px;">
        <div style="background:var(--color-background);padding:8px 12px;border-radius:6px;border:1px solid var(--color-border)">
          <small style="color:var(--color-text-secondary);font-size:11px;display:block">Patient Demographics</small>
          <b>${sample.patient}</b> <small style="color:var(--color-text-secondary)">(${sample.age || 34}y / ${sample.gender || 'Male'})</small>
        </div>
        <div style="background:var(--color-background);padding:8px 12px;border-radius:6px;border:1px solid var(--color-border)">
          <small style="color:var(--color-text-secondary);font-size:11px;display:block">Specimen & Test</small>
          <b>${sample.type}</b> — ${sample.test} (${sample.priority})
        </div>
      </div>

      <div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:10px;display:flex;align-items:center;gap:6px;">
        ${icon('map-pin', 14)} <b>Current Custody Location:</b> <span style="color:var(--color-text-primary)">${sample.location}</span>
      </div>

      <!-- Smart Next Action Box: IMMEDIATELY VISIBLE AT TOP WITHOUT SCROLLING -->
      <div class="scan-action-box" style="margin:8px 0 12px;">
        <div class="scan-action-title">NEXT PERMITTED ACTION FOR ${currentUserRoleTitle.toUpperCase()}</div>
        ${transition.actionHtml}
      </div>

      <!-- Chain of Custody History Preview -->
      <div style="margin-top:10px;">
        <b style="font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:var(--color-text-secondary)">Chain of Custody Trail (${sample.chainOfCustody ? sample.chainOfCustody.length : 0} events)</b>
        <div class="chain-history-list" style="max-height:140px;">
          ${(sample.chainOfCustody || []).slice().reverse().map(h => `
            <div class="chain-item">
              <div style="display:flex;justify-content:space-between;">
                <b>${h.action}</b>
                <span class="muted">${h.time}</span>
              </div>
              <small>Staff: <b>${h.user}</b> (${h.role}) • Location: <b>${h.location}</b></small>
              ${h.notes ? `<small style="font-style:italic">"${h.notes}"</small>` : ""}
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Scanner Switcher Footer -->
      <div class="scanner-stage-switch-bar">
        <button class="smallbtn" onclick="switchScannerToStage1()">
          ${icon('camera', 14)} Scan Another Sample
        </button>
        <button class="smallbtn" onclick="closeScanner()">
          Close
        </button>
      </div>
    </div>
  `;
}

// Logic: Validates transitions according to Role and Status
function getPermittedTransition(sample, role) {
  const s = sample.status;

  // 1. COLLECTOR ROLE
  if (role === "COLLECTOR") {
    if (s === "SCHEDULED") {
      return {
        allowed: true,
        actionHtml: `
          <p style="margin:0 0 10px;font-size:13px">Sample is ready to be collected at the patient's home.</p>
          <div style="display:flex;gap:8px;">
            <button class="primary" onclick="executeScanAction('${sample.id}', 'COLLECT', 'COLLECTED', 'Patient Home', 'Sample collected from patient. Barcode attached.')">
              ${icon('check', 16)} Confirm Collection
            </button>
            <button class="smallbtn" onclick="executeScanAction('${sample.id}', 'RECOLLECTION', 'SCHEDULED', 'Patient Home', 'Recollection requested by collector.')">
              ${icon('alert-triangle', 14)} Request Recollection
            </button>
          </div>
        `
      };
    } else if (s === "COLLECTED") {
      return {
        allowed: true,
        actionHtml: `
          <p style="margin:0 0 10px;font-size:13px">Sample collected. Confirm dispatch for transport to the central laboratory.</p>
          <button class="primary" onclick="executeScanAction('${sample.id}', 'HANDOFF', 'IN_TRANSPORT', 'En route to Central Lab', 'Handoff to transport courier in temperature-controlled bag.')">
            ${icon('truck', 16)} Send for Transport
          </button>
        `
      };
    } else {
      return {
        allowed: false,
        actionHtml: `
          <p style="color:var(--color-text-secondary);font-size:13px;margin:0">
            ${icon('info', 14)} Sample is already <b>${s}</b> and has been handed over to laboratory reception. No collector action needed.
          </p>
        `
      };
    }
  }

  // 2. LAB TECHNICIAN ROLE
  if (role === "LAB_TECHNICIAN") {
    if (s === "COLLECTED" || s === "IN_TRANSPORT") {
      return {
        allowed: true,
        actionHtml: `
          <p style="margin:0 0 10px;font-size:13px">Physical sample arrived at laboratory reception. Verify container seal and accept.</p>
          <button class="primary" onclick="executeScanAction('${sample.id}', 'RECEIVE', 'RECEIVED', 'Central Laboratory Reception', 'Physical specimen received at laboratory reception. Container seal intact.')">
            ${icon('package', 16)} Receive Sample at Lab
          </button>
        `
      };
    } else if (s === "RECEIVED") {
      return {
        allowed: true,
        actionHtml: `
          <p style="margin:0 0 10px;font-size:13px">Sample is in reception. Scan to take it to the analyzer and begin automated testing.</p>
          <button class="primary" onclick="executeScanAction('${sample.id}', 'PROCESS', 'PROCESSING', 'Main Laboratory Analyzer', 'Processing started. Sample centrifuged and assigned to automated analyzer.')">
            ${icon('flask', 16)} Start Processing
          </button>
        `
      };
    } else if (s === "PROCESSING" || s === "TESTING") {
      const defaultVal = sample.test.includes("Blood Count") ? "14.2" : sample.test.includes("Glucose") || sample.test.includes("Sugar") ? "105" : "Normal";
      return {
        allowed: true,
        actionHtml: `
          <p style="margin:0 0 10px;font-size:13px">Testing in progress. Enter quantitative reading below to submit for doctor verification:</p>
          <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px;">
            <input id="scanResultInput" class="search" style="margin:0;width:150px;font-weight:700;" value="${sample.testResult || defaultVal}">
            <b>${sample.testUnit || "g/dL"}</b>
          </div>
          <button class="primary" onclick="submitTestResult('${sample.id}')">
            ${icon('send', 16)} Save & Send for Verification
          </button>
        `
      };
    } else {
      return {
        allowed: false,
        actionHtml: `
          <p style="color:var(--color-text-secondary);font-size:13px;margin:0">
            ${icon('info', 14)} Current status is <b>${s}</b>. Laboratory testing is either pending arrival or already submitted to verifier.
          </p>
        `
      };
    }
  }

  // 3. VERIFIER / DOCTOR ROLE
  if (role === "VERIFIER") {
    if (s === "AWAITING_VERIFICATION" || s === "TESTING" || (s === "PROCESSING" && sample.testResult)) {
      return {
        allowed: true,
        actionHtml: `
          <div style="background:#FFFFFF;border:1px solid var(--color-border);padding:10px;border-radius:6px;margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
              <b>Test:</b> <span>${sample.test}</span>
            </div>
            <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
              <b>Reported Result:</b> <span style="font-size:16px;font-weight:800;color:var(--color-primary)">${sample.testResult || "14.2"} ${sample.testUnit || ""}</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--color-text-secondary)">
              <span>Biological Reference:</span> <span>13.5 – 17.5 ${sample.testUnit || ""}</span>
            </div>
          </div>
          <p style="margin:0 0 10px;font-size:13px">Authorize and sign this laboratory result:</p>
          <button class="primary" onclick="verifySampleResult('${sample.id}')">
            ${icon('shield-check', 16)} Verify Result
          </button>
        `
      };
    } else if (s === "VERIFIED") {
      return {
        allowed: true,
        actionHtml: `
          <div style="background:var(--color-success-light);border:1px solid var(--color-success);padding:10px 12px;border-radius:6px;margin-bottom:10px;">
            <div style="color:var(--color-success);font-weight:800;font-size:13px;display:flex;align-items:center;gap:6px;">
              ${icon('check-circle', 16, 'icon-success')} RESULT VERIFIED BY DOCTOR
            </div>
            <small style="color:var(--color-text-primary);display:block;margin-top:2px;">Verified by: <b>${sample.verifiedBy || currentUserName}</b></small>
          </div>
          <p style="margin:0 0 10px;font-size:13px">Release this verified diagnostic report to the patient portal:</p>
          <button class="primary" style="background-color:var(--color-success);" onclick="releaseReportToPatient('${sample.id}')">
            ${icon('send', 16)} Release Report to Patient
          </button>
        `
      };
    } else if (s === "RELEASED" || s === "COMPLETED") {
      return {
        allowed: true,
        actionHtml: `
          <div style="background:var(--color-success-light);border:1px solid var(--color-success);padding:12px;border-radius:6px;margin-bottom:8px;">
            <div style="color:var(--color-success);font-weight:800;font-size:13px;display:flex;align-items:center;gap:6px;">
              ${icon('check-circle', 16, 'icon-success')} REPORT RELEASED TO PATIENT
            </div>
            <div class="kv" style="margin-top:8px;">
              <div><label>Sample</label><b>${sample.id}</b></div>
              <div><label>Recipient</label><b>${sample.recipient || sample.patient}</b></div>
              <div><label>Verified By</label><b>${sample.verifiedBy || currentUserName}</b></div>
              <div><label>Released At</label><b>${sample.releasedAt || "Today"}</b></div>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:8px;">
            <button class="smallbtn" onclick="openMedicalReport('${sample.id}')">${icon('file-text', 14)} View Report</button>
            <button class="smallbtn" onclick="downloadMedicalReport('${sample.id}')">${icon('download', 14)} Download Report</button>
          </div>
        `
      };
    } else {
      return {
        allowed: false,
        actionHtml: `
          <p style="color:var(--color-text-secondary);font-size:13px;margin:0">
            ${icon('info', 14)} Current status is <b>${s}</b>. Result verification requires the lab technician to record test results first.
          </p>
        `
      };
    }
  }

  // 4. ADMIN ROLE (Monitoring & oversight, NOT clinical report submitter)
  if (role === "ADMIN") {
    let stageActionHtml = "";
    if (s === "SCHEDULED") {
      stageActionHtml = `
        <p style="margin:0 0 10px;font-size:13px">Sample is ready to be collected at the patient's home (Collector Step):</p>
        <div style="display:flex;gap:8px;">
          <button class="primary" onclick="executeScanAction('${sample.id}', 'COLLECT', 'COLLECTED', 'Patient Home', 'Sample collected from patient. Barcode attached.', 'COLLECTOR')">
            ${icon('check', 16)} Confirm Collection
          </button>
          <button class="smallbtn" onclick="executeScanAction('${sample.id}', 'RECOLLECTION', 'SCHEDULED', 'Patient Home', 'Recollection requested by collector.', 'COLLECTOR')">
            ${icon('alert-triangle', 14)} Request Recollection
          </button>
        </div>
      `;
    } else if (s === "COLLECTED") {
      stageActionHtml = `
        <p style="margin:0 0 10px;font-size:13px">Sample collected. Confirm dispatch for transport to central laboratory (Collector Step):</p>
        <button class="primary" onclick="executeScanAction('${sample.id}', 'HANDOFF', 'IN_TRANSPORT', 'En route to Central Lab', 'Handoff to transport courier in temperature-controlled bag.', 'COLLECTOR')">
          ${icon('truck', 16)} Send for Transport
        </button>
      `;
    } else if (s === "IN_TRANSPORT") {
      stageActionHtml = `
        <p style="margin:0 0 10px;font-size:13px">Sample in transit. Verify container seal and accept at lab (Lab Tech Step):</p>
        <button class="primary" onclick="executeScanAction('${sample.id}', 'RECEIVE', 'RECEIVED', 'Central Laboratory Reception', 'Physical specimen received at laboratory reception. Container seal intact.', 'LAB_TECHNICIAN')">
          ${icon('package', 16)} Receive Sample at Lab
        </button>
      `;
    } else if (s === "RECEIVED") {
      stageActionHtml = `
        <p style="margin:0 0 10px;font-size:13px">Sample in reception. Move to analyzer (Lab Tech Step):</p>
        <button class="primary" onclick="executeScanAction('${sample.id}', 'PROCESS', 'PROCESSING', 'Main Laboratory Analyzer', 'Processing started. Sample centrifuged and assigned to automated analyzer.', 'LAB_TECHNICIAN')">
          ${icon('flask', 16)} Start Processing
        </button>
      `;
    } else if (s === "PROCESSING" || s === "TESTING") {
      const defaultVal = sample.test.includes("Blood Count") ? "14.2" : sample.test.includes("Glucose") || sample.test.includes("Sugar") ? "105" : "Normal";
      stageActionHtml = `
        <p style="margin:0 0 10px;font-size:13px">Testing in progress. Enter reading to submit for doctor verification (Lab Tech Step):</p>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px;">
          <input id="scanResultInput" class="search" style="margin:0;width:150px;font-weight:700;" value="${sample.testResult || defaultVal}">
          <b>${sample.testUnit || "g/dL"}</b>
        </div>
        <button class="primary" onclick="submitTestResult('${sample.id}')">
          ${icon('send', 16)} Save & Send for Verification
        </button>
      `;
    } else if (s === "AWAITING_VERIFICATION" || (s === "PROCESSING" && sample.testResult)) {
      stageActionHtml = `
        <div style="background:#FFFFFF;border:1px solid var(--color-border);padding:10px;border-radius:6px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
            <b>Test:</b> <span>${sample.test}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
            <b>Reported Result:</b> <span style="font-size:16px;font-weight:800;color:var(--color-primary)">${sample.testResult || "14.2"} ${sample.testUnit || ""}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--color-text-secondary)">
            <span>Biological Reference:</span> <span>13.5 – 17.5 ${sample.testUnit || ""}</span>
          </div>
        </div>
        <div style="background:var(--color-warning-light);border:1px solid var(--color-warning);padding:8px 10px;border-radius:6px;margin-bottom:10px;font-size:12px;">
          ${icon('shield-alert', 14)} <b>Clinical Verification Reserved:</b> Admin cannot verify clinical results.
        </div>
        <button class="primary" onclick="switchRole('VERIFIER','Dr. Priya Shah','Result Verifier');handleScannedCode('${sample.id}');">
          ${icon('user-check', 14)} Switch to Doctor (Dr. Priya Shah) to Verify
        </button>
      `;
    } else if (s === "VERIFIED") {
      stageActionHtml = `
        <div style="background:var(--color-success-light);border:1px solid var(--color-success);padding:10px 12px;border-radius:6px;margin-bottom:10px;">
          <div style="color:var(--color-success);font-weight:800;font-size:13px;display:flex;align-items:center;gap:6px;">
            ${icon('check-circle', 16, 'icon-success')} RESULT VERIFIED BY DOCTOR
          </div>
          <small style="color:var(--color-text-primary);display:block;margin-top:2px;">Verified by: <b>${sample.verifiedBy || "Dr. Priya Shah"}</b></small>
        </div>
        <div style="background:var(--color-warning-light);border:1px solid var(--color-warning);padding:8px 10px;border-radius:6px;margin-bottom:10px;font-size:12px;">
          ${icon('shield-alert', 14)} <b>Clinical Report Release Reserved:</b> Admin cannot release medical reports.
        </div>
        <button class="primary" style="background-color:var(--color-success);" onclick="switchRole('VERIFIER','Dr. Priya Shah','Result Verifier');handleScannedCode('${sample.id}');">
          ${icon('send', 14)} Switch to Doctor to Release Report
        </button>
      `;
    } else if (s === "RELEASED" || s === "COMPLETED") {
      stageActionHtml = `
        <div style="background:var(--color-success-light);border:1px solid var(--color-success);padding:12px;border-radius:6px;margin-bottom:8px;">
          <div style="color:var(--color-success);font-weight:800;font-size:13px;display:flex;align-items:center;gap:6px;">
            ${icon('check-circle', 16, 'icon-success')} REPORT RELEASED TO PATIENT
          </div>
          <div class="kv" style="margin-top:8px;">
            <div><label>Sample</label><b>${sample.id}</b></div>
            <div><label>Recipient</label><b>${sample.recipient || sample.patient}</b></div>
            <div><label>Verified By</label><b>${sample.verifiedBy || "Dr. Priya Shah"}</b></div>
            <div><label>Released At</label><b>${sample.releasedAt || "Today"}</b></div>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px;">
          <button class="smallbtn" onclick="openMedicalReport('${sample.id}')">${icon('file-text', 14)} View Report</button>
          <button class="smallbtn" onclick="downloadMedicalReport('${sample.id}')">${icon('download', 14)} Download Report</button>
        </div>
      `;
    }

    return {
      allowed: true,
      actionHtml: `
        ${stageActionHtml}
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button class="smallbtn" onclick="viewSample('${sample.id}');closeScanner();">
            ${icon('map-pin', 14)} View Tracking Journey
          </button>
        </div>
      `
    };
  }

  // 5. CUSTOMER ROLE
  if (role === "CUSTOMER") {
    return {
      allowed: true,
      actionHtml: `
        <div style="background:var(--color-primary-light);border:1px solid var(--color-primary);padding:10px 12px;border-radius:6px;margin-bottom:10px;">
          <b style="color:var(--color-primary)">Your Personal Sample</b>
          <div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px;">
            Status: <b>${getCustomerFriendlyStatus(s)}</b>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="primary smallbtn" onclick="showPage('tracking');viewSample('${sample.id}');closeScanner();">
            ${icon('map-pin', 14)} Track Progress
          </button>
          ${s === 'RELEASED' ? `
            <button class="smallbtn" onclick="openMedicalReport('${sample.id}')">
              ${icon('file-text', 14)} View Report
            </button>
          ` : ''}
        </div>
      `
    };
  }

  return {
    allowed: false,
    actionHtml: `<p class="muted">No actions configured for role: ${role}</p>`
  };
}

// Lab Technician Submits Test Result
function submitTestResult(sampleId) {
  const input = document.getElementById("scanResultInput");
  const val = input ? input.value.trim() : "14.2";
  const s = samples.find(x => x.id === sampleId);
  if (s) {
    s.testResult = val;
    executeScanAction(
      sampleId,
      'ENTER_RESULT',
      'AWAITING_VERIFICATION',
      'Testing Room',
      `Test completed. Reading recorded: ${val} ${s.testUnit || ""}. Sent for doctor verification.`,
      'LAB_TECHNICIAN'
    );
  }
}

// Doctor Verifies Result
function verifySampleResult(sampleId) {
  const s = samples.find(x => x.id === sampleId);
  if (!s) return;
  s.verifiedBy = currentUserName;
  s.verifiedAt = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  executeScanAction(
    sampleId,
    'VERIFY_RESULT',
    'VERIFIED',
    'Doctor Desk',
    `Result medically reviewed, validated and authorized by ${currentUserName}`,
    'VERIFIER'
  );
}

// Doctor Releases Verified Report to Patient
function releaseReportToPatient(sampleId) {
  const s = samples.find(x => x.id === sampleId);
  if (!s) return;

  const nowFormatted = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) + ", " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  s.releasedBy = currentUserName;
  s.releasedAt = nowFormatted;
  s.recipient = s.patient;

  executeScanAction(
    sampleId,
    'RELEASE_REPORT',
    'RELEASED',
    'Patient Portal / Delivered',
    `Verified diagnostic medical report released directly to patient (${s.patient}) by ${currentUserName}`,
    'VERIFIER'
  );
}

// Executes state change, logs Chain of Custody entry, synchronizes with backend if online
async function executeScanAction(sampleId, actionName, nextStatus, newLocation, notes, roleOverride) {
  const s = samples.find(x => x.id === sampleId);
  if (!s) return;

  // Determine effective role & actor for backend authorization
  let effectiveRole = roleOverride || currentRole;
  let effectiveUser = currentUserName;

  if (currentRole === "ADMIN" && !roleOverride) {
    if (actionName === "COLLECT" || actionName === "HANDOFF" || actionName === "RECOLLECTION") {
      effectiveRole = "COLLECTOR";
      effectiveUser = "Ravi Kumar";
    } else if (actionName === "RECEIVE" || actionName === "PROCESS" || actionName === "ENTER_RESULT" || actionName === "RESULT_ENTERED" || actionName === "STORE") {
      effectiveRole = "LAB_TECHNICIAN";
      effectiveUser = "Lab Technician";
    } else if (actionName === "VERIFY" || actionName === "VERIFY_RESULT" || actionName === "RELEASE_REPORT") {
      effectiveRole = "VERIFIER";
      effectiveUser = "Dr. Priya Shah";
    }
  }

  // Normalize action name
  if (actionName === "RESULT_ENTERED") {
    actionName = "ENTER_RESULT";
  }

  let updatedData = null;

  // Authoritative Backend Persistence FIRST
  try {
    const res = await fetch(`${API_BASE_URL}/samples/${encodeURIComponent(sampleId)}/scan-action`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Demo-Role": effectiveRole,
        "X-Demo-User": effectiveUser
      },
      body: JSON.stringify({
        action: actionName,
        userRole: effectiveRole,
        userName: effectiveUser,
        location: newLocation,
        notes: notes || "",
        resultValue: s.testResult || null,
        resultUnit: s.testUnit || null
      })
    });

    if (res.ok) {
      backendAvailable = true;
      updatedData = await res.json();
    } else {
      let errMsg = `Transition failed (${res.status})`;
      try {
        const errJson = await res.json();
        if (errJson && errJson.message) errMsg = errJson.message;
      } catch (_) {}
      toast(errMsg);
      console.warn("Backend scan-action rejected:", res.status, errMsg);
      return; // Stop immediately: do not update frontend state when backend rejects
    }
  } catch (netErr) {
    console.warn("Backend communication failure:", netErr.message);
    backendAvailable = false;
    toast("Backend server offline. Please start Spring Boot on port 8080.");
    return;
  }

  // Update frontend model authoritatively from backend response
  if (updatedData) {
    s.status = updatedData.status;
    s.location = updatedData.currentLocation;
    if (updatedData.testResult) s.testResult = updatedData.testResult;
    if (updatedData.testUnit) s.testUnit = updatedData.testUnit;
    if (updatedData.verifiedBy) s.verifiedBy = updatedData.verifiedBy;
    if (updatedData.releasedAt) s.releasedAt = updatedData.releasedAt;
    if (updatedData.releasedBy) s.releasedBy = updatedData.releasedBy;
    if (updatedData.recipient) s.recipient = updatedData.recipient;

    if (Array.isArray(updatedData.chainOfCustody) && updatedData.chainOfCustody.length > 0) {
      s.chainOfCustody = updatedData.chainOfCustody.map(h => ({
        time: h.timestamp || "",
        status: h.status,
        action: h.action,
        user: h.performedBy,
        role: h.userRole,
        location: h.location,
        notes: h.notes || ""
      }));
    }
  }

  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  activityLog.unshift({
    time: nowTime,
    action: `${sampleId} → ${s.status}`,
    id: sampleId,
    user: effectiveUser
  });

  saveSamplesState();
  toast(`${sampleId} updated to ${s.status}`);

  // Refresh scanner result view and active page
  await handleScannedCode(sampleId);
  render();
}

// --- 9. Preserved Core Modules: Samples, Tracking, Tests, Alerts, Storage ---
function samplePage(c) {
  c.innerHTML = `
    <div class="info-strip">
      <span>${icon('test-tube', 16)} <b>QR / Barcode Tracking:</b> Every sample maintains a digital chain of custody from home collection to verified report release.</span>
      <span class="role-pill">${currentRole}</span>
    </div>

    <div class="action-grid" style="margin-bottom:18px">
      <button class="action-tile" onclick="openScanner()">
        <b>${icon('camera', 16)} Scan Sample</b>
        <span>Scan QR/Barcode handoff</span>
      </button>
      <button class="action-tile" onclick="openSample()">
        <b>${icon('plus', 16)} Register Sample</b>
        <span>Create new specimen record</span>
      </button>
      <button class="action-tile" onclick="showPage('labels')">
        <b>${icon('tag', 16)} Demo Labels</b>
        <span>Print physical A4 stickers</span>
      </button>
      <button class="action-tile" onclick="exportCSV()">
        <b>${icon('download', 16)} Export CSV</b>
        <span>Download full dataset</span>
      </button>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h2>Sample Register</h2>
        <div class="actions">
          <button class="primary" onclick="openScanner()">${icon('camera', 14)} Scan Sample</button>
          <button class="smallbtn" onclick="openSample()">+ Register</button>
          <button class="smallbtn" onclick="toast('Sample list refreshed')">${icon('refresh-cw', 12)} Refresh</button>
        </div>
      </div>
      <input class="search" placeholder="Search by Sample ID, Patient, or Test..." oninput="filterTable(this.value, 'sampleTableBody')">
      <table class="table">
        <thead>
          <tr>
            <th>Sample ID</th>
            <th>Patient</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Current Custody Location</th>
            <th>Assigned Test</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="sampleTableBody">
          ${samples.map(s => `
            <tr>
              <td><b style="font-family:monospace">${s.id}</b></td>
              <td>${s.patient}</td>
              <td>${s.type}</td>
              <td>${badge(s.priority)}</td>
              <td>${badge(s.status)}</td>
              <td class="muted">${s.location}</td>
              <td>${s.test}</td>
              <td><b>${s.testResult ? `${s.testResult} ${s.testUnit || ''}` : '<span class="muted">—</span>'}</b></td>
              <td>
                <button class="smallbtn" onclick="viewSample('${s.id}')">Track</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function trackingPage(c) {
  c.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h2>Digital Chain of Custody & Tracking</h2>
        <div>
          <button class="primary" onclick="openScanner()">${icon('camera', 14)} Scan Sample</button>
        </div>
      </div>
      <div class="scanner-input-row" style="margin-bottom:16px;">
        <input id="trackSearch" class="search" style="margin:0;font-family:monospace;" placeholder="Enter Sample ID (e.g. SLT-2026-000001)" onkeydown="if(event.key==='Enter')trackInput()">
        <button class="primary" onclick="trackInput()">Track Journey</button>
      </div>
      <div id="trackResult"></div>
    </div>
  `;
  setTimeout(() => viewSample(samples[0].id), 50);
}

function trackInput() {
  const query = document.getElementById("trackSearch").value || "SLT-2026-000001";
  viewSample(query);
}

function viewSample(id) {
  let s = samples.find(x => x.id.toLowerCase() === id.toLowerCase()) || samples[0];
  showPage("tracking");
  const searchInput = document.getElementById("trackSearch");
  if (searchInput) searchInput.value = s.id;

  const states = ["SCHEDULED", "COLLECTED", "IN_TRANSPORT", "RECEIVED", "PROCESSING", "AWAITING_VERIFICATION", "VERIFIED", "RELEASED", "COMPLETED"];
  let idx = states.indexOf(s.status);
  if (s.status === "TESTING") idx = 4;
  if (s.status === "DELAYED") idx = 3;

  const resContainer = document.getElementById("trackResult");
  if (!resContainer) return;

  resContainer.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <div>
          <h2>${s.id}</h2>
          <span class="muted">${s.patient} • ${s.type} • ${badge(s.priority)}</span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          ${badge(s.status)}
          <button class="primary" onclick="quickScan('${s.id}')">${icon('camera', 14)} Scan Sample</button>
        </div>
      </div>

      <!-- Lifecycle Stepper -->
      <div class="timeline">
        ${["Scheduled", "Collected", "Transport", "Lab Received", "Processing", "Doctor Review", "Verified", "Released"].map((label, i) => {
          let done = i <= idx;
          let cur = (i === idx + 1 && s.status !== "RELEASED" && s.status !== "COMPLETED");
          return `
            <div class="step ${done ? 'done' : ''} ${cur ? 'current' : ''}">
              <div class="dot">${done ? icon('check', 12) : cur ? icon('clock', 12) : ''}</div>
              ${label}
            </div>
          `;
        }).join("")}
      </div>

      <!-- Details & QR Display Card -->
      <div class="section-grid">
        <div class="detail-card">
          <h3>Sample Container & Identification</h3>
          <div style="display:flex;gap:16px;align-items:center;margin-bottom:12px;">
            <div id="detailQrContainer" style="width:110px;height:110px;background:#FFF;padding:4px;border:1px solid var(--color-border);border-radius:6px;display:grid;place-items:center;"></div>
            <div>
              <div style="font-family:monospace;font-size:16px;font-weight:800">${s.id}</div>
              <small class="muted" style="display:block;margin:4px 0">Secure token • No medical history encoded in QR</small>
              <div style="width:180px;height:28px">${generateBarcodeSVG(s.id)}</div>
            </div>
          </div>
          <div class="kv">
            <div><label>Patient</label><b>${s.patient}</b></div>
            <div><label>Specimen Type</label><b>${s.type}</b></div>
            <div><label>Assigned Test</label><b>${s.test}</b></div>
            <div><label>Current Custody</label><b>${s.location}</b></div>
            <div><label>Test Result</label><b>${s.testResult ? `${s.testResult} ${s.testUnit || ""}` : "Pending"}</b></div>
            <div><label>Verified By</label><b>${s.verifiedBy || "Pending Review"}</b></div>
          </div>
        </div>

        <div class="detail-card">
          <h3>Complete Chain of Custody Audit Trail</h3>
          <table class="table">
            <thead><tr><th>Time</th><th>Action</th><th>Staff / Role</th><th>Location</th></tr></thead>
            <tbody>
              ${(s.chainOfCustody || []).slice().reverse().map(h => `
                <tr>
                  <td><b>${h.time}</b></td>
                  <td>${h.action}</td>
                  <td>${h.user} <small class="muted">(${h.role})</small></td>
                  <td class="muted">${h.location}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="export-row" style="margin-top:15px">
        <button class="primary" onclick="quickScan('${s.id}')">${icon('camera', 14)} Scan Sample (${currentRole})</button>
        <button class="smallbtn" onclick="showPage('labels')">${icon('tag', 14)} Print Demo Label</button>
        ${s.status === "RELEASED" ? `
          <button class="smallbtn" onclick="openMedicalReport('${s.id}')">${icon('file-text', 14)} View Released Report</button>
        ` : ''}
      </div>
    </div>
  `;

  setTimeout(() => {
    const box = document.getElementById("detailQrContainer");
    if (box && window.QRCode) {
      box.innerHTML = "";
      new QRCode(box, {
        text: s.id,
        width: 100,
        height: 100,
        colorDark: "#0F172A",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  }, 40);
}

function collections(c) {
  if (currentRole === "CUSTOMER") {
    openBookAppointmentModal();
    return;
  }

  c.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h2>Today's Home Collections Queue</h2>
        <div style="display:flex;gap:8px">
          <button class="primary" onclick="openScanner()">${icon('camera', 14)} Scan Sample</button>
          <button class="outline" onclick="openCollection()">+ New Collection</button>
        </div>
      </div>
      <table class="table">
        <thead><tr><th>Appointment / Sample</th><th>Patient Name</th><th>Collection Address</th><th>Priority</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${samples.filter(s => s.id.startsWith("SLT-") || s.status === "SCHEDULED").map(s => `
            <tr>
              <td><b>${s.id}</b></td>
              <td><b>${s.patient}</b></td>
              <td>Indiranagar / Bellandur, Bengaluru</td>
              <td>${badge(s.priority)}</td>
              <td>${badge(s.status)}</td>
              <td>
                <button class="smallbtn" onclick="quickScan('${s.id}')">
                  ${s.status === "SCHEDULED" ? `${icon('camera', 14)} Collect` : 'Handoff'}
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function patientPage(c) {
  c.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h2>Patient Records</h2>
        <button class="primary" onclick="openPatient()">+ Add Patient</button>
      </div>
      <table class="table">
        <thead><tr><th>ID</th><th>Name</th><th>Age / Gender</th><th>Phone</th><th>Address</th></tr></thead>
        <tbody>
          ${patients.map(p => `
            <tr>
              <td><b>${p.id}</b></td>
              <td>${p.name}</td>
              <td>${p.age}y / ${p.gender}</td>
              <td>${p.phone}</td>
              <td>${p.address}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function testsPage(c) {
  c.innerHTML = `
    <div class="cards">
      <div class="card"><div class="label">Pending Verification</div><div class="metric">${samples.filter(s => s.status === "AWAITING_VERIFICATION").length}</div></div>
      <div class="card"><div class="label">In Processing</div><div class="metric">${samples.filter(s => s.status === "PROCESSING").length}</div></div>
      <div class="card"><div class="label">Verified & Released</div><div class="metric">${samples.filter(s => s.status === "RELEASED").length}</div></div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <h2>Tests & Result Entry Queue</h2>
        <button class="primary" onclick="openScanner()">${icon('camera', 14)} Scan to Enter / Verify</button>
      </div>
      <table class="table">
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Test</th><th>Result</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${samples.map(s => `
            <tr>
              <td><b>${s.id}</b></td>
              <td>${s.patient}</td>
              <td>${s.test}</td>
              <td><b>${s.testResult ? `${s.testResult} ${s.testUnit || ''}` : '<span class="muted">Pending</span>'}</b></td>
              <td>${badge(s.status)}</td>
              <td>
                <button class="smallbtn" onclick="quickScan('${s.id}')">
                  ${s.status === "PROCESSING" ? 'Enter Result' : s.status === "AWAITING_VERIFICATION" ? 'Verify' : 'Review'}
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function alertsPage(c) {
  c.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h2>System Alerts & Discrepancies</h2>
        <button class="smallbtn" onclick="toast('All alerts acknowledged')">Acknowledge All</button>
      </div>
      <div class="alert redbg">
        ${icon('alert-circle', 18, 'icon-error')}
        <div><b>BS202600019 delayed</b><br><span class="muted">Testing exceeded 60 minutes threshold in laboratory.</span></div>
        <button class="smallbtn" onclick="viewSample('BS202600019')">Inspect</button>
      </div>
      <div class="alert">
        ${icon('alert-triangle', 18, 'icon-warning')}
        <div><b>Recollection required — BS202600016</b><br><span class="muted">Insufficient blood volume reported by phlebotomist.</span></div>
        <button class="smallbtn" onclick="toast('Recollection scheduled')">Schedule</button>
      </div>
    </div>
  `;
}

function storagePage(c) {
  c.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h2>Sample Storage (Cold Storage Archive)</h2>
        <button class="primary" onclick="toast('Storage assignment opened')">+ Store Sample</button>
      </div>
      <table class="table">
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Refrigerator</th><th>Rack</th><th>Position</th><th>Status</th></tr></thead>
        <tbody>
          ${samples.filter(s => s.status === "COMPLETED" || s.status === "RELEASED").map(s => `
            <tr>
              <td><b>${s.id}</b></td>
              <td>${s.patient}</td>
              <td>R01</td>
              <td>Rack B</td>
              <td>Slot 14</td>
              <td>${badge(s.status)}</td>
            </tr>
          `).join("")}
          <tr><td>BS202600018</td><td>Meera Shah</td><td>R01</td><td>Rack B</td><td>Slot 08</td><td>${badge("RELEASED")}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function reportsPage(c) {
  c.innerHTML = `
    <div class="cards">
      <div class="card"><div class="label">Average TAT</div><div class="metric">2h 14m</div></div>
      <div class="card"><div class="label">Scan Success Rate</div><div class="metric">99.8%</div></div>
      <div class="card"><div class="label">Reports Released</div><div class="metric">${samples.filter(s => s.status === "RELEASED").length}</div></div>
    </div>
    <div class="section-grid">
      ${["Home Collection Audit", "Verification Log", "Digital Chain of Custody Report", "Turnaround Time Analytics"].map(x => `
        <div class="panel">
          <div class="panel-head">
            <h2>${x}</h2>
            <button class="smallbtn" onclick="toast('${x} generated')">Generate</button>
          </div>
          <p class="muted">Laboratory accreditation and quality management report.</p>
          <div class="actions">
            <button class="smallbtn" onclick="toast('Preview opened')">Preview</button>
            <button class="smallbtn" onclick="exportCSV()">Export CSV</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// --- 10. Modals & Helpers ---
function openPatient() {
  document.getElementById("modalTitle").textContent = "Add Patient";
  document.getElementById("modalBody").innerHTML = `
    <div class="form">
      <div class="field full"><label>Patient Name</label><input placeholder="Enter full name"></div>
      <div class="field"><label>Age</label><input type="number" placeholder="Age"></div>
      <div class="field"><label>Gender</label><select><option>Male</option><option>Female</option><option>Other</option></select></div>
      <div class="field"><label>Phone</label><input placeholder="Phone number"></div>
      <div class="field"><label>Doctor</label><input placeholder="Doctor name"></div>
      <div class="field full"><label>Home Address</label><textarea placeholder="Patient collection address"></textarea></div>
      <div class="form-actions"><button class="primary" onclick="saveModal('Patient added successfully')">Save Patient</button></div>
    </div>
  `;
  openModal();
}

function openCollection() {
  document.getElementById("modalTitle").textContent = "New Home Collection";
  document.getElementById("modalBody").innerHTML = `
    <div class="form">
      <div class="field full"><label>Patient</label><select>${patients.map(p => `<option>${p.name}</option>`).join("")}</select></div>
      <div class="field full"><label>Home Address</label><input value="Indiranagar, Bengaluru"></div>
      <div class="field"><label>Sample Type</label><select><option>Blood</option><option>Urine</option></select></div>
      <div class="field"><label>Priority</label><select><option>NORMAL</option><option>URGENT</option><option>STAT</option></select></div>
      <div class="field"><label>Collector</label><select><option>Ravi Kumar</option><option>Sneha Patil</option></select></div>
      <div class="field"><label>Collection Time</label><input type="time" value="09:00"></div>
      <div class="form-actions"><button class="primary" onclick="saveModal('Home collection request created')">Create Collection</button></div>
    </div>
  `;
  openModal();
}

function openSample() {
  const nextId = "SLT-2026-00000" + (samples.length + 1);
  document.getElementById("modalTitle").textContent = "Register Sample";
  document.getElementById("modalBody").innerHTML = `
    <div class="form">
      <div class="field full"><label>Generated Sample ID (QR Value)</label><input value="${nextId}" readonly style="font-family:monospace;background:var(--color-background)"></div>
      <div class="field full"><label>Patient</label><select id="regPatient">${patients.map(p => `<option value="${p.id}">${p.name}</option>`).join("")}</select></div>
      <div class="field"><label>Sample Type</label><select id="regType"><option>Blood</option><option>Urine</option></select></div>
      <div class="field"><label>Priority</label><select id="regPriority"><option>NORMAL</option><option>URGENT</option><option>STAT</option></select></div>
      <div class="field full"><label>Assigned Test</label><input id="regTest" value="Complete Blood Count (CBC)"></div>
      <div class="form-actions"><button class="primary" onclick="createNewSample('${nextId}')">Register & Generate QR</button></div>
    </div>
  `;
  openModal();
}

function createNewSample(newId) {
  const pSelect = document.getElementById("regPatient");
  const pObj = patients.find(x => x.id === pSelect.value) || patients[0];
  const type = document.getElementById("regType").value;
  const priority = document.getElementById("regPriority").value;
  const testName = document.getElementById("regTest").value;

  const newSample = {
    id: newId,
    patient: pObj.name,
    patientId: pObj.id,
    age: pObj.age,
    gender: pObj.gender,
    type: type,
    priority: priority,
    status: "SCHEDULED",
    location: "Patient Home",
    time: "Just now",
    test: testName,
    testResult: null,
    testUnit: "Standard",
    collector: "Ravi Kumar",
    qrToken: newId,
    barcodeValue: newId,
    verifiedBy: null,
    verifiedAt: null,
    releasedBy: null,
    releasedAt: null,
    recipient: null,
    chainOfCustody: [
      { time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), status: "SCHEDULED", action: "Sample Registered", user: currentUserName, role: currentRole, location: "Patient Home", notes: "QR code generated" }
    ]
  };

  samples.unshift(newSample);
  saveSamplesState();
  closeModal();
  toast(`Sample ${newId} registered`);
  showPage("samples");
}

function openModal() { document.getElementById("modal").classList.add("show"); }
function closeModal() { document.getElementById("modal").classList.remove("show"); }
function saveModal(msg) { closeModal(); toast(msg); }

function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}

function filterTable(q, id) {
  q = q.toLowerCase();
  document.querySelectorAll("#" + id + " tr").forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(q) ? "" : "none";
  });
}

function login() {
  const u = document.getElementById("loginUser").value.trim();
  const p = document.getElementById("loginPass").value;
  if (u === "admin" && p === "admin123") {
    document.getElementById("loginScreen").style.display = "none";
=======
const samples=[
{id:"BS202600021",patient:"Rahul Kumar",type:"Blood",priority:"URGENT",status:"TESTING",location:"Laboratory",time:"09:18 AM",test:"CBC"},
{id:"BS202600020",patient:"Ananya Rao",type:"Blood",priority:"NORMAL",status:"RECEIVED",location:"Lab Reception",time:"10:05 AM",test:"Blood Glucose"},
{id:"BS202600019",patient:"Vikram Singh",type:"Blood",priority:"STAT",status:"DELAYED",location:"Laboratory",time:"08:40 AM",test:"Lipid Profile"},
{id:"BS202600018",patient:"Meera Shah",type:"Blood",priority:"NORMAL",status:"COMPLETED",location:"Laboratory",time:"08:10 AM",test:"Hemoglobin"},
{id:"BS202600017",patient:"Arjun Nair",type:"Blood",priority:"URGENT",status:"IN_TRANSPORT",location:"On the way to Lab",time:"10:32 AM",test:"Blood Group"}
];
const patients=[
{id:"P001",name:"Rahul Kumar",age:32,gender:"Male",phone:"9876543210",address:"Indiranagar, Bengaluru"},
{id:"P002",name:"Ananya Rao",age:27,gender:"Female",phone:"9876501234",address:"HSR Layout, Bengaluru"},
{id:"P003",name:"Vikram Singh",age:45,gender:"Male",phone:"9988776655",address:"Koramangala, Bengaluru"},
{id:"P004",name:"Meera Shah",age:39,gender:"Female",phone:"9900112233",address:"Jayanagar, Bengaluru"}
];
let page="dashboard";

let currentRole="ADMIN";
let activityLog=[
 {time:"10:55 AM",action:"Sample status changed",id:"BS202600021",user:"Ravi Kumar"},
 {time:"10:05 AM",action:"Sample received",id:"BS202600020",user:"Lab Technician"},
 {time:"09:25 AM",action:"Sample sent to transport",id:"BS202600017",user:"Ravi Kumar"}
];
const titles={dashboard:["Dashboard","Overview of today's laboratory workflow"],collections:["Home Collections","Manage blood collection requests at patient homes"],patients:["Patients","Patient registration and records"],samples:["Samples","All registered blood samples"],tracking:["Sample Tracking","Follow a sample from home to laboratory completion"],tests:["Tests & Results","Laboratory test assignments and result verification"],alerts:["Alerts","Samples requiring attention"],storage:["Storage","Sample storage locations"],reports:["Reports","Operational laboratory reports"]};
document.getElementById("today").textContent=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
document.querySelectorAll(".nav").forEach(b=>b.onclick=()=>showPage(b.dataset.page));
function showPage(p){page=p;document.querySelectorAll(".nav").forEach(b=>b.classList.toggle("active",b.dataset.page===p));document.getElementById("pageTitle").textContent=titles[p][0];document.getElementById("pageSub").textContent=titles[p][1];render();}
function badge(s){let c=s==="COMPLETED"||s==="ACCEPTED"||s==="VERIFIED"?"green":s==="DELAYED"||s==="REJECTED"?"red":s==="URGENT"||s==="STAT"?"orange":s==="IN_TRANSPORT"?"blue":"gray";return `<span class="badge ${c}">${s.replaceAll("_"," ")}</span>`}
function render(){
  const c=document.getElementById("content");
  try{
    if(page==="dashboard") dashboard(c);
    else if(page==="collections") collections(c);
    else if(page==="patients") patientPage(c);
    else if(page==="samples") samplePage(c);
    else if(page==="tracking") trackingPage(c);
    else if(page==="tests") testsPage(c);
    else if(page==="alerts") alertsPage(c);
    else if(page==="storage") storagePage(c);
    else if(page==="reports") reportsPage(c);
        else dashboard(c);
  }catch(err){
    c.innerHTML='<div class="panel"><h2>Page could not be loaded</h2><p class="muted">'+err.message+'</p><button class="primary" onclick="showPage(\'dashboard\')">Return to Dashboard</button></div>';
    console.error(err);
  }
}
function dashboard(c){c.innerHTML=`
<div class="cards">
<div class="card"><div class="label">Total Samples</div><div class="metric">128</div><div class="note">+8 today</div><div class="mini-progress"><span style="width:78%"></span></div></div>
<div class="card"><div class="label">Home Collections</div><div class="metric">12</div><div class="note">3 scheduled next</div><div class="mini-progress"><span style="width:62%"></span></div></div>
<div class="card"><div class="label">In Transport</div><div class="metric">4</div><div class="note">On the way to lab</div><div class="mini-progress"><span style="width:35%"></span></div></div>
<div class="card"><div class="label">Delayed</div><div class="metric">2</div><div class="note">Needs attention</div><div class="mini-progress"><span style="width:18%"></span></div></div>
<div class="card"><div class="label">Completed</div><div class="metric">95</div><div class="note">This week</div><div class="mini-progress"><span style="width:88%"></span></div></div>
</div>
<div class="panel"><div class="panel-head"><h2>Today's Sample Journey</h2><span class="muted">Home → Laboratory</span></div>
<div class="timeline"><div class="step done"><div class="dot">✓</div>Home Collection</div><div class="step done"><div class="dot">✓</div>Collected</div><div class="step current"><div class="dot">●</div>Transport</div><div class="step"><div class="dot">○</div>Lab Received</div><div class="step"><div class="dot">○</div>Testing</div><div class="step"><div class="dot">○</div>Verification</div></div></div>
<div class="grid2">
<div class="panel"><div class="panel-head"><h2>Recent Samples</h2><button class="smallbtn" onclick="showPage('samples')">View all</button></div>
<table class="table"><thead><tr><th>Sample ID</th><th>Patient</th><th>Priority</th><th>Status</th><th></th></tr></thead><tbody>
${samples.map(s=>`<tr><td><b>${s.id}</b></td><td>${s.patient}</td><td>${badge(s.priority)}</td><td>${badge(s.status)}</td><td><button class="smallbtn" onclick="viewSample('${s.id}')">View</button></td></tr>`).join("")}
</tbody></table></div>
<div class="panel"><div class="panel-head"><h2>Needs Attention</h2><span class="badge red">2</span></div>
<div class="alert redbg">🔴 <div><b>BS202600019 delayed</b><br><span class="muted">Testing exceeded 60 minutes.</span></div></div>
<div class="alert">⚠️ <div><b>Recollection required</b><br><span class="muted">Insufficient volume — BS202600016.</span></div></div>
<button class="smallbtn" onclick="showPage('alerts')">View all alerts →</button></div></div>`;
}
function collections(c){c.innerHTML=`<div class="panel"><div class="panel-head"><h2>Today's Home Collections</h2><button class="primary" onclick="openCollection()">+ New Collection</button></div>
<input class="search" placeholder="Search patient or collection ID..." oninput="filterTable(this.value,'collectionRows')">
<table class="table"><thead><tr><th>Patient</th><th>Address</th><th>Collector</th><th>Time</th><th>Priority</th><th>Status</th><th></th></tr></thead><tbody id="collectionRows">
${patients.slice(0,4).map((p,i)=>`<tr><td><b>${p.name}</b><br><span class="muted">HC202600${10+i}</span></td><td>${p.address}</td><td>${["Ravi Kumar","Sneha Patil","Ravi Kumar","Amit Joshi"][i]}</td><td>${["09:00 AM","09:30 AM","10:00 AM","11:00 AM"][i]}</td><td>${badge(i===2?"URGENT":"NORMAL")}</td><td>${badge(i===0?"COLLECTED":i===1?"IN_TRANSPORT":"SCHEDULED")}</td><td><button class="smallbtn" onclick="toast('Collection opened')">Open</button></td></tr>`).join("")}
</tbody></table></div>
<div class="panel"><h2>Collection workflow</h2><div class="timeline"><div class="step done"><div class="dot">✓</div>Home Visit</div><div class="step done"><div class="dot">✓</div>Collected</div><div class="step current"><div class="dot">●</div>Transport</div><div class="step"><div class="dot">○</div>Lab Received</div><div class="step"><div class="dot">○</div>Testing</div></div></div>`}
function patientPage(c){c.innerHTML=`<div class="panel"><div class="panel-head"><h2>Patient Records</h2><button class="primary" onclick="openPatient()">+ Add Patient</button></div><input class="search" placeholder="Search patients..." oninput="filterTable(this.value,'patientRows')"><table class="table"><thead><tr><th>ID</th><th>Patient</th><th>Age</th><th>Gender</th><th>Phone</th><th>Home Address</th><th></th></tr></thead><tbody id="patientRows">${patients.map(p=>`<tr><td>${p.id}</td><td><b>${p.name}</b></td><td>${p.age}</td><td>${p.gender}</td><td>${p.phone}</td><td>${p.address}</td><td><button class="smallbtn" onclick="toast('Patient record opened')">View</button></td></tr>`).join("")}</tbody></table></div>`}

const adminDashboard = dashboard;
dashboard = function(c){
  if(currentRole==="COLLECTOR"){collectorDashboard(c);return}
  if(currentRole==="LAB_TECHNICIAN"){labDashboard(c);return}
  if(currentRole==="VERIFIER"){verifierDashboard(c);return}
  adminDashboard(c);
};

function roleHeader(role, title, text){
 return `<div class="role-banner"><div><span class="role-pill">${role}</span><h2>${title}</h2><p>${text}</p></div><button class="smallbtn" onclick="showPage('settings')">⚙ Role Settings</button></div>`;
}
function collectorDashboard(c){
 c.innerHTML=roleHeader("COLLECTOR","Collector Dashboard","Today's assigned home collections and samples waiting for pickup.")+
 `<div class="cards"><div class="card"><div class="label">Assigned Visits</div><div class="metric">6</div><div class="note">2 urgent</div></div><div class="card"><div class="label">Collected</div><div class="metric">3</div><div class="note">Today</div></div><div class="card"><div class="label">Pending</div><div class="metric">3</div><div class="note">Upcoming visits</div></div><div class="card"><div class="label">In Transport</div><div class="metric">2</div><div class="note">On the way to lab</div></div><div class="card"><div class="label">Recollection</div><div class="metric">1</div><div class="note">Needs another visit</div></div></div>
 <div class="panel"><div class="panel-head"><h2>Today's Collection Queue</h2><button class="primary" onclick="openCollection()">+ New Collection</button></div>
 <table class="table"><tr><th>Time</th><th>Patient</th><th>Address</th><th>Priority</th><th>Status</th><th>Action</th></tr>
 ${patients.map((p,i)=>`<tr><td>${["09:00 AM","09:30 AM","10:00 AM","11:00 AM"][i]}</td><td><b>${p.name}</b></td><td>${p.address}</td><td>${badge(i===2?"URGENT":"NORMAL")}</td><td>${badge(i<1?"COLLECTED":"SCHEDULED")}</td><td><button class="smallbtn" onclick="toast('Collection marked as ${i<1?"collected":"ready for pickup"}')">${i<1?"View":"Start"}</button></td></tr>`).join("")}</table></div>`;
}
function labDashboard(c){
 c.innerHTML=roleHeader("LAB TECHNICIAN","Lab Technician Dashboard","Samples received at the laboratory and tests waiting to be processed.")+
 `<div class="cards"><div class="card"><div class="label">Lab Received</div><div class="metric">8</div><div class="note">Today</div></div><div class="card"><div class="label">Processing</div><div class="metric">4</div><div class="note">In progress</div></div><div class="card"><div class="label">Testing</div><div class="metric">5</div><div class="note">Assigned tests</div></div><div class="card"><div class="label">Urgent</div><div class="metric">2</div><div class="note">Priority samples</div></div><div class="card"><div class="label">Pending Results</div><div class="metric">3</div><div class="note">Need entry</div></div></div>
 <div class="panel"><div class="panel-head"><h2>Testing Queue</h2><button class="primary" onclick="showPage('tests')">Open Tests</button></div>
 <table class="table"><tr><th>Sample</th><th>Patient</th><th>Test</th><th>Priority</th><th>Status</th><th>Action</th></tr>
 ${samples.map(s=>`<tr><td><b>${s.id}</b></td><td>${s.patient}</td><td>${s.test}</td><td>${badge(s.priority)}</td><td>${badge(s.status)}</td><td><button class="smallbtn" onclick="showPage('tests')">Process</button></td></tr>`).join("")}</table></div>`;
}
function verifierDashboard(c){
 c.innerHTML=roleHeader("VERIFIER","Verifier Dashboard","Review completed test results before they are released.")+
 `<div class="cards"><div class="card"><div class="label">Awaiting Verification</div><div class="metric">5</div><div class="note">Requires review</div></div><div class="card"><div class="label">Verified Today</div><div class="metric">18</div><div class="note">Results released</div></div><div class="card"><div class="label">Flagged</div><div class="metric">2</div><div class="note">Needs attention</div></div><div class="card"><div class="label">Urgent</div><div class="metric">1</div><div class="note">Priority review</div></div><div class="card"><div class="label">Avg Review</div><div class="metric">7m</div><div class="note">Today</div></div></div>
 <div class="panel"><div class="panel-head"><h2>Results Awaiting Verification</h2><button class="primary" onclick="showPage('tests')">Open Results</button></div>
 <table class="table"><tr><th>Sample</th><th>Patient</th><th>Test</th><th>Result</th><th></th></tr>
 <tr><td><b>BS202600021</b></td><td>Rahul Kumar</td><td>CBC</td><td>13.8 g/dL</td><td><button class="smallbtn" onclick="verifyResult('BS202600021')">✓ Verify</button></td></tr>
 <tr><td><b>BS202600020</b></td><td>Ananya Rao</td><td>Blood Glucose</td><td>98 mg/dL</td><td><button class="smallbtn" onclick="toast('Verification opened')">Review</button></td></tr></table></div>`;
}

function samplePage(c){c.innerHTML=`<div class="info-strip"><span>🩸 <b>Sample tracking starts at the patient's home.</b> Every sample keeps one digital history.</span><span class="role-pill">${currentRole}</span></div>
<div class="action-grid" style="margin-bottom:18px">
<button class="action-tile" onclick="openSample()"><b>＋ Register Sample</b><span>Create a new sample ID</span></button>
<button class="action-tile" onclick="showPage('tracking')"><b>⌕ Track Sample</b><span>View complete journey</span></button>
<button class="action-tile" onclick="showPage('alerts')"><b>⚠ Review Alerts</b><span>Delays & rejections</span></button>
<button class="action-tile" onclick="exportCSV()"><b>⇩ Export CSV</b><span>Download sample list</span></button>
</div>
<div class="panel"><div class="panel-head"><h2>Sample Register</h2><div class="actions"><button class="smallbtn" onclick="toast('Sample list refreshed')">↻ Refresh</button><button class="primary" onclick="openSample()">+ Register Sample</button></div></div>
<input class="search" placeholder="Search Sample ID or patient..." oninput="filterTable(this.value,'sampleRows')">
<table class="table"><thead><tr><th>Sample ID</th><th>Patient</th><th>Priority</th><th>Location</th><th>Status</th><th>Quick Action</th></tr></thead><tbody id="sampleRows">
${samples.map(s=>`<tr><td><b>${s.id}</b><br><span class="muted">${s.time}</span></td><td>${s.patient}</td><td>${badge(s.priority)}</td><td>${s.location}</td><td>${badge(s.status)}</td><td><div class="table-actions"><button class="smallbtn" onclick="viewSample('${s.id}')">Track</button><button class="smallbtn" onclick="advanceSample('${s.id}')">Advance</button><button class="smallbtn" onclick="rejectSample('${s.id}')">Reject</button></div></td></tr>`).join("")}
</tbody></table></div>`}
function trackingPage(c){c.innerHTML=`<div class="panel"><div class="panel-head"><div><h2>Track a Sample</h2><p class="muted">Search by Sample ID and manage its lifecycle.</p></div><button class="smallbtn" onclick="showPage('samples')">← Sample Register</button></div>
<div class="actions"><input id="trackSearch" class="search" style="margin:0;max-width:420px" placeholder="Example: BS202600021"><button class="primary" onclick="trackInput()">Track Sample</button></div></div><div id="trackResult"></div>`}
function trackInput(){viewSample(document.getElementById("trackSearch").value||"BS202600021")}
function viewSample(id){
 let s=samples.find(x=>x.id===id)||samples[0]; showPage("tracking"); document.getElementById("trackSearch").value=s.id;
 const states=["COLLECTED","IN_TRANSPORT","RECEIVED","PROCESSING","TESTING","VERIFICATION","COMPLETED"]; let idx=states.indexOf(s.status); if(s.status==="DELAYED")idx=4;
 document.getElementById("trackResult").innerHTML=`<div class="panel"><div class="panel-head"><div><h2>${s.id}</h2><span class="muted">${s.patient} • ${s.type} • ${badge(s.priority)}</span></div>${badge(s.status)}</div>
 <div class="timeline">${["Home Collection","Collected","In Transport","Lab Received","Processing","Testing","Verification","Completed"].map((x,i)=>{let d=i<=idx;let cur=(i===idx+1&&s.status!=="COMPLETED");return `<div class="step ${d?"done":""} ${cur?"current":""}"><div class="dot">${d?"✓":cur?"●":"○"}</div>${x}</div>`}).join("")}</div>
 <div class="section-grid"><div class="detail-card"><h3>Sample Information</h3><div class="kv">
 <div><label>Patient</label><b>${s.patient}</b></div><div><label>Sample Type</label><b>${s.type}</b></div><div><label>Collection Location</label><b>Patient Home</b></div><div><label>Collector</label><b>Ravi Kumar</b></div><div><label>Current Location</label><b>${s.location}</b></div><div><label>Assigned Test</label><b>${s.test}</b></div>
 </div></div><div class="detail-card"><h3>Tracking History</h3><table class="table"><tr><td>09:18</td><td>Home → Collected</td></tr><tr><td>09:25</td><td>Collected → In Transport</td></tr><tr><td>10:05</td><td>Transport → Lab Received</td></tr><tr><td>10:20</td><td>Received → Processing</td></tr><tr><td>10:55</td><td>Processing → Testing</td></tr></table></div></div>
 <div class="export-row" style="margin-top:15px"><button class="smallbtn" onclick="advanceSample('${s.id}')">Advance Status</button><button class="smallbtn" onclick="receiveSample('${s.id}')">Mark Received</button><button class="smallbtn" onclick="rejectSample('${s.id}')">Reject</button><button class="smallbtn" onclick="recollect('${s.id}')">Recollection</button><button class="smallbtn" onclick="printPage()">Print</button></div>
 ${s.status==="DELAYED"?'<div class="alert redbg">🔴 <div><b>Delay detected</b><br><span class="muted">Testing exceeded the configured 60 minute threshold.</span></div></div>':''}</div>`
}
function testsPage(c){c.innerHTML=`<div class="grid2"><div class="panel"><div class="panel-head"><h2>Pending Verification</h2><span class="badge orange">1</span></div>
<table class="table"><tr><th>Sample</th><th>Test</th><th>Result</th><th></th></tr><tr><td>BS202600021</td><td>CBC</td><td>13.8 g/dL</td><td><button class="smallbtn" onclick="verifyResult('BS202600021')">Verify</button></td></tr></table></div>
<div class="panel"><div class="panel-head"><h2>Test Catalog</h2><button class="primary" onclick="toast('Test form opened')">+ Add Test</button></div>
<table class="table">${["CBC","Blood Glucose","Lipid Profile","Hemoglobin","Blood Group"].map(x=>`<tr><td><b>${x}</b></td><td>Routine blood test</td><td><button class="smallbtn" onclick="toast('${x} assigned')">Assign</button></td></tr>`).join("")}</table></div></div>
<div class="panel"><div class="panel-head"><h2>Result Entry</h2><span class="muted">Demo form</span></div><div class="form"><div class="field"><label>Sample ID</label><input value="BS202600021"></div><div class="field"><label>Test</label><select><option>CBC</option><option>Blood Glucose</option><option>Lipid Profile</option></select></div><div class="field"><label>Result</label><input value="13.8"></div><div class="field"><label>Unit</label><input value="g/dL"></div><div class="field full"><label>Remarks</label><textarea placeholder="Optional remarks"></textarea></div><div class="form-actions"><button class="primary" onclick="toast('Result saved and sent for verification')">Save Result</button></div></div></div>`}
function alertsPage(c){c.innerHTML=`<div class="panel"><div class="panel-head"><h2>Active Alerts</h2><div class="actions"><button class="smallbtn" onclick="toast('Alerts refreshed')">↻ Refresh</button><button class="smallbtn" onclick="toast('All visible alerts acknowledged')">✓ Acknowledge All</button></div></div>
<div class="alert redbg">🔴 <div><b>BS202600019 — Delayed Sample</b><br><span class="muted">Testing time exceeded configured threshold.</span></div><button class="smallbtn" onclick="viewSample('BS202600019')">View</button></div>
<div class="alert">⚠️ <div><b>Recollection Required — BS202600016</b><br><span class="muted">Reason: Insufficient volume.</span></div><button class="smallbtn" onclick="recollect('BS202600016')">Request</button></div>
<div class="alert">🔵 <div><b>Result Awaiting Verification — BS202600021</b><br><span class="muted">CBC result entered by technician.</span></div><button class="smallbtn" onclick="showPage('tests')">Review</button></div>
<div class="alert">🟠 <div><b>Urgent Sample — BS202600017</b><br><span class="muted">Sample is currently in transport.</span></div><button class="smallbtn" onclick="viewSample('BS202600017')">Track</button></div></div>
<div class="panel"><div class="panel-head"><h2>Recent Activity</h2><span class="muted">Audit-style demo history</span></div><table class="table"><tr><th>Time</th><th>Action</th><th>Sample</th><th>User</th></tr>${activityLog.map(a=>`<tr><td>${a.time}</td><td>${a.action}</td><td>${a.id}</td><td>${a.user}</td></tr>`).join("")}</table></div>`}

function storagePage(c){c.innerHTML=`<div class="panel"><div class="panel-head"><h2>Sample Storage</h2><button class="primary" onclick="toast('Storage assignment opened')">+ Store Sample</button></div><table class="table"><thead><tr><th>Sample ID</th><th>Patient</th><th>Refrigerator</th><th>Rack</th><th>Position</th><th>Stored At</th></tr></thead><tbody>${samples.filter(s=>s.status==="COMPLETED").map(s=>`<tr><td>${s.id}</td><td>${s.patient}</td><td>R01</td><td>A</td><td>14</td><td>Today, 11:20 AM</td></tr>`).join("")}<tr><td>BS202600015</td><td>Priya N</td><td>R01</td><td>B</td><td>08</td><td>Yesterday, 04:12 PM</td></tr></tbody></table></div>`}
function reportsPage(c){c.innerHTML=`<div class="cards"><div class="card"><div class="label">Average TAT</div><div class="metric">2h 14m</div></div><div class="card"><div class="label">Rejection Rate</div><div class="metric">1.9%</div></div><div class="card"><div class="label">Completed Tests</div><div class="metric">95</div></div></div><div class="section-grid">${["Home Collection Report","Pending Samples","Rejected Samples","Turnaround Time"].map(x=>`<div class="panel"><div class="panel-head"><h2>${x}</h2><button class="smallbtn" onclick="toast('${x} generated')">Generate</button></div><p class="muted">Simple operational report for laboratory workflow monitoring.</p><div class="actions"><button class="smallbtn" onclick="toast('Preview opened')">Preview</button><button class="smallbtn" onclick="toast('CSV export prepared')">Export CSV</button></div></div>`).join("")}</div>`}
function openPatient(){document.getElementById("modalTitle").textContent="Add Patient";document.getElementById("modalBody").innerHTML=`<div class="form"><div class="field full"><label>Patient Name</label><input placeholder="Enter full name"></div><div class="field"><label>Age</label><input type="number" placeholder="Age"></div><div class="field"><label>Gender</label><select><option>Male</option><option>Female</option><option>Other</option></select></div><div class="field"><label>Phone</label><input placeholder="Phone number"></div><div class="field"><label>Doctor</label><input placeholder="Doctor name"></div><div class="field full"><label>Home Address</label><textarea placeholder="Patient collection address"></textarea></div><div class="form-actions"><button class="primary" onclick="saveModal('Patient added successfully')">Save Patient</button></div></div>`;openModal()}
function openCollection(){document.getElementById("modalTitle").textContent="New Home Collection";document.getElementById("modalBody").innerHTML=`<div class="form"><div class="field full"><label>Patient</label><select>${patients.map(p=>`<option>${p.name}</option>`).join("")}</select></div><div class="field full"><label>Home Address</label><input value="Indiranagar, Bengaluru"></div><div class="field"><label>Sample Type</label><select><option>Blood</option></select></div><div class="field"><label>Priority</label><select><option>NORMAL</option><option>URGENT</option><option>STAT</option></select></div><div class="field"><label>Collector</label><select><option>Ravi Kumar</option><option>Sneha Patil</option></select></div><div class="field"><label>Collection Time</label><input type="time" value="09:00"></div><div class="form-actions"><button class="primary" onclick="saveModal('Home collection created successfully')">Create Collection</button></div></div>`;openModal()}
function openSample(){document.getElementById("modalTitle").textContent="Register Sample";document.getElementById("modalBody").innerHTML=`<div class="form"><div class="field full"><label>Patient</label><select>${patients.map(p=>`<option>${p.name}</option>`).join("")}</select></div><div class="field"><label>Sample Type</label><select><option>Blood</option></select></div><div class="field"><label>Priority</label><select><option>NORMAL</option><option>URGENT</option><option>STAT</option></select></div><div class="field"><label>Collection Location</label><input value="Patient Home"></div><div class="field"><label>Collector</label><input value="Ravi Kumar"></div><div class="form-actions"><button class="primary" onclick="saveModal('Sample BS202600022 created')">Register Sample</button></div></div>`;openModal()}
function openModal(){document.getElementById("modal").classList.add("show")}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function saveModal(msg){closeModal();toast(msg)}
function toast(msg){let t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.appendChild(t)}t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function filterTable(q,id){q=q.toLowerCase();document.querySelectorAll("#"+id+" tr").forEach(r=>r.style.display=r.textContent.toLowerCase().includes(q)?"":"none")}
render();
function login(){
  const u=document.getElementById("loginUser").value.trim();
  const p=document.getElementById("loginPass").value;
  if(u==="admin" && p==="admin123"){
    document.getElementById("loginScreen").style.display="none";
>>>>>>> fda16b2306074309a0a55a30c178699da46c6189
    toast("Welcome to SmartLabTrack");
  } else toast("Invalid demo credentials");
}

<<<<<<< HEAD
function logout() {
  document.getElementById("loginScreen").style.display = "flex";
  toast("You have been logged out");
}

function toggleNotifications() {
  document.getElementById("notificationDrawer").classList.toggle("show");
}

function globalSearch() {
  const q = document.getElementById("globalSearch").value.trim().toLowerCase();
  if (!q) return;
  const hit = samples.find(s => s.id.toLowerCase() === q || s.patient.toLowerCase().includes(q));
  if (hit) {
    viewSample(hit.id);
    toast("Opened " + hit.id);
  } else {
    showPage("samples");
    toast("No exact match — opened Sample Register");
  }
}

function exportCSV() {
  const rows = [["Sample ID", "Patient", "Type", "Priority", "Status", "Location", "Assigned Test", "Result", "Verified By", "Released At"]];
  samples.forEach(s => rows.push([s.id, s.patient, s.type, s.priority, s.status, s.location, s.test, s.testResult || "", s.verifiedBy || "", s.releasedAt || ""]));
  const csv = rows.map(r => r.map(v => '"' + String(v).replaceAll('"', '""') + '"').join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "smartlabtrack-chain-of-custody.csv";
  a.click();
  URL.revokeObjectURL(a.href);
  toast("CSV export downloaded");
}

// --- 11. Role Switching & Permissions ---
function toggleRoleMenu() {
  const m = document.getElementById("roleMenu");
  if (m) m.classList.toggle("show");
}

const rolePermissions = {
  ADMIN: ["dashboard", "collections", "patients", "samples", "tracking", "tests", "alerts", "storage", "reports", "labels"],
  COLLECTOR: ["dashboard", "collections", "patients", "samples", "tracking", "alerts", "labels"],
  LAB_TECHNICIAN: ["dashboard", "samples", "tracking", "tests", "alerts", "storage", "labels"],
  VERIFIER: ["dashboard", "samples", "tracking", "tests", "alerts", "reports", "labels"],
  CUSTOMER: ["dashboard", "collections", "tracking", "reports"]
};

function applyRolePermissions() {
  const allowed = rolePermissions[currentRole] || rolePermissions.ADMIN;

  document.querySelectorAll(".nav[data-page]").forEach(btn => {
    const pageName = btn.dataset.page;
    btn.style.display = allowed.includes(pageName) ? "flex" : "none";

    // Dynamic customer-friendly labels in sidebar
    if (currentRole === "CUSTOMER") {
      if (pageName === "dashboard") {
        btn.querySelector("b").textContent = "My Dashboard";
        btn.querySelector("small").textContent = "Overview & test progress";
      } else if (pageName === "collections") {
        btn.querySelector("b").textContent = "Book Home Collection";
        btn.querySelector("small").textContent = "Schedule home pickup";
      } else if (pageName === "tracking") {
        btn.querySelector("b").textContent = "Track My Sample";
        btn.querySelector("small").textContent = "Live sample journey";
      } else if (pageName === "reports") {
        btn.querySelector("b").textContent = "My Medical Reports";
        btn.querySelector("small").textContent = "View verified reports";
      }
    } else {
      if (pageName === "dashboard") {
        btn.querySelector("b").textContent = "Dashboard";
        btn.querySelector("small").textContent = "Overview & Insights";
      } else if (pageName === "collections") {
        btn.querySelector("b").textContent = "Home Collections";
        btn.querySelector("small").textContent = "Manage home sample collection";
      } else if (pageName === "tracking") {
        btn.querySelector("b").textContent = "Tracking";
        btn.querySelector("small").textContent = "Sample journey & timeline";
      } else if (pageName === "reports") {
        btn.querySelector("b").textContent = "Reports";
        btn.querySelector("small").textContent = "Reports & analytics";
      }
    }
  });

  document.querySelectorAll(".nav-group").forEach(group => {
    let next = group.nextElementSibling;
    let hasVisible = false;
    while (next && !next.classList.contains("nav-group")) {
      if (next.classList.contains("nav") && next.style.display !== "none") hasVisible = true;
=======
function logout(){
  document.getElementById("loginScreen").style.display="flex";
  toast("You have been logged out");
}


function toggleNotifications(){document.getElementById("notificationDrawer").classList.toggle("show")}
function globalSearch(){
 const q=document.getElementById("globalSearch").value.trim().toLowerCase(); if(!q)return;
 const hit=samples.find(s=>s.id.toLowerCase()===q||s.patient.toLowerCase().includes(q));
 if(hit){viewSample(hit.id);toast("Opened "+hit.id)}else{showPage("samples");toast("No exact match — use the sample search")}
}
function addActivity(action,id,user=currentRole){activityLog.unshift({time:new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}),action,id,user})}
function setSampleStatus(id,status){
 const s=samples.find(x=>x.id===id); if(!s)return;
 s.status=status; s.location=status==="IN_TRANSPORT"?"On the way to Lab":status==="RECEIVED"?"Lab Reception":"Laboratory";
 addActivity("Sample status changed",id); toast(id+" → "+status.replaceAll("_"," ")); render();
}
function advanceSample(id){
 const s=samples.find(x=>x.id===id); if(!s)return;
 const order=["COLLECTED","IN_TRANSPORT","RECEIVED","PROCESSING","TESTING","VERIFICATION","COMPLETED"];
 let i=order.indexOf(s.status);
 if(s.status==="DELAYED")s.status="TESTING"; else if(i>=0&&i<order.length-1)s.status=order[i+1]; else {toast("Sample is already completed");return}
 s.location=s.status==="IN_TRANSPORT"?"On the way to Lab":s.status==="RECEIVED"?"Lab Reception":"Laboratory";
 addActivity("Sample advanced",id); toast(id+" updated to "+s.status.replaceAll("_"," ")); render();
}
function rejectSample(id){const s=samples.find(x=>x.id===id);if(!s)return;s.status="REJECTED";s.location="Laboratory";addActivity("Sample rejected",id);toast(id+" marked as rejected");render()}
function recollect(id){addActivity("Recollection requested",id);toast("Recollection request created for "+id)}
function verifyResult(id){addActivity("Result verified",id);toast("Result verified successfully")}
function receiveSample(id){setSampleStatus(id,"RECEIVED")}
function printPage(){window.print()}
function exportCSV(){
 const rows=[["Sample ID","Patient","Type","Priority","Status","Location"]];
 samples.forEach(s=>rows.push([s.id,s.patient,s.type,s.priority,s.status,s.location]));
 const csv=rows.map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(",")).join("\n");
 const blob=new Blob([csv],{type:"text/csv"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="smartlabtrack-samples.csv";a.click();URL.revokeObjectURL(a.href);toast("CSV export prepared");
}


function toggleRoleMenu(){
  const m=document.getElementById("roleMenu");
  if(m) m.classList.toggle("show");
}

const rolePermissions = {
  ADMIN: ["dashboard","collections","patients","samples","tracking","tests","alerts","storage","reports"],
  COLLECTOR: ["dashboard","collections","patients","samples","tracking","alerts"],
  LAB_TECHNICIAN: ["dashboard","samples","tracking","tests","alerts","storage"],
  VERIFIER: ["dashboard","samples","tracking","tests","alerts","reports"]
};

function applyRolePermissions(){
  const allowed = rolePermissions[currentRole] || rolePermissions.ADMIN;
  document.querySelectorAll(".nav[data-page]").forEach(btn=>{
    const pageName = btn.dataset.page;
    btn.style.display = allowed.includes(pageName) ? "flex" : "none";
  });

  // Hide section headings when all navigation items underneath them are hidden.
  document.querySelectorAll(".nav-group").forEach(group=>{
    let next = group.nextElementSibling;
    let hasVisible = false;
    while(next && !next.classList.contains("nav-group")){
      if(next.classList.contains("nav") && next.style.display !== "none") hasVisible = true;
>>>>>>> fda16b2306074309a0a55a30c178699da46c6189
      next = next.nextElementSibling;
    }
    group.style.display = hasVisible ? "block" : "none";
  });
<<<<<<< HEAD

  // Topbar action button text adaptation
  const topAction = document.getElementById("topbarActionBtn");
  if (topAction) {
    topAction.textContent = (currentRole === "CUSTOMER") ? "+ Book Appointment" : "+ Home Collection";
  }
}

function switchRole(role, name, title) {
  currentRole = role;
  currentUserName = name;
  currentUserRoleTitle = title;

  const userEl = document.getElementById("sidebarUser");
  const roleText = document.getElementById("sidebarRole");
  const avatarEl = document.getElementById("sidebarAvatar");
  const topBtn = document.getElementById("topProfileBtn");

  if (userEl) userEl.textContent = name;
  if (roleText) roleText.textContent = title;
  if (avatarEl) {
    const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    avatarEl.textContent = initials;
  }
  if (topBtn) topBtn.textContent = name[0];

  const menu = document.getElementById("roleMenu");
  if (menu) menu.classList.remove("show");

  applyRolePermissions();
  toast(`Switched Role: ${name} (${title})`);
  showPage("dashboard");
}

document.addEventListener("click", function(e) {
  const menu = document.getElementById("roleMenu");
  const btn = e.target.closest(".switch-role-btn");
  if (menu && !menu.contains(e.target) && !btn) menu.classList.remove("show");
});

function badge(s) {
  let c = "gray";
  if (s === "COMPLETED" || s === "ACCEPTED" || s === "VERIFIED" || s === "RELEASED") c = "green";
  else if (s === "DELAYED" || s === "REJECTED") c = "red";
  else if (s === "URGENT" || s === "STAT" || s === "SCHEDULED") c = "orange";
  else if (s === "IN_TRANSPORT" || s === "COLLECTED" || s === "RECEIVED" || s === "PROCESSING" || s === "TESTING" || s === "AWAITING_VERIFICATION") c = "blue";
  return `<span class="badge ${c}">${String(s || "").replaceAll("_", " ")}</span>`;
}

function showPage(p) {
  page = p;
  document.querySelectorAll(".nav").forEach(b => b.classList.toggle("active", b.dataset.page === p));
  if (titles[p]) {
    document.getElementById("pageTitle").textContent = titles[p][0];
    document.getElementById("pageSub").textContent = titles[p][1];
  }
  render();
}

// Initial boot
document.getElementById("today").textContent = new Date().toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric"
});

document.querySelectorAll(".nav").forEach(b => {
  b.onclick = () => showPage(b.dataset.page);
});

applyRolePermissions();
updateCounts();
render();
=======
}

function switchRole(role,name,title){
  currentRole=role;
  const user=document.getElementById("sidebarUser");
  const roleText=document.getElementById("sidebarRole");
  if(user) user.textContent=name;
  if(roleText) roleText.textContent=title;
  const menu=document.getElementById("roleMenu");
  if(menu) menu.classList.remove("show");

  applyRolePermissions();
  toast("Switched to "+name+" ("+role.replaceAll("_"," ")+")");
  showPage("dashboard");
}

document.addEventListener("click",function(e){
  const menu=document.getElementById("roleMenu");
  const btn=e.target.closest(".switch-role-btn");
  if(menu && !menu.contains(e.target) && !btn) menu.classList.remove("show");
});

setTimeout(applyRolePermissions, 0);
>>>>>>> fda16b2306074309a0a55a30c178699da46c6189
