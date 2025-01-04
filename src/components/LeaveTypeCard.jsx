import React from 'react'
import '../styling/leaveTypeCard.css'
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);



export const LeaveTypeCard = ({ title, consumed, available }) => {  
    const data = {
        labels: ["Consumed", "Available"],
        datasets: [
            {
                data: [consumed, available],
                backgroundColor: ["gray", "orange"],
                hoverBackgroundColor: ["darkgray", "darkorange"],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide default legend, we'll create our own
            },
        },
    };

  return (
    <div className="leave-card">
            <div className="leave-card-title">{title}</div>
            <div className="pie-chart">
                <Pie data={data} options={options} />
            </div>
            <div className="legend">
                <div className="legend-item consumed">
                    <span></span> Consumed Leaves
                </div>
                <div className="legend-item available">
                    <span></span> Available Leaves
                </div>
            </div>
        </div>
  )
}
