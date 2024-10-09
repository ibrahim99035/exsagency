// components/CustomModal.js
import React from 'react';
import './Styles/ConfirmModal.css'; // You can reuse the same styling as for the confirm modal

function CustomModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" id='editmodal'>
        {content}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CustomModal;
