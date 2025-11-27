package com.reciclando.app.Controllers.v1;

import com.reciclando.app.Models.Recycler;
import com.reciclando.app.Models.enums.Material;
import com.reciclando.app.Services.RecyclerService;
import com.reciclando.app.dto.RecyclerDTO;
import com.reciclando.app.dto.RecyclerResponseDTO;
import com.reciclando.app.dto.CreateRecyclerDTO;
import com.reciclando.app.dto.UpdateMaterialsDTO;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recyclers")
public class RecyclerController {

    private final RecyclerService recyclerService;

    public RecyclerController(RecyclerService recyclerService) {
        this.recyclerService = recyclerService;
    }

    @PostMapping
    public ResponseEntity<RecyclerDTO> createRecycler(@RequestBody CreateRecyclerDTO dto) {
        Recycler recycler = recyclerService.createRecycler(dto.userId(), dto.acceptedMaterials());
        return ResponseEntity.ok(toDto(recycler));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<RecyclerDTO> getById(@PathVariable Long userId) {
        Recycler recycler = recyclerService.getByUserID(userId);
        return ResponseEntity.ok(toDto(recycler));
    }

    @GetMapping
    public ResponseEntity<List<RecyclerDTO>> getAll() {
        List<RecyclerDTO> dtos = recyclerService.getAll()
            .stream()
            .map(this::toDto)
            .toList();
        return ResponseEntity.ok(dtos);
    }

    @PutMapping("/{userId}/materials")
    public ResponseEntity<RecyclerDTO> updateMaterials(
            @PathVariable Long userId,
            @RequestBody UpdateMaterialsDTO dto) {

        Recycler updated = recyclerService.updateMaterials(userId, dto.acceptedMaterials());
        return ResponseEntity.ok(toDto(updated));
    }

    @GetMapping("/material/{material}")
    public ResponseEntity<List<RecyclerResponseDTO>> findByMaterial(@PathVariable Material material) {
        List<RecyclerResponseDTO> dtos = recyclerService.findByAcceptedMaterial(material)
            .stream()
            .map(this::toResponseDto)
            .toList();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<RecyclerResponseDTO>> findByCity(@PathVariable String city) {
        List<RecyclerResponseDTO> dtos = recyclerService.findByCity(city)
            .stream()
            .map(this::toResponseDto)
            .toList();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/city/{city}/material/{material}")
    public ResponseEntity<List<RecyclerResponseDTO>> findByCityAndMaterial(
            @PathVariable String city,
            @PathVariable Material material) {
        List<RecyclerResponseDTO> dtos = recyclerService.findByCityAndMaterial(city, material)
            .stream()
            .map(this::toResponseDto)
            .toList();
        return ResponseEntity.ok(dtos);
    }

    private RecyclerDTO toDto(Recycler recycler) {
        return new RecyclerDTO(
            recycler.getUserId(),
            recycler.getAcceptedMaterials()
        );
    }

    private RecyclerResponseDTO toResponseDto(Recycler recycler) {
        var user = recycler.getUser();
        var address = user.getAddress();
        return new RecyclerResponseDTO(
            recycler.getUserId(),
            user.getFirstName(),
            user.getLastName(),
            address != null ? address.getCity() : null,
            address != null ? address.getState() : null,
            recycler.getAcceptedMaterials()
        );
    }
}
