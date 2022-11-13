import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PercentageCell from "../../common/percentage-cell/PercentageCell";

const Cart = ({image, purchasePrice, sellPrice, changePercentage, name, symbol}) => {
    return (
        <Grid item>
            <Grid container item justifyContent={"space-between"}>
                <Grid item>
                    <Avatar src={image} />
                    <Typography>{name}</Typography>
                    <Typography>{symbol}</Typography>
                </Grid>

                <Grid item>
                    <Button color={changePercentage < 0 ? 'error' : 'success'} variant={"contained"} sx={{borderRadius: '20px'}}>
                        <PercentageCell percentage={changePercentage} type={'percentage'} />
                    </Button>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid>

                </Grid>

                <Divider />

                <Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Cart;