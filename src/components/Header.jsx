import React from 'react'
import '../styling/header.css'

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src="../../src/assets/logo.png" alt="Company Logo" className="company-logo" />
        <span className="system-name">AwaySync</span>
      </div>
      <div className="header-right">
        <button className="profile-button">
          <img
            src="../../src/assets/profile.png"
            alt="Profile"
            className="profile-picture"
          />
        </button>
        <button className="logout-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logout-icon"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header