import React, {useState} from "react";

import SelectDialogHeader from "./SelectDialogHeader";
import SelectDialogListItem from "./SelectDialogListItem";

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Divider from "@mui/material/Divider";
import {styled} from "@mui/material/styles";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
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
            <StyledDialog
                onClose={handleClose}
                open={open}
                role={"presentation"}
                TransitionComponent={Transition}
                fullScreen
            >
                <SelectDialogHeader
                    search={search}
                    setSearch={setSearch}
                    handleClose={handleClose}
                />
                <div style={{overflow: "hidden", height: '1px'}}></div>
                <List>
                    {data && loading ? data.filter(data => data.name.toLowerCase().includes(search)).map(coin => (
                        <Grid key={coin.id} px={2}>
                            <SelectDialogListItem
                                coin={coin}
                                selectedValue={selectedValue}
                                handleListItemClick={handleListItemClick}
                            />
                            <Divider sx={{display: {xs: 'none', sm: 'block'}}}/>
                        </Grid>
                    ))
                        : null}
                </List>
            </StyledDialog>
    )
}

export default SelectDialog;