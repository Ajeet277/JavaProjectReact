// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// index.js or App.js (where you render your App component)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { AuthProvider } from './pages/Login/AuthContext'; // Import the AuthProvider

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider> {/* Wrap your App component with AuthProvider */}
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { AuthProvider } from './pages/Login/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
