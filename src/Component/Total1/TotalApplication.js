import React from 'react'
import {Card, StylesProvider, Typography} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Styles.css'
const TotalApplication = () => {
    return (
        <Card variant="outlined" className="body">
            <div className="content">
            <div className="left" >
              <div className="title">
              Total Applications
              </div>
                
                <Typography variant="h4" className="text">
                    7956
                </Typography>
                <Typography variant="h6" className="grow" >
                    <TrendingUpIcon/> 2.3%
                </Typography>
            </div>
            <div className="right">
                <MoreHorizIcon />
                <div>
                <div className="circle-wrap">
  <div className="circle">
    
    <div className="mask full">
      <div className="fill"></div>
    </div>
   
    <div className="mask half">
      <div className="fill"></div>
    </div>
    
    <div className="inside-circle">
      +70%
    </div>
    
  </div>
  </div>

                </div>
                
            </div>
            </div>
        </Card>
    )
}

export default TotalApplication
