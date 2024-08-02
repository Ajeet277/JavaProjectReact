//package com.example.javaproject.service;
//
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.repository.SubChapterRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class SubChapterService {
//    @Autowired
//    private SubChapterRepository subChapterRepository;
//
//    public List<SubChapter> getAllSubChapters() {
//        return subChapterRepository.findAll();
//    }
//
//    public SubChapter saveSubChapter(SubChapter subChapter) {
//        return subChapterRepository.save(subChapter);
//    }
//}

//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class SubChapterService {
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public Course addSubChapter(String courseId, String chapterId, SubChapter subChapter) {
//        Course course = courseRepository.findById(courseId).orElseThrow();
//        Chapter chapter = course.getChapters().stream().filter(c -> c.getId().equals(chapterId)).findFirst().orElseThrow();
//        chapter.getSubChapters().add(subChapter);
//        return courseRepository.save(course);
//    }
//}
//
////last
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//
//@Service
//public class SubChapterService {
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public Course addSubChapter(String courseId, String chapterId, SubChapter subChapter) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        Chapter chapter = course.getChapters().stream()
//                .filter(c -> c.getId().equals(chapterId))
//                .findFirst()
//                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with id: " + chapterId));
//
//        if (chapter.getSubChapters() == null) {
//            chapter.setSubChapters(new ArrayList<>());
//        }
//
//        subChapter.setChapter(chapter);
//        chapter.getSubChapters().add(subChapter);
//
//        return courseRepository.save(course);
//    }
//}

//chapterid
//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//
//@Service
//public class SubChapterService {
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public Course addSubChapter(String courseId, String chapterId, SubChapter subChapter) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        Chapter chapter = course.getChapters().stream()
//                .filter(c -> c.getId().equals(chapterId))
//                .findFirst()
//                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with id: " + chapterId));
//
//        if (chapter.getSubChapters() == null) {
//            chapter.setSubChapters(new ArrayList<>());
//        }
//
//        subChapter.setChapter(chapter); // Set the parent chapter for the subchapter
//        chapter.getSubChapters().add(subChapter);
//
//        return courseRepository.save(course);
//    }
//}


//chaptername
//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//
//@Service
//public class SubChapterService {
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public Course addSubChapter(String courseId, String chapterName, SubChapter subChapter) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        Chapter chapter = course.getChapters().stream()
//                .filter(c -> c.getName().equalsIgnoreCase(chapterName))
//                .findFirst()
//                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with name: " + chapterName));
//
//        if (chapter.getSubChapters() == null) {
//            chapter.setSubChapters(new ArrayList<>());
//        }
//
//        subChapter.setChapter(chapter); // Set the parent chapter for the subchapter
//        chapter.getSubChapters().add(subChapter);
//
//        return courseRepository.save(course);
//    }
//
//    public Course getSubChapters(String courseId, String chapterName) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        Chapter chapter = course.getChapters().stream()
//                .filter(c -> c.getName().equalsIgnoreCase(chapterName))
//                .findFirst()
//                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with name: " + chapterName));
//
//        return course; // This will return the course object with subchapters
//    }
//}


//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Chapter;
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.SubChapter;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class SubChapterService {
//
//    private static final Logger logger = LoggerFactory.getLogger(SubChapterService.class);
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public void addSubChapter(String courseId, String chapterName, SubChapter subChapter) {
//        logger.info("Adding subchapter: {}, to course: {}, chapter: {}", subChapter.getName(), courseId, chapterName);
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        Chapter chapter = course.getChapters().stream()
//                .filter(c -> c.getName().equalsIgnoreCase(chapterName))
//                .findFirst()
//                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with name: " + chapterName));
//
//        chapter.getSubChapters().add(subChapter);
//        subChapter.setChapter(chapter); // Set the parent chapter for the subchapter
//
//        courseRepository.save(course);
//        logger.info("Subchapter added successfully");
//    }
//
//    public List<SubChapter> getSubChapters(String courseId, String chapterName) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));
//
//        Chapter chapter = course.getChapters().stream()
//                .filter(c -> c.getName().equalsIgnoreCase(chapterName))
//                .findFirst()
//                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with name: " + chapterName));
//
//        return chapter.getSubChapters();
//    }
//}


package com.example.javaproject.service;

import com.example.javaproject.model.Chapter;
import com.example.javaproject.model.Course;
import com.example.javaproject.model.SubChapter;
import com.example.javaproject.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubChapterService {

    @Autowired
    private CourseRepository courseRepository;

    public void addSubChapter(String courseId, String chapterName, SubChapter subChapter) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));

        Chapter chapter = course.getChapters().stream()
                .filter(c -> c.getName().equalsIgnoreCase(chapterName))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with name: " + chapterName));

        if (chapter.getId() == null) {
            throw new IllegalStateException("Chapter ID is null");
        }

        subChapter.setChapter(chapter);
        chapter.getSubChapters().add(subChapter);

        courseRepository.save(course);
    }

    public List<SubChapter> getSubChapters(String courseId, String chapterName) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));

        Chapter chapter = course.getChapters().stream()
                .filter(c -> c.getName().equalsIgnoreCase(chapterName))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Chapter not found with name: " + chapterName));

        return chapter.getSubChapters();
    }
}

