import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {lighten, LinearProgress} from '@material-ui/core'
import { Grid } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './progress.css'
const BorderLinearProgress = makeStyles(theme => ({
  root: {
    height: 10,
    backgroundColor: lighten('#000', 0.8),
    margin: 12,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'blue'
  }
}))

const Progress = (props) => {
  const classes = BorderLinearProgress()

  const {value} = props

  return (
    <div>
      {/* <LinearProgress
        classes={classes}
        variant="determinate"
        value={value || 60}
      />
      <LinearProgress
        classes={classes}
        variant="determinate"
        color="primary"
        value={value || 40}
      /> */}
       <Grid container>
                <Grid item xs={4}>
                    <div className="prog1">
                        <FiberManualRecordIcon/>
                        <span>Application</span>
                    </div>
                </Grid>
                
                <Grid item xs={8}>
                
                </Grid>

            </Grid>
    </div>
  )
}


export default Progress