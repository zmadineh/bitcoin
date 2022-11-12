import React from "react";
import {Outlet} from "react-router-dom";

import Header from "../common/header/Header";
import Grid from "@mui/material/Grid";

const Layout = () => {

    return (
        <Grid>
            <Header />

            <Outlet />
        </Grid>


    )
}

export default Layout;