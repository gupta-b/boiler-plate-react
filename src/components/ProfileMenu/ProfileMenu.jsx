// youtube.com/watch?v=yaWtIus3UAM
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import './ProfileMenu.css';

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openProfileMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(true);
    };
    const closeProfileMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };
    return (
        <>                   
                <div className="myAccWrapper">
                    <Button
                        className="myAcc d-flex align-items-center"
                        onClick={openProfileMenu}>
                        <div className="userImg">
                            <span className="rounded-circle">
                                <img src={logo} />
                            </span>
                        </div>
                        <div className="userInfo">
                            <h4>Admin</h4>
                            <p className="mb-0">@admin</p>
                        </div>
                        <Menu
                            anchorEl={anchorEl}
                            id="profile-menu"
                            className="profile-menu"
                            open={Boolean(anchorEl)}
                            onClose={closeProfileMenu}
                            onClick={closeProfileMenu}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                        <MenuItem onClick={closeProfileMenu}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={closeProfileMenu}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={closeProfileMenu}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={closeProfileMenu}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={closeProfileMenu}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Button>
            </div>
                    
        </>
    )
}

export default ProfileMenu;