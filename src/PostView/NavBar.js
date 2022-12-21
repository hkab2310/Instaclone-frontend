import React from "react";
import camera from "../Images/camera.png"
import '../styles/NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return <div className="nav-container">

        <h3 className="heading">
            <img className="nav-left-img" src="icon.jpg" alt="Not Found" width='26px' />
            &nbsp;InstaClone
        </h3>
        <Link to="/uploads"><img className="nav-right-img" src={camera} alt="Not Found" width='26px' /></Link>
        

    </div>
}