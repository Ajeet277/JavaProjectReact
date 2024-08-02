// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import AdminDashboard from '../../components/AdminDashboard';
// import ManageCoursesPage from '../../components/ManageCoursesPage';
// import ManageUsersPage from '../../components/ManageUsersPage';
// import ApproveRequestsPage from '../../components/ApproveRequestsPage';
// import { Container, Row, Col } from 'react-bootstrap';
// import './Admin.css';

// const Admin = () => {
//   return (
//     <Container fluid>
//       <Row>
//         {/* Sidebar */}
//         <Col md={3} className="bg-light">
//           <div className="sidebar">
//             <h2>Admin Panel</h2>
//             <ul className="list-unstyled">
//               <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
//               <li><Link to="/admin/manage-users">Manage Users</Link></li>
//               <li><Link to="/admin/manage-courses">Manage Courses</Link></li>
//               {/* <li><Link to="/admin/approve-requests">Approve Requests</Link></li> */}
//             </ul>
//           </div>
//         </Col>
        
//         {/* Main content */}
//         <Col md={9} className="p-4">
//           <Routes>
//             <Route path="/" element={<AdminDashboard />} />
//             <Route path="/dashboard" element={<AdminDashboard />} />
//             <Route path="/manage-users" element={<ManageUsersPage />} />
//             <Route path="/manage-courses" element={<ManageCoursesPage />} />
//             <Route path="/approve-requests" element={<ApproveRequestsPage />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Admin;


import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from '../../components/AdminDashboard';
import ManageCoursesPage from '../../components/ManageCoursesPage';
import ManageUsersPage from '../../components/ManageUsersPage';
// import ApproveRequestsPage from '../../components/ApproveRequestsPage';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Admin.css';

const Admin = () => {
  return (
    <Container fluid className="min-vh-100" style={{ backgroundColor: '#f7f9fc' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-white text-dark p-4 shadow-sm" style={{ borderRadius: '10px' }}>
          <h2 className="mb-4 text-center" style={{ color: '#007bff' }}>Admin Panel</h2>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/admin/dashboard" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-tachometer-alt me-2"></i> Admin Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/admin/manage-users" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-users me-2"></i> Manage Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/admin/manage-courses" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-book me-2"></i> Manage Courses
              </Link>
            </ListGroup.Item>
            {/* <ListGroup.Item className="bg-white border-0 mb-2">
              <Link to="/admin/approve-requests" className="text-decoration-none text-dark d-flex align-items-center">
                <i className="fas fa-check me-2"></i> Approve Requests
              </Link>
            </ListGroup.Item> */}
          </ListGroup>
        </Col>

        {/* Main content */}
        <Col md={9} className="p-4">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/manage-users" element={<ManageUsersPage />} />
            <Route path="/manage-courses" element={<ManageCoursesPage />} />
            {/* <Route path="/approve-requests" element={<ApproveRequestsPage />} /> */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
