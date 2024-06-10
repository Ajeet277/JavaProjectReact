import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentDashboard from '../../components/StudentDashboard';
import BrowseCourses from '../../components/BrowseCoursesPage';
import EnrolledCoursesPage from '../../components/EnrolledCoursesPage';
import { Container, Row, Col } from 'react-bootstrap';

const Student = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light" style={{ padding: '15px' }}>
          <div style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', padding: '15px' }}>
            <h2>Student Panel</h2>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '10px' }}><Link to="/student/dashboard">Student Dashboard</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/student/browse-courses">Browse Courses</Link></li>
              <li><Link to="/student/register-courses">Register Courses</Link></li>
            </ul>
          </div>
        </Col>
        
        {/* Main content */}
        <Col md={9} className="p-4">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/browse-courses" element={<BrowseCourses />} />
            <Route path="/register-courses" element={<EnrolledCoursesPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Student;
