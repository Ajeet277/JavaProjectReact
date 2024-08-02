//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Users;
//import com.example.javaproject.repository.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class UsersService {
//
//    @Autowired
//    private UsersRepository usersRepository;
//
//    public List<Users> getAllUsers() {
//        return usersRepository.findAll();
//    }
//
//    public Users getUserById(String id) {
//        return usersRepository.findById(id).orElse(null);
//    }
//
//    public Users getUserByUsername(String username) {
//        return usersRepository.findByUsername(username);
//    }
//
//    public Users saveUser(Users user) {
//        return usersRepository.save(user);
//    }
//
//    public void deleteUser(String id) {
//        usersRepository.deleteById(id);
//    }
//}
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Users;
//import com.example.javaproject.repository.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class UsersService {
//
//    @Autowired
//    private UsersRepository usersRepository;
//
//    public Users saveUser(Users user) {
//        return usersRepository.save(user);
//    }
//
//    public Optional<Users> getUserById(String id) {
//        return usersRepository.findById(id);
//    }
//}
//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Users;
//import com.example.javaproject.repository.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UsersService {
//
//    @Autowired
//    private UsersRepository usersRepository;
//
//    public Users saveUser(Users user) {
//        return usersRepository.save(user);
//    }
//
//    public Optional<Users> getUserById(String id) {
//        return usersRepository.findById(id);
//    }
//
//    public Users getUserByUsername(String username) {
//        return usersRepository.findByUsername(username);
//    }
//
//    public List<Users> getAllUsers() {
//        return usersRepository.findAll();
//    }
//
//    public void deleteUser(String id) {
//        usersRepository.deleteById(id);
//    }
//}

package com.example.javaproject.service;

import com.example.javaproject.model.Users;
import com.example.javaproject.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    public Users getUserById(String id) {
        return usersRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
    }

    public Users getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public void deleteUser(String id) {
        usersRepository.deleteById(id);
    }

    public Users enrollCourse(String username, String courseId) {
        Users user = usersRepository.findByUsername(username);
        if (user != null && "student".equals(user.getUserType())) {
            user.getEnrolledCourses().add(courseId);
            return usersRepository.save(user);
        }
        return null;
    }

    public List<String> getEnrolledCourses(String username) {
        Users user = usersRepository.findByUsername(username);
        return user != null ? user.getEnrolledCourses() : null;
    }

    public boolean isUserEnrolledInCourse(String username, String courseId) {
        Users user = usersRepository.findByUsername(username);
        if (user == null) {
            return false;
        }
        boolean isEnrolled = user.getEnrolledCourses().contains(courseId);
        System.out.println("User " + username + " enrollment status for course " + courseId + ": " + isEnrolled);
        return isEnrolled;
    }
}
