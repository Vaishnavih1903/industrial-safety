package com.safety.dto;

public class AiExplanationResponse {

    private String explanation;

    public AiExplanationResponse(){}

    public AiExplanationResponse(
            String explanation
    ){
        this.explanation=
                explanation;
    }

    public String getExplanation(){
        return explanation;
    }

    public void setExplanation(
            String explanation
    ){
        this.explanation=
                explanation;
    }

}