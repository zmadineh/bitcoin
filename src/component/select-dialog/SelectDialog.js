import React, {useState} from "react";
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {Close, Search} from "@mui/icons-material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Card from "../card/Card";
import Divider from "@mui/material/Divider";
import {Checkbox} from "@mui/material";
import OutlinedSearchBox from "../search-box/OutlinedSearchBox";


const SelectDialog = ({onClose, selectedValue, open, data, loading}) => {

    const [search, setSearch] = useState('');

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value.toString().toLowerCase())
    }

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
            <Dialog onClose={handleClose} open={open} scroll={'paper'}>
                <Paper>
                    <Toolbar>
                        <Grid container width={'500px'} p={2}>
                            <Grid container item xs={12} justifyContent={"space-between"} alignItems={"center"} direction={"row-reverse"}>
                                <Typography variant={'h6'}>انتخاب ارز</Typography>
                                <IconButton onClick={handleClose}><Close /></IconButton>
                            </Grid>
                            <Grid container item xs={12} my={3}>
                                <OutlinedSearchBox search={search} handleSearch={handleSearch} />
                            </Grid>
                        </Grid>
                    </Toolbar>

                    <Divider />

                    <List>
                        {data && loading ? data.filter(data => data.name.toLowerCase().includes(search)).map(coin => (
                            <ListItem key={coin.id}>
                                <Grid component={"button"} container px={'20px'} py={'10px'} onClick={() => handleListItemClick(coin.id)}>
                                    <Card image={coin.image} title={coin.name} description={coin.symbol} />
                                    <Grid container item direction={"column"}>
                                        <Typography variant={'h3'}>قیمت خرید</Typography>
                                        <Typography variant={"body1"}>{coin.current_price} تومان</Typography>
                                    </Grid>
                                </Grid>
                                <Checkbox checked={coin.id === selectedValue} />
                            </ListItem>
                        )) : null}
                    </List>
                </Paper>
            </Dialog>

    )
}

export default SelectDialog;