import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


class Works extends Component {
   
    render() { 
        return ( 
            <div>
                
               
                          
                <div className="container sponsors">
                    <div className="group">
                <h1><center> How it works</center></h1>
                <div className="row ">
                 
                    <div className="col-sm-3" >
                <img src="https://res.cloudinary.com/morayo/image/upload/v1608391429/find.9449b48_uyrzpd.svg" alt="one" width="120px"/> <br/><br/>
                       <strong> Post a job</strong>
                       <p>Tell us about your project. Upwork connects you with top talent and agencies around the world, or near you.</p> 
                    </div>
                    <div className="col-sm-3 div">
                <img src="https://res.cloudinary.com/morayo/image/upload/v1608391918/hire.f1d0563_mgvr71.svg" alt="one" width="120px" /><br/><br/>
                    <strong> Bids come to you</strong>
                    <p>Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.</p>
                    </div>
                    <div className="col-sm-3 div">
                <img src="https://res.cloudinary.com/morayo/image/upload/v1608391922/work.e0cdb7b_dwihof.svg" alt="one" width="120px"/> <br/><br/>
                    <strong> Collaborate easily</strong>
                    <p>Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile.</p>
                    </div>
                    <div className="col-sm-3 div">
                <img src="https://res.cloudinary.com/morayo/image/upload/v1608391928/pay.8951f52_vcd4rj.svg" alt="one" width="120px"/> <br/><br/>
                   <strong> Payment simplified</strong>
                   <p>Pay hourly or fixed-price and receive invoices through Upwork. Pay for work you authorize.</p>
                    </div>
                    </div>
                    </div>
                
            </div>
          
              <div className="container-fluid">
                <div className="row work"  >
               
                <div className="block-group ">
                    <div className="col-sm-3 workdiv"  >
            
                       <strong>1. Post a job</strong>
                       <p>Tell us about your project. Upwork connects you with top talent and agencies around the world, or near you.</p> 
                    </div>
                    <div className="col-sm-3 workdiv">
                
                    <strong> 2. Bids come to you</strong>
                    <p>Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.</p>
                    </div>

                    <div className="col-sm-3 workdiv">
              
                    <strong>3. Collaborate easily</strong>
                    <p>Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile.</p>
                    </div>
                    </div>
                    </div>
                    
                
            </div>
         
           <div className="container">
           <div className="row offer1">
         
                   <div className="col-sm-4 ">
            
                      <center><strong> Basic</strong></center><br/> 
                      <center><Button className="button1" variant="success">Select Basic</Button></center><br/> 
                      <center><strong> Free</strong></center><br/> 
                      <hr ________________________________________________/>
                      <ul>
                         <li>Verified work history and reviews</li>
                         <li>Unlimited proposals</li>
                         <li>Built-in collaboration tools and easy payments </li>
                     </ul>
                   </div>
                   <div className="col-sm-4 ">
              
                   <center><strong> Plus</strong></center><br/> 
                   <center><Button className="button1" variant="success">Select Plus</Button></center><br/> 
                   <center><strong> $49.99<em>/month*</em></strong></center><br/> 
                   <hr ________________________________________________/>
                   <ul>
                         <li>Dedicated account managers to help you find and hire quality talent fast</li>
                         <li>Project tracking and collaboration tools for teams</li>
                         <li>Tailored search results featuring Top Rated and Rising Talent</li>
                     </ul>
                   </div>
                   <div className="col-sm-4 ">
              
                   <center><strong> Enterprise</strong></center><br/> 
                   <center><Button className="button1" variant="success">Select Enterprise</Button></center><br/> 
                   <h6>Price varies - contact us for a demo</h6><br/> 
                     <hr ________________________________________________/>
                     <ul>
                         <li>Custom configurable contracting and onboarding process </li>
                         <li>Worker classification compliance services</li>
                         <li>Project-based or managed solutions, and dedicated account executive </li>
                     </ul>
                     
                   </div>
                   <p>*3% payment processing and administration fee on all payments to freelancers and agencies.</p>
                  </div>
                  </div>
                
                  
                 
                  <div className="container ">
                      <div className="row rate1" >
                     
                          <div className="col-sm-12">
                          <h6 className="rate1"><Link to="#" className="links">Customers reate Upwork <strong>4.6/5</strong>
                          <img src="https://res.cloudinary.com/morayo/image/upload/v1608399266/stars.ecae04c_jryxr5.svg" 
                      alt="star" width="180px" />
                          based on 587,797verified reviews<strong>4.6/5</strong>
                          <img src="https://res.cloudinary.com/morayo/image/upload/v1608472934/logo.fd38857_1_hmqktv.svg" 
                      alt="star" width="100px" /></Link></h6>
                          </div>
                          </div>
                    
                  
                  </div>
                
       
                   
             </div>
                    
           
            
         );
    }
}
 
export default Works;