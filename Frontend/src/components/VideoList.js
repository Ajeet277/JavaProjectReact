// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// const VideoList = ({ videos }) => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const handleViewVideo = (video) => {
//     setActiveVideo(video);
//   };

//   return (
//     <div>
//       {videos.map((video, index) => (
//         <Card key={index} className="mb-3">
//           <Card.Body>
//             <Card.Title>{video.title}</Card.Title>
//             <Card.Text>{video.description}</Card.Text>
//             <Button variant="primary" onClick={() => handleViewVideo(video)}>
//               View Video
//             </Button>
//           </Card.Body>
//           {activeVideo === video && (
//             <Card.Footer>
//               <video width="100%" controls>
//                 <source src={video.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </Card.Footer>
//           )}
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default VideoList;

// import React, { useState } from 'react';
// import { Card, Button, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './VideoList.css'; 

// const VideoList = ({ videos }) => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const handleViewVideo = (video) => {
//     setActiveVideo(video);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         {videos.map((video, index) => (
//           <Col md={8} key={index} className="mb-4">
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>{video.title}</Card.Title>
//                 <Card.Text>{video.description}</Card.Text>
//                 <Button variant="primary" onClick={() => handleViewVideo(video)}>
//                   View Video
//                 </Button>
//               </Card.Body>
//               {activeVideo === video && (
//                 <Card.Footer>
//                   <video width="100%" controls className="mt-3">
//                     <source src={video.url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </Card.Footer>
//               )}
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default VideoList;

import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoList.css'; 

const VideoList = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleViewVideo = (video) => {
    setActiveVideo(video);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        {videos.map((video, index) => (
          <Col md={8} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <Button variant="primary" onClick={() => handleViewVideo(video)}>
                  View Video
                </Button>
              </Card.Body>
              {activeVideo === video && (
                <Card.Footer>
                  <video width="100%" controls className="mt-3">
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Card.Footer>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoList;
