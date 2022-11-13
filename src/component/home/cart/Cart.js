import React from "react";

import PercentageCell from "../../common/percentage-cell/PercentageCell";
import PriceCell from "../../common/price-cell/PriceCell";

import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const Item = styled(Grid)(({ theme, changePercentage}) => ({
    backgroundColor: changePercentage < 0 ? theme.palette.error.lighter : theme.palette.success.lighter,
    color: changePercentage < 0 ? theme.palette.error.light : theme.palette.success.light,
    border: '1px solid',
    borderRadius: '20px',
}));


const Cart = ({image, purchasePrice, sellPrice, changePercentage, name, symbol, unit}) => {

    return (
        <Card variant="outlined" sx={{width: '100%', maxWidth: 350, borderRadius: '25px', cursor: 'pointer'}}>
            <CardHeader sx={{paddingRight: '0', overflow: 'hidden'}}
                        avatar={<Avatar sx={{marginLeft: '10px'}} src={image} />}
                        action={
                            <Item changePercentage={changePercentage}>
                                <PercentageCell percentage={changePercentage} type={'percentage'} />
                            </Item>
                        }
                        title={name}
                        subheader={symbol}
            />
            <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <Grid item display={"flex"} justifyContent={"space-between"}>
                    <Typography>قیمت خرید</Typography>
                    <PriceCell unit={unit} price={purchasePrice} type={'price'} />
                </Grid>

                <Grid item>
                    <Divider />
                </Grid>

                <Grid item display={"flex"} justifyContent={"space-between"}>
                    <Typography>قیمت فروش</Typography>
                    <PriceCell unit={unit} price={sellPrice} type={'price'} />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Cart;