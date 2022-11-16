import React from "react";
import nothingToShowImage from "../../../assets/images/empty.svg";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const NothingToShow = () => {
    return (
        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={'100px'} >
            <img src={nothingToShowImage} width={'250px'}/>
            <Typography variant={"body1"} color={'text.secondary'} mt={'30px'}>چیزی یافت نشد.</Typography>
        </Grid>
    )
}

export default NothingToShow;