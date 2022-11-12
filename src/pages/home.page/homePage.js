import React, {useEffect, useMemo, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchBitcoinDataAsync} from "../../toolkit/slices/bitcoin.slice";
import Header from "../../component/common/header/Header";
import Trade from "../../component/home/trade/Trade";
import MainContent from "../../component/home/main-content/MainContent";
import {fetchNewsDataAsync} from "../../toolkit/slices/news.slice";
// import {useGetCryptosQuery, useGetCoinsQuery} from "../../toolkit/features/api/cryptoApi";
// import {cryptoApi} from "../../toolkit/features/api/cryptoApi";

const HomePage= () => {

    const dispatch = useDispatch();

    // const { data } = cryptoApi.useGetCoinsQuery();

    useEffect(() => {
        dispatch(fetchBitcoinDataAsync())
    }, []);

    return (
            <div>
                <Header color={'background.default'}/>
                <Trade />
                <MainContent />

                {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            </div>
    );
}

export default HomePage;
