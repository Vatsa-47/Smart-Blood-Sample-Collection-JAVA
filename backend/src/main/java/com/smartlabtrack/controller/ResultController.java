package com.smartlabtrack.controller;

import com.smartlabtrack.dto.ResultDTO;
import com.smartlabtrack.model.Result;
import com.smartlabtrack.service.ResultService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = "*")
public class ResultController {

    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping
    public ResponseEntity<Result> recordResult(@Valid @RequestBody ResultDTO request) {
        return ResponseEntity.ok(resultService.recordResult(request));
    }

    @GetMapping("/sample/{sampleId}")
    public ResponseEntity<List<Result>> getResultsForSample(@PathVariable String sampleId) {
        return ResponseEntity.ok(resultService.getResultsForSample(sampleId));
    }
}
