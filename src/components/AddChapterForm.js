
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddChapterForm = () => {
//   const [chapterName, setChapterName] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8081/api/chapters', { name: chapterName, course: { id: courseId } })
//       .then(response => {
//         console.log('Chapter added:', response.data);
//         setChapterName('');
//         setCourseId('');
//       })
//       .catch(error => {
//         console.error('There was an error adding the chapter!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Chapter Name:
//         <input type="text" value={chapterName} onChange={(e) => setChapterName(e.target.value)} />
//       </label>
//       <label>
//         Course:
//         <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
//           <option value="">Select a course</option>
//           {courses.map(course => (
//             <option key={course.id} value={course.id}>{course.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Chapter</button>
//     </form>
//   );
// };

// export default AddChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddChapterForm = () => {
//   const [chapterName, setChapterName] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8081/api/chapters', { name: chapterName, course: { id: courseId } })
//       .then(response => {
//         console.log('Chapter added:', response.data);
//         setChapterName('');
//         setCourseId('');
//         navigate('/teacher/add-subchapter'); // Navigate to the desired page after adding the chapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the chapter!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Chapter Name:
//         <input type="text" value={chapterName} onChange={(e) => setChapterName(e.target.value)} />
//       </label>
//       <label>
//         Course:
//         <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
//           <option value="">Select a course</option>
//           {courses.map(course => (
//             <option key={course.id} value={course.id}>{course.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Chapter</button>
//     </form>
//   );
// };

// export default AddChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddChapterForm = () => {
//   const [chapterName, setChapterName] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters`, { name: chapterName })
//       .then(response => {
//         console.log('Chapter added:', response.data);
//         setChapterName('');
//         setCourseId('');
//         navigate('/teacher/add-subchapter'); // Navigate to the desired page after adding the chapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the chapter!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Chapter Name:
//         <input type="text" value={chapterName} onChange={(e) => setChapterName(e.target.value)} />
//       </label>
//       <label>
//         Course:
//         <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
//           <option value="">Select a course</option>
//           {courses.map(course => (
//             <option key={course.id} value={course.id}>{course.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Chapter</button>
//     </form>
//   );
// };

// export default AddChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddChapterForm = () => {
//   const [chapterName, setChapterName] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters`, { name: chapterName })
//       .then(response => {
//         console.log('Chapter added:', response.data);
//         setChapterName('');
//         setCourseId('');
//         console.log(response.data.id);
//         navigate(`/teacher/add-subchapter`); // Navigate to the desired page after adding the chapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the chapter!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Chapter Name:
//         <input type="text" value={chapterName} onChange={(e) => setChapterName(e.target.value)} />
//       </label>
//       <label>
//         Course:
//         <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
//           <option value="">Select a course</option>
//           {courses.map(course => (
//             <option key={course.id} value={course.id}>{course.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Chapter</button>
//     </form>
//   );
// };

// export default AddChapterForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';  // Import uuid library

const AddChapterForm = () => {
  const [chapterName, setChapterName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const chapterId = uuidv4();  // Generate unique ID
    axios.post(`http://localhost:8081/api/courses/${courseId}/chapters`, { id: chapterId, name: chapterName })
      .then(response => {
        console.log('Chapter added:', response.data);
        setChapterName('');
        setCourseId('');
        navigate(`/teacher/add-subchapter`); // Navigate to the desired page after adding the chapter
      })
      .catch(error => {
        console.error('There was an error adding the chapter!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Chapter Name:
        <input type="text" value={chapterName} onChange={(e) => setChapterName(e.target.value)} />
      </label>
      <label>
        Course:
        <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Chapter</button>
    </form>
  );
};

export default AddChapterForm;
