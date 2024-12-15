package org.example.repository;

import org.example.entity.MeasurementUnit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeasurementUnitRepository extends JpaRepository<MeasurementUnit, Long> {}