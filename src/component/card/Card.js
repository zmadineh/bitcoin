import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Card = ({title, description, image}) => {

    return(
        <Box display={'flex'} justifyItems={'center'}>
            <img src={image}/>
            <Box m={'0 10px'}>
                <Typography fontSize='20px'>{title}</Typography>
                <Typography fontSize='15px'>{description}</Typography>
            </Box>
        </Box>
    )
}

export default Card;