import React from 'react'
import Progress from './Progress'
import Progress1 from './Progress1'
import Progress2 from './Progress2'
import Progress3 from './Progress3'
import Progress4 from './Progress4'
import { Grid } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './progress.css'

const ProgressContainer = () => {
    return (

        <div className="containerBody">
        <div className="word">
            Total Applications
        </div>
        <div className="cont1">
            <Grid container>
                <Grid item sm={5}>
                    <div className="prog1">
                        <FiberManualRecordIcon/>
                        <span>Application</span>
                    </div>
                </Grid>
                
                <Grid item sm={7}>
                <Progress/>
                </Grid>

            </Grid>  
        </div>
        <div className="cont2">
            <Grid container>
                <Grid item xs={5}>
                    <div className="prog2">
                        <FiberManualRecordIcon/>
                        <span>Shortlisted</span>
                    </div>
                </Grid>
                <Grid item xs={7}>
                <Progress1/>
                </Grid>
            </Grid>
        </div>
        <div className="cont3">
            <Grid container>
                <Grid item xs={5}>
                    <div className="prog3">
                        <FiberManualRecordIcon/>
                        <span>Rejected</span>
                    </div>
                </Grid>
                <Grid item xs={7}>
                <Progress2/>
                </Grid>
            </Grid>
        </div>
        <div className="cont4">
            <Grid container>
                <Grid item xs={5}>
                    <div className="prog4">
                        <FiberManualRecordIcon/>
                        <span>On Hold</span>
                    </div>
                </Grid>
                <Grid item xs={7}>
                <Progress3/>
                </Grid>
            </Grid>
        </div>
        <div className="cont5">
            <Grid container>
                <Grid item xs={5}>
                    <div className="prog5">
                        <FiberManualRecordIcon/>
                        <span>Selected</span>
                    </div>
                </Grid>
                <Grid item xs={7}>
                <Progress4/>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default ProgressContainer
