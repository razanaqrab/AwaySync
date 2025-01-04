import React from 'react';
import '../styling/EmployeeInfo.css';

const EmployeeInfo = () => {
  return (
    <div className="employee-info-container">
      <h2 className="employee-title">Employee Information</h2>
      <div className="employee-details">
        <div className="info-field">
          <label>Employee ID:</label>
          <span>  000000</span>
        </div>
        <div className="info-field">
          <label>Name:</label>
          <span>  Layan Tariq Abdullah Aloqda</span>
       </div>
        <div className="info-field">
          <label>Password:</label> <span>  0123456789</span> 
        </div>

        <div className="info-field">
        <label>Position: </label> <span>  Employee</span>
            </div>
      </div><button className="modify-button">Modify Information</button>
    
    </div>
  );
};

export default EmployeeInfo;
