import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styling/SignInPage.css'; 

const SignInPage = () => {
  const [role, setRole] = useState('');
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (role === 'Employee') {
      navigate('/employeehome'); 
    } else  {if (role === "Admin")
      navigate('/systemadmin');
    }
  };

  return (
    <div className="signin-container">
      <div className="left-panel">

          <h1 className="logo-title">AwaySync</h1>
        <p>Your Perfect Software <p></p>For Leave Management</p>
      </div>
      <div className="right-panel">
        <h2>Sign In</h2>
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="role"></label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Sign in as:</option>
              <option value="Employee">Employee</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="accountId"></label>
            <input
              id="accountId"
              type="text"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="Account ID:"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password:"
            />
          </div>
          <p className="forgot-password">Forgot password?</p>
          <button type="button" className="signin-button" onClick={handleSignIn}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
