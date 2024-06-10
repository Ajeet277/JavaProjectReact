import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const ManageCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios.get('http://localhost:8081/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };

  const showModal = (course) => {
    setEditingCourse(course);
    setIsModalVisible(true);
    form.setFieldsValue(course || {});
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingCourse) {
        // Update existing course
        axios.put(`http://localhost:8081/api/courses/${editingCourse.id}`, values)
          .then(fetchCourses)
          .catch(error => {
            console.error('Error updating course:', error);
          });
      } else {
        // Create new course
        axios.post('http://localhost:8081/api/courses', values)
          .then(fetchCourses)
          .catch(error => {
            console.error('Error creating course:', error);
          });
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingCourse(null);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingCourse(null);
  };

  const deleteCourse = (courseId) => {
    axios.delete(`http://localhost:8081/api/courses/${courseId}`)
      .then(fetchCourses)
      .catch(error => {
        console.error('Error deleting course:', error);
      });
  };

  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => showModal(record)} icon={<EditOutlined />} />
          <Button onClick={() => deleteCourse(record.id)} icon={<DeleteOutlined />} danger />
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Manage Courses</h2>
      <Button type="primary" onClick={() => showModal(null)}>Add Course</Button>
      <Table dataSource={courses} columns={columns} rowKey="id" />

      <Modal
        title={editingCourse ? 'Edit Course' : 'Add Course'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Course Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageCoursesPage;
