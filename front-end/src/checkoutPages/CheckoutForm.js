import React, { useState} from 'react';
import {useFormik} from "formik";
import {TextField, Button, Paper, Grid, Divider, Typography, Container, Stack} from '@mui/material';


/**
 * Component that displays form text fields and handles form submission
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CheckoutForm = () => {

    /**
     * Function to pass useFormik() hook initial form variables.
     * onSubmit takes changed formik.values and uses fetch method to
     * POST json data
     *
     * @type {{initialValues: {zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}, initialErrors: FormikErrors<unknown>, initialTouched: FormikTouched<unknown>, initialStatus: any, handleBlur: {(e: React.FocusEvent<any>): void, <T=any>(fieldOrEvent: T): T extends string ? ((e: any) => void) : void}, handleChange: {(e: React.ChangeEvent<any>): void, <T_1=string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}, handleReset: (e: any) => void, handleSubmit: (e?: (React.FormEvent<HTMLFormElement> | undefined)) => void, resetForm: (nextState?: (Partial<FormikState<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>> | undefined)) => void, setErrors: (errors: FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>) => void, setFormikState: (stateOrCb: (FormikState<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}> | ((state: FormikState<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>) => FormikState<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>))) => void, setFieldTouched: (field: string, touched?: boolean, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>> | Promise<void>), setFieldValue: (field: string, value: any, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>> | Promise<void>), setFieldError: (field: string, value: (string | undefined)) => void, setStatus: (status: any) => void, setSubmitting: (isSubmitting: boolean) => void, setTouched: (touched: FormikTouched<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>> | Promise<void>), setValues: (values: React.SetStateAction<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>> | Promise<void>), submitForm: () => Promise<any>, validateForm: (values?: {zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}) => Promise<FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>>, validateField: (name: string) => (Promise<void> | Promise<string | undefined>), isValid: boolean, dirty: boolean, unregisterField: (name: string) => void, registerField: (name: string, {validate}: any) => void, getFieldProps: (nameOrOptions: any) => FieldInputProps<any>, getFieldMeta: (name: string) => FieldMetaProps<any>, getFieldHelpers: (name: string) => FieldHelperProps<any>, validateOnBlur: boolean, validateOnChange: boolean, validateOnMount: boolean, values: {zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}, errors: FormikErrors<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>, touched: FormikTouched<{zip: string, lastName: string, billingFName: string, city: string, cardCCV: string, quantities: number[], firstName: string, billingLName: string, productIDs: number[], street: string, state: string, email: string, cardNumber: string}>, isSubmitting: boolean, isValidating: boolean, status?: any, submitCount: number}}
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
            productIDs: [4, 5, 7],
            quantities: [1, 2, 4]
        },
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
                    customerName: `${values.firstName} ${values.firstName}`,
                    email: values.email,
                    cardInfo: `${values.cardNumber}, ${values.cardCCV}`,
                    productIDs: values.productIDs,
                    quantities: values.quantities
                })
            })
         }
    });




    return (
        <form
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
                                value={formik.values.firstName}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                label="Email Address"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                fullWidth
                            >
                            </TextField>
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
                                value={formik.values.billingFName}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="billingLName"
                                label="Last Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.billingLName}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="street"
                                label="Street"
                                variant="outlined"
                                sx={{ marginRight: "50px"}}
                                onChange={formik.handleChange}
                                value={formik.values.street}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                label="City"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="state"
                                label="State"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.state}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                label="Zip code"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.zip}
                                fullWidth
                            >
                            </TextField>
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
                                value={formik.values.cardNumber}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cardCCV"
                                label="CCV"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.cardCCV}
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                </Paper>
                <Button type="submit" color="inherit" variant="outlined" size={"large"} sx={{ marginTop: "10px"}}>Submit</Button>
            </Stack>

        </form>
    )
}
export default CheckoutForm;