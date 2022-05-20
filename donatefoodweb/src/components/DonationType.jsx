import React from 'react'
import {Col,Row,Button} from 'react-bootstrap';
import '../assets/partials/donationType.scss';
import GradientButton from 'react-linear-gradient-button'
import { NavLink } from 'react-router-dom';


const DonationType =() => {
  return (
   <Row className='donationType'>
        <Col xs={12} className='md-5 mt-4 mb-4 align-middle'>
           <h2>Pick Donation Type</h2>
        </Col>
        <Col xs={12} className='md-5 my-3'>
           <center>
              {/* <GradientButton colors={['#4c669f', '#3b5998', '#192f6a']}>  */}

              <NavLink to="/instantDonation"><GradientButton  >Instant Donation</GradientButton></NavLink> 
        </center>
     </Col>
     <Col xs={12} className='md-5 my-3'>
           <center>
              <label>(YOU  CAN  MAKE  YOUR  DONATION  RIGHT  NOW)</label>
           </center>
        </Col><Col xs={12} className='md-5 mt-4 mb-2'>
           <center>
              <GradientButton>Reserved Donation</GradientButton>
           </center>
        </Col><Col xs={12} className='md-5 my-3'>
           <center>
              <label>(YOU CAN RESERVED A DATE  AND  MAKE  YOUR  DONATION)</label>
           </center>
        </Col>
     </Row>
  )
}

export default DonationType;
