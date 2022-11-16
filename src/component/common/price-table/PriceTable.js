import React, {Fragment, useMemo} from 'react';
import {useDispatch} from "react-redux";
import {addMark, removeMark} from "../../../toolkit/slices/bitcoin.slice";

import PriceTableSm from "./PriceTableSm";
import PriceTableXs from "./PriceTableXs";
import PriceCell from "../price-cell/PriceCell";
import PercentageCell from "../percentage-cell/PercentageCell";

import IconButton from "@mui/material/IconButton";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Star from '@mui/icons-material/Star';
import Grid from "@mui/material/Grid";


const PriceTable = ({dir = 'rtl', header, titles, data, unit, loading, count, expand = false, sort = 'incremental', borderFlag=true}) => {

    const dispatch = useDispatch();
    const sortedCoinsIncremental  = useMemo(() => {
        return( data ?  [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h) : data);
    }, [data]);

    const sortedCoinsDescending  = useMemo(() => {
        return( data ?  [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h) : data);
    }, [data]);

    const sortedCoinsLeastPrice  = useMemo(() => {
        return( data ?  [...data].sort((a, b) => a.current_price - b.current_price) : data);
    }, [data]);

    const sortedCoinsMostPrice  = useMemo(() => {
        return( data ?  [...data].sort((a, b) => b.current_price - a.current_price) : data);
    }, [data]);


    const handelMark = (coin) => {
        dispatch(coin.marked ? removeMark(coin) : addMark(coin))
    }

    const setTableCellData = (title, coin) => {
        if(title.type === 'price')
            return <PriceCell unit={unit} price={coin[title.label]} type={title.type} />

        if(expand)
            if(title.type === 'mark')
                return <IconButton onClick={() => handelMark(coin)}>{coin.marked ? <Star color={'warning'}/> : <StarBorderOutlinedIcon/> }</IconButton>
            else if(title.type === 'chart')
                return 'chart'

        if(title.type === 'percentage')
            return <PercentageCell percentage={coin[title.label]} type={title.type} />

        return coin[title.label]
    }

    const selectDataToShow = () => {
        if(expand)
            return (sort === "incremental" ? sortedCoinsLeastPrice : sortedCoinsMostPrice).slice(0, count)
        else
            return (sort === "incremental" ? sortedCoinsIncremental : sortedCoinsDescending).slice(0, count)
    }

    return (
        <Grid container>
            <Grid container sx={{display: { xs: 'flex', md: 'none' }}}>
                <PriceTableXs
                    data={data}
                    loading={loading}
                    dir={dir}
                    borderFlag={borderFlag}
                    header={header}
                    titles={titles}
                    setTableCellData={setTableCellData}
                    selectDataToShow={selectDataToShow}
                    unit={unit}
                    handelMark={handelMark}
                />
            </Grid>

            <Grid container sx={{display: { xs: 'none', md: 'flex' }}}>
                <PriceTableSm
                    data={data}
                    loading={loading}
                    dir={dir}
                    borderFlag={borderFlag}
                    header={header}
                    titles={titles}
                    setTableCellData={setTableCellData}
                    selectDataToShow={selectDataToShow}
                    expand={expand} />
            </Grid>
        </Grid>
    );
}

export default PriceTable;