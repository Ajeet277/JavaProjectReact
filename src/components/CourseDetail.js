// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { List, Collapse } from 'antd';

// const { Panel } = Collapse;

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8081/api/courses/${courseId}`)
//       .then(response => {
//         setCourse(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course details:', error);
//       });
//   }, [courseId]);

//   return (
//     <div>
//       {course && (
//         <>
//           <h2>{course.name}</h2>
//           <p>{course.description}</p>
//           <Collapse>
//             {course.chapters.map(chapter => (
//               <Panel header={chapter.name} key={chapter.id}>
//                 <List
//                   itemLayout="horizontal"
//                   dataSource={chapter.subChapters}
//                   renderItem={subChapter => (
//                     <List.Item>
//                       <List.Item.Meta
//                         title={subChapter.name}
//                       />
//                       <video controls src={`http://localhost:8081/api/videos/${subChapter.videoId}`} />
//                     </List.Item>
//                   )}
//                 />
//               </Panel>
//             ))}
//           </Collapse>
//         </>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { List, Collapse } from 'antd';

// const { Panel } = Collapse;

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8081/api/courses/${courseId}`)
//       .then(response => {
//         setCourse(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course details:', error);
//       });
//   }, [courseId]);

//   const getVideoUrl = (subChapterId) => {
//     return `http://localhost:8081/api/videos/subchapter/${subChapterId}`;
//   };

//   return (
//     <div>
//       {course && (
//         <>
//           <h2>Course Details</h2>
//           <h2>{course.name}</h2>
//           <p>{course.description}</p>
//           <Collapse>
//             {course.chapters.map(chapter => (
//               <Panel header={chapter.name} key={chapter.id}>
//                 <List
//                   itemLayout="horizontal"
//                   dataSource={chapter.subChapters}
//                   renderItem={subChapter => (
//                     <List.Item>
//                       <List.Item.Meta
//                         title={subChapter.name}
//                       />
//                       <video controls width="600">
//                         <source src={getVideoUrl(subChapter.id)} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </List.Item>
//                   )}
//                 />
//               </Panel>
//             ))}
//           </Collapse>
//         </>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { List, Card } from 'antd';

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [subChapterVideos, setSubChapterVideos] = useState([]);
//   const username = 'johndoe'; // Replace with actual logged-in username

//   useEffect(() => {
//     // Fetch course details
//     axios.get(`http://localhost:8081/api/courses/${courseId}`)
//       .then(response => {
//         setCourse(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course details:', error);
//       });
//   }, [courseId]);

//   const fetchVideosForSubChapter = (subChapterId) => {
//     axios.get(`http://localhost:8081/api/videos/subchapter/${subChapterId}?studentId=${username}`)
//       .then(response => {
//         const video = response.data;
//         setSubChapterVideos(prevVideos => [...prevVideos, video]);
//       })
//       .catch(error => {
//         console.error('Error fetching video:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Course Detail</h2>
//       {course && (
//         <div>
//           <h3>{course.name}</h3>
//           <List
//             itemLayout="vertical"
//             dataSource={course.chapters}
//             renderItem={chapter => (
//               <Card title={chapter.name}>
//                 {chapter.subChapters.map(subChapter => (
//                   <div key={subChapter._id}>
//                     <h4>{subChapter.name}</h4>
//                     <button onClick={() => fetchVideosForSubChapter(subChapter._id)}>View Video</button>
//                   </div>
//                 ))}
//               </Card>
//             )}
//           />
//           <h2>Videos</h2>
//           <List
//             itemLayout="vertical"
//             dataSource={subChapterVideos}
//             renderItem={video => (
//               <Card title={video.title}>
//                 <video width="100%" controls>
//                   <source src={`http://localhost:8081/api/videos/stream/${video.fileId}?studentId=${username}`} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Card>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { List, Card, Button, message } from 'antd';

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [subChapterVideos, setSubChapterVideos] = useState([]);
//   const username = 'johndoe'; // Replace with actual logged-in username

//   useEffect(() => {
//     // Fetch course details
//     axios.get(`http://localhost:8081/api/courses/${courseId}`)
//       .then(response => {
//         console.log('Course data:', response.data); // Log the course data
//         setCourse(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course details:', error);
//         message.error('Error fetching course details');
//       });
//   }, [courseId]);

//   const fetchVideosForSubChapter = (subChapterId) => {
//     if (!subChapterId) {
//       message.error('Subchapter ID is undefined');
//       console.log('Subchapter ID:', subChapterId);
//       return;
//     }
//     // message.success('Subchapter ID:', subChapterId);

    

//     axios.get(`http://localhost:8081/api/videos/subchapter/${subChapterId}?studentId=${username}`)
//       .then(response => {
//         const video = response.data;
//         setSubChapterVideos(prevVideos => [...prevVideos, video]);
//       })
//       .catch(error => {
//         console.error('Error fetching video:', error);
//         message.error('Error fetching video');
//       });
//   };

//   return (
//     <div>
//       <h2>Course Detail</h2>
//       {course && (
//         <div>
//           <h3>{course.name}</h3>
//           <List
//             itemLayout="vertical"
//             dataSource={course.chapters}
//             renderItem={chapter => (
//               <Card key={chapter.id} title={chapter.name}>
//                 {chapter.subChapters.map(subChapter => (
//                   <div key={subChapter.id}>
//                     <h4>{subChapter.name}</h4>
//                     <Button onClick={() => fetchVideosForSubChapter(subChapter.id)}>View Video</Button>
//                   </div>
//                 ))}
//               </Card>
//             )}
//           />
//           <h2>Videos</h2>
//           <List
//             itemLayout="vertical"
//             dataSource={subChapterVideos}
//             renderItem={video => (
//               <Card key={video.fileId} title={video.title}>
//                 <video width="100%" controls>
//                   <source src={`http://localhost:8081/api/videos/stream/${video.fileId}?studentId=${username}`} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Card>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { List, Card, Button, message } from 'antd';

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [subChapterVideos, setSubChapterVideos] = useState([]);
//   const username = 'johndoe'; // Replace with actual logged-in username

//   useEffect(() => {
//     // Fetch course details
//     axios.get(`http://localhost:8081/api/courses/${courseId}`)
//       .then(response => {
//         setCourse(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course details:', error);
//         message.error('Error fetching course details');
//       });
//   }, [courseId]);

//   const fetchVideosForSubChapter = (subChapterId) => {
//     if (!subChapterId) {
//       message.error('Subchapter ID is undefined');
//       return;
//     }
    
//     axios.get(`http://localhost:8081/api/videos/subchapter/${subChapterId}?studentId=${username}`)
//       .then(response => {
//         const video = response.data;
//         console.log('Fetched video id:', video.fileId); 
//         setSubChapterVideos(prevVideos => [...prevVideos, video]);
//       })
//       .catch(error => {
//         console.error('Error fetching video:', error);
//         message.error('Error fetching video');
//       });
//   };

//   return (
//     <div>
//       <h2>Course Detail</h2>
//       {course && (
//         <div>
//           <h3>{course.name}</h3>
//           <List
//             itemLayout="vertical"
//             dataSource={course.chapters}
//             renderItem={chapter => (
//               <Card key={chapter.id} title={chapter.name}>
//                 {chapter.subChapters.map(subChapter => (
//                   <div key={subChapter.id}>
//                     <h4>{subChapter.name}</h4>
//                     <Button onClick={() => fetchVideosForSubChapter(subChapter.id)}>View Video</Button>
//                   </div>
//                 ))}
//               </Card>
//             )}
//           />
//           <h2>Videos</h2>
//           <List
//             itemLayout="vertical"
//             dataSource={subChapterVideos}
//             renderItem={video => (
//               <Card key={video.fileId} title={video.title}>
//                 <video width="100%" controls>
//                   <source src={`http://localhost:8081/api/videos/stream/${video.fileId}?studentId=${username}`} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Card>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { List, Card, Button, message } from 'antd';
import { useAuth } from '../pages/Login/AuthContext'; // Adjust the import path according to your project structure
import VideoList from './VideoList'; // Adjust the import path according to your project structure

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [subChapterVideos, setSubChapterVideos] = useState([]);
  const { auth } = useAuth();
  const username = auth.user?.username;

  useEffect(() => {
    // Fetch course details
    axios.get(`http://localhost:8081/api/courses/${courseId}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
        message.error('Error fetching course details');
      });
  }, [courseId]);

  const fetchVideosForSubChapter = (subChapterId) => {
    if (!subChapterId) {
      message.error('Subchapter ID is undefined');
      return;
    }

    axios.get(`http://localhost:8081/api/videos/subchapter/${subChapterId}?studentId=${username}`)
      .then(response => {
        const video = response.data;
        console.log('Fetched video id:', video.fileId);
        setSubChapterVideos(prevVideos => [...prevVideos, {
          id: video.fileId,
          title: video.title,
          description: video.description,
          url: `http://localhost:8081/api/videos/stream/${video.fileId}?studentId=${username}`
        }]);
      })
      .catch(error => {
        console.error('Error fetching video:', error);
        message.error('Error fetching video');
      });
  };

  return (
    <div>
      <h2>Course Detail</h2>
      {course && (
        <div>
          <h3>{course.name}</h3>
          <List
            itemLayout="vertical"
            dataSource={course.chapters}
            renderItem={chapter => (
              <Card key={chapter.id} title={chapter.name}>
                {chapter.subChapters.map(subChapter => (
                  <div key={subChapter.id}>
                    <h4>{subChapter.name}</h4>
                    <Button onClick={() => fetchVideosForSubChapter(subChapter.id)}>Video</Button>
                  </div>
                ))}
              </Card>
            )}
          />
          <h2>Videos</h2>
          <VideoList videos={subChapterVideos} />
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
