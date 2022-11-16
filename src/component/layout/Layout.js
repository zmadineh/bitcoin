import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./header/Header";
import Grid from "@mui/material/Grid";

const Layout = () => {

    return (
        <Grid>
            <Header color={'background.secondary'}/>

            <Outlet />
        </Grid>
    )
}

export default Layout;