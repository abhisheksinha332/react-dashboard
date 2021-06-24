import React from 'react'
import {Card, StylesProvider, Typography} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Styles.css'
const Shortlisted = () => {
    return (
        <Card className="body">
            <div className="content1">
            <div className="left">
              <div className="title">
                Total Applications
                </div>
                <Typography variant="h4" className="text">
                    7956
                </Typography>
                <Typography variant="h6" className="grow2" >
                    <TrendingUpIcon/> +06%
                </Typography>
            </div>
            <div className="right">
                <MoreHorizIcon />
                
                <div className="circle-wrap">
  <div className="circle">
    
    <div className="mask2 full2">
      <div className="fill2"></div>
    </div>
   
    <div className="mask2 half2">
      <div className="fill2"></div>
    </div>
    
    <div className="inside-circle">
      60%
    </div>
    
  </div>
  </div>



                </div>
                
            </div>
            
        </Card>
    )
}

export default Shortlisted