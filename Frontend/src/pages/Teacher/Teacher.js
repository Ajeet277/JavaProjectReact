// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import TeacherDashboard from '../../components/TeacherDashboard';
// import AddCourseForm from '../../components/AddCourseForm';
// import AddChapterForm from '../../components/AddChapterForm';
// import AddSubChapterForm from '../../components/AddSubChapterForm';
// import UploadVideoForm from '../../components/VideoUploadForm';
// import { Container, Row, Col } from 'react-bootstrap';
// import './Teacher.css';


// const Teacher = () => {
//   return (
//     <Container fluid>
//       <Row>
//         {/* Sidebar */}
//         <Col md={3} className="bg-light">
//           <div className="sidebar">
//             <h2>Teacher Panel</h2>
//             <ul className="list-unstyled">
//               <li><Link to="/teacher/dashboard">Teacher Dashboard</Link></li>
//               <li><Link to="/teacher/add-course">Add Course</Link></li>
//               <li><Link to="/teacher/add-chapter">Add Chapter</Link></li>
//               <li><Link to="/teacher/add-subchapter">Add Subchapter</Link></li>
//               <li><Link to="/teacher/upload-video">Upload Video</Link></li>
//             </ul>
//           </div>
//         </Col>
        
//         {/* Main content */}
//         <Col md={9} className="p-4">
//           <Routes>
//             <Route path="/" element={<TeacherDashboard />} />
//             <Route path="/dashboard" element={<TeacherDashboard />} />
//             <Route path="/add-course" element={<AddCourseForm />} />
//             <Route path="/add-chapter" element={<AddChapterForm />} />
//             <Route path="/add-subchapter" element={<AddSubChapterForm />} />
//             <Route path="/upload-video" element={<UploadVideoForm />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Teacher;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TeacherDashboard from '../../components/TeacherDashboard';
import AddCourseForm from '../../components/AddCourseForm';
import AddChapterForm from '../../components/AddChapterForm';
import AddSubChapterForm from '../../components/AddSubChapterForm';
import UploadVideoForm from '../../components/VideoUploadForm';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Teacher.css';

const Teacher = () => {
  return (
    <Container fluid className="min-vh-100" style={{ backgroundColor: '#f7f9fc' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-white text-dark p-4 shadow-sm" style={{ borderRadius: '10px' }}>
          <h2 className="mb-4 text-center" style={{ color: '#007bff' }}>Teacher Panel</h2>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/teacher/dashboard" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-tachometer-alt me-2"></i> Teacher Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/teacher/add-course" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-book me-2"></i> Add Course
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/teacher/add-chapter" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-book-open me-2"></i> Add Chapter
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/teacher/add-subchapter" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-copy me-2"></i> Add Subchapter
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/teacher/upload-video" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-video me-2"></i> Upload Video
              </Link>
            </ListGroup.Item>
          </ListGroup>
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
