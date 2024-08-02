//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.DBRef;
//
//@Document(collection = "videos")
//public class Video {
//    @Id
//    private String id;
//    private String url;
//
//    @DBRef
//    private SubChapter subChapter;
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
//    public String getUrl() {
//        return url;
//    }
//
//    public void setUrl(String url) {
//        this.url = url;
//    }
//
//    public SubChapter getSubChapter() {
//        return subChapter;
//    }
//
//    public void setSubChapter(SubChapter subChapter) {
//        this.subChapter = subChapter;
//    }
//}

//prev
//package com.example.javaproject.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.io.InputStream;
//
//@Document(collection = "videos")
//public class Video {
//    @Id
//    private String id;
//    private String fileId;
//    private String courseId;
//    private String chapterId;
//    private String subChapterId;
//    private InputStream stream;
//    private String title;
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
//    public String getFileId() {
//        return fileId;
//    }
//
//    public void setFileId(String fileId) {
//        this.fileId = fileId;
//    }
//
//    public String getCourseId() {
//        return courseId;
//    }
//
//    public void setCourseId(String courseId) {
//        this.courseId = courseId;
//    }
//
//    public String getChapterId() {
//        return chapterId;
//    }
//
//    public void setChapterId(String chapterId) {
//        this.chapterId = chapterId;
//    }
//
//    public String getSubChapterId() {
//        return subChapterId;
//    }
//
//    public void setSubChapterId(String subChapterId) {
//        this.subChapterId = subChapterId;
//    }
//
//    public InputStream getStream() {
//        return stream;
//    }
//
//    public void setStream(InputStream stream) {
//        this.stream = stream;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//}
//

package com.example.javaproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.InputStream;

@Document(collection = "videos")
public class Video {
    @Id
    private String id;
    private String title;
    private String contentType;
    private long length;
    private InputStream stream;
    private String subChapterId;
    private String chapterId;
    private String courseId;
    private String fileId;

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public long getLength() {
        return length;
    }

    public void setLength(long length) {
        this.length = length;
    }

    public InputStream getStream() {
        return stream;
    }

    public void setStream(InputStream stream) {
        this.stream = stream;
    }

    public String getSubChapterId() {
        return subChapterId;
    }

    public void setSubChapterId(String subChapterId) {
        this.subChapterId = subChapterId;
    }

    public String getChapterId() {
        return chapterId;
    }

    public void setChapterId(String chapterId) {
        this.chapterId = chapterId;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getFileId() {
        return fileId;
    }

    public void setFileId(String fileId) {
        this.fileId = fileId;
    }
}
