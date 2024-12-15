package org.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "measurement_units", schema = "public")
public class MeasurementUnit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "measurement_units_id", unique = true, nullable = false)
    private Integer measurementUnitId;

    @Column(name = "measurement_units_name", unique = true, nullable = false)
    private String measurementUnitName;

    public MeasurementUnit() {
    }

    public MeasurementUnit(Integer measurementUnitId, String measurementUnitName) {
        this.measurementUnitId = measurementUnitId;
        this.measurementUnitName = measurementUnitName;
    }

    public Integer getMeasurementUnitId() {
        return measurementUnitId;
    }

    public String getMeasurementUnitName() {
        return measurementUnitName;
    }

    public void setMeasurementUnitName(String measuramentUnitName) {
        this.measurementUnitName = measuramentUnitName;
    }

    @Override
    public String toString() {
        return "MeasuramentUnit{" + "measuramentUnitId=" + measurementUnitId + ", measuramentUnitName='" + measurementUnitName + '\'' + '}';
    }
}
