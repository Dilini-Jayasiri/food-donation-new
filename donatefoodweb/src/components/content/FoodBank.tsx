import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import NavBar from '../NavBar';
import {Routes,Route} from 'react-router';


const FoodBank =() => {
  return (
      <Container fluid={true}>
          <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
      </Container>
  )
}

export default FoodBank;


