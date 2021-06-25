import React from 'react'
import GestureRoundedIcon from '@material-ui/icons/GestureRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PollRoundedIcon from '@material-ui/icons/PollRounded';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import NaturePeopleRoundedIcon from '@material-ui/icons/NaturePeopleRounded';
import MovieCreationRoundedIcon from '@material-ui/icons/MovieCreationRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="container-s" >
            <div className="logo">
                <GestureRoundedIcon fontSize="large"/>
            </div>
            <div className="iconbar">
                <div className="upper">
            <div className="side-icon">
                <div className="icon1">
                    <HomeRoundedIcon/>
                </div>
                <div className="icon">
                <PollRoundedIcon/>
                </div>
                <div className="icon">
                    <CameraAltRoundedIcon/>
                </div>
                <div className="icon">
                    <FolderRoundedIcon/>
                </div>
                <div className="icon">
                    <EventAvailableRoundedIcon/>
                </div>
                <div className="icon">
                    <NaturePeopleRoundedIcon/>
                </div>
                <div className="icon">
                    <MovieCreationRoundedIcon/>
                </div>
                <div className=" icon8">
                    <ExitToAppRoundedIcon/>
                </div>
                </div>
            </div>
       <div className="lower">
            <SettingsApplicationsRoundedIcon/>
       </div>
       </div>
        </div>
    )
}
  
export default Sidebar
