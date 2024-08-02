package com.example.javaproject.repository;

import com.example.javaproject.model.SubChapter;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubChapterRepository extends MongoRepository<SubChapter, String> {
}
