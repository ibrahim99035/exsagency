// StoreForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StoreForm = ({ store, isEdit }) => {
  const [formData, setFormData] = useState({
    name: store?.name || '',
    relatedMall: store?.relatedMall || '',
    address: store?.address || '',
    openingDate: store?.openingDate || '',
    closingDate: store?.closingDate || '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await axios.put(`/api/stores/${store.id}`, formData);
    } else {
      await axios.post('/api/stores', formData);
    }
    navigate('/stores');
  };

  return (
    <div className="store-form">
      <h2>{isEdit ? 'Edit Store' : 'Add New Store'}</h2>
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
          Related Mall:
          <input
            type="text"
            name="relatedMall"
            value={formData.relatedMall}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Opening Date:
          <input
            type="date"
            name="openingDate"
            value={formData.openingDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Closing Date:
          <input
            type="date"
            name="closingDate"
            value={formData.closingDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{isEdit ? 'Update Store' : 'Add Store'}</button>
      </form>
    </div>
  );
};

export default StoreForm;
