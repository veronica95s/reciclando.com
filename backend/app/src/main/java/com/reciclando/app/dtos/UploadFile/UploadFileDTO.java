package com.reciclando.app.dtos.UploadFile;

public class UploadFileDTO {
    private String fileName;
    private String fileDownloadUri;
    private String fileType;
    private long fileSize;

    public UploadFileDTO(String fileName, String fileDownloadUri, String fileType, long fileSize) {
        this.fileName = fileName;
        this.fileDownloadUri = fileDownloadUri;
        this.fileType = fileType;
        this.fileSize = fileSize;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFileDownloadUri() {
        return fileDownloadUri;
    }

    public String getFileType() {
        return fileType;
    }

    public long getFileSize() {
        return fileSize;
    }
}
