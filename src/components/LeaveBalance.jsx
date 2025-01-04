import React from 'react'
import { LeaveTypeCard } from './LeaveTypeCard'

const LeaveBalance = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
            <LeaveTypeCard title="Sick Leave" consumed={5} available={10} />
            <LeaveTypeCard title="Annual Leave" consumed={8} available={12} />
            <LeaveTypeCard title="Parental Leave" consumed={2} available={6} />
        </div>

  )
}

export default LeaveBalance