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

    const selectDataToShow = () => {
        return (sort === "incremental" ? sortedCoinsIncremental : sortedCoinsDescending).slice(0, count)
    }

    return (
        <Grid container flexDirection={"column"} overflow={"scroll"} height={'25vh'} gap={2}>
            {data ? selectDataToShow().map(coin => (
                <Cart
                    key={coin.id}
                    image={coin.image}
                    purchasePrice={coin.low_24h}
                    sellPrice={coin.high_24h}
                    changePercentage={coin.price_change_percentage_24h}
                    name={coin.name}
                    symbol={coin.symbol}
                    unit={unit}
                />
            )) : null}
        </Grid>
    )
}

export default CartList;