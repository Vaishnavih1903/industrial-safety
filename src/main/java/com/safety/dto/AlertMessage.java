package com.safety.dto;

public class AlertMessage {

    private String level;

    private String action;

    private String zone;

    public AlertMessage(){}

    public AlertMessage(
            String level,
            String action,
            String zone
    ){

        this.level=level;

        this.action=action;

        this.zone=zone;

    }

    public String getLevel(){
        return level;
    }

    public void setLevel(
            String level
    ){
        this.level=level;
    }

    public String getAction(){
        return action;
    }

    public void setAction(
            String action
    ){
        this.action=action;
    }

    public String getZone(){
        return zone;
    }

    public void setZone(
            String zone
    ){
        this.zone=zone;
    }

}