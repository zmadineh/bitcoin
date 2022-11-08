import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from "../nav-menu/NavMenu";
import Box from "@mui/material/Box";
import DrawerContent from "../drawer-content/DrawerContent";

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
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer( true)}
                >
                    <MenuIcon />
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>{`منو`}</Typography>
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