import React from "react";
import Form from 'react-bootstrap/Form';
import { Container , Button , Row , Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './studentLogin.css'
function StudentLogin(){
  const navigate = useNavigate()
  function handleClick(){
    navigate('/student')
  }
    return(
    <div>
      <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand ><h1 bg="dark">QUIZZIFY</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Link to="/adminLogin" className="btn btn-primary"><b>Admin</b></Link>
            <Link to="/studentLogin" className="btn btn-primary"><b>Student</b></Link>
          </Nav>
      </Container>
    </Navbar>
            {/* <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand ><h1 bg="dark">QUIZZIFY</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#admin" className="btn btn-primary"><b>Admin</b></Nav.Link>
            <Nav.Link href="#link" className="btn btn-primary"><b>Student</b></Nav.Link>
          </Nav>
      </Container>
    </Navbar> */}
            <Container className="p-4">
                <h1 className="header">Student Login</h1>
            <Form>
      <Form.Group >
        <Form.Label className="label">ID</Form.Label>
        <Row><Col xs={5}><Form.Control type="text" placeholder="Enter Roll Number" /></Col></Row>
      </Form.Group>
      <Form.Group  >
        <Form.Label className="label">Password</Form.Label>
        <Row><Col xs={5}><Form.Control type="password" placeholder="Password" /></Col></Row>
      </Form.Group>
    </Form>
    <Button variant="outline-primary" className="loginbtn" onClick={handleClick}>Login</Button>
    </Container>
        </div>
    )
}
export default StudentLogin