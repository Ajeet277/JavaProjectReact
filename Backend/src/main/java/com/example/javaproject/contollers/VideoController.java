//package com.example.javaproject.controller;
//
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) throws IOException {
//        String videoId = videoService.uploadVideo(file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<byte[]> getVideo(@PathVariable String id) throws IOException {
//        byte[] video = videoService.getVideo(id);
//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + id + "\"")
//                .contentType(MediaType.APPLICATION_OCTET_STREAM)
//                .body(video);
//    }
//}
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.service.VideoService;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.data.mongodb.gridfs.GridFsResource;
//
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/videos")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
//        try {
//            ObjectId id = videoService.uploadVideo(file);
//            return ResponseEntity.ok(id.toString());
//        } catch (IOException e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/download/{id}")
//    public ResponseEntity<byte[]> downloadVideo(@PathVariable String id) {
//        try {
//            GridFsResource resource = videoService.downloadVideo(new ObjectId(id));
//            byte[] data = resource.getInputStream().readAllBytes();
//
//            HttpHeaders headers = new HttpHeaders();
//            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//            headers.setContentLength(data.length);
//            headers.set("Content-Disposition", "attachment; filename=\"" + resource.getFilename() + "\"");
//
//            return ResponseEntity.ok().headers(headers).body(data);
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(null);
//        }
//    }
//}
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.service.VideoService;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.data.mongodb.gridfs.GridFsResource;
//
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/api/videos")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadVideo(@RequestParam("video") MultipartFile file, @RequestParam("subChapterId") String subChapterId) {
//        try {
//            ObjectId id = videoService.uploadVideo(file, subChapterId);
//            return ResponseEntity.ok(id.toString());
//        } catch (IOException e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/download/{id}")
//    public ResponseEntity<byte[]> downloadVideo(@PathVariable String id) {
//        try {
//            GridFsResource resource = videoService.downloadVideo(new ObjectId(id));
//            byte[] data = resource.getInputStream().readAllBytes();
//
//            HttpHeaders headers = new HttpHeaders();
//            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//            headers.setContentLength(data.length);
//            headers.set("Content-Disposition", "attachment; filename=\"" + resource.getFilename() + "\"");
//
//            return ResponseEntity.ok().headers(headers).body(data);
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(null);
//        }
//    }
//}

//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.service.VideoService;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.data.mongodb.gridfs.GridFsResource;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/api/videos")
//public class VideoController {
//
//    private static final Logger logger = LoggerFactory.getLogger(VideoController.class);
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadVideo(@RequestParam("video") MultipartFile file, @RequestParam("subChapterId") String subChapterId) {
//        logger.debug("Upload request received. SubChapterId: {}", subChapterId);
//
//        try {
//            ObjectId id = videoService.uploadVideo(file, subChapterId);
//            logger.debug("Video uploaded successfully. ID: {}", id.toString());
//            return ResponseEntity.ok(id.toString());
//        } catch (IOException e) {
//            logger.error("Error uploading video: ", e);
//            return ResponseEntity.status(500).body("Error uploading video: " + e.getMessage());
//        } catch (Exception e) {
//            logger.error("Unexpected error: ", e);
//            return ResponseEntity.status(500).body("Unexpected error: " + e.getMessage());
//        }
//    }
//
//    @GetMapping("/download/{id}")
//    public ResponseEntity<byte[]> downloadVideo(@PathVariable String id) {
//        logger.debug("Download request received. ID: {}", id);
//
//        try {
//            GridFsResource resource = videoService.downloadVideo(new ObjectId(id));
//            byte[] data = resource.getInputStream().readAllBytes();
//
//            HttpHeaders headers = new HttpHeaders();
//            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//            headers.setContentLength(data.length);
//            headers.set("Content-Disposition", "attachment; filename=\"" + resource.getFilename() + "\"");
//
//            logger.debug("Video downloaded successfully. ID: {}", id);
//            return ResponseEntity.ok().headers(headers).body(data);
//        } catch (Exception e) {
//            logger.error("Error downloading video: ", e);
//            return ResponseEntity.status(500).body(null);
//        }
//    }
//}
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//@RestController
//@RequestMapping("/videos")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file,
//                                              @RequestParam("subChapterId") String subChapterId) {
//        try {
//            videoService.uploadVideo(file, subChapterId);
//            return new ResponseEntity<>("Video uploaded successfully", HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Failed to upload video", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    // Additional endpoints (e.g., for fetching or deleting videos) can be added here
//}
//


//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.ui.Model;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.FileCopyUtils;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> addVideo(@RequestParam("title") String title, @RequestParam("file") MultipartFile file) throws IOException {
//        String id = videoService.addVideo(title, file);
//        return ResponseEntity.ok(id);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Video> getVideo(@PathVariable String id) throws IOException {
//        Video video = videoService.getVideo(id);
//        return ResponseEntity.ok(video);
//    }
//
//    @GetMapping("/stream/{id}")
//    public void streamVideo(@PathVariable String id, HttpServletResponse response) throws Exception {
//        Video video = videoService.getVideo(id);
//        FileCopyUtils.copy(video.getStream(), response.getOutputStream());
//    }
//}
//
////final

//
//package com.example.javaproject.contollers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.FileCopyUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.VideoService;
//
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> addVideo(@RequestParam("courseId") String courseId,
//                                           @RequestParam("chapterId") String chapterId,
//                                           @RequestParam("subChapterId") String subChapterId,
//                                           @RequestParam("file") MultipartFile file) throws IOException {
//        String id = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(id);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Video> getVideo(@PathVariable String id) throws IOException {
//        Video video = videoService.getVideo(id);
//        return ResponseEntity.ok(video);
//    }
//
//    @GetMapping("/stream/{id}")
//    public void streamVideo(@PathVariable String id, HttpServletResponse response) throws Exception {
//        Video video = videoService.getVideo(id);
//        InputStream videoStream = videoService.getVideoStream(video);
//
//        response.setContentType("video/mp4"); // Set the appropriate content type for the video
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//}
//
//


////previous
//
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.CourseRegistrationService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.FileCopyUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private CourseRegistrationService courseRegistrationService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public void streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        Video video = videoService.getVideo(id);
//
//        // Check if the student is registered for the course
//        if (!courseRegistrationService.isStudentRegisteredForCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video);
//        response.setContentType("video/mp4"); // Set the appropriate content type for the video
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//}

//package com.example.javaproject.controllers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.CourseRegistrationService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.FileCopyUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private CourseRegistrationService courseRegistrationService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public void streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        Video video = videoService.getVideo(id);
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4"); // Set the appropriate content type for the video
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public void streamVideoBySubChapterId(@PathVariable String subChapterId, @RequestParam("studentId") String studentId, HttpServletResponse response) throws IOException {
//        Video video = videoService.getVideoBySubChapterId(subChapterId);
//
//        // Check if the student is registered for the course
//        if (!courseRegistrationService.isStudentRegisteredForCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType(video.getContentType()); // Set the appropriate content type for the video
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//}


//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.UsersService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.FileCopyUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private UsersService usersService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public void streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        Video video = videoService.getVideo(id);
//
//        // Check if the student is registered for the course
//        if (!usersService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4"); // Set the appropriate content type for the video
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public void streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
//        Video video = videoService.getVideoBySubChapterId(subChapterId);
//
//        // Check if the student is registered for the course
//        if (!usersService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType(video.getContentType()); // Set the appropriate content type for the video
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//}

//streming little working
//package com.example.javaproject.controllers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.UsersService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.FileCopyUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private UsersService usersService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public void streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        Video video = videoService.getVideo(id);
//
//        if (!usersService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        FileCopyUtils.copy(videoStream, response.getOutputStream());
//    }
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public ResponseEntity<Video> streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
//        try {
//            Video video = videoService.getVideoBySubChapterId(subChapterId);
//
//            if (!usersService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                return ResponseEntity.status(HttpServletResponse.SC_FORBIDDEN).body(null);
//            }
//
//            return ResponseEntity.ok(video);
//        } catch (IllegalStateException e) {
//            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Video not found");
//            return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body(null);
//        } catch (IOException e) {
//            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error streaming video");
//            return ResponseEntity.status(HttpServletResponse.SC_INTERNAL_SERVER_ERROR).body(null);
//        }
//    }
//}


//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.UsersService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.StreamUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private UsersService userService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public StreamingResponseBody streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        System.out.println("Streaming video for ID: " + id);
//        Video video = videoService.getVideo(id);
//        System.out.println("Streaming video file ID: " + video.getFileId());
//        if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return null;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        return outputStream -> StreamUtils.copy(videoStream, outputStream);
//    }
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public StreamingResponseBody streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
//        System.out.println("Fetching video for Subchapter ID: " + subChapterId);
//        Video video = videoService.getVideoBySubChapterId(subChapterId);
//        System.out.println("Fetched video file ID: " + video.getFileId());
//
//        if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return null;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        return outputStream -> StreamUtils.copy(videoStream, outputStream);
//    }
//}

//working little bit
//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.UsersService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.StreamUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private UsersService userService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public StreamingResponseBody streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        System.out.println("Streaming video for ID: " + id);
//        Video video = videoService.getVideo(id);
//        System.out.println("Streaming video file ID: " + video.getFileId());
//        if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return null;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        return outputStream -> StreamUtils.copy(videoStream, outputStream);
//    }
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public ResponseEntity<Video> streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
//        System.out.println("Fetching video for Subchapter ID: " + subChapterId);
//        Video video = videoService.getVideoBySubChapterId(subChapterId);
//        System.out.println("Fetched video file ID: " + video.getFileId());
//
//        if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return ResponseEntity.status(HttpServletResponse.SC_FORBIDDEN).body(null);
//        }
//
//        return ResponseEntity.ok(video);
//    }
//}


//package com.example.javaproject.contollers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.UsersService;
//import com.example.javaproject.service.VideoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.StreamUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
//import org.springframework.web.multipart.MultipartFile;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//import org.apache.catalina.connector.ClientAbortException;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private UsersService userService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public StreamingResponseBody streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        System.out.println("Streaming video for ID: " + id);
//
//        if (!userService.isUserEnrolledInCourse(studentId, id)) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return null;
//        }
//
//        Video video = videoService.getVideo(id);
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        return outputStream -> {
//            try {
//                StreamUtils.copy(videoStream, outputStream);
//            } catch (ClientAbortException e) {
//                System.out.println("Client aborted the connection: " + e.getMessage());
//            } catch (IOException e) {
//                e.printStackTrace();
//            } finally {
//                videoStream.close();
//            }
//        };
//    }
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public ResponseEntity<Video> streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
//        try {
//            System.out.println("Fetching video for Subchapter ID: " + subChapterId);
//            Video video = videoService.getVideoBySubChapterId(subChapterId);
//            System.out.println("Fetched video file ID: " + video.getFileId());
//
//            if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                return ResponseEntity.status(HttpServletResponse.SC_FORBIDDEN).body(null);
//            }
//
//            return ResponseEntity.ok(video);
//        } catch (IllegalStateException e) {
//            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Video not found");
//            return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body(null);
//        } catch (IOException e) {
//            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error streaming video");
//            return ResponseEntity.status(HttpServletResponse.SC_INTERNAL_SERVER_ERROR).body(null);
//        }
//    }
//}

//package com.example.javaproject.controllers;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.service.UsersService;
//import com.example.javaproject.service.VideoService;
//import org.apache.catalina.connector.ClientAbortException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.StreamUtils;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
//
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.InputStream;
//
//@RestController
//@RequestMapping("/api/videos")
//@CrossOrigin(origins = "http://localhost:3000")
//public class VideoController {
//
//    @Autowired
//    private VideoService videoService;
//
//    @Autowired
//    private UsersService userService;
//
//    @PostMapping("/add")
//    public ResponseEntity<String> uploadVideo(
//            @RequestParam("courseId") String courseId,
//            @RequestParam("chapterId") String chapterId,
//            @RequestParam("subChapterId") String subChapterId,
//            @RequestParam("file") MultipartFile file) throws IOException {
//
//        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
//        return ResponseEntity.ok(videoId);
//    }
//
//    @GetMapping("/stream/{id}")
//    public StreamingResponseBody streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        System.out.println("Streaming video for ID: " + id);
//
//        Video video = videoService.getVideo(id);
//        String courseId = video.getCourseId();
//        System.out.println("Course ID for video: " + courseId);
//
//        if (!userService.isUserEnrolledInCourse(studentId, courseId)) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return null;
//        }
//
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        return outputStream -> {
//            try {
//                StreamUtils.copy(videoStream, outputStream);
//            } catch (IOException e) {
//                e.printStackTrace();
//            } finally {
//                videoStream.close();
//            }
//        };
//    }
//
//
//    @GetMapping("/subchapter/{subChapterId}")
//    public ResponseEntity<Video> streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
//        try {
//            System.out.println("Fetching video for Subchapter ID: " + subChapterId);
//            Video video = videoService.getVideoBySubChapterId(subChapterId);
//            System.out.println("Fetched video file ID: " + video.getFileId());
//
//            if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                return ResponseEntity.status(HttpServletResponse.SC_FORBIDDEN).body(null);
//            }
//
//            return ResponseEntity.ok(video);
//        } catch (IllegalStateException e) {
//            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Video not found");
//            return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body(null);
//        } catch (IOException e) {
//            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error streaming video");
//            return ResponseEntity.status(HttpServletResponse.SC_INTERNAL_SERVER_ERROR).body(null);
//        }
//    }
//}

//
//    @GetMapping("/stream/{id}")
//    public StreamingResponseBody streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
//        if (!userService.isUserEnrolledInCourse(studentId, id)) {
//            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//            return null;
//        }
//
//        Video video = videoService.getVideo(id);
//        InputStream videoStream = videoService.getVideoStream(video.getFileId());
//        response.setContentType("video/mp4");
//        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
//        response.setHeader("Accept-Ranges", "bytes");
//
//        return outputStream -> {
//            try {
//                StreamUtils.copy(videoStream, outputStream);
//            } catch (ClientAbortException e) {
//                // Client aborted the connection
//                System.out.println("Client aborted the connection while streaming video for ID: " + id);
//            } catch (IOException e) {
//                // Other I/O errors
//                e.printStackTrace();
//                throw new RuntimeException("Error streaming video for ID: " + id, e);
//            } finally {
//                if (videoStream != null) {
//                    try {
//                        videoStream.close();
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                    }
//                }
//            }
//        };
//    }

package com.example.javaproject.contollers;

import com.example.javaproject.model.Video;
import com.example.javaproject.service.UsersService;
import com.example.javaproject.service.VideoService;
import org.apache.catalina.connector.ClientAbortException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin(origins = "http://localhost:3000")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @Autowired
    private UsersService userService;

    @PostMapping("/add")
    public ResponseEntity<String> uploadVideo(
            @RequestParam("courseId") String courseId,
            @RequestParam("chapterId") String chapterId,
            @RequestParam("subChapterId") String subChapterId,
            @RequestParam("file") MultipartFile file) throws IOException {

        String videoId = videoService.addVideo(courseId, chapterId, subChapterId, file);
        return ResponseEntity.ok(videoId);
    }

    @GetMapping("/stream/{id}")
    public StreamingResponseBody streamVideo(@RequestParam("studentId") String studentId, @PathVariable String id, HttpServletResponse response) throws Exception {
        System.out.println("Streaming video for ID: " + id);

        Video video = videoService.getVideo(id);
        String courseId = video.getCourseId();
        System.out.println("Course ID for video: " + courseId);

        if (!userService.isUserEnrolledInCourse(studentId, courseId)) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return null;
        }

        InputStream videoStream = videoService.getVideoStream(video.getFileId());
        response.setContentType("video/mp4");
        response.setHeader("Content-Disposition", "inline; filename=\"" + video.getTitle() + "\"");
        response.setHeader("Accept-Ranges", "bytes");

        return outputStream -> {
            try {
                StreamUtils.copy(videoStream, outputStream);
            } catch (ClientAbortException e) {
                System.out.println("Client aborted the connection.");
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    videoStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        };
    }

    @GetMapping("/subchapter/{subChapterId}")
    public ResponseEntity<Video> streamVideoBySubChapterId(@RequestParam("studentId") String studentId, @PathVariable String subChapterId, HttpServletResponse response) throws IOException {
        try {
            System.out.println("Fetching video for Subchapter ID: " + subChapterId);
            Video video = videoService.getVideoBySubChapterId(subChapterId);
            System.out.println("Fetched video file ID: " + video.getFileId());

            if (!userService.isUserEnrolledInCourse(studentId, video.getCourseId())) {
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                return ResponseEntity.status(HttpServletResponse.SC_FORBIDDEN).body(null);
            }

            return ResponseEntity.ok(video);
        } catch (IllegalStateException e) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Video not found");
            return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body(null);
        } catch (IOException e) {
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error streaming video");
            return ResponseEntity.status(HttpServletResponse.SC_INTERNAL_SERVER_ERROR).body(null);
        }
    }
}

