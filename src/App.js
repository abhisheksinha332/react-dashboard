import React from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import TotalApplication from './Component/Total1/TotalApplication'
import Shortlisted from './Component/Shortlisted/Shortlisted'
import Total from './Component/Total2/Total2'
import Graph from './Component/Graph/Graph'
import Progress from './Component/Progress/Progress'
import PieChart from './Component/PieChart/PieChart'
import {Grow, Grid } from '@material-ui/core'
import './style.css'
const App = () => {
    const[sidebar,setSidebar] = useState(false)

    const openSidebar = () =>{
        setSidebar(true)
    }

    const closeSidebar = () => {
        setSidebar(false)
    }


    return (
        <div>
            <div className="container1">
        <div className="sidebar">
        <Sidebar />
        </div>
           
        <Grid container spacing={2}  className="nav" >
                <Grid item md={12} > 
                    <Navbar />
                </Grid>
                
                <Grid item md={6} className="main" >
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <TotalApplication />
                        </Grid>
                        <Grid item md={6}>
                            <Shortlisted />
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item md={3}>
                    <Total />
                </Grid>
                <Grid item md={6}>
                    <Graph />
                </Grid>
                <Grid item md={3}>
                   <Progress/>
                </Grid>
                <Grid item md={3}>
                   <PieChart/>
                </Grid>
                
            </Grid>
            </div>
            
        </div>
    )
}

export default App
