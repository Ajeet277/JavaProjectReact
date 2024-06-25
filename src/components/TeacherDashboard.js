import React, { useEffect, useState } from 'react';
import { Card, Space, Statistic, Typography } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons'; // Using DollarCircleOutlined for earnings
import axios from 'axios';
import { useAuth } from '../pages/Login/AuthContext';

function TeacherDashboard() {
  const [totalCourses, setTotalCourses] = useState(0);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated && auth.username) {
      axios.get(`http://localhost:8081/api/courses/teacher/${auth.username}/total`)
        .then(response => {
          setTotalCourses(response.data.totalCourses);
        })
        .catch(error => {
          console.error('Error fetching total courses:', error);
        });
    }
  }, [auth.isAuthenticated, auth.username]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Teacher Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard title="Total Courses" value={totalCourses} />
      </Space>
      {/* <button type="submit">Add New Course</button> Button to add new course */}
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
