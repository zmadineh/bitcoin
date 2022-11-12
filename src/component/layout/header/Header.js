import React from "react";

import AppMenu from "../../common/app-menu/AppMenu";

import headerLogo from "../../../assets/images/header-logo.svg";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

const Header = ({color}) => {

    return (
            <AppBar position="fixed" dir={'rtl'} sx={{backgroundColor: color, color: 'text.primary', top: '0', zIndex: '1000' }}>
                <Container maxWidth="lg">
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <AppMenu />

                        <Grid gap={1} sx={{display: { xs: 'none', md: 'flex' }}}>
                            <Button variant={'contained'} >{`ورود / ثبت نام`}</Button>
                            <Divider orientation="vertical" flexItem />
                            <img src={headerLogo} width={'100px'} />
                        </Grid>

                        <Grid gap={1} sx={{display: { xs: 'flex', md: 'none' }}}>
                            <img src={headerLogo} width={'100px'}/>
                        </Grid>

                    </Toolbar>
                </Container>
            </AppBar>
    )
}

export default Header;