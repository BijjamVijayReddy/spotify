import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import "./SideBar.css"
import SideBarOptions from '../sideBarOptions/SideBarOptions';

const SideBar = () => {
  return (
    <div className='sideBar'>
       <img  className='sideBar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sideBarImg"/>

       {/* sideBarOption */}
       <SideBarOptions Icon={HomeIcon} option="Home" />
       <SideBarOptions Icon={SearchIcon} option="Search" />
       <SideBarOptions Icon={LibraryMusicIcon} option="Your Libary" />

       <br />
        <strong className='sideBar_playList'>PLAYLISTS</strong>
       {/* horizantal Line */}
       <hr />
    </div>
  )
}

export default SideBar
