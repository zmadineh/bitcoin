import React, {useMemo} from "react";
import Grid from "@mui/material/Grid";
import Cart from "../cart/Cart";

const CartList = ({data, unit, loading, count, sort}) => {

    const sortedCoinsIncremental  = useMemo(() => {
        return( data ?  [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h) : data);
    }, [data]);

    const sortedCoinsDescending  = useMemo(() => {
        return( data ?  [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h) : data);
    }, [data]);

    return (
        <Grid>
            <Cart />
        </Grid>
    )
}

export default CartList;