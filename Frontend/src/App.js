// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Admin from './pages/Admin';
// import Teacher from './pages/Teacher';
// import Student from './pages/Student';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/teacher" element={<Teacher />} />
//         <Route path="/student" element={<Student />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/
// |-- components/
// |   |-- AdminDashboard.js
// |   |-- TeacherDashboard.js
// |   |-- StudentDashboard.js
// |   |-- CourseCard.js
// |   |-- CourseList.js
// |   |-- LoginForm.js
// |   |-- RegistrationForm.js
// |   |-- AddCourseForm.js
// |   |-- AddChapterForm.js
// |   |-- AddSubChapterForm.js
// |   |-- VideoUploadForm.js
// |-- pages/
// |   |-- Home.js
// |   |-- About.js
// |   |-- Login.js
// |   |-- Register.js
// |   |-- Admin.js
// |   |-- Teacher.js
// |   |-- Student.js
// |-- App.js
// |-- index.js


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import { getUserType } from './auth'; // Function to get the type of logged-in user

// function App() {
//   const userType = getUserType(); // Get the user type from authentication system

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* Routes based on user type */}
//         {userType === 'admin' && (
//           <>
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/manage-users" element={<ManageUsersPage />} />
//             <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
//             <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
//           </>
//         )}
//         {userType === 'teacher' && (
//           <>
//             <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
//             <Route path="/teacher/add-course" element={<AddCourseForm />} />
//             <Route path="/teacher/add-chapter" element={<AddChapterForm />} />
//             <Route path="/teacher/add-subchapter" element={<AddSubChapterForm />} />
//             <Route path="/teacher/upload-video" element={<UploadVideoForm />} />
//           </>
//         )}
//         {userType === 'student' && (
//           <>
//             <Route path="/student/dashboard" element={<StudentDashboard />} />
//             <Route path="/student/browse-courses" element={<BrowseCourses />} />
//             <Route path="/student/register-courses" element={<EnrolledCoursesPage />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Teacher from './pages/Teacher';
// import Admin from './pages/Admin';
// import Student from './pages/Student'; 
// import Footer from './components/Footer/Footer'; 
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// function App() {
//   const [userType, setUserType] = useState(null); // Initialize user type state

//   return (
//     <Router>

//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//             <Nav className="me-auto">
//               <Link to="/login" className="nav-link">Login</Link>
//               <Link to="/register" className="nav-link">Register</Link>
//               <Link to="/about" className="nav-link">About Us</Link>
//             </Nav>
//           </Container>
//         </Navbar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login setUserType={setUserType} />} /> {/* Pass setUserType as prop */}
//         <Route path="/register" element={<Register />} />
//         {/* Routes based on user type */}
//         {userType === 'admin' && (
//           <>
//             <Route path="/admin" element={<Admin />} />
//             <Route path="/admin" element={<AdminDashboard />} />
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/manage-users" element={<ManageUsersPage />} />
//             <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
//             <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
//           </>
//         )}
//         {userType === 'teacher' && (
//           <>
//             <Route path="/teacher" element={<Teacher />} />
//             <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
//             <Route path="/teacher/add-course" element={<AddCourseForm />} />
//             <Route path="/teacher/add-chapter" element={<AddChapterForm />} />
//             <Route path="/teacher/add-subchapter" element={<AddSubChapterForm />} />
//             <Route path="/teacher/upload-video" element={<UploadVideoForm />} />
//           </>
//         )}
//         {userType === 'student' && (
//           <>
//             <Route path="/student" element={<Student />} />
//             <Route path="/student/dashboard" element={<StudentDashboard />} />
//             <Route path="/student/browse-courses" element={<BrowseCourses />} />
//             <Route path="/student/register-courses" element={<EnrolledCoursesPage />} />
//           </>
//         )}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Teacher from './pages/Teacher';
// import Admin from './pages/Admin';
// import Student from './pages/Student'; 
// import Footer from './components/Footer/Footer'; 
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// function App() {
//   const [userType, setUserType] = useState(null); // Initialize user type state

//   return (
//     <Router>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//           <Nav className="me-auto">
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="nav-link">Register</Link>
//             <Link to="/about" className="nav-link">About Us</Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login setUserType={setUserType} />} /> {/* Pass setUserType as prop */}
//         <Route path="/register" element={<Register />} />
//         {/* Routes based on user type */}
//         {userType === 'admin' && (
//           <>
//             <Route path="/admin/*" element={<Admin />}>
//               <Route path="dashboard" element={<AdminDashboard />} />
//               <Route path="manage-users" element={<ManageUsersPage />} />
//               <Route path="manage-courses" element={<ManageCoursesPage />} />
//               <Route path="approve-requests" element={<ApproveRequestsPage />} />
//             </Route>
//           </>
//         )}
//         {userType === 'teacher' && (
//           <>
//             <Route path="/teacher/*" element={<Teacher />}>
//               <Route path="dashboard" element={<TeacherDashboard />} />
//               <Route path="add-course" element={<AddCourseForm />} />
//               <Route path="add-chapter" element={<AddChapterForm />} />
//               <Route path="add-subchapter" element={<AddSubChapterForm />} />
//               <Route path="upload-video" element={<UploadVideoForm />} />
//             </Route>
//           </>
//         )}
//         {userType === 'student' && (
//           <>
//             <Route path="/student/*" element={<Student />}>
//               <Route path="dashboard" element={<StudentDashboard />} />
//               <Route path="browse-courses" element={<BrowseCourses />} />
//               <Route path="register-courses" element={<EnrolledCoursesPage />} />
//             </Route>
//           </>
//         )}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Footer from './components/Footer/Footer';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Teacher from './pages/Teacher/Teacher';
// import Admin from './pages/Admin/Admin';
// import Student from './pages/Student/Student'; 

// function App() {
//   const [userType, setUserType] = useState(null); // Initialize user type state

//   return (
//     <Router>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//           <Nav className="me-auto">
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="nav-link">Register</Link>
//             <Link to="/about" className="nav-link">About Us</Link>
//             {/* Navbar links for different user types */}
//             {userType === 'admin' && (
//               <>
//               <Link to="/admin" className="nav-link">Admin</Link>
//               </>
//             )}
//             {userType === 'teacher' && (
//               <Link to="/teacher" className="nav-link">Teacher</Link>
//             )}
//             {userType === 'student' && (
//               <Link to="/student" className="nav-link">Student</Link>
//             )}
//           </Nav>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login setUserType={setUserType} />} />
//         <Route path="/register" element={<Register />} />

//         {/* Routes for admin */}
//         <Route path="/admin" element={<Admin />}>
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/admin/manage-users" element={<ManageUsersPage />} />
//           <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
//           <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
//         </Route>

//         {/* Routes for teacher */}
//         <Route path="/teacher/*" element={<Teacher />}>
//           <Route path="dashboard" element={<TeacherDashboard />} />
//           <Route path="add-course" element={<AddCourseForm />} />
//           <Route path="add-chapter" element={<AddChapterForm />} />
//           <Route path="add-subchapter" element={<AddSubChapterForm />} />
//           <Route path="upload-video" element={<UploadVideoForm />} />
//         </Route>

//         {/* Routes for student */}
//         <Route path="/student/*" element={<Student />}>
//           <Route path="dashboard" element={<StudentDashboard />} />
//           <Route path="browse-courses" element={<BrowseCourses />} />
//           <Route path="register-courses" element={<EnrolledCoursesPage />} />
//         </Route>
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
// App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Footer from './components/Footer/Footer';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Teacher from './pages/Teacher/Teacher';
// import Admin from './pages/Admin/Admin';
// import Student from './pages/Student/Student';
// import { AuthProvider, useAuth } from './pages/Login/AuthContext';
// import Logout from './pages/Login/Logout'; // Import the Logout component

// const AuthenticatedNavLinks = () => {
//   const { auth } = useAuth();

//   if (!auth.isAuthenticated) return null;

//   return (
//     <>
//       {auth.isAuthenticated && <span className="navbar-text">Logged in as {auth.user.username}</span>}
//       <Logout />
//     </>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//             <Nav className="me-auto">
//               <Link to="/login" className="nav-link">Login</Link>
//               <Link to="/register" className="nav-link">Register</Link>
//               <Link to="/about" className="nav-link">About Us</Link>
//               <AuthenticatedNavLinks />
//             </Nav>
//           </Container>
//         </Navbar>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Routes for admin */}
//           <Route path="/admin" element={<Admin />}>
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/manage-users" element={<ManageUsersPage />} />
//             <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
//             <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
//           </Route>

//           {/* Routes for teacher */}
//           <Route path="/teacher/*" element={<Teacher />}>
//             <Route path="dashboard" element={<TeacherDashboard />} />
//             <Route path="add-course" element={<AddCourseForm />} />
//             <Route path="add-chapter" element={<AddChapterForm />} />
//             <Route path="add-subchapter" element={<AddSubChapterForm />} />
//             <Route path="upload-video" element={<UploadVideoForm />} />
//           </Route>

//           {/* Routes for student */}
//           <Route path="/student/*" element={<Student />}>
//             <Route path="dashboard" element={<StudentDashboard />} />
//             <Route path="browse-courses" element={<BrowseCourses />} />
//             <Route path="register-courses" element={<EnrolledCoursesPage />} />
//           </Route>
//         </Routes>

//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


// App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Footer from './components/Footer/Footer';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Teacher from './pages/Teacher/Teacher';
// import Admin from './pages/Admin/Admin';
// import Student from './pages/Student/Student';
// import { AuthProvider, useAuth } from './pages/Login/AuthContext';
// import Logout from './pages/Login/Logout'; // Import the Logout component

// const AuthenticatedNavLinks = () => {
//   const { auth } = useAuth();

//   if (!auth.isAuthenticated) return null;

//   return (
//     <>
//       {auth.isAuthenticated && <span className="navbar-text">Logged in as {auth.user.username}</span>}
//       <Logout />
//     </>
//   );
// };

// function App() {
//   const { auth } = useAuth();

//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//             <Nav className="me-auto">
//               {!auth.isAuthenticated && <Link to="/login" className="nav-link">Login</Link>}
//               {!auth.isAuthenticated && <Link to="/register" className="nav-link">Register</Link>}
//               <Link to="/about" className="nav-link">About Us</Link>
//               <AuthenticatedNavLinks />
//             </Nav>
//           </Container>
//         </Navbar>

        // <Routes>
        //   <Route path="/" element={<Home />} />
        //   <Route path="/about" element={<About />} />
        //   <Route path="/login" element={<Login />} />
        //   <Route path="/register" element={<Register />} />

        //   {/* Routes for admin */}
        //   <Route path="/admin" element={<Admin />}>
        //     <Route path="/admin/dashboard" element={<AdminDashboard />} />
        //     <Route path="/admin/manage-users" element={<ManageUsersPage />} />
        //     <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
        //     <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
        //   </Route>

        //   {/* Routes for teacher */}
        //   <Route path="/teacher/*" element={<Teacher />}>
        //     <Route path="dashboard" element={<TeacherDashboard />} />
        //     <Route path="add-course" element={<AddCourseForm />} />
        //     <Route path="add-chapter" element={<AddChapterForm />} />
        //     <Route path="add-subchapter" element={<AddSubChapterForm />} />
        //     <Route path="upload-video" element={<UploadVideoForm />} />
        //   </Route>

        //   {/* Routes for student */}
        //   <Route path="/student/*" element={<Student />}>
        //     <Route path="dashboard" element={<StudentDashboard />} />
        //     <Route path="browse-courses" element={<BrowseCourses />} />
        //     <Route path="register-courses" element={<EnrolledCoursesPage />} />
        //   </Route>
        // </Routes>

//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Footer from './components/Footer/Footer';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Teacher from './pages/Teacher/Teacher';
// import Admin from './pages/Admin/Admin';
// import Student from './pages/Student/Student';
// import { AuthProvider, useAuth } from './pages/Login/AuthContext';
// import Logout from './pages/Login/Logout'; // Import the Logout component

// const AuthenticatedNavLinks = () => {
//   const { auth } = useAuth();

//   if (!auth.isAuthenticated) return null;

//   return (
//     <>
//       {auth.isAuthenticated && <span className="navbar-text">Logged in as {auth.user.username}</span>}
//       <Logout />
//     </>
//   );
// };

// function App() {
//   const { auth } = useAuth();

//   return (
//     <AuthProvider>
//     <Router>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//           <Nav className="me-auto">
            // {!auth.isAuthenticated && <Link to="/login" className="nav-link">Login</Link>}
            // {!auth.isAuthenticated && <Link to="/register" className="nav-link">Register</Link>}
//             <Link to="/about" className="nav-link">About Us</Link>
//             <AuthenticatedNavLinks />
//           </Nav>
//         </Container>
//       </Navbar>

      // <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/about" element={<About />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="/register" element={<Register />} />

      //     {/* Routes for admin */}
      //     <Route path="/admin" element={<Admin />}>
      //       <Route path="/admin/dashboard" element={<AdminDashboard />} />
      //       <Route path="/admin/manage-users" element={<ManageUsersPage />} />
      //       <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
      //       <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
      //     </Route>

      //     {/* Routes for teacher */}
      //     <Route path="/teacher/*" element={<Teacher />}>
      //       <Route path="dashboard" element={<TeacherDashboard />} />
      //       <Route path="add-course" element={<AddCourseForm />} />
      //       <Route path="add-chapter" element={<AddChapterForm />} />
      //       <Route path="add-subchapter" element={<AddSubChapterForm />} />
      //       <Route path="upload-video" element={<UploadVideoForm />} />
      //     </Route>

      //     {/* Routes for student */}
      //     <Route path="/student/*" element={<Student />}>
      //       <Route path="dashboard" element={<StudentDashboard />} />
      //       <Route path="browse-courses" element={<BrowseCourses />} />
      //       <Route path="register-courses" element={<EnrolledCoursesPage />} />
      //     </Route>
      //   </Routes>

//       <Footer />
//     </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Footer from './components/Footer/Footer';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Teacher from './pages/Teacher/Teacher';
// import Admin from './pages/Admin/Admin';
// import Student from './pages/Student/Student';
// import { AuthProvider, useAuth } from './pages/Login/AuthContext'; // Import useAuth from AuthContext
// import Logout from './pages/Login/Logout'; // Import the Logout component

// const AuthenticatedNavLinks = () => {
//   const { auth } = useAuth(); // Use useAuth hook here

//   if (!auth.isAuthenticated) return null;

//   return (
//     <>
//       {auth.isAuthenticated && (
//         <>
//           {auth.userType === 'admin' && <Link to="/admin/*" className="nav-link">Admin Panel</Link>}
//           {auth.userType === 'teacher' && <Link to="/teacher/*" className="nav-link">Teacher Panel</Link>}
//           {auth.userType === 'student' && <Link to="/student/*" className="nav-link">Student Panel</Link>}
//           <span className="navbar-text">Logged in as {auth.user.username}</span>
          
//           <Logout />
//         </>
//       )}
//     </>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//             <Nav className="me-auto">
//               <Link to="/about" className="nav-link">About Us</Link>
//               <Link to="/login" className="nav-link">Login</Link>
//               <Link to="/register" className="nav-link">Register</Link>
//               <AuthenticatedNavLinks />
//             </Nav>
//           </Container>
//         </Navbar>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Routes for admin */}
//           <Route path="/admin" element={<Admin />}>
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/manage-users" element={<ManageUsersPage />} />
//             <Route path="/admin/manage-courses" element={<ManageCoursesPage />} />
//             <Route path="/admin/approve-requests" element={<ApproveRequestsPage />} />
//           </Route>

//           {/* Routes for teacher */}
//           <Route path="/teacher/*" element={<Teacher />}>
//             <Route path="dashboard" element={<TeacherDashboard />} />
//             <Route path="add-course" element={<AddCourseForm />} />
//             <Route path="add-chapter" element={<AddChapterForm />} />
//             <Route path="add-subchapter" element={<AddSubChapterForm />} />
//             <Route path="upload-video" element={<UploadVideoForm />} />
//           </Route>

//           {/* Routes for student */}
//           <Route path="/student/*" element={<Student />}>
//             <Route path="dashboard" element={<StudentDashboard />} />
//             <Route path="browse-courses" element={<BrowseCourses />} />
//             <Route path="register-courses" element={<EnrolledCoursesPage />} />
//           </Route>
//         </Routes>

//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/MainPage/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import ManageUsersPage from './components/ManageUsersPage';
import ManageCoursesPage from './components/ManageCoursesPage';
import ApproveRequestsPage from './components/ApproveRequestsPage';
import AddCourseForm from './components/AddCourseForm';
import AddChapterForm from './components/AddChapterForm';
import AddSubChapterForm from './components/AddSubChapterForm';
import UploadVideoForm from './components/VideoUploadForm';
import BrowseCourses from './components/BrowseCoursesPage';
import EnrolledCoursesPage from './components/EnrolledCoursesPage';
import Footer from './components/Footer/Footer';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teacher from './pages/Teacher/Teacher';
import Admin from './pages/Admin/Admin';
import Student from './pages/Student/Student';
import { AuthProvider, useAuth } from './pages/Login/AuthContext';
import Logout from './pages/Login/Logout';


const AuthenticatedNavLinks = () => {
  const { auth } = useAuth();

  console.log('AuthenticatedNavLinks auth:', auth); // Debug log

  if (!auth.isAuthenticated) return null;

  return (
    <>
      {auth.user.userType === 'admin' && <Link to="/admin" className="nav-link">Admin Panel</Link>}
      {auth.user.userType === 'teacher' && <Link to="/teacher" className="nav-link">Teacher Panel</Link>}
      {auth.user.userType === 'student' && <Link to="/student" className="nav-link">Student Panel</Link>}
      <span className="navbar-text">Logged in as {auth.user.username}</span>
      <Logout />
    </>
  );
};

const UnauthenticatedNavLinks = () => {
  const { auth } = useAuth();

  if (auth.isAuthenticated) return null;

  return (
    <>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/" className="navbar-brand">NGO Education Portal</Link>
            <Nav className="me-auto">
              <Link to="/about" className="nav-link">About Us</Link>
              <AuthenticatedNavLinks />
              <UnauthenticatedNavLinks />
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          {/* Routes for admin */}
          <Route path="/admin/*" element={<Admin />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="manage-users" element={<ManageUsersPage />} />
            <Route path="manage-courses" element={<ManageCoursesPage />} />
            <Route path="approve-requests" element={<ApproveRequestsPage />} />
          </Route>

          {/* Routes for teacher */}
          <Route path="/teacher/*" element={<Teacher />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="add-course" element={<AddCourseForm />} />
            <Route path="add-chapter" element={<AddChapterForm />} />
            <Route path="add-subchapter" element={<AddSubChapterForm />} />
            <Route path="upload-video" element={<UploadVideoForm />} />
          </Route>

          {/* Routes for student */}
          <Route path="/student/*" element={<Student />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="browse-courses" element={<BrowseCourses />} />
            <Route path="register-courses" element={<EnrolledCoursesPage />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/MainPage/Home';
// import About from './pages/About/About';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import AdminDashboard from './components/AdminDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import StudentDashboard from './components/StudentDashboard';
// import ManageUsersPage from './components/ManageUsersPage';
// import ManageCoursesPage from './components/ManageCoursesPage';
// import ApproveRequestsPage from './components/ApproveRequestsPage';
// import AddCourseForm from './components/AddCourseForm';
// import AddChapterForm from './components/AddChapterForm';
// import AddSubChapterForm from './components/AddSubChapterForm';
// import UploadVideoForm from './components/VideoUploadForm';
// import BrowseCourses from './components/BrowseCoursesPage';
// import EnrolledCoursesPage from './components/EnrolledCoursesPage';
// import Footer from './components/Footer/Footer';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Teacher from './pages/Teacher/Teacher';
// import Admin from './pages/Admin/Admin';
// import Student from './pages/Student/Student';
// import { AuthProvider, useAuth } from './pages/Login/AuthContext';
// import Logout from './pages/Login/Logout';

// const AuthenticatedNavLinks = () => {
//   const { auth } = useAuth();

//   console.log('AuthenticatedNavLinks auth:', auth); // Debug log

//   if (!auth || !auth.isAuthenticated) return null;

//   return (
//     <>
//       {auth.user.userType === 'admin' && <Link to="/admin/dashboard" className="nav-link">Admin Panel</Link>}
//       {auth.user.userType === 'teacher' && <Link to="/teacher/dashboard" className="nav-link">Teacher Panel</Link>}
//       {auth.user.userType === 'student' && <Link to="/student/dashboard" className="nav-link">Student Panel</Link>}
//       <span className="navbar-text">Logged in as {auth.user.username}</span>
//       <Logout />
//     </>
//   );
// };

// const UnauthenticatedNavLinks = () => {
//   const { auth } = useAuth();

//   if (auth && auth.isAuthenticated) return null;

//   return (
//     <>
//       <Link to="/login" className="nav-link">Login</Link>
//       <Link to="/register" className="nav-link">Register</Link>
//     </>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Link to="/" className="navbar-brand">NGO Education Portal</Link>
//             <Nav className="me-auto">
//               <Link to="/about" className="nav-link">About Us</Link>
//               <AuthenticatedNavLinks />
//               <UnauthenticatedNavLinks />
//             </Nav>
//           </Container>
//         </Navbar>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
          
//           {/* Routes for admin */}
//           <Route path="/admin/*" element={<Admin />}>
//             <Route path="dashboard" element={<AdminDashboard />} />
//             <Route path="manage-users" element={<ManageUsersPage />} />
//             <Route path="manage-courses" element={<ManageCoursesPage />} />
//             <Route path="approve-requests" element={<ApproveRequestsPage />} />
//           </Route>

//           {/* Routes for teacher */}
//           <Route path="/teacher/*" element={<Teacher />}>
//             <Route path="dashboard" element={<TeacherDashboard />} />
//             <Route path="add-course" element={<AddCourseForm />} />
//             <Route path="add-chapter" element={<AddChapterForm />} />
//             <Route path="add-subchapter" element={<AddSubChapterForm />} />
//             <Route path="upload-video" element={<UploadVideoForm />} />
//           </Route>

//           {/* Routes for student */}
//           <Route path="/student/*" element={<Student />}>
//             <Route path="dashboard" element={<StudentDashboard />} />
//             <Route path="browse-courses" element={<BrowseCourses />} />
//             <Route path="register-courses" element={<EnrolledCoursesPage />} />
//           </Route>
//         </Routes>

//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
