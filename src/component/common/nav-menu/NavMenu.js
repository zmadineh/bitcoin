import React from 'react';
import {Link} from "react-router-dom"

import {pageList} from "../../../data/page-list.data";

import Button from '@mui/material/Button';
import Box from "@mui/material/Box";


const NavMenu = () => {

    return(
        <Box>
            {pageList.map( page => (
                <Button variant={'text'} color="inherit" key={page.id}>
                    <Link to={page.link}>{page.title}</Link>
                </Button>
            ))}
        </Box>

    )
}

export default NavMenu;