import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { getMalls, deleteMall } from '../services/mallService';
import MallForm from '../components/MallForm';
import Sidebar from '../components/Sidebar';
import MallInfo from '../components/MallInfo';
import GoogleMap from '../components/GoogleMap';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

import ConfirmModal from '../components/ConfirmModal'; 
import CustomModal from '../components/CustomModal';
import StatusConfirmModal from '../components/StatusConfirmModal';

import { IoAddCircle } from "react-icons/io5";

import './Styles/Malls.css';

function Malls() {
  const [malls, setMalls] = useState([]);
  const [selectedMall, setSelectedMall] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [mallIdToDelete, setMallIdToDelete] = useState(null);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    fetchMalls();
  }, []);

  const fetchMalls = async () => {
    const data = await getMalls();
    setMalls(data);
  };

  const handleEdit = (id) => {
    const mall = malls.find((u) => u.id === id);
    setSelectedMall(mall);
    console.log(setSelectedMall);
    setIsEditModalOpen(true); // Open the edit modal
  };

  const handleCreate = (id) => {
    const mall = malls.find((u) => u.id === id);
    setSelectedMall(mall);
    setIsCreateModalOpen(true); // Open the edit modal
  };

  const handleDeleteClick = (id) => {
    setMallIdToDelete(id);  // Set the ID of the user to delete
    setIsModalOpen(true);   // Open the modal
  };

  const handleConfirmDelete = async () => {
    await deleteMall(mallIdToDelete);
    fetchMalls();
    setIsModalOpen(false);  // Close the modal after deletion
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

  const handleLocationClick = (mall) => {
    setSelectedMall(mall); // Set the selected mall for the modal
    setIsMapModalOpen(true); // Open the modal to display the mall information
  };

  const handleImageClick = (mall) => {
    setSelectedMall(mall);  // Set the selected mall for the modal
    setIsImageModalOpen(true);  // Open the modal to display the mall information
  };  

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'location', headerName: 'Location', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'description', headerName: 'Description' },
    { field: 'coverImage', headerName: 'Cover Image', width: 150 },
    { 
      field: 'active', 
      headerName: 'Status', 
      width: 150,
      render: (rowData) => (
        <span className={`status-flag ${rowData.active ? 'active' : 'inactive'}`}>
          {rowData.active ? 'Approaved' : 'Approave'}
        </span>
      ) // Custom render for showing status with flags
    },
  ];

  return (
    <>
      <Header />
      <div className="overlay-image"></div>
        <div className="mallspagecontainer">
          <Sidebar />
          <div className="malls-page">
            <h2>Malls</h2>
            <h3 id='addmallicon'><IoAddCircle id='Addcircleiconaddition' onClick={handleCreate}/> Add a new mall.</h3>
            <DataTable
              data={malls}
              columns={columns}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              onStatusClick={handleStatusClick}
              onNameClick ={handleNameClick}
              onLocationClick={handleLocationClick}
              onImageClick={handleImageClick}
            />
           
          </div>
        </div>

      {/* Mall Profile Modal */}
      <CustomModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)} // Close the edit modal
        content={(
          <MallInfo 
            mall={selectedMall} 
            onEdit={handleEdit} 
            onDelete={handleDeleteClick} 
            onStatusClick={handleStatusClick}
          />
        )}
      />
      
      {/* Create Mall Modal */}
      <CustomModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)} // Close the edit modal
        content={(
          <MallForm
            isEdit={false}
            mall={selectedMall}
            setMall={setSelectedMall}
          />
        )}
      />
      
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal without deleting
        onConfirm={handleConfirmDelete}      // Confirm deletion
        message="Are you sure you want to delete this mall?"
      />
      {/* Edit Mall Modal */}
      <CustomModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)} // Close the edit modal
        content={(
          <MallForm
            isEdit={true}
            mall={selectedMall}
            setMall={setSelectedMall}
          />
        )}
      />

      {/* Status Confirmation Modal */}
      <StatusConfirmModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)} // Close the status modal
        onConfirm={handleConfirmStatusChange}      // Confirm status change
        object={selectedMall}                        // Pass the selected user
        objecttype = 'mall'
      />

      <CustomModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)} // Close the edit modal
        content={(
          <GoogleMap 
            tehselectedMall={selectedMall}
          />
        )}
      />

      <CustomModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)} // Close the edit modal
        content={(
          selectedMall && selectedMall.coverImage ? (
            <div className='modal-image-container'>
              <img 
                src={selectedMall.coverImage} 
                alt={`${selectedMall.name} Full Image`} 
                className="full-image"
              />
            </div>
          ) : (
            <p>No Image Available</p>
          )
        )}
      />

      <Footer />
    </>
  );
}

export default Malls;