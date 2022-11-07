import React, {useState} from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
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

const Filter = ({className}) => {

    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    }

    return (
        <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="text alignment"
        >
            <ToggleButton value="web">{`بیشترین رشد`}</ToggleButton>
            <ToggleButton value="android">{`کمترین رشد`}</ToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default Filter;