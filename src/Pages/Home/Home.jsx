import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css';

function Home() {
  return (
    <div className='Home'>
        <Sidebar></Sidebar>
        <div className="homeContainer">
            <Navbar></Navbar>
            container</div>
    </div>
  )
}

export default Home