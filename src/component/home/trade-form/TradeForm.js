import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {convert_dollar_to_toman, convert_toamn_to_dollar} from "../../../helper/converter";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SelectDialog from "../select-dialog/SelectDialog";


const TradeForm = ({data, loading}) => {

    const coinIsReceived = useSelector((state) => state.bitcoin.isReceived);
    const coinData = useSelector((state) => state.bitcoin.data);

    const initialCoin = coinData ? coinData.filter(coin => coin.id === 'bitcoin')[0] : {name: "", symbol: "", image: "", price: 0};

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState( {
        currency: 'bitcoin',
        unit: 1,
        price: initialCoin.current_price,
    })
    const [selectedCoin, setSelectedCoin] = useState({id: 'bitcoin', unitPrice: convert_dollar_to_toman(initialCoin.current_price)});
    const [submitType, setSubmitType] = useState('sale') // sals or buy

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setForm( {currency: value.id, unit: 1, price: convert_dollar_to_toman(value.current_price)})
        setSelectedCoin({id: value.id, unitPrice: convert_dollar_to_toman(value.current_price)});
    };

    const handleUnitChange = (e) => {
        const newUnit =  e.target.value < 0 ? 0 : e.target.value
        setForm ({...form, unit: newUnit, price: selectedCoin.unitPrice * newUnit})
    }

    const handlePriceChange = (e) => {
        const newPrice = e.target.value < 0 ? 0 : e.target.value
        const unitPrice = selectedCoin.unitPrice
         if(newPrice < unitPrice)
            setForm ({...form, unit: 0, price: newPrice})
        else
            setForm({...form, unit: (newPrice/unitPrice) , price: newPrice})
        console.log(newPrice/unitPrice, unitPrice);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify({form, submitType}, null, 2));
    }

    return (
        <Grid container justifyContent={"center"} gap={1}>
            <form onSubmit={handleFormSubmit}>
                <Grid container flexDirection={{xs: 'column', md: 'row'}} item gap={1}>
                    <TextField
                        id="selectCurrency"
                        label="انتخاب ارز"
                        name="currency"
                        variant="outlined"
                        onClick={handleClickOpen}
                        value={form.currency}
                    />

                    <SelectDialog
                        selectedValue={selectedCoin}
                        open={open}
                        onClose={handleClose}
                        data={data}
                        loading={loading}
                    />

                    <TextField
                        id="unit"
                        name="unit"
                        label="واحد"
                        variant="outlined"
                        type="number"
                        value={form.unit}
                        onChange={handleUnitChange}
                    />
                    <TextField
                        id="price"
                        name="price"
                        label="تومان"
                        variant="outlined"
                        type="number"
                        value={form.price}
                        onChange={handlePriceChange}
                    />
                </Grid>

                <Grid container item gap={1} justifyContent={"center"} flexDirection={{xs: 'column', md: 'row'}} mt={'20px'}>
                    <Button variant={"contained"} color={"secondary"} type="submit" onClick={() => setSubmitType('sale')}>
                        {`درخواست فروش`}
                    </Button>
                    <Button variant={"contained"} color={"primary"} type="submit" onClick={() => setSubmitType('buy')}>
                        {`درخواست خرید`}
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
};

export default TradeForm;