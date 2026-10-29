package com.smartlabtrack.service;

import com.smartlabtrack.model.StorageLocation;
import com.smartlabtrack.repository.StorageLocationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StorageService {

    private final StorageLocationRepository storageLocationRepository;

    public StorageService(StorageLocationRepository storageLocationRepository) {
        this.storageLocationRepository = storageLocationRepository;
    }

    @Transactional(readOnly = true)
    public List<StorageLocation> getAllStorageLocations() {
        return storageLocationRepository.findAll();
    }

    @Transactional
    public StorageLocation assignStorage(StorageLocation location) {
        return storageLocationRepository.save(location);
    }
}
