import React, {useState} from "react";
import Filter from "../filter/Filter";
import {useSelector} from "react-redux";
import './main-content.css';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Equalizer} from "@mui/icons-material";
import {Link} from "react-router-dom";
import PriceTable from "../price-table/PriceTable";
import Paper from "@mui/material/Paper";
import {Container} from "@mui/material";

const MainContent = () => {

    const data = useSelector((state) => state.bitcoin.data);
    const loading = useSelector((state) => state.bitcoin.isReceived);
    const [growthSelect, setGrowthSelect] = useState('incremental');

    const countOfDataToShow = 10;
    const tableHeader = ['ارز دیجیتال','قیمت خرید','قیمت فروش','تغییرات'];
    const coinItemTitle = [
        {label: 'low_24h', type: 'price'},
        {label: 'high_24h', type: "price"},
        {label: 'price_change_percentage_24h', type: "percentage"},
    ];

    return (
        <Grid style={{backgroundColor: 'backgrounk.secondary'}}>
            <Container sx={{padding: '50px 20px'}}>
                <Paper dir={'rtl'} className='live-price-main-container' sx={{borderRadius: '20px'}}>
                    <Grid container className='live-price-main-header'>

                        <Grid item xs={10} display={"flex"} alignItems={"center"} gap={2}>
                            <Equalizer color="success" />
                            <Grid>
                                <Typography variant='h5'>{`قیمت لحظه ای`}</Typography>
                                <Typography variant='h6'>{`در 24 ساعت گذشته`}</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={2}>
                            <Link to={'/live'}> {`مشاهده همه`} </Link>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Filter growthSelect={growthSelect} setGrowthSelect={setGrowthSelect}/>
                    </Grid>

                    <PriceTable
                        dir={'rtl'}
                        header={tableHeader}
                        titles={coinItemTitle}
                        data={data}
                        unit={'toman'}
                        loading={loading}
                        count={countOfDataToShow}
                        sort={growthSelect}
                    />
                </Paper>
            </Container>
        </Grid>
    )
}

export default MainContent;