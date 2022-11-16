import React from "react";

import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {styled} from "@mui/material/styles";

const StyledSelect = styled(Select)(({ theme }) => ({
    color: theme.palette.text.secondary,
    height: '100%',
    '& .MuiOutlinedInput-notchedOutline' : {
        borderColor: theme.palette.grey['100'],
    }
}));

const OrderSelect = ({Order, setPriceOrder}) => {

    const handleOrder = (e) => {
        setPriceOrder(e.target.value)
    }

    return (
        <FormControl fullWidth sx={{height: '100%'}}>
            <InputLabel id="price-order-label"> ترتیب بر اساس  </InputLabel>
            <StyledSelect
                labelId="price-order-label"
                id="price-order-select"
                value={Order}
                label="priceOrder"
                onChange={handleOrder}
                sx={{borderRadius: '8px'}}
            >
                <MenuItem value={'descending'}>بیشترین قیمت</MenuItem>
                <MenuItem value={'incremental'}>کمترین قیمت</MenuItem>
            </StyledSelect>
        </FormControl>
    )
}

export default OrderSelect;