import React from "react";

import {setColorForPercentageType} from "../../../helper/setColorForPercentageType";
import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PercentageCell = ({percentage, type, variant='body1', fontWeight= '600'}) => {
    return(
        <Button color={setColorForPercentageType(percentage)} sx={{borderRadius: '20px', width: '100%', height: '100%',}}>
            {percentage < 0 ? <ArrowDropDownIcon fontVariant={variant} /> : <ArrowDropUpIcon />}
            <Typography variant={variant} fontWeight={fontWeight} noWrap={true}>{setFractionToNumber(percentage, type)}% </Typography>
        </Button>
    )
}

export default PercentageCell;