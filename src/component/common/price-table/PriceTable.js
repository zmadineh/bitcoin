import React, {useMemo} from 'react';
import {useDispatch} from "react-redux";
import {addMark, removeMark} from "../../../toolkit/slices/bitcoin.slice";

import {direction} from "../../../data/direction.data";

import Card from "../card/Card";
import PriceCell from "../price-cell/PriceCell";
import PercentageCell from "../percentage-cell/PercentageCell";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Star from '@mui/icons-material/Star';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.primary,
    },
    borderBottom: 0
}));

const StyledTableContainer = styled(TableContainer)(({ theme, border }) => ({
    borderRadius: '8px',
    border: border ? '1px solid' : 0,
    borderColor: theme.palette.divider
}));



const PriceTable = ({dir = 'rtl', header, titles, data, unit, loading, count, expand = false, sort = 'incremental', border=true}) => {

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
        <StyledTableContainer component={Paper} border={border}>
            <Table aria-label="live price table" stickyHeader dir={direction[dir].dir}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align={direction[dir].align}>
                            <Typography variant={'body1'}>{header[0]}</Typography>
                        </StyledTableCell>

                        {header.slice(1).map(item => (
                            <StyledTableCell key={item} align={"center"}>
                                <Typography variant={'body1'}>{item}</Typography>
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {data && loading ?
                    <TableBody>
                        {selectDataToShow().map(coin => (

                            <TableRow hover key={coin.id}>
                                <TableCell align={direction[dir].align}>
                                    <Card title={coin.name} description={coin.symbol} image={coin.image} rank={coin.market_cap_rank} expand={expand}/>
                                </TableCell>

                                {titles.map( title => (
                                    <TableCell key={title.label} align="center">
                                        {setTableCellData(title, coin)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                : null}
            </Table>
        </StyledTableContainer>
    );
}

export default PriceTable;