import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SelectDialog from "../select-dialog/SelectDialog";

const TradeForm = ({data, loading}) => {
    const formik = useFormik({
        initialValues: {
            currency: 'bitcoin',
            unit: 0,
            price: 0,
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('bitcoin');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Grid container justifyContent={"center"} gap={1}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container item gap={1}>
                    <TextField
                        id="selectCurrency"
                        label="انتخاب ارز"
                        variant="outlined"
                        onClick={handleClickOpen}
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />

                    <SelectDialog
                        selectedValue={selectedValue}
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
                        value={formik.values.unit}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        id="price"
                        name="price"
                        label="تومان"
                        variant="outlined"
                        type="number"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid container item gap={1} justifyContent={"center"} mt={'20px'}>
                    <Button variant={"contained"} color={"secondary"} type="submit">
                        {`درخواست فروش`}
                    </Button>
                    <Button variant={"contained"} color={"primary"} type="submit">
                        {`درخواست خرید`}
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
};

export default TradeForm;