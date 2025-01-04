import React from 'react';
import '../styling/leavepolicy.css'; // Include the specific LeavePolicy styles

import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const LeavePolicyAdmin = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="leavepolicy"> {/* Root container with proper layout */}
      <h2 className="leave-title">Leave Policy</h2>
      <div className="leave-container">
        <div className="leave-policy-container">
          <p>
            At AwaySync, we value the well-being and work-life balance of our employees. This leave policy outlines the types of leave available and the procedures for requesting time off.
          </p>
          <ol>
            <li>
              <strong>Annual Leave</strong>
              <ul>
                <li>Full-time employees are entitled to 20 days of paid annual leave per year.</li>
                <li>Leave requests should be submitted at least two weeks in advance through the company’s leave management system.</li>
              </ul>
            </li>
            <li>
              <strong>Sick Leave</strong>
              <ul>
                <li>Employees are entitled to 10 days of paid sick leave annually.</li>
                <li>For absences longer than two consecutive days, a medical certificate is required.</li>
              </ul>
            </li>
            <li>
              <strong>Maternity and Paternity Leave</strong>
              <ul>
                <li>Maternity Leave: Up to 90 days of paid leave for eligible employees.</li>
                <li>Paternity Leave: Up to 10 days of paid leave within the first month of the child’s birth.</li>
              </ul>
            </li>
          </ol>
          <h3>Leave Request Procedure</h3>
          <p>
            Submit leave requests via the company’s leave management system. Managers will review and approve or deny requests within 3 business days.
          </p>
          <p>
            For further details, contact the HR department or refer to the employee handbook. This policy is subject to periodic review and updates.
          </p>
        </div>
      </div>
     <div className="saving-control">
       <button onClick={() => navigate('/systemadmin')}>Back
        </button> {/* Add navigation functionality */}
        <button> Update
        </button>
     </div>
    </div>
  );
};

export default LeavePolicyAdmin;
