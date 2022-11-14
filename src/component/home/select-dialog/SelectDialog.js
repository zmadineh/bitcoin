import React, {useState} from "react";

import {convert_dollar_to_toman} from "../../../helper/converter.helper";
import {setFractionToNumber} from "../../../helper/setFractionToNumber.helper";

import SelectDialogHeader from "./SelectDialogHeader";
import Card from "../../common/card/Card";

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import {styled} from "@mui/material/styles";


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
                        <Grid >
                        <ListItemButton key={coin.id}>
                                <Grid item container px={'20px'} py={'10px'} dir={'rtl'} onClick={() => handleListItemClick(coin)}>

                                    <Grid item xs={6}>
                                        <Card
                                            image={coin.image}
                                            title={coin.name}
                                            description={coin.symbol} />
                                    </Grid>

                                    <Grid item xs={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'flex-start'}>
                                        <Typography variant={'body2'}>قیمت خرید</Typography>
                                        <Grid display={"flex"}>
                                            <Typography variant={"body2"}>
                                                { setFractionToNumber(convert_dollar_to_toman(coin.current_price), 'price') }
                                            </Typography>
                                            <Typography variant={"body2"} color={'text.secondary'}>تومان</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={1} display={"flex"} alignItems={"center"}>
                                        <Checkbox checked={(coin.id === selectedValue.id)} />
                                    </Grid>

                                </Grid>
                        </ListItemButton>
                        <Divider orientation={'vertical'} variant={'inset'} color={'divider'} />
                        </Grid>
                    )) : null}
                </List>
            </StyledDialog>
    )
}

export default SelectDialog;