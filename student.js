import React from "react";
import { Nav , Container , Navbar } from "react-bootstrap";
import { Form , Button , Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import './student.css'
function Student(){
    return(
        <div className="whole">
            <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand ><b>QUIZZIFY</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/student" className="btn btn-outline-light">Quiz</Link>
            <Link to="/performance" className="btn btn-outline-light">Performance</Link>
            <Link to="/profile" className="btn btn-outline-light">Profile</Link>
            <Link to="/" className="btn btn-outline-light">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Container>
            <Form className="form">
                <Row><Col xs={5}><Form.Control placeholder="Enter Quiz Code"/></Col></Row>
            </Form>
            <Button variant="success" className="playbtn">Start</Button>
        </Container>
        </div>
    )
}
export default Student;