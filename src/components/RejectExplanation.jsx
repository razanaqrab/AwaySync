import React from 'react';
import '../styling/RejectExplanation.css';

const RejectExplanation = () => {
  return (
    <div className="reject-explanation-page">
      <div className="reject-container">
        <h2 className="reject-title">Reject Explanation</h2>
        <p className="reject-instruction">
          Please provide a reason for rejecting this leave request:
        </p>
        <div className="reject-input-container">
          <textarea
            className="reject-textarea"
            placeholder="Enter rejection explanation here..."
            defaultValue="We regret to inform you that your sick leave request has been rejected as the provided document does not meet the required criteria or guidelines for approval."
          />
        </div>
        <button className="send-button">Send</button>
      </div>
      
    </div>
  );
};

export default RejectExplanation;
