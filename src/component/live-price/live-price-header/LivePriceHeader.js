import React from "react";

import OutlinedSearchBox from "../../common/search-box/OutlinedSearchBox";
import OrderSelect from "../order-select/OrderSelect";
import FilterWithMarkButton from "../filter-with-mark-button/FilterWithMarkButton";

import Grid from "@mui/material/Grid";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const LivePriceHeader = ({search, handleSearch, markedSelected, setMarkedSelected, priceOrder, handleOrder, unit, handleUnit}) => {
    return(
        <Grid container spacing={3} sx={{flexDirection: {xs: "column", md: "row"}}}>
            <Grid item xs={12} md={4}>
                <OutlinedSearchBox
                    search={search}
                    handleSearch={handleSearch}
                    borderRadius={'5px'}
                />
            </Grid>
            <Grid container item xs={12} md={4} spacing={2} sx={{flexDirection: {xs: "column", md: "row"}}}>
                <Grid item xs={12} md={6}>
                    <FilterWithMarkButton
                        markedSelected={markedSelected}
                        setMarkedSelected={setMarkedSelected}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <OrderSelect
                        Order={priceOrder}
                        handleOrder={handleOrder}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                <ToggleButtonGroup
                    dir={'ltr'}
                    color="primary"
                    value={unit}
                    exclusive
                    onChange={handleUnit}
                    sx={{height: '100%'}}
                    fullWidth
                >
                    <ToggleButton value="tether" standard={"true"}>
                        تتر
                    </ToggleButton>
                    <ToggleButton value="toman" standard={"true"}>
                        تومان
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    )
}

export default LivePriceHeader;