import React, {useMemo, useState} from "react";
import Grid from "@mui/material/Grid";
import Header from "../../component/header/Header";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Equalizer} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Filter from "../../component/filter/Filter";
import PriceTable from "../../component/price-table/PriceTable";
import {useSelector} from "react-redux";

const LivePrice = () => {
    const data = useSelector((state) => state.bitcoin.isReceived);
    const loading = useSelector((state) => state.bitcoin.data);

    const sortedCoinsByRank = useMemo(() => {
        return( data ?  [...data].sort((a, b) => a['rank'].localeCompare(b['rank'])) : data);
    }, [data]);

    const countOfDataToShow = 20;

    const tableHeader = ['نشان کردن','تغییرات','نمودار','قیمت فروش','قیمت خرید','ارز دیجیتال'];
    const coinItemTitle = ['low_24h', 'high_24h', 'price_change_percentage_24h', 'current_price'];

    const [search, setSearch] = useState('');

    const handelMark = (id) => {

    }

    return(
       <Grid>
           <Header />

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
       </Grid>
    )
}

export default LivePrice;