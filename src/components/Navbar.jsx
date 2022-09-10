import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, InputBase,Badge, Menu, MenuItem } from '@mui/material';
import {styled} from "@mui/material/styles";
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white"
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(true)
  };

  return (
    <AppBar position="static">
        <StyledToolbar>
            <Typography variant="h6" sx={{ 
                display: {
                    xs: "none",
                    sm: "block"
                }
             }}>Material UI</Typography>
            <PetsIcon sx={{ 
                display: {
                    xs: "block",
                    sm: "none"
                }
             }}/>
             <Search>
                 <InputBase placeholder="Search...."/>
            </Search>
             <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar onClick={handleOpen} sx={{ width:30, height: 30 }} src="https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
             </Icons>
             <UserBox onClick={handleOpen}>
                <Avatar sx={{ width:30, height: 30 }} src="https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
                <Typography variant="span">John Doe</Typography>
             </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={open}
            onClose={(e) => setOpen(false)}
            // onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar