import React from "react";

import AppMenu from "../../common/app-menu/AppMenu";
import NavLink from "../nav-link/NavLink";

import headerLogo from "../../../assets/images/header-logo.svg";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import {styled} from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    color: 'text.primary',
    top: '0',
    zIndex: '1000',
    // backgroundColor: theme.palette.background.secondary,

    [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.background.default,
        border: '1px solid',
        borderColor: theme.palette.divider,
        color: theme.palette.text.primary,
    }
}));

const Header = ({color}) => {
    return (
            <StyledAppBar position="fixed" dir={'rtl'} sx={{backgroundColor: color}}>
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
                            <NavLink />
                        </Grid>

                    </Toolbar>
                </Container>
            </StyledAppBar>
    )
}

export default Header;