import React from 'react';
import './Header.css';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header" >
            <h1>I am a Header</h1>
            <MenuIcon/>
            <img  
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" />
        </div>
    )
}
 
export default Header
