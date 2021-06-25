import React from 'react'
import Stat1 from './component/Stat1'
import Stat2 from './component/Stat2'
import Stat3 from './component/Stat3'
import Stat4 from './component/Stat4'
import { Grid,Button } from '@material-ui/core'
import TelegramIcon from '@material-ui/icons/Telegram';
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
                 <TelegramIcon/> 40 Campaigns sent in total
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
                       <div className="btn1">
                   <Button variant="contained" color="primary" className="butn">
                        Start a new Campaign now
                    </Button>
                    </div>
                   </Grid>
                   <Grid item md={6}>
                       <div className="btn1">
                   <Button variant="contained" color="secondary" className="butn">
                        Pause all Running Campaigns 
                    </Button>
                    </div>
                   </Grid>
               </Grid>
           </div>
        </div>
    )
}

export default StatContainer
