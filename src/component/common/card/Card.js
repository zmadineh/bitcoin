import React from "react";

import Typography from "@mui/material/Typography";
import {Avatar, Grid} from "@mui/material";
import Box from "@mui/material/Box";

const Card = ({title, description, image, rank= 0, expand= false, children}) => {

    return(
        <Grid container item justifyContent={"flex-start"} wrap={"nowrap"}>
            <Grid container item xs={2} md={3} alignItems={"center"} justifyContent={"center"}>
                <Avatar src={image} width={'25px'}/>
            </Grid>

            <Grid container item xs={10} md={9} px={1} flexDirection={"column"} alignItems={'flex-start'} wrap={"nowrap"}>

                <Typography variant={"body1"} textOverflow={"ellipsis"}>{title}</Typography>

                <Grid item display={"flex"} alignItems={"center"}>
                    {expand ? <Typography fontSize='15px' pr={1}>{rank}</Typography> : null }
                    <Typography variant={"body1"} color={'text.secondary'} textOverflow={"ellipsis"}>{description}</Typography>
                    <Box>{children}</Box>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Card;