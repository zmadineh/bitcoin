import React, {useMemo, useState} from "react";
import Grid from "@mui/material/Grid";
import Header from "../../component/header/Header";
import {Container, Select} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Equalizer} from "@mui/icons-material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Star from '@mui/icons-material/Star';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Filter from "../../component/filter/Filter";
import PriceTable from "../../component/price-table/PriceTable";
import {useSelector} from "react-redux";
import {useTheme} from "@mui/material/styles";
import OutlinedSearchBox from "../../component/search-box/OutlinedSearchBox";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import OrderSelect from "../../component/order-select/OrderSelect";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ToggleButton from "@mui/material/ToggleButton";

const LivePrice = () => {

    const theme = useTheme();
    const data = useSelector((state) => state.bitcoin.isReceived);
    const loading = useSelector((state) => state.bitcoin.data);

    // const sortedCoinsByRank = useMemo(() => {
    //     return( data ?  [...data].sort((a, b) => a['rank'].localeCompare(b['rank'])) : data);
    // }, [data]);

    const countOfDataToShow = 20;

    const tableHeader = ['نشان کردن','تغییرات','نمودار','قیمت فروش','قیمت خرید','ارز دیجیتال'];
    const coinItemTitle = ['low_24h', 'high_24h', 'chart', 'price_change_percentage_24h', 'mark'];

    const [search, setSearch] = useState('');
    const [priceOrder, setPriceOrder] = useState('most') // most or least
    const [unit, setUnit] = useState('toman') // or tether
    const [markedSelected, setMarkedSelected] = useState(false)

    const handleSearch = (e) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    const handleOrder = (e) => {
        setPriceOrder(e.target.value)
    }

    const handleUnit = (e, newUnit) => {
        setUnit(newUnit)
    }

    const FILTER_MAP = {
        all: () => true,
        mark: (coin) => coin.marked,
    };

    const filteredData = () => {
        let coins = data;
        if (data) {
            if (markedSelected)
                coins = coins.filter(coins => coins.marked)
            if (search)
                coins = coins.filter(coin => (coin.name.toLowerCase().includes(search)))
        }
        return { coins, length: coins.length };
    }

    return(
       <Grid container bgcolor={theme.palette.background.secondary}>
           <Header color={'background.secondary'} />

           <Container sx={{padding: '50px 20px', marginTop: '150px'}}>
               <Paper dir={'rtl'} className='live-price-main-container' sx={{borderRadius: '20px'}} >

                   <Grid container py={3} gap={2}>
                           <Typography variant='h5'>قیمت لحظه ای</Typography>
                           <Typography variant='h5'>{data ? data.length : 0} ارز دیجیتال</Typography>
                   </Grid>

                   <Grid container spacing={3} sx={{flexDirection: {xs: "column", md: "row"}}}>
                       <Grid item xs={12} md={4}>
                           <OutlinedSearchBox search={search} handleSearch={handleSearch} borderRadius={'5px'}/>
                       </Grid>
                       <Grid container item xs={12} md={4} spacing={2} sx={{flexDirection: {xs: "column", md: "row"}}}>
                           <Grid item xs={12} md={6}>
                               <Button variant="outlined" color={"secondary"} onClick={() => setMarkedSelected(!markedSelected)} sx={{height: '100%', width: '100%'}}>
                                   <Grid display={"flex"} alignItems={"center"} gap={1}>
                                       {markedSelected ? <Star color={'warning'}/> : <StarBorderOutlinedIcon /> }
                                       <Typography variant={"h5"} noWrap> نشان شده ها</Typography>
                                   </Grid>
                               </Button>
                           </Grid>

                           <Grid item xs={12} md={6}>
                                <OrderSelect Order={priceOrder} handleOrder={handleOrder} />
                           </Grid>
                       </Grid>
                       <Grid item xs={12} md={4}>
                           <ToggleButtonGroup
                               dir={'ltr'}
                               color="primary"
                               value={unit}
                               exclusive
                               onChange={handleUnit}
                               sx={{height: '100%'}}
                               fullWidth
                           >
                               <ToggleButton value="tether" standard={"true"}>
                                   تتر
                               </ToggleButton>
                               <ToggleButton value="toman" standard={"true"}>
                                   تومان
                               </ToggleButton>
                           </ToggleButtonGroup>
                       </Grid>
                   </Grid>

                   <PriceTable direction={'rtl'} header={tableHeader} titles={coinItemTitle} data={filteredData().coins} loading={loading} count={countOfDataToShow} expand={true}/>
               </Paper>
           </Container>
       </Grid>
    )
}

export default LivePrice;