

import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { DataLayerValue } from '../../features/dataLayer/DataLayer';

const Header = () => {
    const[{ user }, dispatch] = DataLayerValue();

  return (
    <div className='header'>
        <div className='header__left'>
            <SearchIcon />
            <input placeholder='Seacrh for Artits, Songs, or Podcasts' type='text'/>
        </div>

        <div className='header__right'>
            <Avatar src={user?.images[0]?.url} alt={user?.images[0].url}/>
              <h4>{ user?.display_name}</h4>
         </div>
    </div>
  )
}

export default Header