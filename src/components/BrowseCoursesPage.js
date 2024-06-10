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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrowseCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollMessage, setEnrollMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8081/api/courses');
        setCourses(response.data);
        setFilteredCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = () => {
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setEnrollMessage(''); // Reset the enrollment message when a new course is selected
  };

  const handleEnroll = async () => {
    try {
      // Assuming there is an API endpoint to handle enrollment
      await axios.post(`http://localhost:8081/api/enroll`, { courseId: selectedCourse.id });
      setEnrollMessage('You have been successfully enrolled in the course.');
    } catch (err) {
      setEnrollMessage('Failed to enroll in the course.');
    }
  };

  return (
    <div>
      <h2>Browse Courses</h2>
      <input
        type="text"
        placeholder="Search Courses"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {loading && <p>Loading courses...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div key={course.id} onClick={() => handleCourseClick(course)} style={{ cursor: 'pointer' }}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )
        )}
      </div>
      {selectedCourse && (
        <div>
          <h3>Course Details</h3>
          <h4>{selectedCourse.name}</h4>
          <p>{selectedCourse.description}</p>
          <button onClick={handleEnroll}>Enroll</button>
          {enrollMessage && <p>{enrollMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default BrowseCoursesPage;
