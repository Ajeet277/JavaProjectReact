import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:8081/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const showModal = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
    form.setFieldsValue(user || {});
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingUser) {
        // Update existing user
        axios.put(`http://localhost:8081/api/users/${editingUser.id}`, values)
          .then(fetchUsers)
          .catch(error => {
            console.error('Error updating user:', error);
          });
      } else {
        // Create new user
        axios.post('http://localhost:8081/api/users', values)
          .then(fetchUsers)
          .catch(error => {
            console.error('Error creating user:', error);
          });
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingUser(null);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingUser(null);
  };

  const deleteUser = (userId) => {
    axios.delete(`http://localhost:8081/api/users/${userId}`)
      .then(fetchUsers)
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'User Type',
      dataIndex: 'userType',
      key: 'userType',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => showModal(record)} icon={<EditOutlined />} />
          <Button onClick={() => deleteUser(record.id)} icon={<DeleteOutlined />} danger />
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Manage Users</h2>
      <Button type="primary" onClick={() => showModal(null)}>Add User</Button>
      <Table dataSource={users} columns={columns} rowKey="id" />

      <Modal
        title={editingUser ? 'Edit User' : 'Add User'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="username" label="Username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: !editingUser }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="userType" label="User Type" rules={[{ required: true }]}>
            <Select>
              <Option value="admin">Admin</Option>
              <Option value="teacher">Teacher</Option>
              <Option value="student">Student</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageUsersPage;
