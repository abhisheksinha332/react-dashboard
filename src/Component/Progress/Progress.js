import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {lighten, LinearProgress} from '@material-ui/core'

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
    <React.Fragment>
      <LinearProgress
        classes={classes}
        variant="determinate"
        value={value || 60}
      />
      <LinearProgress
        classes={classes}
        variant="determinate"
        color="primary"
        value={value || 40}
      />
    </React.Fragment>
  )
}


export default Progress