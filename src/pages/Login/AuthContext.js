// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     isAuthenticated: false,
//     user: null,
//   });

//   const login = (user) => {
//     setAuth({
//       isAuthenticated: true,
//       user,
//     });
//   };

//   const logout = () => {
//     setAuth({
//       isAuthenticated: false,
//       user: null,
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     isAuthenticated: false,
//     user: null,
//     username: null,
//   });

//   const login = (user, username) => {
//     setAuth({
//       isAuthenticated: true,
//       user,
//       username,
//     });
//   };

//   const logout = () => {
//     setAuth({
//       isAuthenticated: false,
//       user: null,
//       username: null,
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : {
      isAuthenticated: false,
      user: null,
      username: null,
    };
  });

  useEffect(() => {
    // Save authentication state to localStorage whenever it changes
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const login = (user, username) => {
    setAuth({
      isAuthenticated: true,
      user,
      username,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      username: null,
    });
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
