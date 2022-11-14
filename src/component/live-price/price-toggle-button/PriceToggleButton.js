import React from "react";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {styled} from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    padding: '0 4px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.default,

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
        backgroundColor: theme.palette.primary.lighter,
    }
}));

const PriceToggleButton = ({unit, setUnit}) => {

    const handleUnit = (e, newUnit) => {
        setUnit(newUnit ? newUnit : unit)
    }

    return (
        <StyledToggleButtonGroup
            dir={'ltr'}
            color="primary"
            value={unit}
            exclusive
            onChange={handleUnit}
            fullWidth
        >
            <StyledToggleButton value="tether" standard={"true"}>
                تتر
            </StyledToggleButton>
            <StyledToggleButton value="toman" standard={"true"}>
                تومان
            </StyledToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default PriceToggleButton;