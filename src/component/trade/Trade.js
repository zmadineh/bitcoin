import React, {useState} from "react";
import trade_logo from "../../assets/images/logo.jpg";
import Grid from "@mui/material/Grid";
import TradeForm from "../trade-form/TradeForm";

const Trade = () => {
    return (
        <Grid container direction={'column'} justifyContent={"center"} alignItems={"center"} height={'100vh'}>
            <Grid container maxWidth='300px' m='30px'>
                <img src={trade_logo} width={'100%'}/>
            </Grid>

            <TradeForm />
        </Grid>
    )
}

export default Trade;
