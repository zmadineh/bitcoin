import React from "react";

import {setFractionToNumberHelper} from "../../../helper/setFractionToNumber.helper";
import {convert_dollar_to_toman} from "../../../helper/converter.helper";
import {getUnit} from "../../../helper/getUnit.helper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PriceCell = ({coin, unit, title}) => {
    return(
        <Grid item display={"flex"} justifyContent={"center"} gap={1}>
            <Typography>
                {setFractionToNumberHelper((unit === 'toman' ? convert_dollar_to_toman(coin[title.label]) : coin[title.label]), title.type)}
            </Typography>
            <Typography>{getUnit(unit)}</Typography>
        </Grid>
    )
}

export default PriceCell;