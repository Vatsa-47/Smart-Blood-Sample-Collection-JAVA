package com.smartlabtrack.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tests")
public class TestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String testCode;

    @Column(nullable = false)
    private String name;

    private String department;

    private String unit;

    private String normalRange;

    public TestEntity() {}

    public TestEntity(String testCode, String name, String department, String unit, String normalRange) {
        this.testCode = testCode;
        this.name = name;
        this.department = department;
        this.unit = unit;
        this.normalRange = normalRange;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTestCode() { return testCode; }
    public void setTestCode(String testCode) { this.testCode = testCode; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public String getNormalRange() { return normalRange; }
    public void setNormalRange(String normalRange) { this.normalRange = normalRange; }
}
