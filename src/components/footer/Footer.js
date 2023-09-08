import React from 'react';
import "./Footer.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import { Grid, Slider } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'> 
         <div className='footer_left'>
           <img className='footer_ablumInfo' src="https://i.scdn.co/image/ab67706f000000024e0f270b8e968aae393328e2" alt="ablumInfo" />
           <div className='footer__songInfo'>
             <h4>Yeah!</h4>
             <p>user</p>
           </div>
         </div>

         <div className='footer_center'>
           <ShuffleOutlinedIcon className="footer__green" />
           <SkipPreviousOutlinedIcon   className="footer__icon"/>
           <PlayCircleIcon  fontSize='large'className="footer__icon"/>
           <SkipNextOutlinedIcon className="footer__icon"/>
           <RepeatOutlinedIcon className="footer__green"/>
         </div>

         <div className='footer_right'>
         <Grid container spacing={2}>
          <Grid item>
            <PauseCircleOutlineOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
         </div>

    </div>
  )
}

export default Footer