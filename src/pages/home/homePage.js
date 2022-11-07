import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchBitcoinDataAsync} from "../../toolkit/slices/bitcoin.slice";
import {fetchNewsDataAsync} from "../../toolkit/slices/news.slice";
import {Container, Grid} from "@mui/material";
import Header from "../../component/header/Header";
import Trade from "../../component/trade/Trade";
import {useGetCryptosQuery, useGetGlobalStatQuery} from "../../toolkit/features/api/cryptoApi";
import MainContent from "../../component/main-content/MainContent";

const HomePage= () => {

    const bitcoinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const newsIsReceived = useSelector((state) => state.news.isReceived);
    // const bitcoinData = useSelector((state) => state.bitcoin.data);
    // const newsData = useSelector((state) => state.news.data);

    // const loading = useSelector((state) => state.bitcoin.loading);
    // const error = useSelector((state) => state.bitcoin.error);

    // const payload = 'hello';
    // const dispatch = useDispatch();

    const search = () => {
    //     // dispatch(fetchBitcoinDataAsync(payload))
    //     // dispatch(fetchNewsDataAsync(payload))
    //     // console.log(bitcoinData)
    //     // console.log(newsData)
    }

    const {data, isFetching} = useGetCryptosQuery();
    const {statData, isFetchingStat} = useGetGlobalStatQuery();
    console.log(data, statData);



    return (
            <div>
                <Header />
                <Trade />

                <MainContent />

            </div>
    );
}

export default HomePage;
