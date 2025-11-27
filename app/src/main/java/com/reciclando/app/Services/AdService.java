package com.reciclando.app.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.reciclando.app.Models.Donor;
import com.reciclando.app.Models.Ad;
import com.reciclando.app.Models.enums.Material;
import com.reciclando.app.Repositories.AdRepository;
import com.reciclando.app.dtos.ad.AdRequestDto;
import com.reciclando.app.dtos.ad.AdResponseDto;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AdService {
    private final AdRepository postRepository;
    private final DonorService donorService;

    public AdService(AdRepository postRepository, DonorService donorService) {
        this.postRepository = postRepository;
        this.donorService = donorService;
    }

    public List<AdResponseDto> getAdsOrderByCreatedAt(String filtro) {
        String[] categories = filtro != null ? filtro.split("--") : null;
        List<Ad> ads = postRepository.findAllByOrderByCreatedAtDesc();
        ads = ads.stream()
                .filter(post -> {
                    if (categories == null || categories.length == 0) {
                        return true; // Se nenhuma categoria for fornecida, retorna todos os ads
                    }
                    for (String cat : categories) {
                        if (post.getMaterialCategory().toString().equalsIgnoreCase(cat)) {
                            return true;
                        }
                    }
                    return false;
                })
                .toList();
        return ads.stream()
                .map(ad -> new AdResponseDto(
                        ad.getTitle(),
                        ad.getDescription(),
                        ad.getDonor().getFullName(),
                        ad.getDonor().getContact(),
                        ad.getLocationString(),
                        ad.getMaterialCategory().toString(),
                        ad.getFormatedCreationDate()))
                .toList();
    }

    public AdResponseDto getPostById(long id) {
        Ad ad = postRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ad not found"));
        return new AdResponseDto(
                ad.getTitle(),
                ad.getDescription(),
                ad.getDonor().getFullName(),
                ad.getDonor().getContact(),
                ad.getLocationString(),
                ad.getMaterialCategory().toString(),
                ad.getFormatedCreationDate());
    }

    public Ad createPost(AdRequestDto post) {
        Donor donor = donorService.findById(post.getDonorId())
                .orElseThrow(() -> new EntityNotFoundException("Donor not found"));
        Ad newPost = new Ad(post.getTitle(), post.getDescription(), donor,
                Material.valueOf(post.getMaterialCategory()));
        return postRepository.save(newPost);
    }

    public void deletePost(long id) {
        postRepository.deleteById(id);
    }
}
