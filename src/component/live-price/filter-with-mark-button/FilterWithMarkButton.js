import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Star from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import {styled} from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
    height: '100%',
    width: '100%',
    borderRadius: '8px',
    borderColor: theme.palette.grey["100"],
    color: theme.palette.secondary.main,
}));


const FilterWithMarkButton = ({ markedSelected, setMarkedSelected }) => {
    return(
        <StyledButton variant="outlined" onClick={() => setMarkedSelected(!markedSelected)}>
            <Grid display={"flex"} alignItems={"center"} gap={1}>
                {markedSelected ? <Star color={'warning'}/> : <StarBorderOutlinedIcon /> }
                <Typography variant={'body1'} noWrap color={'text.primary'}> نشان شده ها</Typography>
            </Grid>
        </StyledButton>
    )
}

export default FilterWithMarkButton;