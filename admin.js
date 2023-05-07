import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Form from 'react-bootstrap/Form';
import {Container , Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row , Col} from "react-bootstrap";
import  './admin.css'

function Admin(){
    return(
        <div >
            <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand ><b>QUIZZIFY</b></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
          <Link to="/admin" className="btn btn-light">ConductQuiz</Link>
          <Link to="/admin" className="btn btn-light">Home</Link>
            <Link to="/results" className="btn btn-light">Results</Link>
            <Link to="/admin" className="btn btn-light">Profile</Link>
            <Link to="/" className="btn btn-light">Logout</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
            {/* <Container className="p-4">
            <Form className="form">
            <Form.Group>
            <Form.Label>Enter Quiz Code:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Quiz Code" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Enter Number of questions:</Form.Label>
          <Form.Control type="number" 
                        placeholder="No.of questions" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Enter Exam Date:</Form.Label>
          <Form.Control type="date" placeholder="Exam Date" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Enter Start Time:</Form.Label>
          <Form.Control type="time" placeholder="Start Time" />
        </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
            </Container> */}
            {/* <div className="form"> */}
            <Form id="adminform">
              <Form.Label>Enter Quiz Code</Form.Label>
              <Row><Col xs={5}><Form.Control placeholder="Quiz Code" type="text" /></Col></Row>
              <Form.Label>Enter Number Of Questions</Form.Label>
              <Row><Col xs={5}><Form.Control placeholder="No.of questions" type="number"/></Col></Row>
              <Form.Label>Enter Quiz Topic</Form.Label>
              <Row><Col xs={5}><Form.Control placeholder="Quiz Topic" /></Col></Row>
              <Form.Label>Enter Exam Date</Form.Label>
              <Row><Col xs={5}><Form.Control placeholder="Date" type="date" /></Col></Row>
              <Form.Label>Enter Start time</Form.Label>
              <Row><Col xs={5}><Form.Control placeholder="Start Time" type="time"/></Col></Row>
              <Form.Label>Enter Quiz Duration</Form.Label>
              <Row><Col xs={5}><Form.Control placeholder="Quiz Duration" type="text"/></Col></Row><br/>
              {/* <Row><Col xs={5}><Form.Control type="submit" /></Col></Row> */}
              <Button variant="outline-primary" className="submitbtn">Submit</Button>
            </Form>
            {/* </div> */}
        </div>
    )
}
export default Admin