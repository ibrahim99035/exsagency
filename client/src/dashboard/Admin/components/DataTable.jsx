import React from 'react';
import { FaEdit, FaTrashAlt, FaUserShield, FaUserAlt, FaMapMarkedAlt } from 'react-icons/fa';

import './Styles/table.css';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to truncate long descriptions
const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const CustomDataTable = ({ 
  data, 
  columns, 
  onEdit, 
  onDelete, 
  onStatusClick, 
  onNameClick,
  isUser
}) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr id='tableheading'>
            {columns.map((col, index) => (
              <th key={index}>{col.headerName}</th> // Display column headers
            ))}
            {isUser && (<th>Actions</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.field === 'active' ? (
                    <span
                      className={`status-flag ${rowData.active ? 'active' : 'inactive'}`}
                      onClick={() => onStatusClick(rowData)}
                      style={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                      {rowData.active ? 'Active' : 'Inactive'}
                    </span>
                  ) : col.field === 'role' ? (
                    // Check if it's the role column, display role and icon
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {rowData.role === 'admin' ? (
                        <FaUserShield style={{ marginRight: '5px', color: '#1e5991', fontSize: '20px' }} />
                      ) : rowData.role === 'moderator' ? (
                        <FaUserAlt style={{ marginRight: '5px', color: '#1e5991' }} />
                      ) : null}
                      {capitalizeFirstLetter(rowData.role)}
                    </div>
                  ) : col.field === 'description' ? (
                      truncateText(rowData.description, 10) // Truncate description text
                  ) : col.field === '_id' ? (
                      truncateText(rowData._id, 3) // Truncate description text
                  ) : col.field === 'name' ? (
                      <span 
                        style={{ cursor: 'pointer', color: 'blue' }} 
                        onClick={() => onNameClick(rowData)} // Call the function when name is clicked
                      >
                        {rowData.name}
                      </span>
                  ) : col.field === 'brandName' ? (
                    <span 
                      style={{ cursor: 'pointer', color: 'blue' }} 
                      onClick={() => onNameClick(rowData)} // Call the function when brandName is clicked
                    >
                      {rowData.brandName}
                    </span>
                ) :(
                    rowData[col.field]
                  )}
                </td>
              ))}
              {isUser && (
                <td>
                  <button onClick={() => onEdit(rowData.id)} className="action-button edit-button">
                    <FaEdit />
                  </button>
                  <button onClick={() => onDelete(rowData.id)} className="action-button delete-button">
                    <FaTrashAlt />
                  </button>
                </td>
              )}      
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomDataTable;