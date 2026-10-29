
package com.smartlabtrack.repository;

import com.smartlabtrack.model.Sample;
import com.smartlabtrack.model.enums.SampleStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long> {

    Optional<Sample> findBySampleId(String sampleId);

    Optional<Sample> findBySampleIdIgnoreCase(String sampleId);

    Optional<Sample> findByQrTokenIgnoreCase(String qrToken);

    Optional<Sample> findByBarcodeValueIgnoreCase(String barcodeValue);

    List<Sample> findByStatus(SampleStatus status);

    List<Sample> findByCollectorNameIgnoreCase(String collectorName);

    boolean existsBySampleId(String sampleId);
}
