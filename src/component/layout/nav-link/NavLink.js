import React from "react";
import {Link, useLocation} from 'react-router-dom';

import {pageList} from "../../../data/page-list.data";
import headerLogo from "../../../assets/images/header-logo.svg";

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavLink = () => {
    const location = useLocation();
    const currentPage = pageList.find(page => page.link === location.pathname);
    const pageTitle = currentPage.title;
    // const pageLink = currentPage.link;

    return (
        <Grid container>
            {pageTitle === 'خانه' ?
                <Grid gap={1}>
                    <img src={headerLogo} width={'100px'}/>
                </Grid>
                :
                <Link to={'/'}>
                    <Grid container alignItems={"center"} gap={2}>
                        <ArrowForwardIosIcon fontSize={"small"}/>
                        <Typography variant={'h6'}>{pageTitle}</Typography>
                    </Grid>
                </Link>
            }
        </Grid>
    )
}

export default NavLink;