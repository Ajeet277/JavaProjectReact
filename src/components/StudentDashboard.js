// // StudentDashboard.js
// import React from 'react';

// const StudentDashboard = () => {
//   return (
//     <div>
//       <h3>Student Dashboard</h3>
//       {/* Display user-specific information */}
//       <div>
//         <p>Welcome, John Doe!</p>
//         <p>Total Courses Enrolled: 3</p>
//         <p>Total Courses Completed: 1</p>
//       </div>
//       {/* Button to browse courses */}
//       <button>Browse Courses</button>
    
//     </div>
//   );
// }

// export default StudentDashboard;

// import React, { useEffect, useState } from 'react';
import { Button, Space, Statistic, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { getStudentCourses, getCompletedCourses } from '../../API'; // Assuming these functions fetch the required data from the API

function StudentDashboard() {
  // const [totalEnrolledCourses, setTotalEnrolledCourses] = useState(0);
  // const [totalCompletedCourses, setTotalCompletedCourses] = useState(0);

  // useEffect(() => {
  //   // Fetch total enrolled courses count
  //   getStudentCourses().then((res) => {
  //     setTotalEnrolledCourses(res.total);
  //   });
  //   // Fetch total completed courses count
  //   getCompletedCourses().then((res) => {
  //     setTotalCompletedCourses(res.total);
  //   });
  // }, []);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBrowseCourses = () => {
    navigate('/student/browse-courses'); // Navigate to the browse courses page
  };
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Student Dashboard</Typography.Title>
      <div>
        <Statistic title="Total Courses Enrolled" value={10} />
        <Statistic title="Total Courses Completed" value={10} />
      </div>
      <Button type="primary" onClick={handleBrowseCourses} >Browse Courses</Button>
    </Space>
  );
}

export default StudentDashboard;
