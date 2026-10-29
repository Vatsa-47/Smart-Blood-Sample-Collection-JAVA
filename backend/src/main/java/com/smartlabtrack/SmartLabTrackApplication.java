package com.smartlabtrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SmartLabTrackApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartLabTrackApplication.class, args);
        System.out.println("==================================================================");
        System.out.println("  SmartLabTrack Laboratory Backend Started on port 8080");
        System.out.println("  REST API: http://localhost:8080/api/samples");
        System.out.println("  Scan API: http://localhost:8080/api/samples/scan/{sampleCode}");
        System.out.println("  H2 Console: http://localhost:8080/h2-console");
        System.out.println("==================================================================");
    }
}
