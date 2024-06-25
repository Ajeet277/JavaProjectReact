

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import StudentDashboard from '../../components/StudentDashboard';
import BrowseCoursesPage from '../../components/BrowseCoursesPage';
// import EnrollCoursesPage from '../../components/EnrollCoursesPage';
import EnrolledCoursesPage from '../../components/EnrolledCoursesPage';
// import CoursePage from '../../components/CoursePage';
// import ChapterPage from '../../components/ChapterPage';
// import VideoPlayer from '../../components/VideoPlayer';
import CourseDetail from '../../components/CourseDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Student = () => {
  return (
    <Container fluid className="min-vh-100" style={{ backgroundColor: '#f7f9fc' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-white text-dark p-4 shadow-sm" style={{ borderRadius: '10px' }}>
          <h2 className="mb-4 text-center" style={{ color: '#007bff' }}>Student Panel</h2>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/dashboard" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-tachometer-alt me-2"></i> Student Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/browse-courses" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-book me-2"></i> Browse Courses
              </Link>
            </ListGroup.Item>
            {/* <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/enroll-courses" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-clipboard-list me-2"></i> Enroll Courses
              </Link>
            </ListGroup.Item> */}
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/enrolled-courses" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-graduation-cap me-2"></i> Enrolled Courses
              </Link>
            </ListGroup.Item>
            {/* <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/course-page" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-book-open me-2"></i> Course Page
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/chapter-page" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-chapter me-2"></i> Chapter Page
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/video-player" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-video me-2"></i> Video Player
              </Link>
            </ListGroup.Item> */}
            {/* <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/student/courses/:courseId" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-info-circle me-2"></i> Course Detail
              </Link>
            </ListGroup.Item> */}
          </ListGroup>
        </Col>

        {/* Main content */}
        <Col md={9} className="p-4">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/browse-courses" element={<BrowseCoursesPage />} />
            {/* <Route path="/enroll-courses" element={<EnrollCoursesPage />} /> */}
            <Route path="/enrolled-courses" element={<EnrolledCoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            {/* <Route path="/course/:courseId" element={<CoursePage />} /> */}
            {/* <Route path="/course/:courseId/chapter/:chapterId" element={<ChapterPage />} /> */}
            {/* <Route path="/video/:videoId" element={<VideoPlayer />} /> */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Student;
