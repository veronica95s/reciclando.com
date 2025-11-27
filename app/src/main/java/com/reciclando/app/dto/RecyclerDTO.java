package com.reciclando.app.dto;

import java.util.List;
import com.reciclando.app.Models.enums.Material;

public record RecyclerDTO(
        Long userId,
        List<Material> acceptedMaterials
) {}
