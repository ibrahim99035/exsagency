import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaStore, FaShoppingBag, FaBuilding } from 'react-icons/fa';
import './Styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard/users"><FaUsers /> Users</Link></li>
        <li><Link to="/dashboard/malls"><FaBuilding /> Applications</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;