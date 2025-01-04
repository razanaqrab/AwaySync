import React from 'react';
import '../styling/CreateAccount.css';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h2 className="create-account-title">Employee ID: 000004</h2>
        <form className="create-account-form">
          <div className="form-field">
            <label htmlFor="fullName"></label>
            <input type="text" id="fullName" placeholder="Full Name:" />
          </div>
          <div className="form-field">
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Password:" />
          </div>
          <div className="form-field">
            <label htmlFor="position"></label>
            <select id="position">
              <option value="" disabled selected>
                Pick a Position
              </option>
              <option value="Designated Leave Supervision">
                Designated Leave Supervision
              </option>
              <option value="Payroll Team">Payroll Team</option>
              <option value="System Admin">System Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="button-group"> <button
              className="back-button"
              type="button"
              onClick={() => navigate('/systemadmin')}
            >
              Back
            </button>
            <button
              className="create-button"
              type="button"            >
              Create Account
            </button>
           
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default CreateAccount;
