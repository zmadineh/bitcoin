import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchBitcoinDataAsync} from "../../toolkit/slices/bitcoin.slice";
import LivePriceHeader from "../../component/live-price/live-price-header/LivePriceHeader";
import PriceTable from "../../component/common/price-table/PriceTable";
import LoadingAnimation from "../../component/common/loading-animation/LoadingAnimation";
import {coinItemTitle} from "../../data/live-price-table-item-title.data";
import {tableHeader} from "../../data/live-price-table-headers.data";

import {styled, useTheme} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: '70px',
    [theme.breakpoints.down('md')]: {
        padding: '0px',
    },

    [theme.breakpoints.up('md')]: {
        padding: '50px 20px',
        marginTop: '150px',
    }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '10px',
    minHeight: '100vh',
    [theme.breakpoints.up('md')]: {
        borderRadius: '20px',
        padding: '40px',
        minHeight: '100vh',
    }
}));

const LivePrice = () => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.bitcoin.data);
    const loading = useSelector((state) => state.bitcoin.isReceived);

    const [search, setSearch] = useState('');
    const [priceOrder, setPriceOrder] = useState('incremental') // incremental or descending
    const [unit, setUnit] = useState('toman') // toman or tether
    const [markedSelected, setMarkedSelected] = useState(false)
    const countOfDataToShow = 100;

    useEffect(() => {
        dispatch(fetchBitcoinDataAsync())
    }, []);

    const filteredData = () => {
        let coins = data;
        if (data) {
            if (markedSelected)
                coins = coins.filter(coins => coins.marked)
            if (search)
                coins = coins.filter(coin => (coin.name.toLowerCase().includes(search)))
        }
        return { coins: coins, length: coins.length };
    }

    return(
       <Grid container bgcolor={theme.palette.background.secondary}>
           <StyledContainer>
               <StyledPaper dir={'rtl'} >

                   <Grid container spacing={2}>

                       <Grid item container py={3} gap={4} sx={{display: {xs: 'none', md: 'flex'}}}>
                           <Typography variant={'h4'}>قیمت لحظه ای</Typography>
                           <Grid item display={"flex"} alignItems={"center"} gap={1}>
                               <FiberManualRecordIcon color={"warning"} fontSize={"small"}/>
                               <Typography variant={'body1'} color={'text.secondary'}>{data ? filteredData().length : 0}</Typography>
                               <Typography variant={'body1'} color={'text.secondary'}>ارز دیجیتال</Typography>
                           </Grid>
                       </Grid>

                       <Grid item container>
                           <LivePriceHeader
                               search={search}
                               setSearch={setSearch}
                               markedSelected={markedSelected}
                               setMarkedSelected={setMarkedSelected}
                               priceOrder={priceOrder}
                               setPriceOrder={setPriceOrder}
                               unit={unit}
                               setUnit={setUnit}
                           />
                       </Grid>

                       {data && loading ?
                           <Grid item container mt={{xs: '10px', md: '20px'}}>
                                   <PriceTable
                                       dir={'ltr'}
                                       header={tableHeader}
                                       titles={coinItemTitle}
                                       data={filteredData().coins}
                                       unit={unit}
                                       loading={loading}
                                       count={countOfDataToShow}
                                       expand={true}
                                       borderFlag={false}
                                       sort={priceOrder}
                                   />
                           </Grid>
                           :
                       <LoadingAnimation /> }
                   </Grid>
               </StyledPaper>
           </StyledContainer>
       </Grid>
    )
}

export default LivePrice;