import React from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import TotalApplication from './Component/Total1/TotalApplication'
import Shortlisted from './Component/Shortlisted/Shortlisted'
import Total from './Component/Total2/Total2'
import PieContainer from './Component/PieChart/PieContainer'
//import Graph from './Component/Graph/Graph'
import GraphContainer from './Component/Graph/GraphContainer'
import Progress from './Component/Progress/Progress'
import ProgressContainer from './Component/Progress/ProgressContainer'
import StatContainer from './Component/Stats/StatContainer'
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
        <div className="main-content">
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
                        <GraphContainer />
                    </Grid>
                    <Grid item md={3}>
                        <ProgressContainer />
                    </Grid>
                    <Grid item md={6}>
                    <StatContainer/>
                    </Grid>
                    <Grid item md={3}>
                    <PieContainer/>
                    </Grid>
                </Grid>
            </div>
            {/* <div>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                    <StatContainer/>
                    </Grid>
                    <Grid item md={3}>
                    <PieContainer/>
                    </Grid>
                </Grid>
            </div> */}
            
        </div>
    )
}

export default App
