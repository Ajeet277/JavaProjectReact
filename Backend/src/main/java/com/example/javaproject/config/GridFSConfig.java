//package com.example.javaproject.config;
//
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoClients;
//import com.mongodb.client.gridfs.GridFSBucket;
//import com.mongodb.client.gridfs.GridFSBuckets;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
//
//@Configuration
//public class GridFSConfig extends AbstractMongoClientConfiguration {
//
//    @Override
//    protected String getDatabaseName() {
//        return "JavaProject";  // Replace with your actual database name
//    }
//
//    @Override
//    @Bean
//    public MongoClient mongoClient() {
//        return MongoClients.create("mongodb+srv://Cloud:Ajeet@cloud.s59nuzf.mongodb.net/?retryWrites=true&w=majority&appName=Cloud"); // Replace with your MongoDB connection string
//    }
//
//    @Bean
//    public GridFSBucket gridFSBucket() {
//        return GridFSBuckets.create(mongoClient().getDatabase(getDatabaseName()));
//    }
//}
//
//package com.example.javaproject.config;
//
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoClients;
//import com.mongodb.client.gridfs.GridFSBucket;
//import com.mongodb.client.gridfs.GridFSBuckets;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.MongoDatabaseFactory;
//import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
//import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
//import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
//import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//
//@Configuration
//public class GridFSConfig extends AbstractMongoClientConfiguration {
//
//    @Override
//    protected String getDatabaseName() {
//        return "JavaProject";  // Replace with your actual database name
//    }
//
//    @Override
//    @Bean
//    public MongoClient mongoClient() {
//        return MongoClients.create("mongodb+srv://Cloud:Ajeet@cloud.s59nuzf.mongodb.net/?retryWrites=true&w=majority&appName=Cloud"); // Replace with your MongoDB connection string
//    }
//
//    @Bean
//    public GridFSBucket gridFSBucket() {
//        return GridFSBuckets.create(mongoClient().getDatabase(getDatabaseName()));
//    }
//
//    @Bean
//    public GridFsTemplate gridFsTemplate(MongoDatabaseFactory dbFactory, MappingMongoConverter converter) throws Exception {
//        return new GridFsTemplate(dbFactory, converter);
//    }
//
//    @Bean
//    @Override
//    public MappingMongoConverter mappingMongoConverter(MongoDatabaseFactory factory, MongoCustomConversions conversions, MongoMappingContext context) {
//        MappingMongoConverter converter = new MappingMongoConverter(factory, context);
//        converter.setCustomConversions(conversions);
//        return converter;
//    }
//}


package com.example.javaproject.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;

@Configuration
public class GridFSConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "JavaProject";  // Replace with your actual database name
    }

    @Override
    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb+srv://Cloud:Ajeet@cloud.s59nuzf.mongodb.net/?retryWrites=true&w=majority&appName=Cloud"); // Replace with your MongoDB connection string
    }

    @Bean
    public GridFSBucket gridFSBucket() {
        return GridFSBuckets.create(mongoClient().getDatabase(getDatabaseName()));
    }

    @Bean
    public GridFsTemplate gridFsTemplate(MongoDatabaseFactory dbFactory, MappingMongoConverter converter) {
        return new GridFsTemplate(dbFactory, converter);
    }

    @Bean
    @Override
    public MappingMongoConverter mappingMongoConverter(MongoDatabaseFactory factory, MongoCustomConversions conversions, MongoMappingContext context) {
        MappingMongoConverter converter = new MappingMongoConverter(factory, context);
        converter.setCustomConversions(conversions);
        return converter;
    }
}
