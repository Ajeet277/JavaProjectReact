import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TeacherDashboard from '../../components/TeacherDashboard';
import AddCourseForm from '../../components/AddCourseForm';
import AddChapterForm from '../../components/AddChapterForm';
import AddSubChapterForm from '../../components/AddSubChapterForm';
import UploadVideoForm from '../../components/VideoUploadForm';
import { Container, Row, Col } from 'react-bootstrap';
import './Teacher.css';


const Teacher = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light">
          <div className="sidebar">
            <h2>Teacher Panel</h2>
            <ul className="list-unstyled">
              <li><Link to="/teacher/dashboard">Teacher Dashboard</Link></li>
              <li><Link to="/teacher/add-course">Add Course</Link></li>
              <li><Link to="/teacher/add-chapter">Add Chapter</Link></li>
              <li><Link to="/teacher/add-subchapter">Add Subchapter</Link></li>
              <li><Link to="/teacher/upload-video">Upload Video</Link></li>
            </ul>
          </div>
        </Col>
        
        {/* Main content */}
        <Col md={9} className="p-4">
          <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/dashboard" element={<TeacherDashboard />} />
            <Route path="/add-course" element={<AddCourseForm />} />
            <Route path="/add-chapter" element={<AddChapterForm />} />
            <Route path="/add-subchapter" element={<AddSubChapterForm />} />
            <Route path="/upload-video" element={<UploadVideoForm />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Teacher;
