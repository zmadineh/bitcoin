import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from "../navbar/Navbar";
import Grid from "@mui/material/Grid";
import CreateList from "../create-list/CreateList";
import Box from "@mui/material/Box";

import drawerLogo from "../../assets/images/menu-logo.svg";
import downloadApp from "../../assets/images/download-app-.jpg";
import {menuListsData} from "../../data/menu-list.data";


const AppMenu = () => {
    const [state, setState] = React.useState(false);

    const anchor = 'right';

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const list = () => (
        <Grid container
            sx={{ width: 350, p: '10px'}}
            direction={"column"}
            gap={4}
            role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer( false)}
        >
            <Grid item>
                <IconButton
                    size="medium"
                    edge="end"
                    color="secondary"
                    aria-label="close"
                    onClick={toggleDrawer( false)}
                >
                    <CloseIcon />
                </IconButton>
            </Grid>

            <Grid container item justifyContent={'center'} gap={5}>
                <img src={drawerLogo}/>
                <img src={downloadApp} width={'100%'}/>
            </Grid>

            {menuListsData.map(list => (
                <Box key={list.section}>
                    {list.section % 2 === 0 ? <Divider /> : null}
                    <CreateList list={list.data} />
                    {list.section % 2 === 0 ? <Divider /> : null}
                </Box>
            ))}


        </Grid>
    );

    return (
            <Box sx={{display: { mobile: 'none', tablet: 'flex'}, alignItems: 'center'}}>
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

                <Navbar />

                <Drawer
                    anchor={anchor}
                    open={state}
                    onClose={toggleDrawer( false)}>
                    {list()}
                </Drawer>

            </Box>
    );
}

export default AppMenu;