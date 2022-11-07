import React from "react";
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

const MainContent = () => {

    return (
        <div style={{backgroundColor: '#F8FAFE'}}>
        <Container sx={{padding: '50px 20px'}}>
            <Paper dir={'rtl'} className='live-price-main-container' sx={{borderRadius: '20px'}}>
                <Box className='live-price-main-header'>

                    <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Equalizer color="success" />
                        <Box>
                            <Typography variant='h5'>{`قیمت لحظه ای`}</Typography>
                            <Typography variant='h6'>{`در 24 ساعت گذشته`}</Typography>
                        </Box>
                    </Box>
                    <Link> {`مشاهده همه`} </Link>
                </Box>

                <Filter className='live-price-filter'/>

                <PriceTable />
            </Paper>
        </Container>
        </div>
    )
}

export default MainContent;