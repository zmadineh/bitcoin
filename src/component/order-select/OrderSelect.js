import React from "react";
import InputLabel from "@mui/material/InputLabel";
import {Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const OrderSelect = ({Order, handleOrder}) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="price-order-label"> ترتیب بر اساس  </InputLabel>
            <Select
                labelId="price-order-label"
                id="price-order-select"
                value={Order}
                label="priceOrder"
                onChange={handleOrder}
            >
                <MenuItem value={'most'}>بیشترین قیمت</MenuItem>
                <MenuItem value={'least'}>کمترین قیمت</MenuItem>
            </Select>
        </FormControl>
    )
}

export default OrderSelect;