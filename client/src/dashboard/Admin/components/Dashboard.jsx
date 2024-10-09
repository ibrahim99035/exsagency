import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import './Styles/dashboard.css';

function Dashboard() {
  return (
    <>
      <Header />
      <div className="overlay-image"></div>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div>
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;