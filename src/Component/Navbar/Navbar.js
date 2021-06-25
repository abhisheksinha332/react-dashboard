import React from 'react'
import {Avatar, Button,TextField} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="container">
              
            <div className="navbar_left">
                <h3>Dasboard</h3>
                <h6>Monday, <span className="col">02 July 2021</span></h6>
            </div>
            <div className="navbar_right">
                <div className="dir">
                <div className="john">
                <div className="tr"><NotificationsIcon/></div>
                <div className="tr"> John Bayer</div>
                <div className="trip"><Avatar/></div>
                <div className="tri"><ExpandMoreIcon/></div>
                </div>
                <div className="john1">
                    <div className="buttn">
                    <Button variant="contained" color="primary" className="add"><AddIcon/><span className="add"> Add</span></Button>
                    </div>
                    <div className="search">
                    <SearchIcon/><TextField id="standard-basic" defaultValue="Search for application heree" />
                    </div>
                </div>
            </div>
            </div>
            
        </nav>
    )
}

export default Navbar
