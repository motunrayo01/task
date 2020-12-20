import React, { Component } from 'react';



class Hire extends Component {
  
    render() { 
        return (
            <div>
               
                  <div className="container">
          
                   <div className="row offer">
                   <div className="block-group">
                           <div className="col-sm-4 ">
            
                      <center><strong> Basic</strong></center><br/> 
                      <hr ______________/>
                      <p>Free to post and sign up, find and hire talent quickly,collaborate easily, and ake hassle-free paymennt</p>
                      <center><Button className="button1" variant="success">Select Basic</Button></center><br/> 
                      <center><strong> Free</strong></center><br/> 
                           </div>
                           <div className="col-sm-4 ">
                   
                           <center><strong> Plus</strong></center><br/> 
                           <hr ______________/>
                           <p>Work with on-demand account managers to attract the specifictalent that's right for your business</p>
                           <center><Button className="button1" variant="success">Select Plus</Button></center><br/> 
                           <center><strong> $49.99<em>/month*</em></strong></center><br/> 
                           <hr ________________________________________________/>
                           <p>Everything in Basic, and:</p>
                           <ul>
                               <li>Dedicated account managers to help you find and hire quality talent fast</li>
                               <li>Project tracking and collaboration tools for teams</li>
                               <li>Tailored search results featuring Top Rated and Rising Talent</li>
                           </ul>
                           </div>
                           <div className="col-sm-4 ">
                   
                           <center><strong> Enterprise</strong></center><br/> 
                           <hr ______________/>
                           <p>Configure the solutionn to your organization's need and reduce risk through compliance services</p>
                           <center><Button className="button1" variant="success">Select Enterprise</Button></center><br/> 
                           
                           <h6>Price varies - contact us for a demo</h6><br/> 
                           <hr ________________________________________________/>
                           
                           </div>
                           <p>*3% payment processing and administration fee on all payments to freelancers and agencies.</p>
                       </div>
                       </div>
                       </div>
                  
                  
                  <div className="container">
                      <div className="row rate" >
                     
                          <div className="col-sm-12">
                          <h6><Link to="#" className="links">Customers reate Upwork <strong>4.6/5</strong>
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
 
export default Hire;