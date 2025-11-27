package com.reciclando.app.Controllers.v1;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.reciclando.app.Models.Ad;
import com.reciclando.app.Services.AdService;
import com.reciclando.app.dtos.ad.AdRequestDto;
import com.reciclando.app.dtos.ad.AdResponseDto;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/anuncios")
public class AdController {

    private final AdService postService;

    public AdController(AdService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<List<AdResponseDto>> getPosts(@RequestParam(required = false) String filtro) {
        List<AdResponseDto> posts = postService.getAdsOrderByCreatedAt(filtro);
        return ResponseEntity.status(HttpStatus.OK).body(posts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdResponseDto> getPostById(@PathVariable long id) {
        try {
            AdResponseDto post = postService.getPostById(id);
            return ResponseEntity.status(HttpStatus.OK).body(post);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/novo")
    public ResponseEntity<Object> createPost(@RequestBody AdRequestDto post) {
        try {
            Ad createdPost = postService.createPost(post);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
