//package com.example.javaproject.controller;
//
//import com.example.javaproject.model.Users;
//import com.example.javaproject.service.UsersService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/users")
//public class UsersController {
//    @GetMapping("/root")
//    public String apiRoot(){
//        return "Hello, World!";
//    }
//
//    @Autowired
//    private UsersService usersService;
//
//    @GetMapping
//    public List<Users> getAllUsers() {
//        return usersService.getAllUsers();
//    }
//
//    @GetMapping("/{id}")
//    public Users getUserById(@PathVariable String id) {
//        return usersService.getUserById(id);
//    }
//
//    @GetMapping("/username/{username}")
//    public Users getUserByUsername(@PathVariable String username) {
//        return usersService.getUserByUsername(username);
//    }
//
//    @PostMapping
//    public Users createUser(@RequestBody Users user) {
//        return usersService.saveUser(user);
//    }
//
//    @PutMapping("/{id}")
//    public Users updateUser(@PathVariable String id, @RequestBody Users user) {
//        user.setId(id);
//        return usersService.saveUser(user);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteUser(@PathVariable String id) {
//        usersService.deleteUser(id);
//    }
//}

//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Users;
//import com.example.javaproject.service.UsersService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/users")
//@CrossOrigin(origins = "http://localhost:3000")
//public class UsersController {
//
//    @Autowired
//    private UsersService usersService;
//
//    @GetMapping("/root")
//    public String apiRoot() {
//        return "Hello, World!";
//    }
//
//    @GetMapping
//    public List<Users> getAllUsers() {
//        return usersService.getAllUsers();
//    }
//
//    @GetMapping("/{id}")
//    public Users getUserById(@PathVariable String id) {
//        return usersService.getUserById(id).orElse(null);
//    }
//
//    @GetMapping("/username/{username}")
//    public Users getUserByUsername(@PathVariable String username) {
//        return usersService.getUserByUsername(username);
//    }
//
//    @PostMapping
//    public Users createUser(@RequestBody Users user) {
//        return usersService.saveUser(user);
//    }
//
//    @PutMapping("/{id}")
//    public Users updateUser(@PathVariable String id, @RequestBody Users user) {
//        user.setId(id);
//        return usersService.saveUser(user);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteUser(@PathVariable String id) {
//        usersService.deleteUser(id);
//    }
//}

package com.example.javaproject.contollers;

import com.example.javaproject.model.Users;
import com.example.javaproject.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/countByType")
    public Map<String, Long> getCountByType() {
        List<Users> users = usersService.getAllUsers();
        System.out.println("Users fetched: " + users.size()); // Logging

        Map<String, Long> countByType = users.stream()
                .collect(Collectors.groupingBy(Users::getUserType, Collectors.counting()));

        System.out.println("Count by type: " + countByType); // Logging
        return countByType;
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable String id) {
        return usersService.getUserById(id);
    }

    @GetMapping("/username/{username}")
    public Users getUserByUsername(@PathVariable String username) {
        return usersService.getUserByUsername(username);
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersService.saveUser(user);
    }

    @PutMapping("/{id}")
    public Users updateUser(@PathVariable String id, @RequestBody Users user) {
        user.setId(id);
        return usersService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        usersService.deleteUser(id);
    }

    @GetMapping("/{username}/courses")
    public List<String> getEnrolledCourses(@PathVariable String username) {
        return usersService.getEnrolledCourses(username);
    }

    @PostMapping("/{username}/courses/{courseId}")
    public Users enrollCourse(@PathVariable String username, @PathVariable String courseId) {
        return usersService.enrollCourse(username, courseId);
    }
}
