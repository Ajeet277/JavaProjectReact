//package com.example.javaproject.repository;
//
//import com.example.javaproject.model.Users;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface UsersRepository extends MongoRepository<Users, String> {
//    Users findByUsername(String username);
//}

package com.example.javaproject.repository;

        import com.example.javaproject.model.Users;
        import org.springframework.data.mongodb.repository.MongoRepository;

        import java.util.Optional;

public interface UsersRepository extends MongoRepository<Users, String> {
    Users findByUsername(String username);
}
