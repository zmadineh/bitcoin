import React from "react";

import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";
import {convert_dollar_to_toman} from "../../../helper/converter.helper";
import {getUnit} from "../../../helper/getUnit.helper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PriceCell = ({price, unit, type, dir= 'row'}) => {
    return(
        <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={dir} gap={1}>
            <Typography variant={'body1'}>
                {setFractionToNumber((unit === 'toman' ? convert_dollar_to_toman(price) : price), type)}
            </Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{getUnit(unit)}</Typography>
        </Grid>
    )
}

export default PriceCell;