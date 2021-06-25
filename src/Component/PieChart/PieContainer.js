import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PieChart from './PieChart';
import './pie.css'
const PieContainer = () => {
    return (
        <div className="pie-container">
            <div className="text-area">
                <div className="pie-text">
                    Open Positions by Department
                </div>
                <div className="ic">
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="chart-pie">
            <PieChart className="pie"/>
            </div>
     
        </div>
    )
}

export default PieContainer
