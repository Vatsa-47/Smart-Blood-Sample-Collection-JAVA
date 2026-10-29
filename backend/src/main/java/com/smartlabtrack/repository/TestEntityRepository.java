package com.smartlabtrack.repository;

import com.smartlabtrack.model.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TestEntityRepository extends JpaRepository<TestEntity, Long> {
    Optional<TestEntity> findByTestCode(String testCode);
}
