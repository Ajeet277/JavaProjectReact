// // components/VideoUploadForm.js
// import React, { useState } from 'react';

// const VideoUploadForm = () => {
//   const [formData, setFormData] = useState({
//     courseName: '',
//     chapterName: '',
//     subChapterName: '',
//     videoFile: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'videoFile' ? files[0] : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div>
//       <h2>Upload Video</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="courseName" placeholder="Course Name" value={formData.courseName} onChange={handleChange} />
//         <input type="text" name="chapterName" placeholder="Chapter Name" value={formData.chapterName} onChange={handleChange} />
//         <input type="text" name="subChapterName" placeholder="Sub-Chapter Name" value={formData.subChapterName} onChange={handleChange} />
//         <input type="file" name="videoFile" onChange={handleChange} />
//         <button type="submit">Upload Video</button>
//       </form>
//     </div>
//   );
// }

// export default VideoUploadForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UploadVideoForm = () => {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [subChapterId, setSubChapterId] = useState('');
//   const [subChapters, setSubChapters] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/subchapters')
//       .then(response => {
//         setSubChapters(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the subchapters!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/api/videos', { url: videoUrl, subChapter: { id: subChapterId } })
//       .then(response => {
//         console.log('Video added:', response.data);
//         setVideoUrl('');
//         setSubChapterId('');
//       })
//       .catch(error => {
//         console.error('There was an error uploading the video!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Video URL:
//         <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
//       </label>
//       <label>
//         SubChapter:
//         <select value={subChapterId} onChange={(e) => setSubChapterId(e.target.value)}>
//           <option value="">Select a subchapter</option>
//           {subChapters.map(subChapter => (
//             <option key={subChapter.id} value={subChapter.id}>{subChapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Upload Video</button>
//     </form>
//   );
// };

// export default UploadVideoForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VideoUploadForm = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [courseId, setCourseId] = useState('');
//   const [chapterId, setChapterId] = useState('');
//   const [subChapterId, setSubChapterId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [chapters, setChapters] = useState([]);
//   const [subChapters, setSubChapters] = useState([]);
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

//   useEffect(() => {
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     } else {
//       setChapters([]);
//       setSubChapters([]);
//     }
//   }, [courseId]);

//   useEffect(() => {
//     if (chapterId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterId}/subchapters`)
//         .then(response => {
//           setSubChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the subchapters!', error);
//         });
//     } else {
//       setSubChapters([]);
//     }
//   }, [chapterId]);

//   const handleFileChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('video', videoFile);
//     formData.append('subChapterId', subChapterId);

//     try {
//       const response = await axios.post('http://localhost:8081/api/videos/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Video uploaded:', response.data);
//       navigate('/teacher/dashboard'); // Navigate to the desired page after uploading the video
//     } catch (error) {
//       console.error('There was an error uploading the video!', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Select Video File:
//         <input type="file" accept="video/*" onChange={handleFileChange} />
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
//         <select value={chapterId} onChange={(e) => setChapterId(e.target.value)} disabled={!courseId}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Subchapter:
//         <select value={subChapterId} onChange={(e) => setSubChapterId(e.target.value)} disabled={!chapterId}>
//           <option value="">Select a subchapter</option>
//           {subChapters.map(subChapter => (
//             <option key={subChapter.id} value={subChapter.id}>{subChapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit" disabled={!videoFile || !subChapterId}>Upload Video</button>
//     </form>
//   );
// };

// export default VideoUploadForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VideoUploadForm = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [courseId, setCourseId] = useState('');
//   const [chapterName, setChapterName] = useState('');
//   const [subChapterId, setSubChapterId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [chapters, setChapters] = useState([]);
//   const [subChapters, setSubChapters] = useState([]);
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

//   useEffect(() => {
//     if (courseId) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
//         .then(response => {
//           setChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the chapters!', error);
//         });
//     } else {
//       setChapters([]);
//       setSubChapters([]);
//     }
//   }, [courseId]);

//   useEffect(() => {
//     if (chapterName) {
//       axios.get(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterName}/subchapters`)
//         .then(response => {
//           setSubChapters(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the subchapters!', error);
//         });
//     } else {
//       setSubChapters([]);
//     }
//   }, [chapterName]);

//   const handleFileChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('video', videoFile);
//     formData.append('subChapterId', subChapterId);

//     try {
//       const response = await axios.post('http://localhost:8081/api/videos/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Video uploaded:', response.data);
//       navigate('/teacher/dashboard'); // Navigate to the desired page after uploading the video
//     } catch (error) {
//       console.error('There was an error uploading the video!', error);
//       if (error.response) {
//         // Server responded with a status other than 200 range
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       } else if (error.request) {
//         // Request was made but no response was received
//         console.error('Request data:', error.request);
//       } else {
//         // Something else happened while setting up the request
//         console.error('Error message:', error.message);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Select Video File:
//         <input type="file" accept="video/*" onChange={handleFileChange} />
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
//         <select value={chapterName} onChange={(e) => setChapterName(e.target.value)} disabled={!courseId}>
//           <option value="">Select a chapter</option>
//           {chapters.map(chapter => (
//             <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Subchapter:
//         <select value={subChapterId} onChange={(e) => setSubChapterId(e.target.value)} disabled={!chapterName}>
//           <option value="">Select a subchapter</option>
//           {subChapters.map(subChapter => (
//             <option key={subChapter.id} value={subChapter.id}>{subChapter.name}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit" disabled={!videoFile || !subChapterId}>Upload Video</button>
//     </form>
//   );
// };

// export default VideoUploadForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoUploadForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [subChapterId, setSubChapterId] = useState('');
  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [subChapters, setSubChapters] = useState([]);
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

  useEffect(() => {
    if (courseId) {
      axios.get(`http://localhost:8081/api/courses/${courseId}/chapters`)
        .then(response => {
          setChapters(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the chapters!', error);
        });
    } else {
      setChapters([]);
      setSubChapters([]);
    }
  }, [courseId]);

  useEffect(() => {
    if (chapterName) {
      axios.get(`http://localhost:8081/api/courses/${courseId}/chapters/${chapterName}/subchapters`)
        .then(response => {
          setSubChapters(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the subchapters!', error);
        });
    } else {
      setSubChapters([]);
    }
  }, [courseId, chapterName]);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('courseId', courseId);
    formData.append('chapterId', chapterName);
    formData.append('subChapterId', subChapterId);

    try {
      const response = await axios.post('http://localhost:8081/api/videos/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Video uploaded:', response.data);
      navigate('/teacher/dashboard'); 
    } catch (error) {
      console.error('There was an error uploading the video!', error);
      if (error.response) {
       
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        
        console.error('Request data:', error.request);
      } else {
       
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Video File:
        <input type="file" accept="video/*" onChange={handleFileChange} />
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
      <label>
        Chapter:
        <select value={chapterName} onChange={(e) => setChapterName(e.target.value)} disabled={!courseId}>
          <option value="">Select a chapter</option>
          {chapters.map(chapter => (
            <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
          ))}
        </select>
      </label>
      <label>
        Subchapter:
        <select value={subChapterId} onChange={(e) => setSubChapterId(e.target.value)} disabled={!chapterName}>
          <option value="">Select a subchapter</option>
          {subChapters.map(subChapter => (
            <option key={subChapter.id} value={subChapter.id}>{subChapter.name}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={!videoFile || !subChapterId}>Upload Video</button>
    </form>
  );
};

export default VideoUploadForm;
