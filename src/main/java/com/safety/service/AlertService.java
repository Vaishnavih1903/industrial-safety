package com.safety.service;

import com.safety.dto.AlertMessage;

import org.springframework.messaging.simp
        .SimpMessagingTemplate;

import org.springframework.stereotype.Service;

@Service
public class AlertService {

    private final
    SimpMessagingTemplate template;

    public AlertService(
            SimpMessagingTemplate template
    ){

        this.template=
                template;

    }

    public void send(

            AlertMessage alert

    ){

        template.convertAndSend(

                "/topic/alerts",

                alert

        );

    }

}