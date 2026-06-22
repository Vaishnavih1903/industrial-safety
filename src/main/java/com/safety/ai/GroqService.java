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

    public String explain(
            SensorReading s
    ){

        String prompt =
                """
                You are an Industrial Safety Intelligence Agent.
                
                Analyze industrial sensor data.
                
                Return ONLY this exact format.
                
                Risk Reason:
                <short explanation max 2 lines>
                
                Severity:
                SAFE or MEDIUM or HIGH or CRITICAL
                
                Recommended Actions:
                ✓ action1
                ✓ action2
                ✓ action3
                
                Estimated Prevention Window:
                <number>
                
                Sensor Data:
                Gas=%s
                Pressure=%s
                Temperature=%s
                Workers=%s
                Zone=%s
                
                Rules:
                - Keep answer under 120 words
                - No markdown
                - No bold
                - No paragraphs
                - No assumptions
                - Industrial language only
                """
                        .formatted(

                                s.getGas(),

                                s.getPressure(),

                                s.getTemperature(),

                                s.getWorkerCount(),

                                s.getZone()

                        );

        Map<String,Object> body=
                new HashMap<>();

        body.put(
                "model",
                "llama-3.3-70b-versatile"
        );

        body.put(
                "messages",
                List.of(
                        Map.of(
                                "role",
                                "user",
                                "content",
                                prompt
                        )
                )
        );

        HttpHeaders headers=
                new HttpHeaders();

        headers.setBearerAuth(
                apiKey
        );

        headers.setContentType(
                MediaType.APPLICATION_JSON
        );

        HttpEntity<?> request=
                new HttpEntity<>(
                        body,
                        headers
                );

        Map response=
                restTemplate.postForObject(
                        "https://api.groq.com/openai/v1/chat/completions",
                        request,
                        Map.class
                );

        List choices=
                (List)
                        response.get(
                                "choices"
                        );

        Map first=
                (Map)
                        choices.get(0);

        Map message=
                (Map)
                        first.get(
                                "message"
                        );

        return
                message
                        .get(
                                "content"
                        )
                        .toString();

    }

}