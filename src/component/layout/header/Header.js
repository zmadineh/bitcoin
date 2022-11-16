import React from "react";

import AppMenu from "../../common/app-menu/AppMenu";

import headerLogo from "../../../assets/images/header-logo.svg";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import NavLink from "../nav-link/NavLink";



const Header = ({color}) => {
    return (
            <AppBar position="fixed" dir={'rtl'} sx={{backgroundColor: color, color: 'text.primary', top: '0', zIndex: '1000' }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid container justifyContent={"space-between"} sx={{display: { xs: 'none', md: 'flex' }}}>
                            <AppMenu />

                            <Grid display={"flex"} gap={1}>
                                <Button variant={'contained'} >{`ورود / ثبت نام`}</Button>
                                <Divider orientation="vertical" flexItem />
                                <img src={headerLogo} width={'100px'} />
                            </Grid>
                        </Grid>

                        <Grid container sx={{display: { xs: 'flex', md: 'none' }}}>

                            <Grid>
                                <NavLink />
                            </Grid>
                        </Grid>

                    </Toolbar>
                </Container>
            </AppBar>
    )
}

export default Header;