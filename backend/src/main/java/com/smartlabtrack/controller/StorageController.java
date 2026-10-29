package com.smartlabtrack.controller;

import com.smartlabtrack.model.StorageLocation;
import com.smartlabtrack.service.StorageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/storage")
@CrossOrigin(origins = "*")
public class StorageController {

    private final StorageService storageService;

    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping
    public ResponseEntity<List<StorageLocation>> getAllLocations() {
        return ResponseEntity.ok(storageService.getAllStorageLocations());
    }

    @PostMapping
    public ResponseEntity<StorageLocation> assignStorage(@RequestBody StorageLocation location) {
        return ResponseEntity.ok(storageService.assignStorage(location));
    }
}
