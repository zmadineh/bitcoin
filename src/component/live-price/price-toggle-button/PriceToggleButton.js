import React from "react";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {styled} from "@mui/material/styles";

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
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

const PriceToggleButton = ({unit, handleUnit}) => {
    return (
        <ToggleButtonGroup
            dir={'ltr'}
            color="primary"
            value={unit}
            exclusive
            onChange={handleUnit}
            sx={{height: '100%'}}
            fullWidth
        >
            <ToggleButton value="tether" standard={"true"}>
                تتر
            </ToggleButton>
            <ToggleButton value="toman" standard={"true"}>
                تومان
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default PriceToggleButton;