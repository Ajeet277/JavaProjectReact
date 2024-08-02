// // Logout.js
// import React from 'react';
// import { useAuth } from './AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <button onClick={handleLogout} className="btn btn-danger">
//       Logout
//     </button>
//   );
// };

// export default Logout;


import React from 'react';
import { useAuth } from './AuthContext'; // Import the AuthContext
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Logout = () => {
  const { logout } = useAuth(); // Get the logout function from the AuthContext
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleLogout = () => {
    logout(); // Call the logout function to clear the user's session
    navigate('/'); // Redirect the user to the home page
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
