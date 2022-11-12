import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Star from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const FilterWithMarkButton = ({ markedSelected, setMarkedSelected }) => {
    return(
        <Button variant="outlined" color={"secondary"} onClick={() => setMarkedSelected(!markedSelected)} sx={{height: '100%', width: '100%'}}>
            <Grid display={"flex"} alignItems={"center"} gap={1}>
                {markedSelected ? <Star color={'warning'}/> : <StarBorderOutlinedIcon /> }
                <Typography variant={"h5"} noWrap> نشان شده ها</Typography>
            </Grid>
        </Button>
    )
}

export default FilterWithMarkButton;