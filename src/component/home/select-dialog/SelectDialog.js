import React, {useState} from "react";

import {convert_dollar_to_toman} from "../../../helper/converter";

import OutlinedSearchBox from "../../common/search-box/OutlinedSearchBox";
import Card from "../../common/card/Card";

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Close from "@mui/icons-material/Close";

const SelectDialog = ({onClose, selectedValue, open, data, loading}) => {

    const [search, setSearch] = useState('');

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    const handleListItemClick = (value) => {
        console.log(value.id, selectedValue)
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
                                <OutlinedSearchBox
                                    search={search}
                                    handleSearch={handleSearch} />
                            </Grid>
                        </Grid>
                    </Toolbar>

                    <Divider />

                    <List>
                        {data && loading ? data.filter(data => data.name.toLowerCase().includes(search)).map(coin => (
                            <ListItem key={coin.id}>
                                <Button fullWidth color={'inherit'}>
                                <Grid container px={'20px'} py={'10px'} dir={'rtl'} onClick={() => handleListItemClick(coin)}>
                                    <Grid item xs={7}>
                                        <Card
                                            image={coin.image}
                                            title={coin.name}
                                            description={coin.symbol} />
                                    </Grid>

                                    <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                        <Typography variant={'h3'}>قیمت خرید</Typography>
                                        <Typography variant={"body1"}>{ convert_dollar_to_toman(coin.current_price) } تومان</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Checkbox checked={(coin.id === selectedValue.id)} />
                                    </Grid>
                                </Grid>
                                </Button>
                            </ListItem>
                        )) : null}
                    </List>
                </Paper>
            </Dialog>
    )
}

export default SelectDialog;