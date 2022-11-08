import React, {useEffect, useMemo} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Equalizer} from "@mui/icons-material";
import {Link} from "react-router-dom";
import PriceTable from "../price-table/PriceTable";
import Paper from "@mui/material/Paper";
import './main-content.css';
import {Container} from "@mui/material";
import Filter from "../filter/Filter";
import {useSelector} from "react-redux";


const MainContent = () => {

    const data = useSelector((state) => state.bitcoin.isReceived);
    const loading = useSelector((state) => state.bitcoin.data);

    const countOfDataToShow = 10;

    const tableHeader = ['ارز دیجیتال','قیمت خرید','قیمت فروش','تغییرات'];
    const coinItemTitle = ['low_24h', 'high_24h', 'price_change_percentage_24h', 'current_price'];

    return (
        <Grid style={{backgroundColor: '#F8FAFE'}}>
            <Container sx={{padding: '50px 20px'}}>
                <Paper dir={'rtl'} className='live-price-main-container' sx={{borderRadius: '20px'}}>
                    <Grid className='live-price-main-header'>

                        <Grid container item alignItems={"center"} gap={2}>
                            <Equalizer color="success" />
                            <Grid>
                                <Typography variant='h5'>{`قیمت لحظه ای`}</Typography>
                                <Typography variant='h6'>{`در 24 ساعت گذشته`}</Typography>
                            </Grid>
                        </Grid>
                        <Link to={'/live'}> {`مشاهده همه`} </Link>
                    </Grid>

                    <Grid container item xs={12}>
                        <Filter className='live-price-filter'/>
                    </Grid>

                    <PriceTable header={tableHeader} titles={coinItemTitle} data={data} loading={loading} count={countOfDataToShow}/>
                </Paper>
            </Container>
        </Grid>
    )
}

export default MainContent;