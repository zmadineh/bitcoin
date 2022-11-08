import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from "../card/Card";


const PriceTable = ({header, titles, data, loading, count}) => {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="live price table">
                <TableHead>
                    <TableRow>
                        {header.map(item => (
                            <TableCell key={item} align={"right"}>{item}</TableCell>
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
                                    <TableCell align="right">{coin[title]}</TableCell>
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