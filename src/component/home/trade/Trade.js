import React from "react";
import {useSelector} from "react-redux";

import TradeForm from "../trade-form/TradeForm";

import trade_logo from "../../../assets/images/logo.jpg";

import Grid from "@mui/material/Grid";
import LoadingAnimation from "../../common/loading-animation/LoadingAnimation";

const Trade = () => {
    const coinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const coinData = useSelector((state) => state.bitcoin.data);

    return (
        <Grid container direction={'column'} justifyContent={"center"} alignItems={"center"} height={'100vh'}>
            <Grid container maxWidth='250px' m='30px'>
                <img src={trade_logo} width={'100%'}/>
            </Grid>

            <TradeForm data={coinData} loading={coinIsReceived}/>
            {/*<LoadingAnimation />*/}
        </Grid>
    )
}

export default Trade;
