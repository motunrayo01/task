import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
class Navbar2 extends Component {
  
    render() { 
        return (  
            <div>
               
                <div className="Navbar2">
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
            </div>
           
        );
    }
}
 
export default Navbar2;