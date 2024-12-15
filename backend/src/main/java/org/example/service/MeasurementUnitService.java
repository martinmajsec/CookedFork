package org.example.service;

import jakarta.annotation.PostConstruct;
import org.example.entity.MeasurementUnit;
import org.example.repository.MeasurementUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MeasurementUnitService {
    private final MeasurementUnitRepository measurementUnitRepository;

    @Autowired
    public MeasurementUnitService(MeasurementUnitRepository measurementUnitRepository) {
        this.measurementUnitRepository = measurementUnitRepository;
    }

    public List<MeasurementUnit> getMeasurementUnits() {
        return measurementUnitRepository.findAll();
    }

    @PostConstruct
    public void logMeasurementUnits() {
        List<MeasurementUnit> units = getMeasurementUnits();

        units.forEach(unit -> {
            System.out.println(unit.toString());
        });
    }
}