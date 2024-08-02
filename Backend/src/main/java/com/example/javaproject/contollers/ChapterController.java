//package com.example.javaproject.controller;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.service.ChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/chapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ChapterController {
//    @Autowired
//    private ChapterService chapterService;
//
//    @GetMapping
//    public List<Chapter> getAllChapters() {
//        return chapterService.getAllChapters();
//    }
//
//    @PostMapping
//    public Chapter addChapter(@RequestBody Chapter chapter) {
//        return chapterService.saveChapter(chapter);
//    }
//}

//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.service.ChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ChapterController {
//
//    @Autowired
//    private ChapterService chapterService;
//
//    @PostMapping
//    public Course addChapter(@PathVariable String courseId, @RequestBody Chapter chapter) {
//        return chapterService.addChapter(courseId, chapter);
//    }
//
//    @GetMapping
//    public List<Chapter> getChapters(@PathVariable String courseId) {
//        return chapterService.getChapters(courseId);
//    }
//}

//
////last
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.service.ChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ChapterController {
//
//    @Autowired
//    private ChapterService chapterService;
//
//    @PostMapping
//    public Chapter addChapter(@PathVariable String courseId, @RequestBody Chapter chapter) {
//        return chapterService.addChapter(courseId, chapter);
//    }
//
//    @GetMapping
//    public List<Chapter> getChapters(@PathVariable String courseId) {
//        return chapterService.getChapters(courseId);
//    }
//}
//


package com.example.javaproject.contollers;

import com.example.javaproject.model.Chapter;
import com.example.javaproject.model.Course;
import com.example.javaproject.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses/{courseId}/chapters")
@CrossOrigin(origins = "http://localhost:3000")
public class ChapterController {

    @Autowired
    private ChapterService chapterService;

    @PostMapping
    public Course addChapter(@PathVariable String courseId, @RequestBody Chapter chapter) {
        return chapterService.addChapter(courseId, chapter);
    }

    @GetMapping
    public List<Chapter> getChapters(@PathVariable String courseId) {
        return chapterService.getChapters(courseId);
    }
}
