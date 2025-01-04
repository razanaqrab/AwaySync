import React from 'react';
import '../styling/FilledForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const FilledForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="filled-form-container">
      <h2 className="form-title">AL000000</h2> {/* Title now displays the ID */}
      <div className="form-content">
        <div className="form-field">
         
            <label>Leave Type:</label>
            <input type="text" value="Sick Leave" readOnly />
          
        </div>
        <div className="form-field">
          
            <label>Start Date:</label>
            <input type="text" value="18/2/2025" readOnly />
          
        </div>
        <div className="form-field">
            <label>End Date:</label>
            <input type="text" value="28/2/2025" readOnly />
          
        </div>
        <div className="form-field">
            <label>Reason:</label>
            <textarea
              value="Feeling unwell due to a fever and flu symptoms. Need time to rest and recover."
              readOnly
            ></textarea>
         
        </div>
        <div className="form-field">
            <label>File Attachments:</label>
            <div className="file-attachment">
              <span>Medical Certificate From M&J Hospital.docx</span>
          </div>
        </div>
      </div>
      <div className="form-buttons">
      <button className="back-button" onClick={() => navigate('/leaverequestform')}>
          Back
        </button>        <button className="update-button">Update</button>
      </div>
    </div>
  );
};

export default FilledForm;
