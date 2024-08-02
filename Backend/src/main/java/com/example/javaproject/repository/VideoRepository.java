package com.example.javaproject.repository;

import com.example.javaproject.model.Video;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface VideoRepository extends MongoRepository<Video, String> {
    Optional<Video> findBySubChapterId(String subChapterId);

    Video findByFileId(String fileId);
}
