import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Navbar from "../navbar/Navbar";
import Button from "@mui/material/Button";
import headerLogo from "../../assets/images/header-logo.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppMenu from "../app-menu/AppMenu";
import {Container} from "@mui/material";
import Divider from "@mui/material/Divider";

const Header = () => {

    return (
            <AppBar position="static" dir={'rtl'} sx={{ backgroundColor: 'inherit', color: 'text.primary' }}>
                <Container maxWidth="lg">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <AppMenu />

                    <Box gap={1} sx={{display: { mobile: 'none', tablet: 'flex' }}}>
                        <Button variant={'contained'} >{`ورود / ثبت نام`}</Button>
                        <Divider orientation="vertical" flexItem />
                        <img src={headerLogo} width={'100px'} />
                    </Box>

                    <Box gap={1} sx={{display: { mobile: 'flex', tablet: 'none' }}}>
                        <img src={headerLogo} width={'100px'}/>
                    </Box>

                </Toolbar>
                </Container>

            </AppBar>

    )
}

export default Header;