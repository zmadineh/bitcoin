import React from "react";

import Card from "../../common/card/Card";

import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";
import {convert_dollar_to_toman} from "../../../helper/converter.helper";

import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

const SelectDialogListItem = ({coin, selectedValue, handleListItemClick}) => {
    return (
        <ListItemButton key={coin.id}>
            <Grid item container px={'20px'} py={'10px'} dir={'rtl'} onClick={() => handleListItemClick(coin)}>

                <Grid item xs={6}>
                    <Card
                        image={coin.image}
                        title={coin.name}
                        description={coin.symbol} />
                </Grid>

                <Grid item xs={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'flex-start'}>
                    <Typography variant={'body2'}>قیمت خرید</Typography>
                    <Grid display={"flex"}>
                        <Typography variant={"body2"}>
                            { setFractionToNumber(convert_dollar_to_toman(coin.current_price), 'price') }
                        </Typography>
                        <Typography variant={"body2"} color={'text.secondary'}>تومان</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={1} display={"flex"} alignItems={"center"}>
                    <Checkbox checked={(coin.id === selectedValue.id)} />
                </Grid>

            </Grid>
        </ListItemButton>
    )
}

export default SelectDialogListItem;