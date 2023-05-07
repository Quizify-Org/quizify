import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Admin from './Pages/admin'
import Home from "./Pages/home";
import AdminLogin from "./Pages/adminLogin";
import StudentLogin from "./Pages/studentLogin";
import Student from "./Pages/student";
import { Route , Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render(){
    return (
      <div className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="/studentLogin" element={<StudentLogin/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/student" element={<Student/>}/>
        </Routes>
        </BrowserRouter>
        {/* <Routes> */}
        {/* <Home/> */}
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/adminLogin" element={<AdminLogin/>}/> */}
          {/* <Route path="/admin" element={<Admin/>}/> */}
        {/* </Routes> */}
        {/* <Admin/> */}
        
        {/* <AdminLogin/> */}
        {/* <StudentLogin/> */}
        {/* <Student/> */}
      </div>
    )
  }
}

export default App