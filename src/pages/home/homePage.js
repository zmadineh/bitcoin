import React, {useMemo, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchBitcoinDataAsync} from "../../toolkit/slices/bitcoin.slice";
import {fetchNewsDataAsync} from "../../toolkit/slices/news.slice";
import {Container, Grid} from "@mui/material";
import Header from "../../component/header/Header";
import Trade from "../../component/trade/Trade";
// import {useGetCryptosQuery, useGetGlobalStatQuery} from "../../toolkit/features/api/cryptoApi";
import MainContent from "../../component/main-content/MainContent";
import Button from "@mui/material/Button";

const HomePage= () => {

    const coinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const coinData = useSelector((state) => state.bitcoin.data);

    const payload = 'hello';
    const dispatch = useDispatch();

    const search = () => {
        dispatch(fetchBitcoinDataAsync(payload))
        console.log(coinData)
    }

    const sortedCoins = useMemo(() => {
        return( coinData ?  [...coinData].sort((a, b) => a['price_change_percentage_24h'].localeCompare(b['price_change_percentage_24h'])) : coinData);
    }, [coinData]);


    return (
            <div>
                <Header />
                <Trade />

                <MainContent />

                <div>
                    <Button onClick={search}>
                        search
                    </Button>

                </div>

            </div>
    );
}

export default HomePage;
