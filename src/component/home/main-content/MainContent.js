import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import Filter from "../filter/Filter";
import PriceTable from "../../common/price-table/PriceTable";
import {tableHeader} from "../../../data/home-table-headers.data";
import {coinItemTitle} from "../../../data/home-table-item-title.data";
import './main-content.css';

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Equalizer from "@mui/icons-material/Equalizer";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const MainContent = () => {

    const data = useSelector((state) => state.bitcoin.data);
    const loading = useSelector((state) => state.bitcoin.isReceived);
    const [growthSelect, setGrowthSelect] = useState('incremental');

    const countOfDataToShow = 10;

    return (
        <Grid style={{backgroundColor: 'background.secondary'}}>
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
                            <Link to={'/live'}>
                                <Button>
                                    <Typography variant={'h5'}>
                                        {`مشاهده همه`}
                                    </Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Filter
                            growthSelect={growthSelect}
                            setGrowthSelect={setGrowthSelect}/>
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