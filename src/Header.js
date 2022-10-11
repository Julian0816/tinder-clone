import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>

        <img
            className="header__logo"
            src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v982-d5-11-kpazin9l.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=05b7bd59b8a0de6638e1b4426caf1702"
            alt=""
        />

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>

    </div>
  )
}

export default Header