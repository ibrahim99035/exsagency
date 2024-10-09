import React from 'react';
import './Styles/ConfirmModal.css'; // Add relevant styles

const StatusConfirmModal = ({ isOpen, onClose, onConfirm, object, objecttype }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Activation & Approaval Process</h3>
        <p>
          Are you sure you want to {object.active ? 'deactivate' : 'activate'} {objecttype}{' '}
          <strong>{object.name}</strong>?
        </p> <br />
        <div className="modal-actions">
          <button onClick={onClose} className='cancelstat'>Cancel</button>
          <button onClick={() => onConfirm(object.id)} className="confirm-status">
            {object.active ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusConfirmModal;