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
    toast("Welcome to SmartLabTrack");
  } else toast("Invalid demo credentials");
}

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
      next = next.nextElementSibling;
    }
    group.style.display = hasVisible ? "block" : "none";
  });
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
