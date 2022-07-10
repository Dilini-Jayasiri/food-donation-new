import React, { useState } from 'react'
import '../assets/partials/instantDonation.scss'
import styled from 'styled-components';
import Controls from '../components/controls/Controls'
import * as orgType from '../organizations/orgType'
import { Box, Grid } from '@mui/material';
import GradientButton from 'react-linear-gradient-button'
import { useForm, Form } from '../components/useForm';

const mealTypeItems = [
    { id: 'breakfast', title: 'Breakfast' },
    { id: 'lunch', title: 'Lunch' },
    { id: 'dinner', title: 'Dinner' },
]

const foodTypeItems = [
    { id: 'veg', title: 'Veg' },
    { id: 'nonveg', title: 'Non-Veg' },
    { id: 'both', title: 'Both' }
]

const initialValues = {
        donorName: '',
        donationType: '',
        phone: '',
        donEmail:'',
        address: '',
        orgName: '',
        //donorTypeId: '',
        date: '',
        foodName: '',
        quantity: '',
        mealType: '',
        foodType: '',
        

    }
export default function ReservedDonation(props) {
        const { addOrEdit } = props

// const ReservedDonation = () => {
//     const [values, setResDon] = useState({
//         );

    //validation
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('donorName' in fieldValues)
            temp.donorName = fieldValues.donorName ? "" : "This field is required."
        if ('donationType' in fieldValues)
            temp.donationType = fieldValues.donationType ? "" : "This field is required."
        if ('phone' in fieldValues)
            temp.phone = fieldValues.phone.length > 9 ? "" : "Minimum 10 numbers required."
        if ('donEmail' in fieldValues)
            temp.donEmail = (/$^|.+@.+..+/).test(values.donEmail) ? "" : "Email is not valid."
        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."
        if ('orgName' in fieldValues)
            temp.orgName = fieldValues.orgName ? "" : "This field is required."
        // if ('donorTypeId' in fieldValues)
        //     temp.donorTypeId = fieldValues.donorTypeId.length != 0 ? "" : "This field is required."
        if ('date' in fieldValues)
            temp.date = fieldValues.date ? "" : "This field is required."
        if ('foodName' in fieldValues)
            temp.foodName = fieldValues.foodName ? "" : "This field is required."
        if ('quantity' in fieldValues)
            temp.quantity = fieldValues.quantity ? "" : "This field is required."
        if ('mealType' in fieldValues)
            temp.mealType = fieldValues.mealType ? "" : "This field is required."
        if ('foodType' in fieldValues)
            temp.foodType = fieldValues.foodType ? "" : "This field is required."
         setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        //handleChange,
        resetForm
    } = useForm(initialValues, true, validate);

    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setValues({ ...values, [name]: value });
    }

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        //Object Destructuring
        //Store object data into variables
        if(validate()){
            addOrEdit(values, resetForm)
        }
        const { donorName, donationType, donorTypeId, phone, donEmail,address, orgName, date, foodName, quantity, mealType, foodType } = values;
        try {
            //It is submitted on port 3000 by default 
            //which is front end but we need to submit it on
            //backend which is on port 3001. so we need proxy
            const res = await fetch('/reservedDon', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    donorName, donationType, donorTypeId, phone,donEmail, address, orgName, date, foodName, quantity, mealType, foodType
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Message Not Sent. Try Again Later")
            } else {
                window.alert("Message Sent Successfully");
                setValues({
                    donorName: '',
                    donationType: '',
                    //donorTypeId: '',
                    phone: '',
                    donEmail:'',
                    address: '',
                    orgName: '',
                    date: '',
                    foodName: '',
                    quantity: '',
                    mealType: '',
                    foodType: '',
                    
                })
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='donation'>
            <MainContainer>
                <DonationText>
                    Reserved Donation
                </DonationText>

                <form onSubmit={handleSubmit} method={'POST'}>
                    {/* <InputContainer> */}
                    <Grid container>
                        <Grid item xs={6}>

                            <Box my={4} mx={4}>
                                <Controls.Input
                                    name="donorName"
                                    label="Donor Name"
                                    value={values.donorName}
                                    onChange={handleChange}
                                    error={errors.donorName}

                                />
                            </Box>

                            <Box my={4} mx={4}>

                                <Controls.Selects
                                    name="donorTypeId"
                                    label="Donor Type"
                                    placeholder="Donor Type"
                                    value={values.donorTypeId}
                                    onChange={handleChange}
                                    options={orgType.getDonorType()}
                                    //error={errors.donorTypeId}

                                // error={errors.orgTypeId}
                                />


                            </Box>
                            <Box my={4} mx={4}>

                                <Controls.Input
                                    name="phone"
                                    label="Contact Number"
                                    value={values.phone}
                                    onChange={handleChange}
                                    error={errors.phone}

                                />
                            </Box>
                            <Box my={4} mx={4}>
                            <Controls.Input

                                label="Email Address"
                                name="donEmail"
                                value={values.donEmail}
                                onChange={handleChange}
                                error={errors.donEmail}
                               
                            />
                        </Box>

                            <Box my={4} mx={4}>
                                <Controls.TextArea
                                    name="address"
                                    label="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    error={errors.address}
                                />
                            </Box>
                            <Box my={4} mx={4}>
                                <Controls.Input
                                    name="orgName"
                                    label="Organization Name"
                                    value={values.orgName}
                                    onChange={handleChange}
                                    error={errors.orgName}

                                />


                            </Box>
                            </Grid>

                            <Grid item xs={6}>
                            <Box my={4} mx={6}>
                                <Controls.Input
                                    name="foodName"
                                    label="Food Name"
                                    value={values.foodName}
                                    onChange={handleChange}
                                    error={errors.foodName}

                                />
                            </Box>
                       
                        

                            <Box my={4} mx={6}>
                                <Controls.Input
                                    name="quantity"
                                    label="Quantity"
                                    value={values.quantity}
                                    onChange={handleChange}
                                    error={errors.quantity}

                                />
                            </Box>

                            <div class="form-check form-check-inline">
                                <Box my={0} mx={4}>

                                    <Controls.RadioGroups
                                        row
                                        name="mealType"
                                        label="Meal Type"
                                        value={values.mealType}
                                        onChange={handleChange}
                                        items={mealTypeItems}
                                        error={errors.mealType}
                                    />
                                </Box>
                            </div>

                            <div class="form-check form-check-inline">

                                <Box my={2} mx={4}>
                                    <Controls.RadioGroups
                                        row
                                        name="foodType"
                                        label="Food Type"
                                        value={values.foodType}
                                        onChange={handleChange}
                                        items={foodTypeItems}
                                        error={errors.foodType}
                                    />
                                </Box>
                            </div>
                            <Box my={1.5} mx={6}>
                                <Controls.DatePicker1
                                    name="date"
                                    label="Date"
                                    value={values.date}
                                    onChange={handleChange}
                                    error={errors.date}
                                />
                            </Box>

                            <div>
                                <Box my={5} mx={12}>
                                    <GradientButton
                                        style={{ width: '50%' }}
                                        onClick={handleSubmit}
                                        type="submit"
                                        text="Submit">
                                        Submit
                                        <i className="fa fa-paper-plane ms-2"></i>
                                    </GradientButton>

                                    {/* <Controls.Button
    // variant="contained"
    // color="primary"
    // size="large"
    onClick={handleSubmit}
    type="submit"
    text="Submit" */
    }
                                </Box>
                            </div>
                        </Grid>


                        {/* </InputContainer> */}
                    </Grid>
                </form>

            </MainContainer>
        </div>
    )
}

const MainContainer = styled.div`
      display:flex;
      align-items:center;
      flex-direction:column;
      height:50%;
      width:60%;
      opacity:2.8;
      font-weight:bold;
       background:rgba(255,255,255,0.4);
       box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
     backdrop-filter:blur(8.5px)
      border-radius:10px;
      color:#ffffff;
     // text-transform:uppercase;
      letter-spacing:0.4rem;`;


const InputContainer = styled.div`
      display:flex;
      flex-direction:column;
      height:80%;
      width:100%;
      justify-content:space-around;
      align-items:center;

 `

const DonationText = styled.h2`
margin:3rem 0 2rem 0;
`

