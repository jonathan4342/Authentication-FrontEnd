import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ContainerLogin, Navbar } from '../styles/GoblaStyles';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { makeStyles } from '@mui/styles';
import { Redirect } from '../components/Redirect'
import toast from 'react-hot-toast';

const useStyles = makeStyles(theme => ({
    logout: {
        color: 'red',
        gap: '0.5rem'
    },
    menu: {
        gap: '0.5rem'
    }

}));

export const User = () => {
    const { user } = JSON.parse(window.localStorage.getItem('userData') || '')

    useEffect(()=>{
        toast.success(`Welcome ${user.username}`)
    },[user])

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    if (!window.localStorage.getItem('userData')) {
        return <Redirect />
    }

    const logout = () => {
        window.localStorage.removeItem('userData');
    }
    return (
        <ContainerLogin paddingTop='10px'>
            <Navbar>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className={classes.menu}
                >
                    {user.username} {anchorEl ? <BsArrowUpShort /> : <BsArrowDownShort />}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className={classes.menu}><FaUserCircle /><span>My Profile</span></MenuItem>
                    <MenuItem className={classes.logout} onClick={logout}><FiLogIn />Logout</MenuItem>
                </Menu>
            </Navbar>
        </ContainerLogin>
    )
}
