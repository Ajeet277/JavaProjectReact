//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.repository.ChapterRepository;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class ChapterService {
//    @Autowired
//    private ChapterRepository chapterRepository;
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public List<Chapter> getAllChapters() {
//        return chapterRepository.findAll();
//    }
//
//    public Chapter saveChapter(Chapter chapter) {
//        Optional<Course> courseOptional = courseRepository.findById(chapter.getCourse().getId());
//        if (!courseOptional.isPresent()) {
//            throw new IllegalArgumentException("Course ID not found: " + chapter.getCourse().getId());
//        }
//        chapter.setCourse(courseOptional.get());
//        return chapterRepository.save(chapter);
//    }
//}

//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.repository.ChapterRepository;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class ChapterService {
//
//    @Autowired
//    private ChapterRepository chapterRepository;
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public Course addChapter(String courseId, Chapter chapter) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        chapter.setCourse(course);
//        course.getChapters().add(chapter);
//
//        return courseRepository.save(course);
//    }
//
//    public List<Chapter> getChapters(String courseId) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        return course.getChapters();
//    }
//}
//
////last
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class ChapterService {
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public Chapter addChapter(String courseId, Chapter chapter) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        course.getChapters().add(chapter);
//        courseRepository.save(course);
//        return chapter;
//    }
//
//    public List<Chapter> getChapters(String courseId) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        return course.getChapters();
//    }
//}
//

package com.example.javaproject.service;

import com.example.javaproject.model.Chapter;
import com.example.javaproject.model.Course;
import com.example.javaproject.repository.ChapterRepository;
import com.example.javaproject.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapterService {

    @Autowired
    private ChapterRepository chapterRepository;

    @Autowired
    private CourseRepository courseRepository;

    public Course addChapter(String courseId, Chapter chapter) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));

        chapter.setCourse(course);
        course.getChapters().add(chapter);

        return courseRepository.save(course);
    }

    public List<Chapter> getChapters(String courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));

        return course.getChapters();
    }
}
