import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { getUsers, deleteUser } from '../services/userService';
import UserForm from '../components/UserForm';
import Sidebar from '../components/Sidebar';
import ConfirmModal from '../components/ConfirmModal'; 
import CustomModal from '../components/CustomModal';
import StatusConfirmModal from '../components/StatusConfirmModal';
import UserInfo from '../components/UserInfo';

import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';

import './Styles/Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleEdit = (id) => {
    const user = users.find((u) => u.id === id);
    setSelectedUser(user);
    setIsEditModalOpen(true); // Open the edit modal
  };

  const handleDeleteClick = (id) => {
    setUserIdToDelete(id);  // Set the ID of the user to delete
    setIsModalOpen(true);   // Open the modal
  };

  const handleConfirmDelete = async () => {
    await deleteUser(userIdToDelete);
    fetchUsers();
    setIsModalOpen(false);  // Close the modal after deletion
  };

  const handleStatusClick = (user) => {
    setSelectedUser(user); // Set selected user for status change
    setIsStatusModalOpen(true); // Open the status confirmation modal
  };

  const handleConfirmStatusChange = async (userId) => {
    const user = users.find((u) => u.id === userId);
    const updatedUser = { ...user, active: !user.active }; // Toggle active status
    await updateUser(userId, updatedUser);
    fetchUsers();
    setIsStatusModalOpen(false); // Close the status modal after updating
  };

  const handleNameClick = (user) => {
    setSelectedUser(user); // Set the selected mall for the modal
    setIsDataModalOpen(true); // Open the modal to display the mall information
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { 
      field: 'active', 
      headerName: 'Status', 
      width: 150,
      render: (rowData) => (
        <span className={`status-flag ${rowData.active ? 'active' : 'inactive'}`}>
          {rowData.active ? 'Active' : 'Activate'}
        </span>
      ) // Custom render for showing status with flags
    },
  ];

  return (
    <>
      <Header />
      <div className="overlay-image"></div>
      <div className="userspagecontainer">
        <Sidebar />
        <div className="users-page">
          <h2>Users</h2>
          <div className="data-table-container">
            <DataTable
              data={users}
              columns={columns}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              onStatusClick={handleStatusClick}
              onNameClick ={handleNameClick}
            />
          </div>
          
          {/* Render form for creating a new user */}
          {/* <div className="user-form-container">
            <UserForm
              isEdit={false}
              setUser={setSelectedUser}
            />
          </div> */}

        </div>
      </div>
      {/* User Profile Modal */}
      <CustomModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)} // Close the edit modal
        content={(
          <UserInfo 
            user={selectedUser} 
            onEdit={handleEdit} 
            onDelete={handleDeleteClick} 
            onStatusClick={handleStatusClick}
          />
        )}
      />
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal without deleting
        onConfirm={handleConfirmDelete}      // Confirm deletion
        message="Are you sure you want to delete this user?"
      />
      {/* Edit User Modal */}
      <CustomModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)} // Close the edit modal
        content={(
          <UserForm
            isEdit={true}
            user={selectedUser}
            setUser={setSelectedUser}
          />
        )}
      />

      {/* Status Confirmation Modal */}
      <StatusConfirmModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)} // Close the status modal
        onConfirm={handleConfirmStatusChange}      // Confirm status change
        object={selectedUser}                        // Pass the selected user
        objecttype = 'user'
      />
      <Footer />
    </>
  );
}

export default Users;