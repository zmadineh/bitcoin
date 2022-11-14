import React from 'react';
import {Link} from "react-router-dom"

import {pageList} from "../../../data/page-list.data";

import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";


const NavMenu = () => {

    return(
        <Grid display={"flex"} gap={2}>
            {pageList.map( page => (
                <Button variant={'text'} color="inherit" key={page.id}>
                    <Link to={page.link}>{page.title}</Link>
                </Button>
            ))}
        </Grid>

    )
}

export default NavMenu;