import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PercentageCell from "../../common/percentage-cell/PercentageCell";
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import PriceCell from "../../common/price-cell/PriceCell";
import {useTheme} from "@mui/material/styles";

const Cart = ({image, purchasePrice, sellPrice, changePercentage, name, symbol, unit}) => {

    const theme = useTheme();

    return (
        <Card variant="outlined" sx={{width: '100%', maxWidth: 350, borderRadius: '25px', cursor: 'pointer'}}>
            <CardContent>
                <Grid item container spacing={6}>

                    <Grid container item justifyContent={"space-between"}>
                        <Grid item display={"flex"} gap={2} alignItems={"center"}>
                            <Avatar src={image} />
                            <Typography>{name}</Typography>
                            <Typography>{symbol}</Typography>
                        </Grid>

                        <Grid item>
                            <Grid bgcolor={changePercentage < 0 ? theme.palette.error.lighter : theme.palette.success.lighter}
                                   borderRadius={'20px'}>
                                <PercentageCell percentage={changePercentage} type={'percentage'} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item flexDirection={"column"} spacing={1}>
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
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default Cart;