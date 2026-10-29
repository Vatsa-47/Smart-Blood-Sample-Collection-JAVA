package com.smartlabtrack.controller;

import com.smartlabtrack.config.DataInitializer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/demo")
@CrossOrigin(origins = "*")
public class DemoController {

    private final DataInitializer dataInitializer;

    public DemoController(DataInitializer dataInitializer) {
        this.dataInitializer = dataInitializer;
    }

    /**
     * Resets the 5 demo samples back to SCHEDULED state for repeated presentations.
     * POST /api/demo/reset
     */
    @PostMapping("/reset")
    public ResponseEntity<Map<String, String>> resetDemoData() {
        dataInitializer.resetDemoData();
        return ResponseEntity.ok(Map.of(
                "status", "SUCCESS",
                "message", "Demo samples successfully reset to initial SCHEDULED state."
        ));
    }
}
