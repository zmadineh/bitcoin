import React from "react";

import Card from "../card/Card";
import PercentageCell from "../percentage-cell/PercentageCell";
import LineChart from "../line-chart/LineChart";

import {direction} from "../../../data/direction.data";
import {financial} from "../../../helper/financial.helper";
import {numFormatter} from "../../../helper/numFormatter.helper";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import PriceCell from "../price-cell/PriceCell";
import Grid from "@mui/material/Grid";
import Star from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import IconButton from "@mui/material/IconButton";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: '12px',
}));

const StyledTableContainer = styled(TableContainer)(({ theme}) => ({
    borderRadius: '8px',
    borderColor: theme.palette.divider,
}));


const PriceTableXs = ({dir, borderFlag, data, loading, selectDataToShow, unit, handelMark}) => {
    return (
        <StyledTableContainer border={borderFlag ? '1px solid' : 0}>
            <Table aria-label="live price table" stickyHeader dir={direction[dir].dir}>

                {data && loading ?
                    <TableBody>
                        {selectDataToShow().map(coin => (

                            <TableRow hover key={coin.id}>
                                <StyledTableCell align={direction[dir].align}>
                                    <Card title={coin.name} description={coin.symbol} image={coin.image} rank={coin.market_cap_rank} expand={true}>
                                        <PercentageCell type={'percentage'} percentage={coin['price_change_percentage_24h']} variant={'body2'} fontWeight={'300'}/>
                                    </Card>
                                </StyledTableCell>

                                <StyledTableCell sx={{display: (unit === 'tether' ? 'table-cell' : 'none')}}>
                                    <LineChart changes={coin['price_change_percentage_24h']} coinId={coin['id']}/>
                                </StyledTableCell>

                                <StyledTableCell align="center" sx={{display: (unit === 'tether' ? 'table-cell' : 'none')}}>
                                    <Grid item display={"flex"} alignItems={"center"} gap={0.5}>
                                        <Typography variant={"body1"} fontWeight={'600'} color={'text.primary'}>
                                            {financial(coin.current_price, 8, 'en-US')}
                                        </Typography>
                                        <CurrencyBitcoinIcon fontSize={"small"} />
                                    </Grid>

                                    <Grid item display={"flex"} gap={1}>
                                        <Typography variant={"body1"} color={'text.secondary'}> MCap </Typography>
                                        <Typography variant={"body1"} color={'text.secondary'}>{numFormatter(coin.market_cap)}</Typography>
                                    </Grid>
                                </StyledTableCell>

                                <StyledTableCell align="center" sx={{display: (unit === 'toman' ? 'table-cell' : 'none')}}>
                                    <Grid item display={"flex"} gap={1}>
                                        <PriceCell unit={unit} price={coin['low_24h']} type={'price'} dir={'row-reverse'}/>
                                        <Typography variant={"body2"} color={'text.secondary'}> : خرید </Typography>
                                    </Grid>

                                    <Grid item display={"flex"} gap={1}>
                                        <PriceCell unit={unit} price={coin['high_24h']} type={'price'} dir={'row-reverse'}/>
                                        <Typography variant={"body2"} color={'text.secondary'}> : فروش </Typography>
                                    </Grid>
                                </StyledTableCell>

                                <StyledTableCell>
                                    <IconButton onClick={() => handelMark(coin)}>{coin.marked ? <Star color={'warning'}/> : <StarBorderOutlinedIcon/> }</IconButton>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    : null}
            </Table>
        </StyledTableContainer>
    )
}

export default PriceTableXs;