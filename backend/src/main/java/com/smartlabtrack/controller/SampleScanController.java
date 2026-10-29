package com.smartlabtrack.controller;

import com.smartlabtrack.dto.ScanActionRequestDTO;
import com.smartlabtrack.dto.ScanResponseDTO;
import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.enums.UserRole;
import com.smartlabtrack.repository.SampleRepository;
import com.smartlabtrack.service.SampleScanService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/samples")
@CrossOrigin(origins = "*")
public class SampleScanController {

    private final SampleScanService scanService;
    private final SampleRepository sampleRepository;
    private final com.smartlabtrack.service.SampleService sampleService;

    public SampleScanController(SampleScanService scanService,
                                SampleRepository sampleRepository,
                                com.smartlabtrack.service.SampleService sampleService) {
        this.scanService = scanService;
        this.sampleRepository = sampleRepository;
        this.sampleService = sampleService;
    }

    /**
     * Endpoint 1: Identify sample via QR or Barcode scan.
     * GET /api/samples/scan/{sampleCode}?role=COLLECTOR
     */
    @GetMapping("/scan/{sampleCode}")
    public ResponseEntity<ScanResponseDTO> scanSample(
            @PathVariable String sampleCode,
            @RequestParam(defaultValue = "ADMIN") UserRole role) {
        ScanResponseDTO response = scanService.scanSample(sampleCode, role);
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint 2: Execute physical handoff / scan action.
     * POST /api/samples/{sampleId}/scan-action
     */
    @PostMapping("/{sampleId}/scan-action")
    public ResponseEntity<ScanResponseDTO> executeScanAction(
            @PathVariable String sampleId,
            @Valid @RequestBody ScanActionRequestDTO request) {
        ScanResponseDTO updated = scanService.executeScanAction(sampleId, request);
        return ResponseEntity.ok(updated);
    }

    /**
     * List all samples.
     * GET /api/samples
     */
    @GetMapping
    public ResponseEntity<List<Sample>> getAllSamples() {
        return ResponseEntity.ok(sampleRepository.findAll());
    }

    /**
     * Get single sample by ID.
     * GET /api/samples/{sampleId}
     */
    @GetMapping("/{sampleId}")
    public ResponseEntity<ScanResponseDTO> getSampleDetails(
            @PathVariable String sampleId,
            @RequestParam(defaultValue = "ADMIN") UserRole role) {
        return ResponseEntity.ok(scanService.scanSample(sampleId, role));
    }

    /**
     * Register a new sample and generate unique sample ID.
     * POST /api/samples
     */
    @PostMapping
    public ResponseEntity<Sample> createSample(
            @Valid @RequestBody com.smartlabtrack.dto.SampleCreateDTO request) {
        return ResponseEntity.ok(sampleService.createSample(request));
    }
}
