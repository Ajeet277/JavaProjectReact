//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.DBRef;
//
//import java.util.List;
//
//@Document(collection = "subchapters")
//public class SubChapter {
//    @Id
//    private String id;
//    private String name;
//
//    @DBRef
//    private Chapter chapter;
//
//    @DBRef
//    private List<Video> videos;
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
//    public Chapter getChapter() {
//        return chapter;
//    }
//
//    public void setChapter(Chapter chapter) {
//        this.chapter = chapter;
//    }
//
//    public List<Video> getVideos() {
//        return videos;
//    }
//
//    public void setVideos(List<Video> videos) {
//        this.videos = videos;
//    }
//}
//
//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//@Document(collection = "subChapters")
//public class SubChapter {
//    @Id
//    private String id;
//    private String name;
//    private String description;
//    private Chapter chapter;
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
//    public Chapter getChapter() {
//        return chapter;
//    }
//    public void setChapter(Chapter chapter) {
//        this.chapter = chapter;
//    }
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
//}
//
////last
//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.DBRef;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//@Document(collection = "subChapters")
//public class SubChapter {
//    @Id
//    private String id;
//    private String name;
//
//    @DBRef
//    private Chapter chapter;
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
//    public Chapter getChapter() {
//        return chapter;
//    }
//
//    public void setChapter(Chapter chapter) {
//        this.chapter = chapter;
//    }
//}


package com.example.javaproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Document(collection = "subchapters")
public class SubChapter {
    @Id
    private String id;
    private String name;

    @DBRef
    @JsonBackReference
    private Chapter chapter;

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
