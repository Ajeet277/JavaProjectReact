// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BrowseCoursesPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('http://localhost:8081/api/courses');
//         setCourses(response.data);
//         setFilteredCourses(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch courses');
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleSearch = () => {
//     const filtered = courses.filter(course =>
//       course.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredCourses(filtered);
//   };

//   return (
//     <div>
//       <h2>Browse Courses</h2>
//       <input
//         type="text"
//         placeholder="Search Courses"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {loading && <p>Loading courses...</p>}
//         {error && <p>{error}</p>}
//         {!loading && !error && (
//           filteredCourses.length > 0 ? (
//             filteredCourses.map(course => (
//               <div key={course.id}>
//                 <h3>{course.name}</h3>
//                 <p>{course.description}</p>
//               </div>
//             ))
//           ) : (
//             <p>No courses found.</p>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default BrowseCoursesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BrowseCoursesPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [enrollMessage, setEnrollMessage] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('http://localhost:8081/api/courses');
//         setCourses(response.data);
//         setFilteredCourses(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch courses');
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleSearch = () => {
//     const filtered = courses.filter(course =>
//       course.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredCourses(filtered);
//   };

//   const handleCourseClick = (course) => {
//     setSelectedCourse(course);
//     setEnrollMessage(''); // Reset the enrollment message when a new course is selected
//   };

//   const handleEnroll = async () => {
//     try {
//       // Assuming there is an API endpoint to handle enrollment
//       await axios.post(`http://localhost:8081/api/enroll`, { courseId: selectedCourse.id });
//       setEnrollMessage('You have been successfully enrolled in the course.');
//     } catch (err) {
//       setEnrollMessage('Failed to enroll in the course.');
//     }
//   };

//   return (
//     <div>
//       <h2>Browse Courses</h2>
//       <input
//         type="text"
//         placeholder="Search Courses"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {loading && <p>Loading courses...</p>}
//         {error && <p>{error}</p>}
//         {!loading && !error && (
//           filteredCourses.length > 0 ? (
//             filteredCourses.map(course => (
//               <div key={course.id} onClick={() => handleCourseClick(course)} style={{ cursor: 'pointer' }}>
//                 <h3>{course.name}</h3>
//                 <p>{course.description}</p>
//               </div>
//             ))
//           ) : (
//             <p>No courses found.</p>
//           )
//         )}
//       </div>
//       {selectedCourse && (
//         <div>
//           <h3>Course Details</h3>
//           <h4>{selectedCourse.name}</h4>
//           <p>{selectedCourse.description}</p>
//           <button onClick={handleEnroll}>Enroll</button>
//           {enrollMessage && <p>{enrollMessage}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowseCoursesPage;


// BrowseCoursesPage.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const BrowseCoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Browse Courses</h1>
//       <ul>
//         {courses.map(course => (
//           <li key={course.id}>
//             <Link to={`/course/${course.id}`}>{course.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BrowseCoursesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'antd';

// const BrowseCoursesPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [username, setUsername] = useState('johndoe'); // Hardcoded for example, replace with actual logged-in username

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const enrollCourse = (courseId) => {
//     axios.post(`http://localhost:8081/api/users/${username}/courses/${courseId}`)
//       .then(response => {
//         console.log('Enrolled in course:', response.data);
//       })
//       .catch(error => {
//         console.error('Error enrolling in course:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Browse Courses</h2>
//       <div className="course-list">
//         {courses.map(course => (
//           <Card key={course.id} title={course.name} style={{ marginBottom: '20px' }}>
//             <p>{course.description}</p>
//             <Button type="primary" onClick={() => enrollCourse(course.id)}>Enroll</Button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseCoursesPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'antd';

// const BrowseCoursesPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const username = 'johndoe'; // Hardcoded for example, replace with actual logged-in username

//   useEffect(() => {
//     // Fetch all courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });

//     // Fetch enrolled courses for the user
//     axios.get(`http://localhost:8081/api/users/${username}/courses`)
//       .then(response => {
//         setEnrolledCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching enrolled courses:', error);
//       });
//   }, [username]);

//   const enrollCourse = (courseId) => {
//     axios.post(`http://localhost:8081/api/users/${username}/courses/${courseId}`)
//       .then(response => {
//         console.log('Enrolled in course:', response.data);
//         // Update the enrolled courses list
//         setEnrolledCourses(prevEnrolledCourses => [...prevEnrolledCourses, courseId]);
//       })
//       .catch(error => {
//         console.error('Error enrolling in course:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Browse Courses</h2>
//       <div className="course-list">
//         {courses.map(course => (
//           <Card key={course.id} title={course.name} style={{ marginBottom: '20px' }}>
//             <p>{course.description}</p>
//             {enrolledCourses.includes(course.id) ? (
//               <Button type="default" disabled>Already Enrolled</Button>
//             ) : (
//               <Button type="primary" onClick={() => enrollCourse(course.id)}>Enroll</Button>
//             )}
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseCoursesPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'antd';
// import { useAuth } from '../pages/Login/AuthContext';

// const BrowseCoursesPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const { auth } = useAuth();
//   const { username } = auth;

//   useEffect(() => {
//     if (!username) return; // Exit early if username is not available

//     // Fetch all courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });

//     // Fetch enrolled courses for the user
//     axios.get(`http://localhost:8081/api/users/${username}/courses`)
//       .then(response => {
//         setEnrolledCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching enrolled courses:', error);
//       });
//   }, [username]);

//   const enrollCourse = (courseId) => {
//     axios.post(`http://localhost:8081/api/users/${username}/courses/${courseId}`)
//       .then(response => {
//         console.log('Enrolled in course:', response.data);
//         // Update the enrolled courses list
//         setEnrolledCourses(prevEnrolledCourses => [...prevEnrolledCourses, courseId]);
//       })
//       .catch(error => {
//         console.error('Error enrolling in course:', error);
//       });
//   };
//   console.log(username);
//   if (!username) {
//     return <div>Loading...</div>; // Show a loading state until username is available
//   }

//   return (
//     <div>
//       <h2>Browse Courses</h2>
//       <div className="course-list">
//         {courses.map(course => (
//           <Card key={course.id} title={course.name} style={{ marginBottom: '20px' }}>
//             <p>{course.description}</p>
//             {enrolledCourses.includes(course.id) ? (
//               <Button type="default" disabled>Already Enrolled</Button>
//             ) : (
//               <Button type="primary" onClick={() => enrollCourse(course.id)}>Enroll</Button>
//             )}
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseCoursesPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../pages/Login/AuthContext';

const BrowseCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { auth } = useAuth();
  const { username } = auth.user;

  useEffect(() => {
    if (!username) return;

    axios.get('http://localhost:8081/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });

    axios.get(`http://localhost:8081/api/users/${username}/courses`)
      .then(response => {
        setEnrolledCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching enrolled courses:', error);
      });
  }, [username]);

  const enrollCourse = (courseId) => {
    axios.post(`http://localhost:8081/api/users/${username}/courses/${courseId}`)
      .then(response => {
        console.log('Enrolled in course:', response.data);
        setEnrolledCourses(prevEnrolledCourses => [...prevEnrolledCourses, courseId]);
      })
      .catch(error => {
        console.error('Error enrolling in course:', error);
      });
  };

  if (!username) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>Browse Courses</h2>
      <Row>
        {courses.map(course => (
          <Col md={4} key={course.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                {enrolledCourses.includes(course.id) ? (
                  <Button variant="secondary" disabled>Already Enrolled</Button>
                ) : (
                  <Button variant="primary" onClick={() => enrollCourse(course.id)}>Enroll</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrowseCoursesPage;
