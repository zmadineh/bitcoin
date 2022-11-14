import React from "react";

import OutlinedSearchBox from "../../common/search-box/OutlinedSearchBox";
import OrderSelect from "../order-select/OrderSelect";
import FilterWithMarkButton from "../filter-with-mark-button/FilterWithMarkButton";
import PriceToggleButton from "../price-toggle-button/PriceToggleButton";

import Grid from "@mui/material/Grid";

const LivePriceHeader = ({search, setSearch, markedSelected, setMarkedSelected, priceOrder, setPriceOrder, unit, setUnit}) => {

    return(
        <Grid container spacing={3} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} md={4}>
                <OutlinedSearchBox
                    search={search}
                    setSearch={setSearch}
                    borderRadius={'5px'}
                />
            </Grid>

            <Grid container item xs={12} sm={6} md={4} spacing={2} display={"flex"} flexDirection={{xs: 'row', sm: 'column'}}>
                <Grid item xs={12} sm={6} md={6} sx={{width: '100%'}}>
                    <FilterWithMarkButton
                        markedSelected={markedSelected}
                        setMarkedSelected={setMarkedSelected}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <OrderSelect
                        Order={priceOrder}
                        setPriceOrder={setPriceOrder}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <PriceToggleButton unit={unit} setUnit={setUnit} />
            </Grid>
        </Grid>
    )
}

export default LivePriceHeader;