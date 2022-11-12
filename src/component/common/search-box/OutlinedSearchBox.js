import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Search from "@mui/icons-material/Search";

const OutlinedSearchBox = ({search, handleSearch, borderRadius = '15px'}) => {

    return (
        <FormControl variant="standard" fullWidth dir={'rtl'}>
            <OutlinedInput id="search" value={search} onChange={handleSearch} sx={{borderRadius: borderRadius}} placeholder={'جستجو'}
                           startAdornment={<InputAdornment position="start"> <Search /> </InputAdornment>} />
        </FormControl>
    )
}

export default OutlinedSearchBox;