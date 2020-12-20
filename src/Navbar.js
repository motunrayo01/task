import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';



class navbar extends Component{
render(){
    return(
        <div>
      
      <Navbar  expand="lg icon">
        <div className="brand">
      <h4 className ="up"> <i>UP</i>Work</h4>
      </div>
        <form className="form-inline my-2 my-lg-0 ">
            <input className="input" type="search" placeholder="Search" aria-label="Search"/>
            </form>
           
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
       
       
          <Nav className="mr-auto nav">
            <span ><Link to="New" className="badge badge-primary mr5">NEW </Link> <Link to="Home" className="navlink">Projects</Link></span>
           
            <Link to="About" className="navlink">How It Works</Link>
            <Link to="Skills"className="navlink">Enterprise</Link>
            <Link to="Portfolio" className="navlink">Log In</Link>
           <Button className="button" variant="success">Get Started</Button>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
      <Navbar  expand="lg bg-light second-menu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
       
       
          <Nav className="mr-auto second-icon">
            <Link to="Home"className="link">Mobile Dev</Link>
            <Link to="About"className="link">Mobile Dev</Link>
            <Link to="Skills"className="link">Design</Link>
            <Link to="Portfolio"className="link">writing</Link>
            <Link to="Home"className="link">Admin Support</Link>
            <Link to="About"className="link">Customer Service</Link>
            <Link to="Skills"className="link">Marketing</Link>
            <Link to="Portfolio"className="link">Accounting</Link>
            <Link to="Skills"className="link">See all categories</Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
      </div>
     


      
    );
  }
}

export default navbar;