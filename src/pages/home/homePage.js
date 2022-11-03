import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchBitcoinDataAsync} from "../../toolkit/slices/bitcoin.slice";
import {fetchNewsDataAsync} from "../../toolkit/slices/news.slice";
import NavMenu from "../../component/nav-menu/NavMenu";
import {Container, Grid} from "@mui/material";
import Header from "../../component/header/Header";

const HomePage= () => {


    const bitcoinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const newsIsReceived = useSelector((state) => state.news.isReceived);
    const bitcoinData = useSelector((state) => state.bitcoin.data);
    const newsData = useSelector((state) => state.news.data);

    // const loading = useSelector((state) => state.bitcoin.loading);
    // const error = useSelector((state) => state.bitcoin.error);

    const payload = 'hello';
    const dispatch = useDispatch();

    const search = () => {
        dispatch(fetchBitcoinDataAsync(payload))
        dispatch(fetchNewsDataAsync(payload))
        console.log(bitcoinData)
        console.log(newsData)
    }

    return (
            <Grid>
                <Header />
                <div>
                    <button onClick={search}>
                        search
                    </button>
                    <div>
                        {bitcoinIsReceived ? <div> bitcoin yes </div> : <div> bitcoin no </div>}
                    </div>
                    <div>
                        {newsIsReceived ? <div> news yes </div> : <div> news no </div>}
                    </div>
                </div>
            </Grid>
    );
}

export default HomePage;
