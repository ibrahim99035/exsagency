import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { BsFillMenuAppFill } from "react-icons/bs";
import './Styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard/users"><FaUsers /> Users</Link></li>
        <li><Link to="/dashboard/apps"><BsFillMenuAppFill /> Applications</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;