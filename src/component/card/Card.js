import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

const Card = ({title, description, image}) => {

    return(
        <Grid container alignItems={"center"} justifyItems={'center'} gap={2}>
            <img src={image} width={'30px'}/>
            <Grid m={'0 10px'}>
                <Typography fontSize='20px'>{title}</Typography>
                <Typography fontSize='15px'>{description}</Typography>
            </Grid>
        </Grid>
    )
}

export default Card;