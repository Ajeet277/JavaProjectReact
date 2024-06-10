// // Register.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   return (
//     <div>
//       <h2>Register</h2>
//       {/* Registration form component */}
//       <form>
//         {/* Registration fields */}
//         <input type="text" placeholder="Full Name" />
//         <input type="text" placeholder="Username" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <input type="password" placeholder="Confirm Password" />
//         {/* Registration button */}
//         <button>Register</button>
//       </form>
//       {/* Link to login page */}
//       <Link to="/login">Already have an account? Login here</Link>
//     </div>
//   );
// }

// export default Register;

// Register.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   // State to store registration data
//   const [fullName, setFullName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('student'); // Default user type

//   // Function to handle registration form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform registration logic here with registration data and userType
//     console.log('Registration submitted:', { fullName, username, email, password, userType });
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Register</h2>
//       {/* Registration form */}
//       <form className="mt-4" onSubmit={handleSubmit}>
//         {/* Registration fields */}
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>
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
//             type="email"
//             className="form-control"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
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
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         {/* User type selection */}
//         <div className="mb-3">
//           <select className="form-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {/* Registration button */}
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//       {/* Link to login page */}
//       <p className="mt-3">Already have an account? <Link to="/login">Login here</Link></p>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default user type
  const [error, setError] = useState(''); // State to store error messages
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Reset error message
    setError('');

    try {
      // Perform registration logic here with registration data and userType
      const response = await axios.post('http://localhost:8081/api/users', {
        fullName,
        username,
        email,
        password,
        userType,
      });

      console.log('Registration successful:', response.data);
      // Redirect to the login page or another page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Register</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p className="mt-3">Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;
