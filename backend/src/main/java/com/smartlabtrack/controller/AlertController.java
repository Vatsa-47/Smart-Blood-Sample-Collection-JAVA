package com.smartlabtrack.controller;

import com.smartlabtrack.model.Alert;
import com.smartlabtrack.repository.AlertRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/alerts")
@CrossOrigin(origins = "*")
public class AlertController {

    private final com.smartlabtrack.service.AlertService alertService;

    public AlertController(com.smartlabtrack.service.AlertService alertService) {
        this.alertService = alertService;
    }

    @GetMapping
    public ResponseEntity<List<Alert>> getActiveAlerts() {
        return ResponseEntity.ok(alertService.getActiveAlerts());
    }

    @org.springframework.web.bind.annotation.PutMapping("/{alertId}/resolve")
    public ResponseEntity<Alert> resolveAlert(@org.springframework.web.bind.annotation.PathVariable Long alertId) {
        return ResponseEntity.ok(alertService.resolveAlert(alertId));
    }
}
