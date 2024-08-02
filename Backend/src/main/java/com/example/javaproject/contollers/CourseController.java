//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.service.CourseService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/courses")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CourseController {
//    @Autowired
//    private CourseService courseService;
//
////    @GetMapping
////    public List<Course> getAllCourses() {
////        return courseService.getAllCourses();
////    }
//    @GetMapping
//    public List<Course> getAllCourses() {
//        System.out.println("Fetching all courses...");
//        List<Course> courses = courseService.getAllCourses();
//        System.out.println("Number of courses fetched: " + courses.size());
//        return courses;
//    }
//
//    @PostMapping
//    public Course addCourse(@RequestBody Course course) {
//        return courseService.saveCourse(course);
//    }
//
//    @GetMapping("/{id}")
//    public Optional<Course> getCourseById(@PathVariable String id) {
//        return courseService.getCourseById(id);
//    }
//}
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.service.CourseService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/courses")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CourseController {
//    @Autowired
//    private CourseService courseService;
//
//    @GetMapping
//    public List<Course> getAllCourses() {
//        System.out.println("Fetching all courses...");
//        List<Course> courses = courseService.getAllCourses();
//        System.out.println("Number of courses fetched: " + courses.size());
//        return courses;
//    }
//
//    @PostMapping
//    public Course addCourse(@RequestBody Course course) {
//        return courseService.saveCourse(course);
//    }
//
//    @GetMapping("/{id}")
//    public Optional<Course> getCourseById(@PathVariable String id) {
//        return courseService.getCourseById(id);
//    }
//
//    @GetMapping("/teacher/{username}/total")
//    public ResponseEntity<Map<String, Integer>> getTotalCoursesByTeacher(@PathVariable String username) {
//        int totalCourses = courseService.getTotalCoursesByTeacher(username);
//        Map<String, Integer> response = new HashMap<>();
//        response.put("totalCourses", totalCourses);
//        return ResponseEntity.ok(response);
//    }
//}

package com.example.javaproject.controllers;

import com.example.javaproject.model.Course;
import com.example.javaproject.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses() {
        System.out.println("Fetching all courses...");
        List<Course> courses = courseService.getAllCourses();
        System.out.println("Number of courses fetched: " + courses.size());
        return courses;
    }

    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @GetMapping("/{id}")
    public Optional<Course> getCourseById(@PathVariable String id) {
        return courseService.getCourseById(id);
    }

    @GetMapping("/teacher/{username}/total")
    public ResponseEntity<Map<String, Integer>> getTotalCoursesByTeacher(@PathVariable String username) {
        int totalCourses = courseService.getTotalCoursesByTeacher(username);
        Map<String, Integer> response = new HashMap<>();
        response.put("totalCourses", totalCourses);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteCourse(@PathVariable String id) {
        boolean isDeleted = courseService.deleteCourseById(id);
        Map<String, String> response = new HashMap<>();
        if (isDeleted) {
            response.put("message", "Course deleted successfully");
        } else {
            response.put("message", "Course not found");
        }
        return ResponseEntity.ok(response);
    }
}
