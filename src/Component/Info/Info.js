import React from 'react'
import Image from './intro-min.png'
const Info = () => {
    return (
        <div>
            <div className="info-container">
                <div className="info-copntent">
                    <p>Hello John Bayer,</p>
                    <p>You have 8 new Applications Today!</p>
                    <img src={Image} className="image"/>
                </div>
            </div>
        </div>
    )
}

export default Info
