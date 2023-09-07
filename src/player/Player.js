import React from 'react';
import "./Player.css"
import SideBar from '../components/sideBar/SideBar';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='palyer_body'>
        <SideBar />
        <Body />
      </div>

       <Footer />

    </div>
  )
}

export default Player
