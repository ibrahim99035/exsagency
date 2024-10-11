import React, { useState } from 'react';
import '../../CSS/ServiceModal.css'
import { RiCloseCircleFill } from "react-icons/ri";

function CustomModal({ isOpen, onClose, service }) {
    if (!isOpen) return null;
    console.log(service);
    return (
      <div className="modal-overlay">
        <div className="service-modal-content" id='editmodal'>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
            <p className='modalIcon'>{service.icon}</p>
          <button className="service-close-btn" onClick={onClose}><RiCloseCircleFill /></button>
        </div>
      </div>
    );
}

export default CustomModal;  