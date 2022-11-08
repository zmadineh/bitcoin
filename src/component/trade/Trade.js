import React, {useState} from "react";
import trade_logo from "../../assets/images/logo.jpg";
import Grid from "@mui/material/Grid";
import TradeForm from "../trade-form/TradeForm";
import {useSelector} from "react-redux";

const Trade = () => {
    const coinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const coinData = useSelector((state) => state.bitcoin.data);

    return (
        <Grid container direction={'column'} justifyContent={"center"} alignItems={"center"} height={'100vh'}>
            <Grid container maxWidth='300px' m='30px'>
                <img src={trade_logo} width={'100%'}/>
            </Grid>

            <TradeForm data={coinData} loading={coinIsReceived}/>
        </Grid>
    )
}

export default Trade;
