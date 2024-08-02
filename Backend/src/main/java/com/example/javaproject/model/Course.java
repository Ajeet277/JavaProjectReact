//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.DBRef;
//
//import java.util.List;
//
//@Document(collection = "courses")
//public class Course {
//    @Id
//    private String id;
//    private String name;
//
//    @DBRef
//    private List<Chapter> chapters;
//
//    // Getters and Setters
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public List<Chapter> getChapters() {
//        return chapters;
//    }
//
//    public void setChapters(List<Chapter> chapters) {
//        this.chapters = chapters;
//    }
//}
//
////last
//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Document(collection = "courses")
//public class Course {
//    @Id
//    private String id;
//    private String name;
//    private String description;
//    private List<Chapter> chapters = new ArrayList<>();
//
//    // Getters and setters
//
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public List<Chapter> getChapters() {
//        return chapters;
//    }
//
//    public void setChapters(List<Chapter> chapters) {
//        this.chapters = chapters;
//    }
//}


package com.example.javaproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "courses")
public class Course {
    @Id
    private String id;
    private String name;
    private String teacherUsername;

    @JsonManagedReference
    private List<Chapter> chapters = new ArrayList<>();

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }
    public String getTeacherUsername() {
        return teacherUsername;
    }

    public void setTeacherUsername(String teacherUsername) {
        this.teacherUsername = teacherUsername;
    }
}
