import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../assets/css/style.css";
import Foxmatrix5 from "../assets/image/Foxmatrix5.png";
import { Navbar,Container,NavDropdown,Nav } from "react-bootstrap";
function Header() {
  return (
    <div>
      {/* <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav_header">
          <div className="nav_title">
            <img src={Foxmatrix5} />
          </div>
        </div>
        <div className="nav_btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className='link'>
          <NavLink to="/" exact activeClassName='active my_image'>Home</NavLink>
          <NavLink to="/about" activeClassName='active my_image'>About</NavLink>
          <NavLink to="/employer" activeClassName='active my_image'>For Employer</NavLink>
          <NavLink to="/interview" activeClassName='active my_image'>For Interviewer</NavLink>
          <NavLink to="/candidate" activeClassName='active my_image'>For Candidate</NavLink>
          <NavLink to="/blogs" activeClassName='active my_image'>Blogs</NavLink>
          <NavLink to="/contact" activeClassName='active my_image'>Contact Us</NavLink>
        </div>

      </div>  */}
      <Navbar className="nav" fixed='top'expand='lg' >
  <Container>
  <Navbar.Brand>
       <div className="nav_title">
            <img src={Foxmatrix5} />
          </div>
       </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          <NavLink to="/" exact activeClassName='active'>Home</NavLink>
          <NavLink to="/about" activeClassName='active'>About</NavLink>
          <NavLink to="/employer" activeClassName='active'>For Employer</NavLink>
          <NavLink to="/interview" activeClassName='active'>For Interviewer</NavLink>
          <NavLink to="/candidate" activeClassName='active'>For Candidate</NavLink>
          <NavLink to="/blogs" activeClassName='active'>Blogs</NavLink>
          <NavLink to="/contact" activeClassName='active'>Contact Us</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default Header

