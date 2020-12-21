import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Demand extends Component {
   
    render() { 
        return ( 
            <div>
                <div className="container-fluid demand">
                   <div className="row ">
                       <div className="col-sm-6  ">
                           <h1 className="one">In demand-talent<br/> on demand <i>&#8482;</i></h1>
                           <h1 className="two">upwork is how &#8482;</h1>
                           <h5>Hire proven pros with confidence using the world’s largest, remote talent platform.</h5>
                           <Button className="button1" variant="success">Get Started</Button>
                           <Button className="button2" variant="light">Watch Demo</Button>
                       </div>
                       <div className="col-sm-6 " >
                           <img src= "https://res.cloudinary.com/morayo/image/upload/v1608324720/man-using-ipad-xlarge_pcldso.webp" alt="a man" width="100px"/ >
                       </div>
                       </div> 
                </div>
            </div>
         );
    }
}
 
export default Demand;