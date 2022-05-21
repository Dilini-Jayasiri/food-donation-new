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

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('orgName' in fieldValues)
        temp.orgName = fieldValues.orgName?"":"This field is required."
        if('orgEmail' in fieldValues)
        temp.orgEmail = (/$^|.+@.+..+/).test(values.orgEmail)?"":"Email is not valid."
        if('orgSize' in fieldValues)
        temp.orgSize = fieldValues.orgSize?"":"This field is required."
        if('phone' in fieldValues)
        temp.phone = fieldValues.phone.length>9?"":"Minimum 10 numbers required."
        if('city' in fieldValues)
        temp.city = fieldValues.city?"":"This field is required."
        if('quantity' in fieldValues)
        temp.quantity = fieldValues.quantity?"":"This field is required."
        if('orgTypeId' in fieldValues)
        temp.orgTypeId = fieldValues.orgTypeId.length!=0?"":"This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues === values)
        return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues,true,validate);
 

    const handleSubmit = e =>{
        e.preventDefault()
        if(validate()){
        orgType.insertRequests(values)
        resetForm()
        }
    }
    return (
        // <Grid container  alignItems="center" justify="center">
        <Form onSubmit={handleSubmit}>
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <Box my={4} mx={4}>
                            <Controls.Input
                                name="orgName"
                                label="Organization Name"
                                value={values.orgName}
                                onChange={handleInputChange}
                                error={errors.orgName}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Email Address"
                                name="orgEmail"
                                value={values.orgEmail}
                                onChange={handleInputChange}
                                error={errors.orgEmail}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Size of the Organization"
                                name="orgSize"
                                value={values.orgSize}
                                onChange={handleInputChange}
                                error={errors.orgSize}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="Contact Number"
                                name="phone"
                                value={values.phone}
                                onChange={handleInputChange}
                                error={errors.phone}
                            />
                        </Box>

                        <Box my={4} mx={4}>
                            <Controls.Input

                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleInputChange}
                                error={errors.city}
                            />
                        </Box>

                    </Grid>

                    <Grid item xs={6}>
                    <Box my={4} mx={4}>
                            <Controls.Input

                                label="Quantity"
                                name="quantity"
                                value={values.quantity}
                                onChange={handleInputChange}
                                error={errors.quantity}
                            />
                        </Box>

                        <Box my={4} mx={4}>

                            <Controls.Selects
                                name="orgTypeId"
                                label="Organization Type"
                                value={values.orgTypeId}
                                onChange={handleInputChange}
                                options={orgType.getOrgCollection()}
                                error={errors.orgTypeId}
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
                        <Controls.DatePicker1
                name="confirmedDate"
                label="Confirmed Date"
                value={values.confirmedDate}
                onChange={handleInputChange}
                /> 
                </Box>
{/* <DatePicker1/> */}
                        <div >
                        <Box my={4} mx={4}>
                            <Controls.Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type="submit"
                                text="Submit"
                                />
                               

                               
                            <Controls.Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type="submit"
                                text="Reset"
                                onClick={resetForm}
                                />
                                </Box> 
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Form>
        // </Grid>

    )
}


