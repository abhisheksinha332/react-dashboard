import React from 'react'
import {Card, StylesProvider, Typography} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Style.css'
const Total = () => {
    return (
        <Card variant="outlined">
            <div className="content">
            <div className="left">
              <div className="title">
              Total Applications
              </div>
                
                <Typography variant="h4" className="text">
                    1501
                </Typography>
                <Typography variant="h6" className="grow1">
                    <TrendingDownIcon/> -0.4%
                </Typography>
            </div>
            <div className="right">
                <MoreHorizIcon />
                <div>
                <div className="circle-wrap">
  <div className="circle">
    
    <div className="mask1 full1">
      <div className="fill"></div>
    </div>
   
    <div className="mask1 half1">
      <div className="fill"></div>
    </div>
    
    <div className="inside-circle">
      +40%
    </div>
    
  </div>
  </div>

                </div>
                
            </div>
            </div>
        </Card>
    )
}

export default Total
