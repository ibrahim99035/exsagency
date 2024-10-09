import React from 'react';
import PropTypes from 'prop-types';
import './Styles/UserInfo.css'; 
import { FaUserShield, FaUserAlt } from 'react-icons/fa';

const UserInfo = ({ user, onEdit, onDelete, onStatusClick }) => {
  if (!user) {
    return <div className="no-info">No user information available.</div>;
  }

  return (
    <div className="user-info">
      <h2 className="user-name">{user.name}</h2>
      <div className="user-details">
        <h3 className="section-title">Email:</h3>
        <p className="user-email">{user.email}</p>
        <h3 className="section-title">Role:</h3>
        <p className="user-role">
            {user.role === 'admin' ? (
                <FaUserShield style={{ marginRight: '5px', color: '#1e5991', fontSize: '20px' }} />
            ) : user.role === 'moderator' ? (
                <FaUserAlt style={{ marginRight: '5px', color: '#1e5991' }} />
            ) : null}
            {user.role}
        </p>
        <h3 className="section-title">Status:</h3>
        <p className={`user-status ${user.active ? 'active' : 'inactive'}`}>
          <span onClick={onStatusClick}>{user.active ? 'Active' : 'Inactive'}</span>
        </p>
      </div>
      
      <div className="user-actions">
        <button className="modalaction-button modaledit-button" onClick={() => onEdit(user.id)}>
          Edit
        </button>
        <button className="modalaction-button modaldelete-button" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

// Prop types for type-checking
UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    active: PropTypes.bool,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserInfo;