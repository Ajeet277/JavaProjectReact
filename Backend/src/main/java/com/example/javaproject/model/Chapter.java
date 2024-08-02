////package com.example.javaproject.model;
////
////import org.springframework.data.annotation.Id;
////import org.springframework.data.mongodb.core.mapping.Document;
////import org.springframework.data.mongodb.core.mapping.DBRef;
////
////import java.util.List;
////
////@Document(collection = "chapters")
////public class Chapter {
////    @Id
////    private String id;
////    private String name;
////
////    @DBRef
////    private Course course;
////
////    @DBRef
////    private List<SubChapter> subChapters;
////
////    // Getters and Setters
////    public String getId() {
////        return id;
////    }
////
////    public void setId(String id) {
////        this.id = id;
////    }
////
////    public String getName() {
////        return name;
////    }
////
////    public void setName(String name) {
////        this.name = name;
////    }
////
////    public Course getCourse() {
////        return course;
////    }
////
////    public void setCourse(Course course) {
////        this.course = course;
////    }
////
////    public List<SubChapter> getSubChapters() {
////        return subChapters;
////    }
////
////    public void setSubChapters(List<SubChapter> subChapters) {
////        this.subChapters = subChapters;
////    }
////}
////
////package com.example.javaproject.model;
////
////import org.springframework.data.annotation.Id;
////import org.springframework.data.mongodb.core.mapping.Document;
////
////import java.util.ArrayList;
////import java.util.List;
////
////@Document(collection = "chapters")
////public class Chapter {
////    @Id
////    private String id;
////    private String name;
////    private String description;
////    private Course course;
////
////    private List<SubChapter> subChapters = new ArrayList<>();
////
////    // Getters and setters
////
////    public String getId() {
////        return id;
////    }
////
////    public void setId(String id) {
////        this.id = id;
////    }
////
////    public Course getCourse() {
////        return course;
////    }
////
////    public void setCourse(Course course) {
////        this.course = course;
////    }
////    public String getName() {
////        return name;
////    }
////
////    public void setName(String name) {
////        this.name = name;
////    }
////
////    public String getDescription() {
////        return description;
////    }
////
////    public void setDescription(String description) {
////        this.description = description;
////    }
////
////    public List<SubChapter> getSubChapters() {
////        return subChapters;
////    }
////
////    public void setSubChapters(List<SubChapter> subChapters) {
////        this.subChapters = subChapters;
////    }
////}
//
//
////last
//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.DBRef;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Document(collection = "chapters")
//public class Chapter {
//    @Id
//    private String id;
//    private String name;
//    private String description;
//
//    @DBRef
//    private Course course;
//
//    private List<SubChapter> subChapters = new ArrayList<>();
//
//    // Getters and setters
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
//    public Course getCourse() {
//        return course;
//    }
//
//    public void setCourse(Course course) {
//        this.course = course;
//    }
//
//    public List<SubChapter> getSubChapters() {
//        return subChapters;
//    }
//
//    public void setSubChapters(List<SubChapter> subChapters) {
//        this.subChapters = subChapters;
//    }
//}


package com.example.javaproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "chapters")
public class Chapter {
    @Id
    private String id;
    private String name;
    private String description;

    @DBRef(lazy = true)
    @JsonBackReference
    private Course course;

    @JsonManagedReference
    private List<SubChapter> subChapters = new ArrayList<>();

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<SubChapter> getSubChapters() {
        return subChapters;
    }

    public void setSubChapters(List<SubChapter> subChapters) {
        this.subChapters = subChapters;
    }
}
