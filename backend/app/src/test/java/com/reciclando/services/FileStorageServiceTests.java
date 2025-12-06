package com.reciclando.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.nio.file.Path;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.mock.web.MockMultipartFile;

import com.reciclando.app.config.FileStorageConfig;
import com.reciclando.app.dtos.UploadFile.UploadFileDTO;
import com.reciclando.app.exception.FileStorageException;
import com.reciclando.app.services.FileStorageService;

public class FileStorageServiceTests {

    private static FileStorageConfig fileStorageConfig;
    private static FileStorageService fileStorageService;

    @TempDir
    static Path tempDir;

    @BeforeAll
    private static void setUp() {
        fileStorageConfig = new FileStorageConfig();
        fileStorageConfig.setUploadDir(tempDir.toString());
        fileStorageService = new FileStorageService(fileStorageConfig);
    }

    @Test
    void testShouldStoreFile_Success() {
        byte[] content = "Old papers".getBytes();
        MockMultipartFile multipartFile = new MockMultipartFile(
                "file",
                "myImage.png",
                "image/png",
                content);

        String fileName = fileStorageService.storeFile(multipartFile);

        assertEquals("myImage.png", fileName);

        UploadFileDTO fileDTO = new UploadFileDTO(
                fileName,
                "/api/v1/files/download/" + fileName,
                multipartFile.getContentType(),
                multipartFile.getSize());

        assertEquals("myImage.png", fileDTO.getFileName());
        assertTrue(fileDTO.getFileDownloadUri().contains("/api/v1/files/"));
        assertEquals("image/png", fileDTO.getFileType());
        assertEquals(multipartFile.getSize(), fileDTO.getFileSize());
    }

    @Test
    void testShouldStoreFile_Fail() {
        byte[] content = "Old papers".getBytes();
        MockMultipartFile multipartFile = new MockMultipartFile(
                "file",
                "myImage..png",
                "image/png",
                content);
        assertThrows(FileStorageException.class, () -> {
            fileStorageService.storeFile(multipartFile);
        });
    }
}
