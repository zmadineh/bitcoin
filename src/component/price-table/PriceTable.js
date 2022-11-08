import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from "../card/Card";
import IconButton from "@mui/material/IconButton";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Star from '@mui/icons-material/Star';
import {useDispatch} from "react-redux";
import {addMark} from "../../toolkit/slices/bitcoin.slice";


const PriceTable = ({direction = 'rtl', header, titles, data, loading, count, expand = false}) => {

    const dispatch = useDispatch();
    const handelMark = (coin) => {
        dispatch(addMark(coin))
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="live price table" dir={direction}>
                <TableHead>
                    <TableRow>
                        {header.map(item => (
                            <TableCell key={item} align={"center"}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {data && loading ?
                    <TableBody>
                        {data.slice(0, count).map(coin => (
                            <TableRow key={coin.id}>
                                <TableCell align={"right"}>
                                    <Card title={coin.name} description={coin.symbol} image={coin.image}/>
                                </TableCell>
                                {titles.map( title => (

                                    <TableCell align="center">
                                        {expand ?
                                            (title === 'mark' ? (
                                                <IconButton onClick={() => handelMark(coin)}>{coin.mark ? <Star color={'warning'}/> : <StarBorderOutlinedIcon/> }</IconButton>)
                                                    : (title === 'chart' ? "chart" : null)
                                            ) :
                                            coin[title]
                                        }
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