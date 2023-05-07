import React from "react";
import {Container} from 'react-bootstrap'
import './home.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { Link } from "react-router-dom";
// import { ReactDOM } from "react";
// import AdminLogin from "./adminLogin";
// import StudentLogin from "./studentLogin";
function Home(){
    return(
        <div className="main">
          {/* <Router> */}
             <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand ><h1 bg="dark">QUIZZIFY</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
          {/* <Nav.Link href="#admin">Home</Nav.Link> */}
            {/* <Nav.Link href="#link" >Dashboard</Nav.Link> */}
            <Link to="/adminLogin" className="btn btn-primary"><b>Admin</b></Link>
            <Link to="/studentLogin" className="btn btn-primary"><b>Student</b></Link>
            {/* <Button variant="secondary" className="adminbtn">Admin</Button><br/>
                <Button variant="secondary" className="studentbtn1">Student</Button> */}
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
            {/* <Container  style={Style}>
                <h1 className="name">Quizify</h1>
                <Button variant="secondary" className="adminbtn">Admin</Button><br/>
                <Button variant="secondary" className="studentbtn1">Student</Button>
                <Button variant="primary"  className="studentbtn"></Button>
            </Container> */}
            {/* <Routes> 
              <Route path="/adminLogin" element={<AdminLogin/>}/>
              <Route path="/studentLogin" element={<StudentLogin/>}/>
            </Routes>
            </Router> */}
        </div>
    )
}
export default Home;