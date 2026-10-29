package com.smartlabtrack.repository;

import com.smartlabtrack.model.SampleStatusHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SampleStatusHistoryRepository extends JpaRepository<SampleStatusHistory, Long> {

    List<SampleStatusHistory> findBySampleIdOrderByTimestampDesc(Long sampleId);

    List<SampleStatusHistory> findBySampleSampleIdOrderByTimestampAsc(String sampleId);
}
