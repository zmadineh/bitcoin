import React from "react";

import Card from "../../common/card/Card";

import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";
import {convert_dollar_to_toman} from "../../../helper/converter.helper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const SelectDialogListItem = ({coin, selectedValue, handleListItemClick}) => {
    return (
        <ListItemButton key={coin.id} selected={(coin.id === selectedValue.id)}>
            <Grid container dir={'rtl'} onClick={() => handleListItemClick(coin)} sx={{padding: {xs: '0', sm: '8px 16px'}}}>

                <Grid item xs={7}>
                    <Card
                        image={coin.image}
                        title={coin.name}
                        description={coin.symbol} />
                </Grid>

                <Grid item xs={4} gap={1} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'flex-start'}>
                    <Typography variant={'body2'}>قیمت خرید</Typography>
                    <Grid display={"flex"}>
                        <Typography variant={"body2"}>
                            { setFractionToNumber(convert_dollar_to_toman(coin.current_price), 'price') }
                        </Typography>
                        <Typography variant={"body2"} color={'text.secondary'} mx={0.5}>تومان</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={1} display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                    <CheckCircleIcon color={"primary"} sx={{display: ((coin.id === selectedValue.id) ? "block" : "none")}} />
                </Grid>

            </Grid>
        </ListItemButton>
    )
}

export default SelectDialogListItem;