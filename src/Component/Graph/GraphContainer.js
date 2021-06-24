import React from 'react'
import Graph from './Graph'
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Graph.css'
const GraphContainer = () => {
    return (
        <div className="border">
            <div className="head">
                <div className="start">
                    Applications Received
                </div>
                <div className="end">
                    <span>This Year</span>
                    <span>This week</span>
                    <span>Today</span>
                    <ArchiveIcon className="download"/> Download Report
                    <span><MoreVertIcon /></span>
                </div>
            </div>
        <div className="graphcontainer">
            <Graph/>
        </div>
        </div>
    )
}

export default GraphContainer
