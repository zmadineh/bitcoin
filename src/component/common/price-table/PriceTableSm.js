import React from "react";

import Card from "../card/Card";

import {direction} from "../../../data/direction.data";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.primary,
    },
    borderBottom: 0
}));


const PriceTableSm = ({dir, borderFlag, header, data, loading, selectDataToShow, titles, setTableCellData, expand}) => {

    return (
        <TableContainer component={Paper} sx={{border: (borderFlag ? '1px solid' : 0), borderColor: 'divider', borderRadius: '8px',}}>
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
        </TableContainer>
    )
}

export default PriceTableSm;