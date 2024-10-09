import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Styles/MallForm.css';

const MallForm = ({ mall, isEdit }) => {
  const [formData, setFormData] = useState({
    name: mall?.name || '',
    location: mall?.location || '',
    description: mall?.description || '',
    address: mall?.address || '', // Field for address
    coverImage: null, // Changed to null for file input
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'coverImage') {
      // Update coverImage to the selected file
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Append all form data
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      if (isEdit) {
        await axios.put(`/api/malls/${mall.id}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
        });
      } else {
        await axios.post('/api/malls', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      navigate('/malls');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div className="mall-form">
      <h2>{isEdit ? 'Edit Mall' : 'Add New Mall'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location: {/* Location Field */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address: {/* Address Field */}
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Cover Image: {/* Changed to file input */}
          <input
            type="file"
            name="coverImage"
            onChange={handleChange}
            accept="image/*" // Accept only image files
            required // Make it required
          />
        </label>
        <button type="submit">{isEdit ? 'Update Mall' : 'Add Mall'}</button>
      </form>
    </div>
  );
};

export default MallForm;