import React from 'react';
import '../styling/systemAdmin.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const SystemAdmin = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="system-admin-page">
      <div className="admin-content">
        <h2 className="pending-request">Pending Requests</h2>
        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Date</th>
                <th>Accept Leave Request</th>
              </tr>
            </thead>
            <tbody>
            <tr >
                
            <td
                  style={{ cursor: 'pointer', color: 'orange', textDecoration: 'underline' }}
                  onClick={() => navigate('/employee-info')} // Navigate to EmployeeInfo
                >000000</td>
                <td>July/7</td>
                <td>
                  <button className="accept-button"  onClick={() => navigate('/FilledFormAdmin')} // Navigate to FilledFormAdmin
                  >Accept</button>
                </td>
              </tr>
              <tr>
                <td>000001</td>
                <td>June/4</td>
                <td>
                  <button className="accept-button">Accept</button>
                </td>
              </tr>
              <tr>
                <td>000002</td>
                <td>May/12</td>
                <td>
                  <button className="accept-button">Accept</button>
                </td>
              </tr>
              <tr>
                <td>000003</td>
                <td>March/2</td>
                <td>
                  <button className="accept-button">Accept</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="admin-actions">
          <button className="action-button">Add Leave Type</button>
          <button className="action-button" onClick={() => navigate('/LeavePolicyAdmin')}>
            Read Policy
          </button><button className="action-button" 
          onClick={() => navigate('/create-account')}
          >Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default SystemAdmin;
