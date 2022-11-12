import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavMenu from "../nav-menu/NavMenu";
import Button from "@mui/material/Button";
import headerLogo from "../../../assets/images/header-logo.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppMenu from "../app-menu/AppMenu";
import {Container} from "@mui/material";
import Divider from "@mui/material/Divider";
import {useTheme} from "@mui/material/styles";

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