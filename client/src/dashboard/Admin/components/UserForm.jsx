import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Styles/UserForm.css';

const UserForm = ({ user, isEdit }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: user?.password || '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await axios.put(`/api/users/${user.id}`, formData);
    } else {
      await axios.post('/api/users', formData);
    }
    navigate('/users');
  };

  return (
    <div className="user-form">
      <h2>{isEdit ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            id="name"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        {!isEdit && (
          <label>
            Password:
            <input
              id="name"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        )}
        <button type="submit">{isEdit ? 'Update User' : 'Add User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
