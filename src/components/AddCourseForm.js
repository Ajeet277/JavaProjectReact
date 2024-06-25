// // AddCourseForm.js
// import React from 'react';

// const AddCourseForm = () => {
//   // Form state for course details
//   const [courseDetails, setCourseDetails] = React.useState({
//     title: '',
//     description: '',
//     price: '',
//     // Add more fields as needed
//   });

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send course details to backend
//     console.log('Submitted:', courseDetails);
//     // Reset form
//     setCourseDetails({
//       title: '',
//       description: '',
//       price: '',
//     });
//   };

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourseDetails({
//       ...courseDetails,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <h3>Add New Course</h3>
//       {/* Course form */}
//       <form onSubmit={handleSubmit}>
//         {/* Course details inputs */}
//         <input type="text" name="title" placeholder="Title" value={courseDetails.title} onChange={handleChange} />
//         <textarea name="description" placeholder="Description" value={courseDetails.description} onChange={handleChange} />
//         <input type="text" name="price" placeholder="Price" value={courseDetails.price} onChange={handleChange} />
//         {/* Submit button */}
//         <button type="submit">Add Course</button>
//       </form>
//     </div>
//   );
// }

// export default AddCourseForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddCourseForm = () => {
//   const [courseName, setCourseName] = useState('');
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.post('http://localhost:8081/api/courses', { name: courseName })
//       .then(response => {
//         console.log('Course added:', response.data);
//         navigate('/teacher/add-chapter');

//       })
//       .catch(error => {
//         console.error('There was an error adding the course!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Course Name:
//         <input type="text" value={courseName} onChange={e => setCourseName(e.target.value)} />
//       </label>
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default AddCourseForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../pages/Login//AuthContext';

// const AddCourse = () => {
//   const { auth } = useAuth();
//   const [courseName, setCourseName] = useState('');
//   const [courseDescription, setCourseDescription] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const newCourse = {
//       name: courseName,
//       description: courseDescription,
//       teacherUsername: auth.username, // Pass the teacher's username
//     };

//     try {
//       const response = await axios.post('http://localhost:8081/api/courses', newCourse);
//       console.log('Course added:', response.data);
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Course Name:</label>
//         <input
//           type="text"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Course Description:</label>
//         <textarea
//           value={courseDescription}
//           onChange={(e) => setCourseDescription(e.target.value)}
//         />
//       </div>
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default AddCourse;

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../pages/Login/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const { auth } = useAuth();
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCourse = {
      name: courseName,
      description: courseDescription,
      teacherUsername: auth.username, // Pass the teacher's username
    };

    try {
      const response = await axios.post('http://localhost:8081/api/courses', newCourse);
      console.log('Course added:', response.data);
      navigate('/teacher/add-chapter');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseDescription" className="form-label">Course Description</label>
          <textarea
            className="form-control"
            id="courseDescription"
            rows="3"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
