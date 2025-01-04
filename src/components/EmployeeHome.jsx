import React, { useState } from 'react'
import '../styling/employeeHome.css'
import LeaveBalance from './LeaveBalance';
import { Router, useNavigate } from 'react-router-dom';

const EmployeeHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');
  const [status, setStatus] = useState('Pending')
  const [selectedLeave, setSelectedLeave] = useState(null); // State to hold selected leave details
  const navigate = useNavigate();
  


  const leaveData = [
    { id: 'AL012345', status: 'Pending', leaveType: 'Sick Leave', startDate: '2024-05-01', endDate: '2024-05-05', reason: 'Flu', files: 'None' },
    { id: 'SL112345', status: 'Approved', leaveType: 'Annual Leave', startDate: '2024-05-02', endDate: '2024-05-08', reason: 'Vacation', files: 'None' },
    { id: 'PL212345', status: 'Rejected', leaveType: 'Parental Leave', startDate: '2024-05-03', endDate: '2024-05-07', reason: 'Family Emergency', files: 'Document.pdf' },
    { id: 'AL012345', status: 'Pending', leaveType: 'Annual Leave', startDate: '2024-06-03', endDate: '2024-06-05', reason: 'Flu', files: 'None' },
  ];

  const handleRowClick = (leave) => {
    navigate('/leaveInfo', { state: leave });
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };
  const handleDeletion = (e) => {
    setStatus('Deleted')
  };


  return (
    <div className="employee-home-container">
      {/* Upper Part */}
      <div className="upper-part">
        {/* Upper Div */}
        <div className="upper-div">
          <div className="left-section">
            <h2>Leave Requests</h2>
          </div>
          <div className="right-section">
            <button className="sort-button">Sort ▲</button>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <button className="cancel-button"><img src="../../src/assets/delete.png" alt="X" /></button>
            </div>
          </div>
        </div>

        {/* Lower Div */}

        <table className='leave-requests-table'>
          <thead>
            <tr>
              <td>Leave ID</td>
              <td>Date</td>
              <td>Status</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
          {leaveData.map((leave, index) => (
            <tr key={index} onClick={() => handleRowClick(leave)} className="table-row">
              <td>{leave.id}</td>
              <td>{leave.startDate}</td>
              <td>{leave.status}</td>
              <td>
                <button className="cancel-button">
                  <img src="../../src/assets/delete.png" alt="X" />
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>


        {/* Lower Part */}
        <div className="lower-part">
          <h2>Leave Balance</h2>

          {/* Cards Section */}

          <LeaveBalance />



          {/* Buttons Section */}
          <div className="buttons-section">
          <button className="leave-policies-button"
  onClick={() => navigate('/leavePolicy')}>Read Leave Policies</button>

           
            <button className="new-leave-request-button" onClick={() => navigate('/LeaveRequestForm')} >New Leave Request</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeHome