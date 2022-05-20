import React, { useState, useEffect } from 'react'

import { Box, Grid } from '@mui/material';
import Controls from '../../components/controls/Controls'

import { useForm, Form } from '../../components/useForm';
import * as orgType from '../../organizations/orgType'
import DatePicker1 from '../../components/controls/DatePicker1';


const mealTypeItems = [
    { id: 'breakfast', title: 'Breakfast' },
    { id: 'lunch', title: 'Lunch' },
    { id: 'dinner', title: 'Dinner' },
]

const initialValues = {
    id: 0,
    orgName: '',
    orgType: '',
    orgTypeId: '',
    orgEmail: '',
    orgSize: '',
    phone: '',
    city: '',
    mealType: '',
    quantity: '',
    reason: '',
    confirmedDate: new Date(),
}
export default function RequestForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues);

    return (
        // <Grid container  alignItems="center" justify="center">
        <Form>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Box my={4} mx={4}>
                            <Controls.Input
                                name="orgName"
                                label="Organization Name"
                                value={values.orgName}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Email Address"
                                name="orgEmail"
                                value={values.orgEmail}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Size of the Organization"
                                name="orgSize"
                                value={values.orgSize}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Contact Number"
                                name="phone"
                                value={values.phone}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleInputChange}
                            />
                        </Box>

                    </Grid>

                    <Grid item xs={6}>
                        <Box my={4} mx={4}>
                            <Controls.RadioGroups
                                name="mealType"
                                label="Meal Type"
                                value={values.mealType}
                                onChange={handleInputChange}
                                items={mealTypeItems}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Quantity"
                                name="quantity"
                                value={values.quantity}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box my={4} mx={4}>

                            <Controls.Selects
                                name="orgTypeId"
                                label="Organization Type"
                                value={values.orgTypeId}
                                onChange={handleInputChange}
                                options={orgType.getOrgCollection()}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.TextArea

                                label="Reason for Request"
                                name="reason"
                                value={values.reason}
                                onChange={handleInputChange}
                            />
                        </Box>

                        {/* <Controls.DatePicker
                name="confirmedDate"
                label="Confirmed Date"
                value={values.confirmedDate}
                onChange={handleInputChange}
                /> */}
{/* <DatePicker1/> */}
                    </Grid>
                </Grid>
            </div>
        </Form>
        // </Grid>

    )
}


