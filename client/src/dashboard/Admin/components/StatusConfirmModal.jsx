import React from 'react';
import './Styles/ConfirmModal.css'; 
import StatusToggle from './StatusToggle';
import { FaWindowClose } from "react-icons/fa";

const StatusConfirmModal = ({ isOpen, onClose, onConfirm, object, objecttype }) => {
  if (!isOpen) return null;

  if(objecttype === 'apps'){
    return(
      <div className="modal-overlay">
        <div className="modal-content">
          <StatusToggle 
            applicationData={object}
          /> <br /> 
          <button onClick={onClose} className='cancelstat'><FaWindowClose style={{fontSize: "20px", margin: "auto"}}/></button>
        </div>
      </div>
    );
  }

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