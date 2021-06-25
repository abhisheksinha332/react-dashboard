import React from 'react'
import { Paper } from '@material-ui/core'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import '../Stat.css'
const Stat2 = () => {
    return (
        <div className="containerss">
            <div className="paper">
                <div className="header">
                    Referals
                </div>
                <div className="imp">
                    <TrendingUpIcon/>+9.01%
                </div>
                <div className="digit">
                    0662
                </div>
            </div>
        </div>
    )
}

export default Stat2
