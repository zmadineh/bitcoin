import * as React from 'react';
import Button from '@mui/material/Button';
import {pageList} from "../../data/page-list.data";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom"
import Box from "@mui/material/Box";


const Navbar = () => {

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

export default Navbar;