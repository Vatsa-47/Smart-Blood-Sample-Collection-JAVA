package com.smartlabtrack.controller;

import com.smartlabtrack.dto.TrackingDTO;
import com.smartlabtrack.service.TrackingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tracking")
@CrossOrigin(origins = "*")
public class TrackingController {

    private final TrackingService trackingService;

    public TrackingController(TrackingService trackingService) {
        this.trackingService = trackingService;
    }

    /**
     * Get real-time patient sample progress timeline and status.
     * GET /api/tracking/{sampleId}
     */
    @GetMapping("/{sampleId}")
    public ResponseEntity<TrackingDTO> getSampleTracking(@PathVariable String sampleId) {
        return ResponseEntity.ok(trackingService.getTrackingTimeline(sampleId));
    }
}
