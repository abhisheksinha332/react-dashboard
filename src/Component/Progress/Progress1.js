import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {lighten, LinearProgress} from '@material-ui/core'

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
    backgroundColor: 'rgb(0, 140, 255);'
  }
}))

const Progress1 = (props) => {
  const classes = BorderLinearProgress()

  const {value} = props

  return (
    <div>
      <LinearProgress
        classes={classes}
        variant="determinate"
        value={value || 80}
      />
      
      
    </div>
  )
}


export default Progress1