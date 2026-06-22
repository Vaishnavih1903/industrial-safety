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
        origins = {
                "http://localhost:5173",
                "http://localhost:5174",
                "https://industril-safety.vercel.app"
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

    ){

        this.service=service;

        this.groq=groq;

        this.alertService=alertService;

    }

    @PostMapping

    public Map<String,Object> create(

            @RequestBody
            SensorReading sensor

    ){

        try{

            RiskResponse risk=

                    service.process(
                            sensor
                    );

            if(
                    "CRITICAL".equals(
                            risk.getLevel()
                    )
            ){

                alertService.send(

                        new AlertMessage(

                                risk.getLevel(),

                                risk.getAction(),

                                sensor.getZone()

                        )

                );

            }

            String ai;

            try{

                ai=
                        groq.explain(
                                sensor
                        );

            }
            catch(Exception e){

                System.out.println(
                        e.getMessage()
                );

                ai=
                        "AI service temporarily unavailable. Risk analysis completed successfully.";

            }

            return Map.of(

                    "risk",
                    risk,

                    "ai",
                    ai

            );

        }

        catch(Exception e){

            e.printStackTrace();

            return Map.of(

                    "risk",

                    Map.of(

                            "score",0,

                            "level","ERROR",

                            "action",

                            "Backend processing failed"

                    ),

                    "ai",

                    "Simulation failed"

            );

        }

    }

}