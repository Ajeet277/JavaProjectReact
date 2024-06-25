
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { List } from 'antd';
// import { Link } from 'react-router-dom';

// const EnrolledCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const username = 'johndoe'; // Hardcoded for example, replace with actual logged-in username

//   useEffect(() => {
//     // Fetch enrolled courses
//     axios.get(`http://localhost:8081/api/users/${username}/courses`)
//       .then(response => {
//         setEnrolledCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching enrolled courses:', error);
//       });
//   }, [username]);

//   useEffect(() => {
//     // Fetch all courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const getEnrolledCourseDetails = () => {
//     return courses.filter(course => enrolledCourses.includes(course.id));
//   };

//   return (
//     <div>
//       <h2>Enrolled Courses</h2>
//       <List
//         itemLayout="horizontal"
//         dataSource={getEnrolledCourseDetails()}
//         renderItem={course => (
//           <List.Item>
//             <List.Item.Meta
//               title={<Link to={`/courses/${course.id}`}>{course.name}</Link>}
//               // description={course.description}
//             />
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default EnrolledCourses;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { List } from 'antd';
// import { Link } from 'react-router-dom';

// const EnrolledCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const username = 'johndoe'; // Hardcoded for example, replace with actual logged-in username

//   useEffect(() => {
//     // Fetch enrolled courses
//     axios.get(`http://localhost:8081/api/users/${username}/courses`)
//       .then(response => {
//         setEnrolledCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching enrolled courses:', error);
//       });
//   }, [username]);

//   useEffect(() => {
//     // Fetch all courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const getEnrolledCourseDetails = () => {
//     return courses.filter(course => enrolledCourses.includes(course.id));
//   };

//   return (
//     <div>
//       <h2>Enrolled Courses</h2>
//       <List
//         itemLayout="horizontal"
//         dataSource={getEnrolledCourseDetails()}
//         renderItem={course => (
//           <List.Item>
//             <List.Item.Meta
//               title={<Link to={`/student/courses/${course.id}`}>{course.name}</Link>}
//               // description={course.description}
//             />
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default EnrolledCourses;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { List } from 'antd';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../pages/Login/AuthContext';

// const EnrolledCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const { auth } = useAuth();
//   const username = auth.user?.username;

//   useEffect(() => {
//     if (username) {
//       // Fetch enrolled courses
//       axios.get(`http://localhost:8081/api/users/${username}/courses`)
//         .then(response => {
//           setEnrolledCourses(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching enrolled courses:', error);
//         });
//     }
//   }, [username]);

//   useEffect(() => {
//     // Fetch all courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const getEnrolledCourseDetails = () => {
//     return courses.filter(course => enrolledCourses.includes(course.id));
//   };

//   return (
//     <div>
//       <h2>Enrolled Courses</h2>
//       <List
//         itemLayout="horizontal"
//         dataSource={getEnrolledCourseDetails()}
//         renderItem={course => (
//           <List.Item>
//             <List.Item.Meta
//               title={<Link to={`/student/courses/${course.id}`}>{course.name}</Link>}
//             />
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default EnrolledCourses;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/Login/AuthContext';

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { auth } = useAuth();
  const username = auth.user?.username;

  useEffect(() => {
    if (username) {
      axios.get(`http://localhost:8081/api/users/${username}/courses`)
        .then(response => {
          setEnrolledCourses(response.data);
        })
        .catch(error => {
          console.error('Error fetching enrolled courses:', error);
        });
    }
  }, [username]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const getEnrolledCourseDetails = () => {
    return courses.filter(course => enrolledCourses.includes(course.id));
  };

  return (
    <Container>
      <h2>Enrolled Courses</h2>
      <ListGroup>
        {getEnrolledCourseDetails().map(course => (
          <ListGroup.Item key={course.id}>
            <Link to={`/student/courses/${course.id}`}>{course.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default EnrolledCourses;
