package com.example.javaproject.repository;

import com.example.javaproject.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends MongoRepository<Course, String> {
    int countByTeacherUsername(String username);
}

