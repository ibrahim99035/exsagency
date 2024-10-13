import React, { useState, useEffect } from 'react';
import './Styles/StatusToggle.css';
import { updateApplicationStatus } from '../../../API/Applications/endpoints';
import useSharedData from './useSharedData';

const StatusToggle = ({ applicationData }) => {
  const [status, setStatus] = useState(applicationData.statusFlag);
  const { setFlag } = useSharedData();

  // Update status based on applicationData changes
  useEffect(() => {
    setStatus(applicationData.statusFlag);
  }, [applicationData.statusFlag]);

  const getNextStatus = (currentStatus) => {
    if (currentStatus === 'pending') return 'approved';
    if (currentStatus === 'approved') return 'rejected';
    return 'pending';
  };

  const handleToggle = async () => {
    const newStatus = getNextStatus(status);
    setStatus(newStatus);
    console.log(`This is handleToggle Function. - ${newStatus}`);

    try {
        // Call the update function and get the result
        const result = await updateApplicationStatus(applicationData._id, newStatus);
        
        // Log the result for debugging (optional)
        console.log('Status updated successfully:', result);
        setFlag(true)
        
        // Optionally, you could further update state or trigger notifications based on result
    } catch (error) {
        console.error('Failed to update status:', error);
        
        // If the update fails, you might want to revert the status back to the previous one
        setStatus(status); // Revert to old status if needed
    }
  };

  return (
    <div className="status-toggle-container">
      <div 
        className={`status-toggle-circle ${status}`} 
        onClick={handleToggle}
      >
        <span className="status-label">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
      </div>
    </div>
  );
};

export default StatusToggle;