import React, {useState} from "react";

import SelectDialogHeader from "./SelectDialogHeader";

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Divider from "@mui/material/Divider";
import {styled} from "@mui/material/styles";
import SelectDialogListItem from "./SelectDialogListItem";


const StyledDialog = styled(Dialog)(({ theme }) => ({

    [theme.breakpoints.up('xs')]: {
        "& .MuiPaper-root": {
            width: '520px',
            height: '90%',
            maxHeight: '680px',
            borderRadius: '12px',
        }
    }
}));

const SelectDialog = ({onClose, selectedValue, open, data, loading}) => {

    const [search, setSearch] = useState('');

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        console.log(value.id, selectedValue)
        onClose(value);
    };

    return (
            <StyledDialog onClose={handleClose} open={open} scroll={'paper'} role={"presentation"} className="coin-selector_paper">
                <SelectDialogHeader search={search} setSearch={setSearch} handleClose={handleClose} />

                <List>
                    {data && loading ? data.filter(data => data.name.toLowerCase().includes(search)).map(coin => (
                        <Grid px={2}>
                            <SelectDialogListItem coin={coin} selectedValue={selectedValue} handleListItemClick={handleListItemClick} />
                            <Divider />
                        </Grid>
                    ))
                        : null}
                </List>
            </StyledDialog>
    )
}

export default SelectDialog;