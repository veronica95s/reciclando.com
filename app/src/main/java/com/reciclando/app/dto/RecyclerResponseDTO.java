package com.reciclando.app.dto;

import java.util.List;
import com.reciclando.app.Models.enums.Material;

public record RecyclerResponseDTO(
        Long userId,
        String firstName,
        String lastName,
        String city,
        String state,
        List<Material> acceptedMaterials
) {}
