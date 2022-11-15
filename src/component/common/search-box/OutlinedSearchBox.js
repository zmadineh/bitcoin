import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Search from "@mui/icons-material/Search";
import {styled} from "@mui/material/styles";

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    color: theme.palette.text.secondary,
    '& .MuiOutlinedInput-notchedOutline' : {
        borderColor: theme.palette.grey['100'],
    }
}));

const OutlinedSearchBox = ({search, setSearch, borderRadius = '15px'}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    return (
        <FormControl variant="standard" fullWidth dir={'rtl'} sx={{height: '100%', width: '100%', borderColor: 'divider'}}>
            <StyledOutlinedInput id="search"
                           value={search}
                           onChange={handleSearch}
                           sx={{borderRadius: borderRadius}}
                           placeholder={'جستجو'}
                           startAdornment={<InputAdornment position="start"> <Search /> </InputAdornment>} />
        </FormControl>
    )
}

export default OutlinedSearchBox;