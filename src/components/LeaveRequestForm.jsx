import React from 'react';
import '../styling/LeaveRequestForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const LeaveRequestForm = () => {
      const navigate = useNavigate(); // Initialize useNavigate
  
  return (
    <div className="leave-request-form-container">
      <h2 className="form-title">Leave Request Form</h2>
      <div className="form-content">
        <div className="field-container">
          <label>Leave Type:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="leaveType" value="sick" /> Sick Leave
            </label>
            <label>
              <input type="radio" name="leaveType" value="annual" /> Annual Leave
            </label>
            <label>
              <input type="radio" name="leaveType" value="parental" /> Parental Leave
            </label>
          </div>
        </div>
          <label>Start Date:</label>
          <input type="date" />
          <label>End Date:</label>
          <input type="date" />
          <label>Reason:</label>
          <textarea placeholder="Enter the reason for leave"></textarea>
          
          <div className="file-attachment">
            <span>Please attach any supplementary files:</span>
            <input type="file" />
        </div>
      </div>
      <div className="form-buttons"onClick={() => navigate('/filledform')}>
        <button className="send-button">Send Form</button>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
