import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";


const StyledBox = styled(Box)(({ theme }) => ({
    width: '6px',
    height: '6px',
    borderRadius: '3px',
    margin: '4.5px',

    // animationDuration: '1.3s',
    // animationDelay: '0.5s',
    // animationIterationCount: 'infinite',
    // animationTimingFunction: 'linear',
    // animationName: 'Page-loading_main',

}));

const LoadingAnimation = () => {
    return (
        <Grid container alignItems={"center"} justifyContent={"center"} gap={2} height={'30px'} zIndex={'10000'}>
            <StyledBox bgcolor={'success.main'}></StyledBox>
            <StyledBox bgcolor={'warning.main'}></StyledBox>
            <StyledBox bgcolor={'primary.main'}></StyledBox>
            <StyledBox bgcolor={'error.main'}></StyledBox>
        </Grid>
    )
}

export default LoadingAnimation;