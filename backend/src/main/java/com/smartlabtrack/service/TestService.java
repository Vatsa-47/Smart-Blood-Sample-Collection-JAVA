package com.smartlabtrack.service;

import com.smartlabtrack.exception.ResourceNotFoundException;
import com.smartlabtrack.model.TestEntity;
import com.smartlabtrack.repository.TestEntityRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TestService {

    private final TestEntityRepository testEntityRepository;

    public TestService(TestEntityRepository testEntityRepository) {
        this.testEntityRepository = testEntityRepository;
    }

    @Transactional(readOnly = true)
    public List<TestEntity> getAllTests() {
        return testEntityRepository.findAll();
    }

    @Transactional(readOnly = true)
    public TestEntity getTestByCode(String testCode) {
        return testEntityRepository.findByTestCode(testCode)
                .orElseThrow(() -> new ResourceNotFoundException("Test not found with code: " + testCode));
    }
}
