package com.reciclando.app.dtos.ad;

public class AdRequestDto {
    private String title;
    private String description;
    private Long donorId;
    private String materialCategory;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Long getDonorId() {
        return donorId;
    }

    public String getMaterialCategory() {
        return materialCategory;
    }
}
