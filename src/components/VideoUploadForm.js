
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import VideoList from './VideoList';

// const VideoUploadForm = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [courseId, setCourseId] = useState('');
//   const [chapterName, setChapterName] = useState('');
//   const [subChapterId, setSubChapterId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [chapters, setChapters] = useState([]);
//   const [subChapters, setSubChapters] = useState([]);
//   const [videos, setVideos] = useState([]);
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
//   }, [courseId, chapterName]);

//   useEffect(() => {
//     axios.get('http://localhost:8081/api/videos')
//       .then(response => {
//         setVideos(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the videos!', error);
//       });
//   }, []);

//   const handleFileChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', videoFile);
//     formData.append('courseId', courseId);
//     formData.append('chapterId', chapterName);
//     formData.append('subChapterId', subChapterId);

//     try {
//       const response = await axios.post('http://localhost:8081/api/videos/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Video uploaded:', response.data);
//       setVideos([...videos, response.data]);
//       navigate(`/teacher/dashboard`);
//     } catch (error) {
//       console.error('There was an error uploading the video!', error);
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       } else if (error.request) {
//         console.error('Request data:', error.request);
//       } else {
//         console.error('Error message:', error.message);
//       }
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFile" className="mb-3">
//               <Form.Label>Select Video File</Form.Label>
//               <Form.Control type="file" accept="video/*" onChange={handleFileChange} />
//             </Form.Group>
//             <Form.Group controlId="formCourse" className="mb-3">
//               <Form.Label>Course</Form.Label>
//               <Form.Control as="select" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
//                 <option value="">Select a course</option>
//                 {courses.map(course => (
//                   <option key={course.id} value={course.id}>{course.name}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="formChapter" className="mb-3">
//               <Form.Label>Chapter</Form.Label>
//               <Form.Control as="select" value={chapterName} onChange={(e) => setChapterName(e.target.value)} disabled={!courseId}>
//                 <option value="">Select a chapter</option>
//                 {chapters.map(chapter => (
//                   <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="formSubChapter" className="mb-3">
//               <Form.Label>Subchapter</Form.Label>
//               <Form.Control as="select" value={subChapterId} onChange={(e) => setSubChapterId(e.target.value)} disabled={!chapterName}>
//                 <option value="">Select a subchapter</option>
//                 {subChapters.map(subChapter => (
//                   <option key={subChapter.id} value={subChapter.id}>{subChapter.name}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//             <Button variant="primary" type="submit" disabled={!videoFile || !subChapterId}>
//               Upload Video
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//       <Row className="justify-content-md-center mt-5">
//         <Col md={8}>
//           <h2>Uploaded Videos</h2>
//           <VideoList videos={videos} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VideoUploadForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import VideoList from './VideoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoUploadForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [subChapterId, setSubChapterId] = useState('');
  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [subChapters, setSubChapters] = useState([]);
  const [videos, setVideos] = useState([]);
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

  // useEffect(() => {
  //   axios.get('http://localhost:8081/api/videos')
  //     .then(response => {
  //       setVideos(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the videos!', error);
  //     });
  // }, []);

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
      setVideos([...videos, response.data]);
      navigate(`/teacher/dashboard`);
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
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="mb-4">Upload New Video</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Video File</Form.Label>
              <Form.Control type="file" accept="video/*" onChange={handleFileChange} />
            </Form.Group>
            <Form.Group controlId="formCourse" className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control as="select" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                <option value="">Select a course</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formChapter" className="mb-3">
              <Form.Label>Chapter</Form.Label>
              <Form.Control as="select" value={chapterName} onChange={(e) => setChapterName(e.target.value)} disabled={!courseId}>
                <option value="">Select a chapter</option>
                {chapters.map(chapter => (
                  <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSubChapter" className="mb-3">
              <Form.Label>Subchapter</Form.Label>
              <Form.Control as="select" value={subChapterId} onChange={(e) => setSubChapterId(e.target.value)} disabled={!chapterName}>
                <option value="">Select a subchapter</option>
                {subChapters.map(subChapter => (
                  <option key={subChapter.id} value={subChapter.id}>{subChapter.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!videoFile || !subChapterId}>
              Upload Video
            </Button>
          </Form>
        </Col>
      </Row>
      {/* <Row className="justify-content-md-center mt-5">
        <Col md={8}>
          <h2>Uploaded Videos</h2>
          <VideoList videos={videos} />
        </Col>
      </Row> */}
    </Container>
  );
};

export default VideoUploadForm;
