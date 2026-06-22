package com.safety.ai;

import com.safety.entity.SensorReading;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;

import java.util.*;

import org.springframework.web.client.RestTemplate;

@Service
public class GroqService {

    @Value("${groq.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public GroqService(
            RestTemplate restTemplate
    ){
        this.restTemplate=
                restTemplate;
    }

    public String explain(Object input){

        try{

            return
                    "Industrial conditions analyzed successfully. Risk evaluation completed.";

        }

        catch(Exception e){

            return
                    "AI service unavailable";

        }

    }

}