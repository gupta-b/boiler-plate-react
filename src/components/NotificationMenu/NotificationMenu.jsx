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

import { FaRegBell } from "react-icons/fa6";

import './NotificationMenu.css';

const NotificationMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openNotificationMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(true);
    };
    const closeNotificationMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };
    return (
        <>                   
                <div className="dropdownWrapper position-relative">
                <Button className="rounded-circle mr-3"
                    onClick={openNotificationMenu}><FaRegBell />
                        <Menu
                            anchorEl={anchorEl}
                            id="profile-menu"
                            className="profile-menu"
                            open={Boolean(anchorEl)}
                            onClose={closeNotificationMenu}
                            onClick={closeNotificationMenu}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                        <MenuItem onClick={closeNotificationMenu}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={closeNotificationMenu}>
                            <Avatar /> My Notification
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={closeNotificationMenu}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={closeNotificationMenu}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={closeNotificationMenu}>
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

export default NotificationMenu;