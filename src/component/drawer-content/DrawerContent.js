import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import drawerLogo from "../../assets/images/menu-logo.svg";
import downloadApp from "../../assets/images/download-app-.jpg";
import {menuListsData} from "../../data/menu-list.data";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CreateList from "../create-list/CreateList";

const DrawerContent = ({drawer_func}) => {

    return(
        <Grid container
              sx={{ width: 350, p: '10px'}}
              direction={"column"}
              gap={4}
              role="presentation"
              onClick={drawer_func( false)}
              onKeyDown={drawer_func( false)}
        >
            <Grid container item>
                <IconButton
                    size="medium"
                    edge="end"
                    color="secondary"
                    aria-label="close"
                    onClick={drawer_func( false)}
                >
                    <CloseIcon />
                </IconButton>
            </Grid>

            <Grid container item justifyContent={'center'} gap={5}>
                <img src={drawerLogo}/>
                <img src={downloadApp} width={'100%'}/>
            </Grid>

            {menuListsData.map(list => (
                <Box key={list.section}>
                    {list.section % 2 === 0 ? <Divider /> : null}
                    <CreateList list={list.data} />
                    {list.section % 2 === 0 ? <Divider /> : null}
                </Box>
            ))}
        </Grid>
    )
}

export default DrawerContent;