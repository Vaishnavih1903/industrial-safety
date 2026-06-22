package com.safety.controller;

import com.safety.ai.GroqService;

import com.safety.dto.AlertMessage;
import com.safety.dto.RiskResponse;

import com.safety.entity.SensorReading;

import com.safety.service.AlertService;
import com.safety.service.SensorService;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(
        origins={
                "http://localhost:5173",
                "http://localhost:5174"
        }
)
@RestController
@RequestMapping("/sensor")
public class SensorController {

    private final SensorService service;

    private final GroqService groq;

    private final AlertService alertService;


    public SensorController(

            SensorService service,

            GroqService groq,

            AlertService alertService

    ) {

        this.service = service;

        this.groq = groq;

        this.alertService = alertService;

    }


    @PostMapping

    public Map<String, Object> create(

            @RequestBody
            SensorReading sensor

    ) {

        RiskResponse risk =
                service.process(
                        sensor
                );


        if (
                "CRITICAL".equals(
                        risk.getLevel()
                )
        ) {

            alertService.send(

                    new AlertMessage(

                            risk.getLevel(),

                            risk.getAction(),

                            sensor.getZone()

                    )

            );

        }


        String ai =
                groq.explain(
                        sensor
                );


        return Map.of(

                "risk",
                risk,

                "ai",
                ai

        );

    }

}