//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class CourseService {
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public List<Course> getAllCourses() {
//        return courseRepository.findAll();
//    }
//
//    public Course saveCourse(Course course) {
//        return courseRepository.save(course);
//    }
//}

//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.repository.CourseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CourseService {
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public List<Course> getAllCourses() {
//        return courseRepository.findAll();
//    }
//
//    public Course saveCourse(Course course) {
//        return courseRepository.save(course);
//    }
//
//    public Optional<Course> getCourseById(String id) {
//        return courseRepository.findById(id);
//    }
//}
//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Course;
//import com.example.javaproject.model.Users;
//import com.example.javaproject.repository.CourseRepository;
//import com.example.javaproject.repository.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CourseService {
//
//    @Autowired
//    private UsersRepository userRepository;
//    @Autowired
//    private CourseRepository courseRepository;
//
//    public List<Course> getAllCourses() {
//        return courseRepository.findAll();
//    }
//
//    public Course saveCourse(Course course) {
//        return courseRepository.save(course);
//    }
//
//    public Optional<Course> getCourseById(String id) {
//        return courseRepository.findById(id);
//    }
//
//    public int getTotalCoursesByTeacher(String username) {
//        Users user = userRepository.findByUsername(username);
//        if (user != null && "teacher".equals(user.getUserType())) {
//            return courseRepository.countByTeacherUsername(username);
//        } else {
//            throw new IllegalArgumentException("User is not a teacher or does not exist");
//        }
//    }
//}

package com.example.javaproject.service;

import com.example.javaproject.model.Course;
import com.example.javaproject.model.Users;
import com.example.javaproject.repository.CourseRepository;
import com.example.javaproject.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private UsersRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public Optional<Course> getCourseById(String id) {
        return courseRepository.findById(id);
    }

    public int getTotalCoursesByTeacher(String username) {
        Users user = userRepository.findByUsername(username);
        if (user != null && "teacher".equals(user.getUserType())) {
            return courseRepository.countByTeacherUsername(username);
        } else {
            throw new IllegalArgumentException("User is not a teacher or does not exist");
        }
    }

    public boolean deleteCourseById(String id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            courseRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

