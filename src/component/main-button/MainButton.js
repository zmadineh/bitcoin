import React from "react";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const MainButton = ({children}) => {
    const theme = useTheme();

    return (
        <Button sx={{backgroundColor: theme.palette.primary.main,}}>{children}</Button>
    )
}

export default MainButton;