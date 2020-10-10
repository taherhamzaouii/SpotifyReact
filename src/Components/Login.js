import React from 'react'
import './Login.css'
import { accessUrl } from './spotify';
function Login() {
    return (
        <div className='login'>
            {/* Spotify Logo */}
            {/* Login with Spotify button */}
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt='' />
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
