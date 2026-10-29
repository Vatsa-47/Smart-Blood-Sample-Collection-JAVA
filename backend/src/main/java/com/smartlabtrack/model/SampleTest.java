package com.smartlabtrack.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sample_tests")
public class SampleTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sample_id", nullable = false)
    private Sample sample;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "test_id", nullable = false)
    private TestEntity test;

    private String status = "ASSIGNED";

    private String result;

    public SampleTest() {}

    public SampleTest(Sample sample, TestEntity test, String status) {
        this.sample = sample;
        this.test = test;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Sample getSample() { return sample; }
    public void setSample(Sample sample) { this.sample = sample; }

    public TestEntity getTest() { return test; }
    public void setTest(TestEntity test) { this.test = test; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getResult() { return result; }
    public void setResult(String result) { this.result = result; }
}
