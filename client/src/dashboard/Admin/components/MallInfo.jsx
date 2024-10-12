import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Styles/MallInfo.css'; 
import { getApplicationById } from '../../../API/Applications/endpoints';

const ApplicationInfo = ({ application, onStatusClick }) => {
  const [applicationDetails, setApplicationDetails] = useState(null); // Use null instead of an array

  useEffect(() => {
    fetchApplication();
  }, [application]); // Fetch data when the application prop changes

  const fetchApplication = async () => {
    try {
      const data = await getApplicationById(application._id);
      setApplicationDetails(data);
    } catch (error) {
      console.error("Error fetching application details:", error);
    }
  };

  if (!applicationDetails) {
    return <div className="no-info">No Application information available.</div>;
  }

  return (
    <div className="application-info">
      <h2>{applicationDetails.brandName}</h2>

      <h3>Details</h3>
      <div className="info-grid">
        <div className="info-item">
          <p><strong>Email:</strong> {applicationDetails.email}</p>
          <p><strong>Phone:</strong> {applicationDetails.phone}</p>
        </div>
        <div className="info-item">
          <p><strong>Description:</strong> {applicationDetails.brandDescription}</p>
          <p><strong>Goal:</strong> {applicationDetails.goal}</p>
        </div>
        <div className="info-item">
          <p><strong>Launch Date:</strong> {new Date(applicationDetails.launchDate).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {applicationDetails.statusFlag}</p>
        </div>
        <div className="info-item">
          <h4>Target Audience</h4>
          <p>Age: {applicationDetails.targetAgeSpan.min} - {applicationDetails.targetAgeSpan.max}</p>
          <p>Gender: {applicationDetails.targetGender}</p>
          <p>Audience: {applicationDetails.targetAudience.join(', ')}</p>
        </div>
        <div className="info-item">
          <h3>Products</h3>
          <ul>
            {applicationDetails.products.map((product) => (
              <li key={product._id}>{product.name} - ${product.price.toFixed(2)}</li>
            ))}
          </ul>

          <h3>Top Selling List</h3>
          <ul>
            {applicationDetails.topSellingList.map((item) => (
              <li key={item._id}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>

          <h3>Current Offers</h3>
          <ul>
            {applicationDetails.currentOffers.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
        </div>
        <div className="info-item">
          <h3>Notes</h3>
          <p>{applicationDetails.notes}</p>
        </div>
      </div>

      <button className="status-button" onClick={() => onStatusClick(applicationDetails)}>Change Status</button>
    </div>
  );
};

ApplicationInfo.propTypes = {
  application: PropTypes.object.isRequired,
  onStatusClick: PropTypes.func.isRequired,
};

export default ApplicationInfo;