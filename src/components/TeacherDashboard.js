// // TeacherDashboard.js
// import React from 'react';

// const TeacherDashboard = () => {
//   return (
//     <div>
//       <h3>Teacher Dashboard</h3>
//       {/* Display statistics */}
//       <div>
//         <p>Total Enrollments: 50</p>
//         <p>Total Courses: 5</p>
//         <p>Total Earnings: $500</p>
//       </div>
//       {/* Button to add new course */}
//       <button>Add New Course</button>
//     </div>
//   );
// }

// export default TeacherDashboard;

// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Card, Space, Statistic, Typography } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons'; // Using DollarCircleOutlined for earnings
// import { getTotalEnrollments, getTotalCourses, getTotalEarnings } from '../../API'; // Assuming these functions fetch the required data from the API

function TeacherDashboard() {
  // const [totalEnrollments, setTotalEnrollments] = useState(0);
  // const [totalCourses, setTotalCourses] = useState(0);
  // const [totalEarnings, setTotalEarnings] = useState(0);

  // useEffect(() => {
  //   // Fetch total enrollment count
  //   getTotalEnrollments().then((res) => {
  //     setTotalEnrollments(res.total);
  //   });
  //   // Fetch total course count
  //   getTotalCourses().then((res) => {
  //     setTotalCourses(res.total);
  //   });
  //   // Fetch total earnings
  //   getTotalEarnings().then((res) => {
  //     setTotalEarnings(res.total);
  //   });
  // }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Teacher Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard title="Total Enrollments" value={10} />
        <DashboardCard title="Total Courses" value={10} />
        <DashboardCard title="Total Earnings" value={10} />
      </Space>
      <button>Add New Course</button> {/* Button to add new course */}
    </Space>
  );
}

function DashboardCard({ title, value }) {
  return (
    <Card>
      <Space direction="horizontal">
        <DollarCircleOutlined style={{ color: 'green', fontSize: 24 }} /> {/* Using DollarCircleOutlined icon */}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default TeacherDashboard;
