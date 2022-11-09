import React, {useState} from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    maxWidth: '360px',
    backgroundColor: theme.palette.background.secondary,

    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

const Filter = ({growthSelect, setGrowthSelect}) => {

    const handleChange = (event, newGrowth) => {
        setGrowthSelect(newGrowth);
    }

    return (
        <Grid item xs={12} borderRadius={2}>
            <StyledToggleButtonGroup
                size={'small'}
                value={growthSelect}
                exclusive
                onChange={handleChange}
                aria-label="growth select"

            >
                <ToggleButton value="descending" standard={"true"}>
                        <Grid container gap={1}>
                            <TrendingUpIcon color={'success'}/>
                            <Typography>بیشترین رشد</Typography>
                        </Grid>
                </ToggleButton>

                <ToggleButton value="incremental" standard={"true"}>
                        <Grid container gap={1} px={1}>
                            <TrendingDownIcon color={'error'}/>
                            <Typography>کمترین رشد</Typography>
                        </Grid>
                </ToggleButton>

            </StyledToggleButtonGroup>
        </Grid>
    )
}

export default Filter;