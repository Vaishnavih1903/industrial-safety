package com.safety.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "sensor_readings")
public class SensorReading {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)
    private Long id;

    private String zone;

    private Double gas;

    private Double pressure;

    private Double temperature;

    private Integer workerCount;

    private LocalDateTime timestamp;

    public SensorReading() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone=zone;
    }

    public Double getGas() {
        return gas;
    }

    public void setGas(Double gas) {
        this.gas=gas;
    }

    public Double getPressure() {
        return pressure;
    }

    public void setPressure(Double pressure) {
        this.pressure=pressure;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(
            Double temperature
    ) {
        this.temperature=temperature;
    }

    public Integer getWorkerCount() {
        return workerCount;
    }

    public void setWorkerCount(
            Integer workerCount
    ) {
        this.workerCount=workerCount;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(
            LocalDateTime timestamp
    ) {
        this.timestamp=timestamp;
    }

}