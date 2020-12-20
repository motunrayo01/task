import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Demand from './Demand';
import Section from './Section2';
import Sponsor from './Sponsor';
import Works from './Works';
import Safepage from './Safepage';
import Skills from './Skills';
import Footer from './Footer';




function App(){
    return(
            <div>
           
                
            <BrowserRouter>
                <Navbar/>
                
                <Route>
                
               
                
                </Route>
                
                <Demand/>
                <Section/>
                <Sponsor/>
                <Works/>
                <Safepage/>
                <Skills/>
                <Footer/>
                 
                       
                   
                                
            </BrowserRouter>
            
           
            </div>
       
    )

}

export default App;