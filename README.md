# Integrated Digital Learning Platform

## Project Description

This project is a Java-based full-stack web application designed to provide an integrated digital learning platform. The aim is to ensure inclusive and equitable quality education for all, aligning with Sustainable Development Goal 4 (SDG 4). The platform supports three types of users: Admin, Teacher, and Student, each with specific functionalities to manage courses, add content, and facilitate learning.

## Features

### Admin
- Manage users (add, update, delete)
- Manage courses (add, update, delete)

### Teacher
- Add courses
- Add chapters and subchapters
- Upload videos

### Student
- Browse courses
- Enroll in courses
- View course videos

## Technologies Used

### Backend
- Java
- Spring Boot
- MongoDB
- bcrypt (for password hashing)

### Frontend
- React.js
- Axios
- Ant Design (UI components)
- React Router

## Setup Instructions

### Prerequisites
- Java Development Kit (JDK)
- Node.js and npm
- MongoDB

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Ajeet277/JavaProjectReact.git
    cd integrated-learning-platform/backend
    ```

2. Configure MongoDB:
    - Ensure MongoDB is running on your local machine or a remote server.
    - Update the MongoDB connection string in the `application.properties` file.

3. Build and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

4. The backend server will start on `http://localhost:8081`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React application:
    ```bash
    npm start
    ```

4. The frontend server will start on `http://localhost:3000`.

## API Endpoints

### User Management (Admin)
- `POST /api/users`: Create a new user
- `GET /api/users`: Get all users
- `PUT /api/users/{id}`: Update user details
- `DELETE /api/users/{id}`: Delete a user

### Course Management (Admin & Teacher)
- `POST /api/courses`: Add a new course
- `GET /api/courses`: Get all courses
- `GET /api/courses/{id}`: Get course by ID
- `DELETE /api/courses/{id}`: Delete a course (Admin only)

### Teacher-Specific
- `POST /api/courses`: Add a new course
- `POST /api/courses/{courseId}/chapters`: Add a new chapter to a course
- `POST /api/courses/{courseId}/chapters/{chapterId}/subchapters`: Add a new subchapter to a chapter
- `POST /api/courses/{courseId}/videos`: Upload a video to a course

### Student-Specific
- `GET /api/courses`: Browse all courses
- `POST /api/enrollments`: Enroll in a course
- `GET /api/courses/{courseId}/videos`: View videos of a course

## Security
- Passwords are hashed using bcrypt before being stored in the database.

## System Architecture

The system architecture consists of a backend developed using Spring Boot and MongoDB for data persistence, and a frontend developed using React.js for the user interface. The application follows a RESTful API design for communication between the frontend and backend.

## Contribution Guidelines

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request


## Contact

For any questions or support, please open an issue or contact us at [ajeetshyanavad@gmail.com].
