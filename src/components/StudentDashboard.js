
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../pages/Login/AuthContext';

// const StudentDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const { auth } = useAuth();
//   const username = auth.user?.username;

//   useEffect(() => {
//     if (username) {
//       // Fetch enrolled courses
//       axios.get(`http://localhost:8081/api/users/${username}/courses`)
//         .then(response => {
//           setCourses(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the courses!', error);
//         });
//     }
//   }, [username]);

//   return (
//     <div>
//       <h1>My Courses</h1>
//       <p>You are enrolled in {courses.length} courses.</p> {/* Display the course count */}
//       {/* <ul>
//         {courses.map(course => (
//           <li key={course}>
//             <Link to={`/course/${course}`}>{course}</Link>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default StudentDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/Login/AuthContext';
import { Container, ListGroup } from 'react-bootstrap';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const { auth } = useAuth();
  const username = auth.user?.username;

  useEffect(() => {
    if (username) {
      axios.get(`http://localhost:8081/api/users/${username}/courses`)
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the courses!', error);
        });
    }
  }, [username]);

  return (
    <Container>
      <h1>My Courses</h1>
      <p>You are enrolled in {courses.length} courses.</p>
      {/* <ListGroup>
        {courses.map(course => (
          <ListGroup.Item key={course}>
            <Link to={`/course/${course}`}>{course}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup> */}
    </Container>
  );
};

export default StudentDashboard;
