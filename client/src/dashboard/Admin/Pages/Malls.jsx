import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';

import { updateApplicationStatus, getApplicationById, getAllApplications, getApplicationsByStatus} from '../../../API/Applications/endpoints';

import Sidebar from '../components/Sidebar';
import MallInfo from '../components/MallInfo';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

import CustomModal from '../components/CustomModal';
import StatusConfirmModal from '../components/StatusConfirmModal';

import Herosection from '../../../components/Other/HeroSection';

import './Styles/Malls.css';

function Malls() {
  const [malls, setMalls] = useState([]);
  const [selectedMall, setSelectedMall] = useState(null);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);

  useEffect(() => {
    fetchMalls();
  }, []);

  const fetchMalls = async () => {
    const data = await getAllApplications();
    setMalls(data);
  };

  const handleEdit = (id) => {
    console.log("No Edit For Applications")
  };

  const handleStatusClick = (mall) => {
    setSelectedMall(mall); // Set selected user for status change
    setIsStatusModalOpen(true); // Open the status confirmation modal
  };

  const handleConfirmStatusChange = async (mallId) => {
    const mall = malls.find((u) => u.id === mallId);
    const updatedMall = { ...mall, active: !mall.active }; // Toggle active status
    await updateUser(mallId, updatedMall);
    fetchMalls();
    setIsStatusModalOpen(false); // Close the status modal after updating
  };

  const handleNameClick = (mall) => {
    setSelectedMall(mall); // Set the selected mall for the modal
    setIsDataModalOpen(true); // Open the modal to display the mall information
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'brandName', headerName: 'Brand Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'brandDescription', headerName: 'Description', width: 200 },
    { field: 'statusFlag', headerName: 'Status', width: 200 },
  ];

  return (
    <>
      <Header />
      <Herosection />
      <div className="overlay-image"></div>
        <div className="mallspagecontainer">
          <Sidebar />
          <div className="malls-page">
            <h2>Applications</h2>
            <DataTable
              data={malls}
              columns={columns}
              onStatusClick={handleStatusClick}
              onNameClick ={handleNameClick}
              onDelete={handleEdit}
              onEdit={handleEdit}
              isUser= {false}
            />
           
          </div>
        </div>

      {/* Mall Profile Modal */}
      {isDataModalOpen && 
        <CustomModal
          isOpen={isDataModalOpen}
          onClose={() => setIsDataModalOpen(false)} // Close the edit modal
          content={(
            <MallInfo 
              application={selectedMall}
              onStatusClick={handleStatusClick}
            />
          )}
        />
      }

      {/* Status Confirmation Modal */}
      <StatusConfirmModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false) && reloadPage} // Close the status modal
        onConfirm={handleConfirmStatusChange}      // Confirm status change
        object={selectedMall}                        // Pass the selected user
        objecttype = 'apps'
      />

      <Footer />
    </>
  );
}

export default Malls;