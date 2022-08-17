import React, {useContext} from 'react';
import {useFormik} from "formik";
import {TextField, Button, Paper, Grid, Divider, Typography, Stack} from '@mui/material';
import shoppingCartContext from "../../contexts/ShoppingCartContext";
import { useNavigate} from "react-router-dom";
import * as Yup from 'yup';

/**
 * Component that displays form text fields and handles form submission
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CheckoutForm = () => {
    const {items} = useContext(shoppingCartContext);
    const cartIds = [];
    const cartQty = [];
    const navigate = useNavigate();

    items.map((curr) => {
        cartIds.push(curr.id);
        cartQty.push(curr.qty);
    })


    /**
     * Function to pass useFormik() hook initial form variables.
     * Validation schema uses the validation library "Yup" to ensure
     * all fields have been filled and that email is valid. onSubmit takes changed
     * formik values and uses fetch method to post json data.
     */
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            billingFName: "",
            billingLName: "",
            cardNumber: "",
            cardCCV: "",
            productIDs: [],
            quantities: []
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            street: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            zip: Yup.string()
                .matches(/^[0-9]+$/, "Cannot include letters.")
                .length(5, "Must be exactly 5 digits.")
                .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            billingFName: Yup.string().required('Required'),
            billingLName: Yup.string().required('Required'),
            cardNumber: Yup.string().required('Required'),
            cardCCV: Yup.string()
                .matches(/^[0-9]+$/, "Cannot include letters.")
                .length(3, "Must be exactly 3 digits.")
                .required('Required'),
        }),
        onSubmit: (values) => {
            fetch('/api/send-order', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    billingName: `${values.billingFName} ${values.billingLName}`,
                    billingAddress: `${values.street}, ${values.city}, ${values.state} ${values.zip}`,
                    customerName: `${values.firstName} ${values.lastName}`,
                    email: values.email,
                    cardInfo: `${values.cardNumber}, ${values.cardCCV}`,
                    productIDs: cartIds,
                    quantities: cartQty
                })
            })
            navigateSuccess()
        }
    });

    const navigateSuccess = () => {
        navigate('/success');
    }


    return (
        <form
            name="submitForm"
            onSubmit={formik.handleSubmit}
        >
            <Stack justifyContent={"center"} alignItems="center" padding={10} paddingRight={0} direction={"column"} spacing={4}>
                <Paper elevation={3} sx={{ maxWidth: "800px", padding: "50px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Customer Information</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                fullWidth
                            />
                            {formik.touched.firstName && formik.errors.firstName ?
                                <Typography color="red">{formik.errors.firstName}</Typography> : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                fullWidth
                            />
                            {formik.touched.lastName && formik.errors.lastName ?
                                <Typography color="red">{formik.errors.lastName}</Typography> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                label="Email Address"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                fullWidth
                            />
                            {formik.touched.email && formik.errors.email ?
                                <Typography color="red">{formik.errors.email}</Typography> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider flexItem/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Billing Information</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="billingFName"
                                label="First Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.billingFName}
                                fullWidth
                            />
                            {formik.touched.billingFName && formik.errors.billingFName ?
                                <Typography color="red">{formik.errors.billingFName}</Typography> : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="billingLName"
                                label="Last Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.billingLName}
                                fullWidth
                            />
                            {formik.touched.billingLName && formik.errors.billingLName ?
                                <Typography color="red">{formik.errors.billingLName}</Typography> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="street"
                                label="Street"
                                variant="outlined"
                                sx={{ marginRight: "50px"}}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.street}
                                fullWidth
                            />
                            {formik.touched.street && formik.errors.street ?
                                <Typography color="red">{formik.errors.street}</Typography> : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                label="City"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                                fullWidth
                            />
                            {formik.touched.city && formik.errors.city ?
                                <Typography color="red">{formik.errors.city}</Typography> : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="state"
                                label="State"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.state}
                                fullWidth
                            />
                            {formik.touched.state && formik.errors.state ?
                                <Typography color="red">{formik.errors.state}</Typography> : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                label="Zip code"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.zip}
                                fullWidth
                            />
                            {formik.touched.zip && formik.errors.zip ?
                                <Typography color="red">{formik.errors.zip}</Typography> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider flexItem/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Payment Information</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cardNumber"
                                label="Card Number"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cardNumber}
                                fullWidth
                            />
                            {formik.touched.cardNumber && formik.errors.cardNumber ?
                                <Typography color="red">{formik.errors.cardNumber}</Typography> : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cardCCV"
                                label="CCV"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cardCCV}
                                fullWidth
                            />
                            {formik.touched.cardCCV && formik.errors.cardCCV ?
                                <Typography color="red">{formik.errors.cardCCV}</Typography> : null}
                        </Grid>
                    </Grid>
                </Paper>
                <Button type="submit" color="inherit" variant="outlined" size={"large"} sx={{ marginTop: "10px"}}>Submit</Button>
            </Stack>

        </form>
    )
}
export default CheckoutForm;