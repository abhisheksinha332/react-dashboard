import React from 'react'
import { Paper } from '@material-ui/core'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import '../Stat.css'
const Stat2 = () => {
    return (
        <div className="containerss">
            <Paper className="paper">
                <div className="header">
                    Referals
                </div>
                <div className="imp">
                    <TrendingUpIcon/>+9.01%
                </div>
                <div className="digit">
                    0662
                </div>
            </Paper>
        </div>
    )
}

export default Stat2