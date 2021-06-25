import React from 'react'
import { Paper } from '@material-ui/core'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import '../Stat.css'
const Stat1 = () => {
    return (
        <div className="containerss">
            <div className="paper">
                <div className="header">
                    User's Reached
                </div>
                <div className="imp">
                    <TrendingUpIcon/>+3.59%
                </div>
                <div className="digit">
                    7956
                </div>
            </div>
        </div>
    )
}

export default Stat1
