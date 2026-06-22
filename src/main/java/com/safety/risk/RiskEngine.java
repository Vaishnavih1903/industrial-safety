package com.safety.risk;

import com.safety.dto.RiskResponse;
import com.safety.entity.SensorReading;

import org.springframework.stereotype.Component;

@Component
public class RiskEngine {

    public RiskResponse calculate(
            SensorReading s
    ){

        int risk=0;

        if(
                s.getGas()!=null
                        &&
                        s.getGas()>70
        ){
            risk+=40;
        }

        if(
                s.getPressure()!=null
                        &&
                        s.getPressure()>85
        ){
            risk+=30;
        }

        if(
                s.getWorkerCount()!=null
                        &&
                        s.getWorkerCount()>5
        ){
            risk+=20;
        }

        if(
                s.getTemperature()!=null
                        &&
                        s.getTemperature()>45
        ){
            risk+=10;
        }

        String level;
        String action;

        if(risk>=80){

            level="CRITICAL";

            action=
                    "EVACUATE";

        }

        else if(risk>=50){

            level=
                    "HIGH";

            action=
                    "ALERT";

        }

        else{

            level=
                    "SAFE";

            action=
                    "MONITOR";

        }

        return new RiskResponse(
                risk,
                level,
                action
        );

    }

}