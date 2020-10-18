import React from 'react'
import './Player.css'
import SideBar from './SideBar'
import Body from './Body'
import Footer from './Footer'
function Player() {
    return (
        <div className='player'>
            <h1>Welcome to Spotify</h1>
                <div className='player_body'>
                    <SideBar />
                    <Body />
                </div>

            <Footer />
        </div>
    )
}

export default Player
