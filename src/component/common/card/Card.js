import React from "react";

import Typography from "@mui/material/Typography";
import {Avatar, Grid} from "@mui/material";

const Card = ({title, description, image, rank= 0, expand= false}) => {

    return(
        <Grid container item flexDirection={{xs: 'column', md: "row"}} spacing={2} justifyContent={"center"}>
            <Grid container item xs={2}>
                <Avatar src={image} width={'25px'}/>
            </Grid>
            <Grid container item xs={8} mx={'10px'} flexDirection={"column"} alignItems={'flex-start'} >
                <Typography variant={"body1"} >{title}</Typography>
                <Grid item display={"flex"} gap={1}>
                    {expand ? <Typography fontSize='15px'>{rank}</Typography> : null }
                    <Typography variant={"body1"} color={'text.secondary'}>{description}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Card;