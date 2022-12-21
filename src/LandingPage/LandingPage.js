import React from 'react';
import nature from '../Images/nature.jpg';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'



export default function LandingPage() {
    return (
        <div id='main-con'>
            
                <div id='img-con'>
                    <img src={nature} alt='No Found'></img>
                </div>
                <div id='btn-cont'>
                    <h2>10x Team 04</h2>
                    <button><Link to="/instaclone">Enter</Link></button>
                </div>
        </div>
    )



}