////package com.example.javaproject.controller;
////
////import com.example.javaproject.model.SubChapter;
////import com.example.javaproject.service.SubChapterService;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.web.bind.annotation.*;
////
////import java.util.List;
////
////@RestController
////@RequestMapping("/api/subchapters")
//////@CrossOrigin(origins = "http://localhost:3000")
////public class SubChapterController {
////    @Autowired
////    private SubChapterService subChapterService;
////
////    @GetMapping
////    public List<SubChapter> getAllSubChapters() {
////        return subChapterService.getAllSubChapters();
////    }
////
////    @PostMapping
////    public SubChapter addSubChapter(@RequestBody SubChapter subChapter) {
////        return subChapterService.saveSubChapter(subChapter);
////    }
////}
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.service.SubChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters/{chapterId}/subchapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class SubChapterController {
//
//    @Autowired
//    private SubChapterService subChapterService;
//
//    @PostMapping
//    public Course addSubChapter(@PathVariable String courseId, @PathVariable String chapterId, @RequestBody SubChapter subChapter) {
//        return subChapterService.addSubChapter(courseId, chapterId, subChapter);
//    }
//}
//
//// SubChapterController.java
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.service.SubChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters/{chapterId}/subChapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class SubChapterController {
//
//    @Autowired
//    private SubChapterService subChapterService;
//
//    @PostMapping
//    public Course addSubChapter(@PathVariable String courseId, @PathVariable String chapterId, @RequestBody SubChapter subChapter) {
//        return subChapterService.addSubChapter(courseId, chapterId, subChapter);
//    }
//}

//
////last
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.service.SubChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters/{name}/subChapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class SubChapterController {
//
//    @Autowired
//    private SubChapterService subChapterService;
//
//    @PostMapping
//    public Course addSubChapter(@PathVariable String courseId, @PathVariable String name, @RequestBody SubChapter subChapter) {
//        return subChapterService.addSubChapter(courseId, name, subChapter);
//    }
//}

//chapterid
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.service.SubChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters/{chapterId}/subchapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class SubChapterController {
//
//    @Autowired
//    private SubChapterService subChapterService;
//
//    @PostMapping
//    public Course addSubChapter(@PathVariable String courseId, @PathVariable String chapterId, @RequestBody SubChapter subChapter) {
//        return subChapterService.addSubChapter(courseId, chapterId, subChapter);
//    }
//}

//chaptername
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.service.SubChapterService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/courses/{courseId}/chapters")
//@CrossOrigin(origins = "http://localhost:3000")
//public class SubChapterController {
//
//    @Autowired
//    private SubChapterService subChapterService;
//
//    @GetMapping("/{chapterName}/subchapters")
//    public Course getSubChapters(@PathVariable String courseId, @PathVariable String chapterName) {
//        return subChapterService.getSubChapters(courseId, chapterName);
//    }
//    @PostMapping("/{chapterName}/subChapters")
//    public Course addSubChapter(@PathVariable String courseId, @PathVariable String chapterName, @RequestBody SubChapter subChapter) {
//        return subChapterService.addSubChapter(courseId, chapterName, subChapter);
//    }
//}

package com.example.javaproject.contollers;

import com.example.javaproject.model.SubChapter;
import com.example.javaproject.service.SubChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses/{courseId}/chapters")
@CrossOrigin(origins = "http://localhost:3000")
public class SubChapterController {

    @Autowired
    private SubChapterService subChapterService;

    @PostMapping("/{chapterName}/subchapters")
    public void addSubChapter(@PathVariable String courseId, @PathVariable String chapterName, @RequestBody SubChapter subChapter) {
        subChapterService.addSubChapter(courseId, chapterName, subChapter);
    }

    @GetMapping("/{chapterName}/subchapters")
    public List<SubChapter> getSubChapters(@PathVariable String courseId, @PathVariable String chapterName) {
        return subChapterService.getSubChapters(courseId, chapterName);
    }
}
