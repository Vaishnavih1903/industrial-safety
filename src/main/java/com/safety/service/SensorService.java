package com.safety.service;

import com.safety.dto.RiskResponse;
import com.safety.entity.SensorReading;
import com.safety.repository.SensorRepository;
import com.safety.risk.RiskEngine;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class SensorService {

    private final SensorRepository repo;

    private final RiskEngine riskEngine;

    public SensorService(
            SensorRepository repo,
            RiskEngine riskEngine
    ){

        this.repo=repo;

        this.riskEngine=
                riskEngine;

    }

    public RiskResponse process(

            SensorReading sensor

    ){

        sensor.setTimestamp(
                LocalDateTime.now()
        );

        repo.save(sensor);

        return riskEngine
                .calculate(sensor);

    }

}