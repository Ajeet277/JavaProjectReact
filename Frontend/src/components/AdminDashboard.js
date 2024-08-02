
// // import React, { useEffect, useState } from 'react';
// import { Card, Space, Statistic, Typography } from 'antd';
// import { UserOutlined } from '@ant-design/icons'; // Only using UserOutlined for the user count
// // import { getTotalUsers, getTotalInstructors, getTotalStudents, getTotalCourses } from '../../API'; // Assuming these functions fetch the required data from the API

// function AdminDashboard() {
//   // const [totalUsers, setTotalUsers] = useState(0);
//   // const [totalInstructors, setTotalInstructors] = useState(0);
//   // const [totalStudents, setTotalStudents] = useState(0);
//   // const [totalCourses, setTotalCourses] = useState(0);

//   // useEffect(() => {
//   //   // Fetch total user count
//   //   getTotalUsers().then((res) => {
//   //     setTotalUsers(res.total);
//   //   });
//   //   // Fetch total instructor count
//   //   getTotalInstructors().then((res) => {
//   //     setTotalInstructors(res.total);
//   //   });
//   //   // Fetch total student count
//   //   getTotalStudents().then((res) => {
//   //     setTotalStudents(res.total);
//   //   });
//   //   // Fetch total course count
//   //   getTotalCourses().then((res) => {
//   //     setTotalCourses(res.total);
//   //   });
//   // }, []);

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>Admin Dashboard</Typography.Title>
//       <Space direction="horizontal">
//         <DashboardCard title="Total Users" value={10} />
//         <DashboardCard title="Total Instructors" value={10} />
//         <DashboardCard title="Total Students" value={10} />
//         <DashboardCard title="Total Courses" value={10} />
//       </Space>
//     </Space>
//   );
// }

// function DashboardCard({ title, value }) {
//   return (
//     <Card>
//       <Space direction="horizontal">
//         <UserOutlined style={{ color: 'blue', fontSize: 24 }} /> {/* Using UserOutlined icon */}
//         <Statistic title={title} value={value} />
//       </Space>
//     </Card>
//   );
// }

// export default AdminDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Import Axios

// import { Card, Space, Statistic, Typography } from 'antd';
// import { UserOutlined } from '@ant-design/icons';

// function AdminDashboard() {
//   const [totalUsers, setTotalUsers] = useState(0);

//   useEffect(() => {
//     fetchTotalUsers(); // Call the function to fetch total users on component mount
//   }, []);

//   const fetchTotalUsers = () => {
//     axios.get('http://localhost:8081/api/users')
//       .then(response => {
//         setTotalUsers(response.data.length); // Assuming the response contains an array of users
//       })
//       .catch(error => {
//         console.error('Error fetching total users:', error);
//       });
//   };

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>Admin Dashboard</Typography.Title>
//       <Space direction="horizontal">
//         <DashboardCard title="Total Users" value={totalUsers} />
//       </Space>
//     </Space>
//   );
// }

// function DashboardCard({ title, value }) {
//   return (
//     <Card>
//       <Space direction="horizontal">
//         <UserOutlined style={{ color: 'blue', fontSize: 24 }} />
//         <Statistic title={title} value={value} />
//       </Space>
//     </Card>
//   );
// }

// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Space, Statistic, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function AdminDashboard() {
  const [userCounts, setUserCounts] = useState({
    admin: 0,
    teacher: 0,
    student: 0,
  });

  useEffect(() => {
    fetchUserCounts();
  }, []);

  const fetchUserCounts = () => {
    axios.get('http://localhost:8081/api/users/countByType')
      .then(response => {
        setUserCounts(response.data);
      })
      .catch(error => {
        console.error('Error fetching user counts:', error);
      });
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Admin Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard title="Total Admins" value={userCounts.admin} />
        <DashboardCard title="Total Teachers" value={userCounts.teacher} />
        <DashboardCard title="Total Students" value={userCounts.student} />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value }) {
  return (
    <Card>
      <Space direction="horizontal">
        <UserOutlined style={{ color: 'blue', fontSize: 24 }} />
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default AdminDashboard;
