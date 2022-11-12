import React, {useEffect, useMemo, useState} from "react";
import Grid from "@mui/material/Grid";
import Header from "../../component/common/header/Header";
import {Container, Select} from "@mui/material";
import Paper from "@mui/material/Paper";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Star from '@mui/icons-material/Star';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PriceTable from "../../component/common/price-table/PriceTable";
import {useSelector} from "react-redux";
import {useTheme} from "@mui/material/styles";
import OutlinedSearchBox from "../../component/common/search-box/OutlinedSearchBox";
import OrderSelect from "../../component/live-price/order-select/OrderSelect";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const LivePrice = () => {

    const theme = useTheme();
    const data = useSelector((state) => state.bitcoin.data);
    const loading = useSelector((state) => state.bitcoin.isReceived);
    const countOfDataToShow = 100;

    const tableHeader = [
        'ارز دیجیتال',
        'قیمت خرید',
        'قیمت فروش',
        'نمودار',
        'تغییرات',
        'نشان کردن',
    ];
    const coinItemTitle = [
        {label: 'low_24h', type: 'price'},
        {label: 'high_24h', type: "price"},
        {label: 'chart', type: "chart"},
        {label: 'price_change_percentage_24h', type: "percentage"},
        {label: 'mark', type: 'mark'}
    ];

    const [search, setSearch] = useState('');
    const [priceOrder, setPriceOrder] = useState('incremental') // incremental or descending
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
        console.log(newUnit)
    }

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
                           <Typography variant='h5'>{data ? filteredData().length : 0} ارز دیجیتال</Typography>
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

                   <PriceTable
                       dir={'ltr'}
                       header={tableHeader}
                       titles={coinItemTitle}
                       data={filteredData().coins}
                       unit={unit}
                       loading={loading}
                       count={countOfDataToShow}
                       expand={true}
                       sort={priceOrder}
                   />
               </Paper>
           </Container>
       </Grid>
    )
}

export default LivePrice;