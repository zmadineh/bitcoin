import React from "react";

import Typography from "@mui/material/Typography";
import {Avatar, Grid} from "@mui/material";

const Card = ({title, description, image}) => {

    return(
        <Grid container item flexDirection={{xs: 'column', md: "row"}} spacing={2} justifyContent={"center"}>
            <Grid container item xs={2}>
                <Avatar src={image} width={'25px'}/>
            </Grid>
            <Grid container item xs={8} mx={'10px'} flexDirection={"column"} alignItems={'flex-start'} >
                <Typography fontSize='18px'>{title}</Typography>
                <Typography fontSize='15px'>{description}</Typography>
            </Grid>
        </Grid>
    )
}

export default Card;