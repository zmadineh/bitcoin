import React from "react";

import { styled } from '@mui/material/styles';

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    maxWidth: '370px',
    padding: '0 4px',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.secondary,

    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: '8px',
        },
        '&:first-of-type': {
            borderRadius: '8px',
        },
    },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.background.default,
    }
}));

const Filter = ({growthSelect, setGrowthSelect}) => {

    const handleChange = (event, newGrowth) => {
        setGrowthSelect(newGrowth);
    }

    return (
        <Grid item>
            <StyledToggleButtonGroup
                size={'small'}
                value={growthSelect}
                exclusive
                onChange={handleChange}
                aria-label="growth select"
            >
                <StyledToggleButton value="descending" standard={"true"}>
                        <Grid container alignItems={"center"} gap={1} px={1}>
                            <TrendingUpIcon color={'success'}/>
                            <Typography variant={"body1"}>بیشترین رشد</Typography>
                        </Grid>
                </StyledToggleButton>

                <StyledToggleButton value="incremental" standard={"true"}>
                        <Grid container alignItems={"center"} gap={1} px={1}>
                            <TrendingDownIcon color={'error'}/>
                            <Typography variant={"body1"}>کمترین رشد</Typography>
                        </Grid>
                </StyledToggleButton>

            </StyledToggleButtonGroup>
        </Grid>
    )
}

export default Filter;