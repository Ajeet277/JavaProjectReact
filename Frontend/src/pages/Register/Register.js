
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import Axios for making HTTP requests

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('student'); // Default user type
//   const [error, setError] = useState(''); // State to store error messages
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Reset error message
//     setError('');

//     try {
//       // Perform registration logic here with registration data and userType
//       const response = await axios.post('http://localhost:8081/api/users', {
//         fullName,
//         username,
//         email,
//         password,
//         userType,
//       });

//       console.log('Registration successful:', response.data);
//       // Redirect to the login page or another page after successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error('Error registering user:', error);
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Register</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
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
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//           >
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//       <p className="mt-3">Already have an account? <Link to="/login">Login here</Link></p>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import bcrypt from 'bcryptjs'; // Import bcryptjs

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('student'); // Default user type
//   const [error, setError] = useState(''); // State to store error messages
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Reset error message
//     setError('');

//     try {
//       // Hash the password before sending it to the backend
//       const salt = bcrypt.genSaltSync(10);
//       const hashedPassword = bcrypt.hashSync(password, salt);

//       // Perform registration logic here with registration data and userType
//       const response = await axios.post('http://localhost:8081/api/users', {
//         fullName,
//         username,
//         email,
//         password: hashedPassword, // Send the hashed password
//         userType,
//       });

//       console.log('Registration successful:', response.data);
//       // Redirect to the login page or another page after successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error('Error registering user:', error);
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5">Register</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
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
//         <div className="mb-3">
//           <select
//             className="form-select"
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//           >
//             <option value="teacher">Teacher</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//       <p className="mt-3">Already have an account? <Link to="/login">Login here</Link></p>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Import bcryptjs

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default user type
  const [error, setError] = useState(''); // State to store error messages
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email regex pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long and include uppercase, lowercase, number, and special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character');
      return;
    }

    // Reset error message
    setError('');

    try {
      // Hash the password before sending it to the backend
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Perform registration logic here with registration data and userType
      const response = await axios.post('http://localhost:8081/api/users', {
        fullName,
        username,
        email,
        password: hashedPassword, // Send the hashed password
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
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
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
