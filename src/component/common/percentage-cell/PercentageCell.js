import React from "react";

import {setColorForPercentageType} from "../../../helper/setColorForPercentageType";
import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";

import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PercentageCell = ({percentage, type}) => {
    return(
        <Button color={setColorForPercentageType(percentage)} sx={{borderRadius: '20px'}}>
            {percentage < 0 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            <Typography>{setFractionToNumber(percentage, type)} % </Typography>
        </Button>
    )
}

export default PercentageCell;