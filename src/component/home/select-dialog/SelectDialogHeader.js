import React from "react";

import OutlinedSearchBox from "../../common/search-box/OutlinedSearchBox";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";

const SelectDialogHeader = ({search, setSearch, handleClose}) => {
    return (
        <Grid container p={2}>
            <Grid container item xs={12} justifyContent={"space-between"} alignItems={"center"} direction={"row-reverse"}>
                <Typography variant={'h6'}>انتخاب ارز</Typography>
                <IconButton onClick={handleClose}><Close /></IconButton>
            </Grid>
            <Grid container item xs={12} my={3}>
                <OutlinedSearchBox
                    search={search}
                    setSearch={setSearch}
                />
            </Grid>
        </Grid>
    )
}

export default SelectDialogHeader;