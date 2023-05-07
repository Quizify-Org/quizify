import React from "react";
import Form from 'react-bootstrap/Form';
import { Container , Button , Row , Col} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Route , Router , Routes } from "react-router-dom";
// import Admin from "./admin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './adminLogin.css'
function AdminLogin(){
  const navigate = useNavigate()
  function handleClick(){
    navigate('/admin')
  }
    return(
        <div>
          {/* <Router> */}
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
            <Container className="p-4">
                <h1 className="header" bg="dark">Admin Login</h1>
            <Form>
      <Form.Group >
        <Form.Label className="label" bg="dark">Username</Form.Label>
        <Row><Col xs={5}><Form.Control type="text" placeholder="Enter Username" /></Col></Row>
      </Form.Group>
      <Form.Group  >
        <Form.Label className="label" bg="dark">Password</Form.Label>
        <Row><Col xs={5}><Form.Control type="password" placeholder="Password" /></Col></Row>
      </Form.Group>
    </Form>
    <Button variant="outline-primary" className="loginbtn" onClick={handleClick}>Login</Button>
    </Container>
    
    
    {/* <Routes> */}
      {/* <Route path="/admin" element={<Admin/>}/> */}
    {/* </Routes> */}
    {/* </Router> */}
    
        </div>
    )
}
export default AdminLogin