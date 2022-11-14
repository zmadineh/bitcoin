import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import Filter from "../filter/Filter";
import PriceTable from "../../common/price-table/PriceTable";
import CartList from "../cart-list/CartList";
import LoadingAnimation from "../../common/loading-animation/LoadingAnimation";

import {tableHeader} from "../../../data/home-table-headers.data";
import {coinItemTitle} from "../../../data/home-table-item-title.data";

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
        <Grid sx={{bgcolor: 'background.secondary'}}>
            <Container sx={{padding: '50px 20px'}}>
                <Paper dir={'rtl'}  sx={{borderRadius: '20px', padding: '40px'}}>
                    <Grid container spacing={4}>

                        <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                            <Grid container item xs={10} display={"flex"} alignItems={"center"} gap={2}>
                                <Grid item>
                                    <Equalizer color="success" />
                                </Grid>
                                <Grid item display={"flex"} flexDirection={"column"} gap={0}>
                                    <Typography variant='h6'>{`قیمت لحظه ای`}</Typography>
                                    <Typography variant='body2' color={'text.secondary'}>{`در 24 ساعت گذشته`}</Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={2} display={"flex"} justifyContent={"center"}>
                                <Link to={'/live'}>
                                    <Button>
                                        <Typography variant={'body1'}>{`مشاهده همه`}</Typography>
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid item container justifyContent={{xs: 'center', md: 'flex-start'}}>
                            <Filter
                                growthSelect={growthSelect}
                                setGrowthSelect={setGrowthSelect}/>
                        </Grid>


                        {data && loading ?
                            <Grid item container>
                                <Grid item container display={{xs: 'flex', md: 'none'}}>
                                    <CartList
                                        data={data}
                                        unit={'toman'}
                                        loading={loading}
                                        count={countOfDataToShow}
                                        sort={growthSelect}
                                    />
                                </Grid>
                                <Grid item container display={{xs: 'none', md: 'flex'}}>
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
                                </Grid>
                            </Grid>
                        :
                        <LoadingAnimation /> }
                    </Grid>
                </Paper>
            </Container>
        </Grid>
    )
}

export default MainContent;