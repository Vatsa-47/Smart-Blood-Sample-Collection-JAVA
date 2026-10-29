package com.smartlabtrack.controller;

import com.smartlabtrack.dto.ReportDTO;
import com.smartlabtrack.service.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "*")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    /**
     * Get complete diagnostic medical report by sample ID.
     * GET /api/reports/{sampleId}
     */
    @GetMapping("/{sampleId}")
    public ResponseEntity<ReportDTO> getReport(@PathVariable String sampleId) {
        return ResponseEntity.ok(reportService.getReportData(sampleId));
    }

    /**
     * Doctor verifies test results.
     * POST /api/reports/{sampleId}/verify
     */
    @PostMapping("/{sampleId}/verify")
    public ResponseEntity<ReportDTO> verifyReport(
            @PathVariable String sampleId,
            @RequestBody(required = false) Map<String, String> body) {
        String doctorName = body != null ? body.get("doctorName") : "Dr. Priya Shah";
        String remarks = body != null ? body.get("remarks") : "Clinically approved.";
        return ResponseEntity.ok(reportService.verifyReport(sampleId, doctorName, remarks));
    }

    /**
     * Doctor releases verified report to the customer/patient.
     * POST /api/reports/{sampleId}/release
     */
    @PostMapping("/{sampleId}/release")
    public ResponseEntity<ReportDTO> releaseReport(
            @PathVariable String sampleId,
            @RequestBody(required = false) Map<String, String> body) {
        String doctorName = body != null ? body.get("doctorName") : "Dr. Priya Shah";
        return ResponseEntity.ok(reportService.releaseReportToCustomer(sampleId, doctorName));
    }
}
