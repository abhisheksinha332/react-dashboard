import React from 'react'
import "./Navbar.css"
const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="container">
            <div className="nav_icon" onClick={()=>openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>   
            <div className="navbar_left">
                <h3>Dasboard</h3>
                <h6>Monday, 02 July 2021</h6>
            </div>
            <div className="navbar_right">
                <h2>Hello</h2>
            </div>
        </nav>
    )
}

export default Navbar
