import React from 'react'
import { Paper } from '@material-ui/core'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import '../Stat.css'
const Stat3 = () => {
    return (
        <div className="containerss">
            <div className="paper">
                <div className="header">
                    Shares
                </div>
                <div className="imp">
                    <TrendingUpIcon/>+39.18%
                </div>
                <div className="digit">
                    1478
                </div>
            </div>
        </div>
    )
}

export default Stat3
