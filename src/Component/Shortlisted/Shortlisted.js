import React from 'react'
import {Card, StylesProvider, Typography} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Styles.css'
const Shortlisted = () => {
    return (
        <Card variant="outlined" className="body">
            <div className="content">
            <div className="left">
                Total Applications
                <Typography variant="h4">
                    7956
                </Typography>
                <Typography variant="h6">
                    <TrendingUpIcon/> 2.3%
                </Typography>
            </div>
            <div className="right">
                <MoreHorizIcon />
                
                <div className="circle-wrap">
  <div className="circle">
    
    <div className="mask full">
      <div className="fill"></div>
    </div>
   
    <div className="mask half">
      <div className="fill"></div>
    </div>
    
    <div className="inside-circle">
      70%
    </div>
    
  </div>
  </div>



                </div>
                
            </div>
            
        </Card>
    )
}

export default Shortlisted