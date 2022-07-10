import React from 'react'
import GradientButton from 'react-linear-gradient-button/lib/GradientButton'
import { Box, Grid } from '@mui/material';
export default function DonorAccount() {
  return (
    <div>
        <center>
            <Box my={5}>
        <GradientButton>
            Edit Profile
        </GradientButton></Box>
        <Box my={5}>
        <GradientButton>
            Last Donation Status
        </GradientButton></Box>
        <Box my={5}>
        <GradientButton>
            View Donation History
        </GradientButton></Box>
        <Box my={5}>
        <GradientButton>
            Change the Date
        </GradientButton>
        </Box>
        </center>
        
    </div>
  )
}
