// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = ({ setUserType }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedUserType, setSelectedUserType] = useState('student');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform login logic here, e.g., validate credentials
//     // For demonstration, assume successful login with username and password
//     setUserType(selectedUserType); // Set the user type based on selectedUserType
//     navigate('/'); // Navigate to the home page or dashboard based on userType

//     if (selectedUserType === 'student') {
//       navigate('/student'); // Redirect to the student dashboard
//     } else if (selectedUserType === 'teacher') {
//       navigate('/teacher'); // Redirect to the teacher dashboard
//     } else if (selectedUserType === 'admin') {
//       navigate('/admin'); // Redirect to the admin dashboard
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Login</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {/* Dropdown menu for selecting user type */}
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import Axios for making HTTP requests

// const Login = ({ setUserType }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedUserType, setSelectedUserType] = useState('student');
//   const [error, setError] = useState(''); // State to store error message
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     try {
//       // Fetch user data from the backend
//       const response = await axios.get('http://localhost:8081/api/users/username/' + username);
//       const user = response.data;

//       // Validate credentials
//       if (user && user.password === password && user.userType === selectedUserType) {
//         setUserType(selectedUserType); // Set the user type based on selectedUserType
//         if (selectedUserType === 'student') {
//           navigate('/student'); // Redirect to the student dashboard
//         } else if (selectedUserType === 'teacher') {
//           navigate('/teacher'); // Redirect to the teacher dashboard
//         } else if (selectedUserType === 'admin') {
//           navigate('/admin'); // Redirect to the admin dashboard
//         }
//       } else {
//         setError('Invalid credentials'); // Show error message if credentials are invalid
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       setError('Invalid credentials'); // Show error message if user is not found
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Login</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {/* Dropdown menu for selecting user type */}
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from './AuthContext'; // Import the AuthContext

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedUserType, setSelectedUserType] = useState('student');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Use the login function from AuthContext

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:8081/api/users/username/' + username);
//       const user = response.data;

//       if (user && user.password === password && user.userType === selectedUserType) {
//         login(user); // Set the user as logged in
//         if (selectedUserType === 'student') {
//           navigate('/student');
//         } else if (selectedUserType === 'teacher') {
//           navigate('/teacher');
//         } else if (selectedUserType === 'admin') {
//           navigate('/admin');
//         }
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Login</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from './AuthContext'; // Import the AuthContext

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedUserType, setSelectedUserType] = useState('student');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Use the login function from AuthContext

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:8081/api/users/username/' + username);
//       const user = response.data;

//       if (user && user.password === password && user.userType === selectedUserType) {
//         login(user); // Set the user as logged in
//         localStorage.setItem('username', username); // Store the username in local storage
//         if (selectedUserType === 'student') {
//           navigate('/student');
//         } else if (selectedUserType === 'teacher') {
//           navigate('/teacher');
//         } else if (selectedUserType === 'admin') {
//           navigate('/admin');
//         }
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Login</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
//     </div>
//   );
// };

// export default Login;

// // Login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from './AuthContext';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedUserType, setSelectedUserType] = useState('student');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:8081/api/users/username/' + username);
//       const user = response.data;

//       if (user && user.password === password && user.userType === selectedUserType) {
//         login(user);
//         if (selectedUserType === 'student') {
//           navigate('/student');
//         } else if (selectedUserType === 'teacher') {
//           navigate('/teacher');
//         } else if (selectedUserType === 'admin') {
//           navigate('/admin');
//         }
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Login</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from './AuthContext';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedUserType, setSelectedUserType] = useState('student');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get(`http://localhost:8081/api/users/username/${username}`);
//       const user = response.data;

//       if (user && user.password === password && user.userType === selectedUserType) {
//         login(user, username); // Pass the username to the login function
//         if (selectedUserType === 'student') {
//           navigate('/student');
//         } else if (selectedUserType === 'teacher') {
//           navigate('/teacher');
//         } else if (selectedUserType === 'admin') {
//           navigate('/admin');
//         }
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Login</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Import bcryptjs
import { useAuth } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('student');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8081/api/users/username/${username}`);
      const user = response.data;

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password); // Compare passwords using bcrypt

        if (passwordMatch && user.userType === selectedUserType) {
          login(user, username); // Pass the username to the login function
          if (selectedUserType === 'student') {
            navigate('/student');
          } else if (selectedUserType === 'teacher') {
            navigate('/teacher');
          } else if (selectedUserType === 'admin') {
            navigate('/admin');
          }
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Login</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedUserType}
            onChange={(e) => setSelectedUserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
