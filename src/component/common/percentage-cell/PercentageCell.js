import React from "react";

import {setColorForPercentageType} from "../../../helper/setColorForPercentageType";
import {setFractionToNumberHelper} from "../../../helper/setFractionToNumber.helper";

import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Typography from "@mui/material/Typography";

const PercentageCell = ({coin, title}) => {
    return(
        <IconButton color={setColorForPercentageType(coin[title.label])}>
            {coin[title.label] < 0 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            <Typography>{setFractionToNumberHelper(coin[title.label], title.type)} % </Typography>
        </IconButton>
    )
}

export default PercentageCell;