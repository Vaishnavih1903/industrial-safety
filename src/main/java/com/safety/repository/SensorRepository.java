package com.safety.repository;

import com.safety.entity.SensorReading;

import org.springframework.data.jpa.repository
        .JpaRepository;

public interface SensorRepository
        extends JpaRepository<
        SensorReading,
        Long
        >{

}