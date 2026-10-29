package com.smartlabtrack.controller;

import com.smartlabtrack.model.TestEntity;
import com.smartlabtrack.service.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tests")
@CrossOrigin(origins = "*")
public class TestController {

    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping
    public ResponseEntity<List<TestEntity>> getAllTests() {
        return ResponseEntity.ok(testService.getAllTests());
    }

    @GetMapping("/{testCode}")
    public ResponseEntity<TestEntity> getTest(@PathVariable String testCode) {
        return ResponseEntity.ok(testService.getTestByCode(testCode));
    }
}
