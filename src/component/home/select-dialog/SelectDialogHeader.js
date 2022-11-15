import React from "react";

import OutlinedSearchBox from "../../common/search-box/OutlinedSearchBox";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";


const SelectDialogHeader = ({search, setSearch, handleClose}) => {
    return (
        <Grid container p={2} zIndex={1000}>
            <Grid container item xs={1} sm={12} alignItems={"center"} direction={"row-reverse"} sx={{justifyContent: {xs: "center", sm: "space-between"}}}>
                <Typography variant={'h6'} sx={{display: {xs: 'none', sm: 'block'}}}>انتخاب ارز</Typography>
                <IconButton onClick={handleClose}><Close /></IconButton>
            </Grid>
            <Grid container item xs={11} sm={12} my={1}>
                <OutlinedSearchBox
                    search={search}
                    setSearch={setSearch}
                />
            </Grid>
        </Grid>
    )
}

export default SelectDialogHeader;