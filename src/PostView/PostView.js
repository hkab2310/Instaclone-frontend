import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import PostCard from './PostCard';
import '../styles/Postview.css'

export default function Postview() {

    const [userData, setTUserData] = useState([]);

    useEffect(() => {
        fetch("https://hkab-instacloneapi.onrender.com")
            .then(response => response.json())
            .then(res => {
                res.reverse();
                setTUserData(res)
            })
    }, [])


    console.log(userData)
    return <>
        {/* <h2>postview Page</h2> */}
        <NavBar />
        <div className='post-container'>
            {userData.length > 0 && userData.map((user, index) => {
                return <PostCard key={index} user={user} image={user.PostImage} />
            })}
        </div>

    </>
}
