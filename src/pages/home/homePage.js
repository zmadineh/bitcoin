import React, {useEffect, useMemo, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchBitcoinDataAsync} from "../../toolkit/slices/bitcoin.slice";
import Header from "../../component/common/header/Header";
import Trade from "../../component/home/trade/Trade";
import MainContent from "../../component/home/main-content/MainContent";
import Button from "@mui/material/Button";
// import {fetchNewsDataAsync} from "../../toolkit/slices/news.slice";
// import {useGetCryptosQuery, useGetGlobalStatQuery} from "../../toolkit/features/api/cryptoApi";

const HomePage= () => {

    const coinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const coinData = useSelector((state) => state.bitcoin.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBitcoinDataAsync())
        console.log('home', coinData)
    }, []);


    // const sortedCoins = useMemo(() => {
    //     return( coinData ?  [...coinData].sort((a, b) => a['price_change_percentage_24h'].localeCompare(b['price_change_percentage_24h'])) : coinData);
    // }, [coinData]);


    return (
            <div>
                <Header color={'background.default'}/>
                <Trade />
                <MainContent />
            </div>
    );
}

export default HomePage;
