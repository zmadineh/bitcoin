import React from "react";

import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";
import {convert_dollar_to_toman} from "../../../helper/converter.helper";
import {getUnit} from "../../../helper/getUnit.helper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PriceCell = ({price, unit, type}) => {
    return(
        <Grid item display={"flex"} justifyContent={"center"} gap={1}>
            <Typography>
                {setFractionToNumber((unit === 'toman' ? convert_dollar_to_toman(price) : price), type)}
            </Typography>
            <Typography>{getUnit(unit)}</Typography>
        </Grid>
    )
}

export default PriceCell;