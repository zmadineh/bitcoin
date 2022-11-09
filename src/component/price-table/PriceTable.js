import React, {useMemo} from 'react';
import Card from "../card/Card";
import {useDispatch} from "react-redux";
import {addMark, removeMark} from "../../toolkit/slices/bitcoin.slice";
import {convert_dollar_to_toman} from "../../helper/converter";
import {direction} from "../../data/direction";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Star from '@mui/icons-material/Star';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from "@mui/material/Typography";

const PriceTable = ({dir = 'rtl', header, titles, data, unit, loading, count, expand = false, sort = 'incremental'}) => {

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


    const dispatch = useDispatch();
    const handelMark = (coin) => {
        dispatch(coin.marked ? removeMark(coin) : addMark(coin))
    }

    const setColorForPercentageType = data => {
        if (data === 0) return 'inherit'
        else if (data < 0) return 'error'
        else if (data > 0) return 'success'
    }

    const setTableCellData = (title, coin) =>
    {
        if(title.type === 'price')
            return (unit === 'toman' ? convert_dollar_to_toman(coin[title.label]) : coin[title.label])

        if(expand)
            if(title.type === 'mark')
                return <IconButton onClick={() => handelMark(coin)}>{coin.marked ? <Star color={'warning'}/> : <StarBorderOutlinedIcon/> }</IconButton>
            else if(title.type === 'chart')
                return 'chart'

        if(title.type === 'percentage')
            return (
                <IconButton color={setColorForPercentageType(coin[title.label])}>
                    {coin[title.label] < 0 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                    <Typography>{coin[title.label]}</Typography>
                </IconButton>
            )

        return coin[title.label]
    }

    const selectDataToShow = (data) => {
        if(expand)
            return (sort === "incremental" ? sortedCoinsLeastPrice : sortedCoinsMostPrice).slice(0, count)
        else
            return (sort === "incremental" ? sortedCoinsIncremental : sortedCoinsDescending).slice(0, count)
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="live price table" dir={direction[dir].dir}>
                <TableHead>
                    <TableRow>
                        {header.map(item => (
                            <TableCell key={item} align={"center"}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {data && loading ?
                    <TableBody>
                        {selectDataToShow(data).map(coin => (

                            <TableRow key={coin.id}>
                                <TableCell align={direction[dir].align}>
                                    <Card title={coin.name} description={coin.symbol} image={coin.image}/>
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
        </TableContainer>
    );
}

export default PriceTable;