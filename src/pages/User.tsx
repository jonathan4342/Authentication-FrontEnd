import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ContainerLogin, Divs, Navbar, Title, Div } from '../styles/GoblaStyles';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { makeStyles } from '@mui/styles';
import { Redirect } from '../components/Redirect'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    logout: {
        color: 'red',
        gap: '0.5rem'
    },
    menu: {
        fontFamily: 'Noto Sans',
        fontSize: '18px',
        fontWeight: '600',
        gap: '0.5rem',
        
    }

}));

export const User = () => {
    const { user } = JSON.parse(window.localStorage.getItem('userData') || '')
    const navigate=useNavigate();
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
        navigate('/')
    }
    return (
        <ContainerLogin paddingTop='10px'>
            <Navbar>
                <div>
                    Hola
                </div>
                <div>
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
                        <MenuItem className={classes.logout} onClick={logout}><span className='rojo'><FiLogIn /> Logout</span></MenuItem>
                    </Menu>
                </div>
            </Navbar>
            <ContainerLogin paddingTop='0' gap='2rem'>
                <Title>
                    <h1>Personal info</h1>
                    <h3>Basic info, like your name and biography</h3>
                </Title>
                <Divs border='1px solid #E0E0E0'>
                    <Div>
                        <h1>Profile</h1>
                        <span>Some info may be visible to other people</span>
                    </Div>
                    <Div flexDirection='row'>
                        <span>NAME</span>
                        <h1>{user?.username}</h1>
                    </Div>
                    <Div flexDirection='row'>
                        <span>EMAIL</span>
                        <h1>{user?.email}</h1>
                    </Div>
                </Divs>
            </ContainerLogin>
        </ContainerLogin>
    )
}
