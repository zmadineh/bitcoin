import React from "react";

import OutlinedSearchBox from "../../common/search-box/OutlinedSearchBox";
import OrderSelect from "../order-select/OrderSelect";
import FilterWithMarkButton from "../filter-with-mark-button/FilterWithMarkButton";
import PriceToggleButton from "../price-toggle-button/PriceToggleButton";

import Grid from "@mui/material/Grid";

const LivePriceHeader = ({search, setSearch, markedSelected, setMarkedSelected, priceOrder, setPriceOrder, unit, setUnit}) => {

    return(
        <Grid container spacing={{xs: 1, sm: 2}} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} md={4}>
                <OutlinedSearchBox
                    search={search}
                    setSearch={setSearch}
                    borderRadius={'8px'}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4} gap={1} display={"flex"} flexDirection={{xs: 'column', sm: 'row'}}>
                <Grid item xs={12} sm={6}>
                    <FilterWithMarkButton
                        markedSelected={markedSelected}
                        setMarkedSelected={setMarkedSelected}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
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