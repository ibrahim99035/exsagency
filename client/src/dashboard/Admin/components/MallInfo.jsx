import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from "react-icons/fc";
import { SiGooglemaps } from "react-icons/si";
import './Styles/MallInfo.css'; 

const MallInfo = ({ mall, onEdit, onDelete, onStatusClick }) => {
  if (!mall) {
    return <div className="no-info">No mall information available.</div>;
  }

  const handleOpenInGoogleMaps = (url) => {
    const regex = /<iframe.*?src="(.*?)"/; // Extract the URL from the iframe
    const matches = regex.exec(url);
    const mapsUrl = matches ? matches[1] : ''; // Get the URL from the regex match
    if (mapsUrl) {
        window.open(mapsUrl, '_blank'); // Open the Google Maps URL in a new tab
    }
  }

  return (
    <div className="mall-info">
      <h2 className="mall-name">{mall.name}</h2>

      {/* Two-column layout */}
      <div className="mall-content">
        {/* Left Column: Image and Map */}
        <div className="mall-left-column">
          <img 
            src={mall.coverImage || 'default_image_url.jpg'} // Fallback for no image
            alt={`${mall.name} Cover`} 
            className="mall-cover-image"
          />
          <div className='mall-map-container'>
            <div className="map-iframe-container" dangerouslySetInnerHTML={{ __html: mall.location }} />
            <div className="map-open-button" onClick={() => handleOpenInGoogleMaps(mall.location)}>
              <FcGoogle className="icon google-icon" />
              <SiGooglemaps className="icon maps-icon" />
            </div>
          </div>
        </div>

        {/* Right Column: Data */}
        <div className="mall-right-column">
          <h3 className="section-title">Address:</h3>
          <p className="mall-address">{mall.address}</p>
          <h3 className="section-title">Description:</h3>
          <p className="mall-description-text">{mall.description || 'No description available.'}</p>
          <h3 className="section-title">Status:</h3>
          <p className={`mall-status ${mall.active ? 'active' : 'inactive'}`}>
            <span onClick={onStatusClick}>{mall.active ? 'Active' : 'Inactive'}</span>
          </p>
        </div>
      </div>
      
      <div className="mall-actions">
        <button className="modalaction-button modaledit-button" onClick={() => onEdit(mall.id)}>
          Edit
        </button>
        <button className="modalaction-button modaldelete-button" onClick={() => onDelete(mall.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

// Prop types for type-checking
MallInfo.propTypes = {
  mall: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string,
    coverImage: PropTypes.string,
    active: PropTypes.bool,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MallInfo;