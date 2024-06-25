

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddSubChapterForm = () => {
//   const [subChapterName, setSubChapterName] = useState('');
//   const [chapterId, setChapterId] = useState('');
//   const [chapters, setChapters] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/chapters')
//       .then(response => {
//         setChapters(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the chapters!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8081/api/subchapters', { name: subChapterName, chapter: { id: chapterId } })
//       .then(response => {
//         console.log('Subchapter added:', response.data);
//         setSubChapterName('');
//         setChapterId('');
//         navigate('/teacher/upload-video'); // Navigate to the desired page after adding the subchapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the subchapter!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Subchapter Name:
//         <input type="text" value={subChapterName} onChange={(e) => setSubChapterName(e.target.value)} />
//       </label>
//       <label>
//         Chapter:
//         <select value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Subchapter</button>
//     </form>
//   );
// };

// export default AddSubChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddSubChapterForm = () => {
//   const [subChapterName, setSubChapterName] = useState('');
//   const [chapterId, setChapterId] = useState('');
//   const [chapters, setChapters] = useState([]);
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch chapters based on courseId
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     }
//   }, [courseId]); // Fetch chapters whenever courseId changes

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterId}/subchapters`, { name: subChapterName })
//       .then(response => {
//         console.log('Subchapter added:', response.data);
//         setSubChapterName('');
//         setChapterId('');
//         navigate('/teacher/upload-video'); // Navigate to the desired page after adding the subchapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the subchapter!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Subchapter Name:
//         <input type="text" value={subChapterName} onChange={(e) => setSubChapterName(e.target.value)} />
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
//       <label>
//         Chapter:
//         <select value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Subchapter</button>
//     </form>
//   );
// };

// export default AddSubChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddSubChapterForm = () => {
//   const [subChapterName, setSubChapterName] = useState('');
//   const [chapterId, setChapterId] = useState('');
//   const [chapters, setChapters] = useState([]);
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch chapters based on courseId
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     }
//   }, [courseId]); // Fetch chapters whenever courseId changes

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitting form...');
//     console.log('Subchapter Name:', subChapterName);
//     console.log('Course ID:', courseId);
//     console.log('Chapter ID:', chapterId);

//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterId}/subchapters`, { name: subChapterName })
//       .then(response => {
//         console.log('Subchapter added:', response.data);
//         setSubChapterName('');
//         setChapterId('');
//         navigate('/teacher/upload-video'); // Navigate to the desired page after adding the subchapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the subchapter!', error);
//         console.log(error.response.data);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Subchapter Name:
//         <input type="text" value={subChapterName} onChange={(e) => setSubChapterName(e.target.value)} />
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
//       <label>
//         Chapter:
//         <select value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Subchapter</button>
//     </form>
//   );
// };

// export default AddSubChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const AddSubChapterForm = () => {
//   const [subChapterName, setSubChapterName] = useState('');
//   const [chapterId, setChapterId] = useState('');
//   const [chapters, setChapters] = useState([]);
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();
//   const { chapterIdParam } = useParams();

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     }
//   }, [courseId]);

//   useEffect(() => {
//     if (chapterIdParam) {
//       setChapterId(chapterIdParam);
//     }
//   }, [chapterIdParam]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterId}/subchapters`, { name: subChapterName })
//       .then(response => {
//         console.log('Subchapter added:', response.data);
//         setSubChapterName('');
//         setChapterId('');
//         navigate('/teacher/upload-video');
//       })
//       .catch(error => {
//         console.error('There was an error adding the subchapter!', error);
//         console.log(error.response.data);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Subchapter Name:
//         <input type="text" value={subChapterName} onChange={(e) => setSubChapterName(e.target.value)} />
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
//       <label>
//         Chapter:
//         <select value={chapterId} onChange={(e) => setChapterId(e.target.value)} disabled={!courseId || chapterIdParam}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Subchapter</button>
//     </form>
//   );
// };

// export default AddSubChapterForm;


// chaptername

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddSubChapterForm = () => {
//   const [subChapterName, setSubChapterName] = useState('');
//   const [chapterName, setChapterName] = useState('');
//   const [chapters, setChapters] = useState([]);
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch chapters based on courseId
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     }
//   }, [courseId]); // Fetch chapters whenever courseId changes

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('chaptername',chapterName);
//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterName}/subchapters`, { name: subChapterName })
//       .then(response => {
//         console.log('Subchapter added:', response.data);
//         setSubChapterName('');
//         setChapterName('');
//         navigate('/teacher/upload-video'); // Navigate to the desired page after adding the subchapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the subchapter!', error);
//         console.log(error.response.data);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Subchapter Name:
//         <input type="text" value={subChapterName} onChange={(e) => setSubChapterName(e.target.value)} />
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
//       <label>
//         Chapter:
//         <select value={chapterName} onChange={(e) => setChapterName(e.target.value)}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Subchapter</button>
//     </form>
//   );
// };

// export default AddSubChapterForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';  // Import uuid library

// const AddSubChapterForm = () => {
//   const [subChapterName, setSubChapterName] = useState('');
//   const [chapterName, setChapterName] = useState('');
//   const [chapters, setChapters] = useState([]);
//   const [courseId, setCourseId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch courses
//     axios.get('http://localhost:8081/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch chapters based on courseId
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     }
//   }, [courseId]); // Fetch chapters whenever courseId changes

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const subChapterId = uuidv4();  // Generate unique ID for subchapter
//     axios.post(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterName}/subchapters`, { id: subChapterId, name: subChapterName })
//       .then(response => {
//         console.log('Subchapter added:', response.data);
//         setSubChapterName('');
//         setChapterName('');
//         navigate('/teacher/upload-video'); // Navigate to the desired page after adding the subchapter
//       })
//       .catch(error => {
//         console.error('There was an error adding the subchapter!', error);
//         console.log(error.response.data);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Subchapter Name:
//         <input type="text" value={subChapterName} onChange={(e) => setSubChapterName(e.target.value)} />
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
//       <label>
//         Chapter:
//         <select value={chapterName} onChange={(e) => setChapterName(e.target.value)}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Add Subchapter</button>
//     </form>
//   );
// };

// export default AddSubChapterForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';  // Import uuid library
import 'bootstrap/dist/css/bootstrap.min.css';

const AddSubChapterForm = () => {
  const [subChapterName, setSubChapterName] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [chapters, setChapters] = useState([]);
  const [courseId, setCourseId] = useState('');
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch courses
    axios.get('http://localhost:8081/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  useEffect(() => {
    // Fetch chapters based on courseId
    if (courseId) {
      axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
        .then(response => {
          setChapters(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the chapters!', error);
        });
    }
  }, [courseId]); // Fetch chapters whenever courseId changes

  const handleSubmit = (e) => {
    e.preventDefault();
    const subChapterId = uuidv4();  // Generate unique ID for subchapter
    axios.post(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterName}/subchapters`, { id: subChapterId, name: subChapterName })
      .then(response => {
        console.log('Subchapter added:', response.data);
        setSubChapterName('');
        setChapterName('');
        navigate('/teacher/upload-video'); // Navigate to the desired page after adding the subchapter
      })
      .catch(error => {
        console.error('There was an error adding the subchapter!', error);
        console.log(error.response.data);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Subchapter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="subChapterName" className="form-label">Subchapter Name</label>
          <input
            type="text"
            className="form-control"
            id="subChapterName"
            value={subChapterName}
            onChange={(e) => setSubChapterName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseId" className="form-label">Course</label>
          <select
            className="form-select"
            id="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="chapterName" className="form-label">Chapter</label>
          <select
            className="form-select"
            id="chapterName"
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
          >
            <option value="">Select a chapter</option>
            {chapters.map(chapter => (
              <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Subchapter</button>
      </form>
    </div>
  );
};

export default AddSubChapterForm;
