package com.safety.dto;

public class RiskResponse {

    private int score;

    private String level;

    private String action;

    public RiskResponse(){}

    public RiskResponse(
            int score,
            String level,
            String action
    ){
        this.score=score;
        this.level=level;
        this.action=action;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score=score;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level=level;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action=action;
    }

}