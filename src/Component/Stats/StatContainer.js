import React from 'react'
import Stat1 from './component/Stat1'
import Stat2 from './component/Stat2'
import Stat3 from './component/Stat3'
import Stat4 from './component/Stat4'
import { Grid,Button } from '@material-ui/core'
import './Stat.css'
const StatContainer = () => {
    return (
        <div className="mains">
            <div className="area">
            <div className="le">
              Referals and campaign Stats
          </div>
          <div className="ri">
              <div className="red">
                  40 Campaigns sent in total
              </div>
              <div className="te">
                  4 Campaigns in last month
              </div>
          </div>
            </div>
         
           <Grid container spacing={2}>
               <Grid item md={3}>
               <Stat1/> 
               </Grid>
               <Grid item md={3}>
               <Stat2/> 
               </Grid>
               <Grid item md={3}>
               <Stat3/> 
               </Grid>
               <Grid item md={3}>
               <Stat4/> 
               </Grid>
           </Grid>
           <div className="button">
               <Grid container>
                   <Grid item md={6}>
                   <Button variant="contained" color="primary">
                        Start a new Campaign now
                    </Button>
                   </Grid>
                   <Grid item md={6}>
                   <Button variant="contained" color="secondary">
                        Pause all Running Campaigns 
                    </Button>
                   </Grid>
               </Grid>
           </div>
        </div>
    )
}

export default StatContainer
