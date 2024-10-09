import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaStore, FaShoppingBag, FaBuilding } from 'react-icons/fa';
import './Styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard/users"><FaUsers /> Users</Link></li>
        <li><Link to="/dashboard/malls"><FaBuilding /> Malls</Link></li>
        <li><Link to="/dashboard/stores"><FaStore /> Stores</Link></li>
        <li><Link to="/dashboard/products"><FaShoppingBag /> Products</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;