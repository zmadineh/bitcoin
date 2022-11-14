import React from 'react';

import NavMenu from "./nav-menu/NavMenu";
import DrawerContent from "../drawer-content/DrawerContent";

import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";


const AppMenu = () => {
    const [state, setState] = React.useState(false);

    const anchor = 'right';
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return (
            <Box sx={{display: { xs: 'none', md: 'flex'}, alignItems: 'center'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={toggleDrawer( true)}
                >
                    <MenuIcon />
                    <Typography variant="body1" sx={{ flexGrow: 1, mr: 1 }}>{`منو`}</Typography>
                </IconButton>

                <NavMenu />

                <Drawer
                    anchor={anchor}
                    open={state}
                    onClose={toggleDrawer( false)}>
                    <DrawerContent drawer_func={toggleDrawer} />
                </Drawer>

            </Box>
    );
}

export default AppMenu;