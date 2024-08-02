////package com.example.javaproject.service;
////
////import com.example.javaproject.model.Video;
////import com.example.javaproject.repository.VideoRepository;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import java.util.List;
////
////@Service
////public class VideoService {
////    @Autowired
////    private VideoRepository videoRepository;
////
////    public List<Video> getAllVideos() {
////        return videoRepository.findAll();
////    }
////
////    public Video saveVideo(Video video) {
////        return videoRepository.save(video);
////    }
////}
////
////package com.example.javaproject.service.VideoService;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////import org.springframework.web.multipart.MultipartFile;
////
////import java.io.IOException;
////
////@Service
////public class VideoService {
////
////    @Autowired
////    private VideoRepository videoRepository;
////
////    public void uploadVideo(MultipartFile file) throws IOException {
////        // Convert the uploaded video file to a byte array
////        byte[] videoBytes = file.getBytes();
////
////        // Create a new Video object with the binary data
////        Video video = new Video(videoBytes);
////
////        // Save the Video object to the database
////        videoRepository.save(video);
////    }
////}
//package com.example.javaproject.service;
//
//import com.mongodb.client.gridfs.GridFSBucket;
//import com.mongodb.client.gridfs.model.GridFSUploadOptions;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.ByteArrayOutputStream;
//import java.io.IOException;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFSBucket gridFSBucket;
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    public String uploadVideo(MultipartFile file) throws IOException {
//        GridFSUploadOptions options = new GridFSUploadOptions().metadata(new org.bson.Document("type", file.getContentType()));
//        ObjectId gridFsId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), options);
//        return gridFsId.toString();
//    }
//
//    public byte[] getVideo(String id) throws IOException {
//        ObjectId gridFsId = new ObjectId(id);
//        ByteArrayOutputStream baos = new ByteArrayOutputStream();
//        gridFSBucket.downloadToStream(gridFsId, baos);
//        return baos.toByteArray();
//    }
//}
//
//package com.example.javaproject.service;
//
//import com.mongodb.client.gridfs.GridFSBucket;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.gridfs.GridFsResource;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFSBucket gridFSBucket;
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    public ObjectId uploadVideo(MultipartFile file) throws IOException {
//        try (InputStream inputStream = file.getInputStream()) {
//            return gridFsTemplate.store(inputStream, file.getOriginalFilename(), file.getContentType());
//        }
//    }
//
//    public GridFsResource downloadVideo(ObjectId id) {
//        return gridFsTemplate.getResource(id.toHexString());
//    }
//}
//
//package com.example.javaproject.service;
//
//import com.mongodb.client.gridfs.GridFSBucket;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.gridfs.GridFsResource;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFSBucket gridFSBucket;
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    public ObjectId uploadVideo(MultipartFile file, String subChapterId) throws IOException {
//        try (InputStream inputStream = file.getInputStream()) {
//            return gridFsTemplate.store(inputStream, file.getOriginalFilename(), file.getContentType(), subChapterId);
//        }
//    }
//
//    public GridFsResource downloadVideo(ObjectId id) {
//        return gridFsTemplate.getResource(id.toHexString());
//    }
//}

//
//package com.example.javaproject.service;
//
//import com.mongodb.client.gridfs.GridFSBucket;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.gridfs.GridFsResource;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    private static final Logger logger = LoggerFactory.getLogger(VideoService.class);
//
//    @Autowired
//    private GridFSBucket gridFSBucket;
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    public ObjectId uploadVideo(MultipartFile file, String subChapterId) throws IOException {
//        logger.debug("Starting video upload. SubChapterId: {}, Filename: {}", subChapterId, file.getOriginalFilename());
//
//        try (InputStream inputStream = file.getInputStream()) {
//            ObjectId id = gridFsTemplate.store(inputStream, file.getOriginalFilename(), file.getContentType(), subChapterId);
//            logger.debug("Video stored successfully. ID: {}", id.toString());
//            return id;
//        } catch (IOException e) {
//            logger.error("Error storing video: ", e);
//            throw e;
//        } catch (Exception e) {
//            logger.error("Unexpected error: ", e);
//            throw e;
//        }
//    }
//
//    public GridFsResource downloadVideo(ObjectId id) {
//        logger.debug("Fetching video with ID: {}", id.toHexString());
//
//        try {
//            GridFsResource resource = gridFsTemplate.getResource(id.toHexString());
//            logger.debug("Video fetched successfully. Filename: {}", resource.getFilename());
//            return resource;
//        } catch (Exception e) {
//            logger.error("Error fetching video: ", e);
//            throw e;
//        }
//    }
//}
//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import org.bson.types.ObjectId;
//
//import java.io.IOException;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    public String addVideo(String title, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("title", title);
//        ObjectId id = gridFsTemplate.store(
//                file.getInputStream(), file.getName(), file.getContentType(), metaData);
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        Video video = new Video();
//        video.setTitle(file.getMetadata().get("title").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//        return video;
//    }
//}


//
////final

//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.example.javaproject.repository.VideoRepository;
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.management.Query;
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    @Autowired
//    private VideoRepository videoRepository;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId fileId = gridFsTemplate.store(
//                file.getInputStream(), file.getOriginalFilename(), file.getContentType(), metaData);
//
//        Video video = new Video();
//        video.setFileId(fileId.toString());
//        video.setCourseId(courseId);
//        video.setChapterId(chapterId);
//        video.setSubChapterId(subChapterId);
//
//        video = videoRepository.save(video);
//        return video.getId();
//    }
//
//    public InputStream getVideoStream(String id) throws IOException {
//        Video video = videoRepository.findById(id).orElseThrow(() -> new RuntimeException("Video not found"));
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(video.getFileId())));
//        return operations.getResource(file).getInputStream();
//    }
//}


//



////previous

//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import com.mongodb.DBObject;
//import com.mongodb.BasicDBObject;
//import org.bson.types.ObjectId;
//import com.example.javaproject.repository.VideoRepository;
//
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//    @Autowired
//    private VideoRepository videoRepository;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
//
//        Video video = new Video();
//        video.setFileId(id.toString());
//        video.setCourseId(courseId);
//        video.setChapterId(chapterId);
//        video.setSubChapterId(subChapterId);
//
//        video = videoRepository.save(video);
//        // Save video object to your MongoDB collection (assuming you have a repository for this)
//
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public InputStream getVideoStream(Video video) throws IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(video.getFileId())));
//        return operations.getResource(file).getInputStream();
//    }
//
//
//}
//

//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.GridFSBucket;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFSBucket gridFSBucket;
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
//
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public Video getVideoBySubChapterId(String subChapterId) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.subChapterId").is(subChapterId)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public InputStream getVideoStream(String id) {
//        return gridFSBucket.openDownloadStream(new ObjectId(id));
//    }
//}


//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.GridFSBucket;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFSBucket gridFSBucket;
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
//
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public Video getVideoBySubChapterId(String subChapterId) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.subChapterId").is(subChapterId)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public InputStream getVideoStream(String id) {
//        return gridFSBucket.openDownloadStream(new ObjectId(id));
//    }
//}


//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//import java.io.IOException;
//import java.io.InputStream;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public Video getVideoBySubChapterId(String subChapterId) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.subChapterId").is(subChapterId)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = new Video();
//        video.setFileId(file.getObjectId().toString());
//        video.setCourseId(file.getMetadata().get("courseId").toString());
//        video.setChapterId(file.getMetadata().get("chapterId").toString());
//        video.setSubChapterId(file.getMetadata().get("subChapterId").toString());
//        video.setStream(operations.getResource(file).getInputStream());
//
//        return video;
//    }
//
//    public InputStream getVideoStream(String id) throws IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        return operations.getResource(file).getInputStream();
//    }
//}

//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.stereotype.Service;
//import com.example.javaproject.repository.VideoRepository;
//import org.bson.types.ObjectId;
//import org.springframework.web.multipart.MultipartFile;
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//
//import java.io.IOException;
//import java.io.InputStream;
//import java.util.Optional;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    @Autowired
//    private VideoRepository videoRepository;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
//
//        Video video = new Video();
//        video.setFileId(id.toString());
//        video.setCourseId(courseId);
//        video.setChapterId(chapterId);
//        video.setSubChapterId(subChapterId);
//
//        videoRepository.save(video);
//
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = videoRepository.findByFileId(id);
//        if (video == null) {
//            throw new IllegalStateException("Video metadata not found");
//        }
//
//        video.setStream(operations.getResource(file).getInputStream());
//        return video;
//    }
//
//    public InputStream getVideoStream(String fileId) throws IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(fileId)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        return operations.getResource(file).getInputStream();
//    }
//
//    public Video getVideoBySubChapterId(String subChapterId) throws IllegalStateException, IOException {
//        Optional<Video> videoOpt = videoRepository.findBySubChapterId(subChapterId);
//        if (!videoOpt.isPresent()) {
//            throw new IllegalStateException("Video not found for subchapter ID: " + subChapterId);
//        }
//
//        Video video = videoOpt.get();
//        return getVideo(video.getFileId());
//    }
//}


package com.example.javaproject.service;

import com.example.javaproject.model.Video;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import com.example.javaproject.repository.VideoRepository;
import org.bson.types.ObjectId;
import org.springframework.web.multipart.MultipartFile;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;

@Service
public class VideoService {

    @Autowired
    private GridFsTemplate gridFsTemplate;

    @Autowired
    private GridFsOperations operations;

    @Autowired
    private VideoRepository videoRepository;

    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
        DBObject metaData = new BasicDBObject();
        metaData.put("type", "video");
        metaData.put("courseId", courseId);
        metaData.put("chapterId", chapterId);
        metaData.put("subChapterId", subChapterId);
        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);

        Video video = new Video();
        video.setFileId(id.toString());
        video.setCourseId(courseId);
        video.setChapterId(chapterId);
        video.setSubChapterId(subChapterId);

        videoRepository.save(video);

        return id.toString();
    }

    public Video getVideo(String id) throws IllegalStateException, IOException {
        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
        if (file == null) {
            throw new IllegalStateException("File not found");
        }

        Video video = videoRepository.findByFileId(id);
        if (video == null) {
            throw new IllegalStateException("Video metadata not found");
        }

        video.setStream(operations.getResource(file).getInputStream());
        return video;
    }

    public InputStream getVideoStream(String fileId) throws IOException {
        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(fileId)));
        if (file == null) {
            throw new IllegalStateException("File not found");
        }

        return operations.getResource(file).getInputStream();
    }

    public Video getVideoBySubChapterId(String subChapterId) throws IllegalStateException, IOException {
        Optional<Video> videoOpt = videoRepository.findBySubChapterId(subChapterId);
        if (!videoOpt.isPresent()) {
            throw new IllegalStateException("Video not found for subchapter ID: " + subChapterId);
        }

        Video video = videoOpt.get();
        return getVideo(video.getFileId());
    }
}


//
//package com.example.javaproject.service;
//
//import com.example.javaproject.model.Video;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.stereotype.Service;
//import com.example.javaproject.repository.VideoRepository;
//import org.bson.types.ObjectId;
//import org.springframework.web.multipart.MultipartFile;
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//
//import java.io.IOException;
//import java.io.InputStream;
//import java.util.Optional;
//
//@Service
//public class VideoService {
//
//    @Autowired
//    private GridFsTemplate gridFsTemplate;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    @Autowired
//    private VideoRepository videoRepository;
//
//    public String addVideo(String courseId, String chapterId, String subChapterId, MultipartFile file) throws IOException {
//        DBObject metaData = new BasicDBObject();
//        metaData.put("type", "video");
//        metaData.put("courseId", courseId);
//        metaData.put("chapterId", chapterId);
//        metaData.put("subChapterId", subChapterId);
//        ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
//
//        Video video = new Video();
//        video.setFileId(id.toString());
//        video.setCourseId(courseId);
//        video.setChapterId(chapterId);
//        video.setSubChapterId(subChapterId);
//
//        videoRepository.save(video);
//
//        return id.toString();
//    }
//
//    public Video getVideo(String id) throws IllegalStateException, IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        Video video = videoRepository.findByFileId(id);
//        if (video == null) {
//            throw new IllegalStateException("Video metadata not found");
//        }
//
//        video.setStream(operations.getResource(file).getInputStream());
//        return video;
//    }
//
//    public InputStream getVideoStream(String fileId) throws IOException {
//        GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(fileId)));
//        if (file == null) {
//            throw new IllegalStateException("File not found");
//        }
//
//        return operations.getResource(file).getInputStream();
//    }
//
//    public Video getVideoBySubChapterId(String subChapterId) throws IllegalStateException, IOException {
//        Optional<Video> videoOpt = videoRepository.findBySubChapterId(subChapterId);
//        if (!videoOpt.isPresent()) {
//            throw new IllegalStateException("Video not found for subchapter ID: " + subChapterId);
//        }
//
//        Video video = videoOpt.get();
//        return getVideo(video.getFileId());
//    }
//}
