import React from 'react';
import './Footer.css'
import {Col, Button, Jumbotron,Grid,Row,Image, Panel,} from 'react-bootstrap'

class Footer extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (  
            
             <Panel bsStyle="primary">
                <Panel.Heading className="footer">
                <Grid className="footer" draggable>
                <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                <a title="123" href="#"><p>Quick Link</p></a>
                <a title="123" href="#"><p>Your Online Account</p></a>
                <a title="123" href="#"><p>Shipping Info</p></a>
                <a title="123" href="#"><p>Return Policy</p></a>
                <a title="123" href="#"><p>Membership</p></a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                <a title="123" href="#"><p>About SAWANA</p></a>
                <a title="123" href="#"><p>Store Events</p></a>
                <a title="123" href="#"><p>Find Trails</p></a>
                <a title="123" href="#"><p>Newsroom</p></a>
                <a title="123" href="#"><p>Classes & Outings</p></a>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                <a title="123" href="#"><p>Gift Cards</p></a>
                <a title="123" href="#"><p>Store Locator</p></a>
                <a title="123" href="#"><p>Wish Lists</p></a>
                <a title="123" href="#"><p>Coupons, Rebates & Discounts</p></a>
                <a title="123" href="#"><p>Free Shipping Details</p></a>
                </Col>
                
                </Row>
                </Grid>
                </Panel.Heading>
                <Panel.Body className="footer">
                <Grid>
                    <Row className="ab">
                    <Col xs={4} sm={4} md={4} lg={4}>
                    
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                    <img className="app-logo" src="/image/logo.png" />
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                    
                    </Col>
                    </Row>
                    <div className="foot">
                    <Row className="ab">
                    <Col xs={4} sm={4} md={4} lg={4}>
                        
                    CALL US AT1-800-426-4840
                    Mon–Fri, 5am–10pm PT 
                    Sat–Sun, 6am–9pm PT
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        
                    EMAIL US
                    We will respond as quickly as we can.
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                    LIVE CHAT
                    Mon–Fri, 5am–10pm PT 
                    Sat–Sun, 6am–9pm PT
                    </Col>
                    </Row>

                    <Row className="ab">
                    <Col xs={6} sm={6} md={6} lg={6}>
                    Get REI apps for shopping & adventure
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                       Social Network
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                    © 2018 Recreational Equipment, Inc. All rights reserved. REI and the REI Co-op logo are trademarks of Recreational Equipment, Inc.

                    Terms of Use  Privacy Policy - UPDATED  Interest Based Ads  Product Recalls  CA Transparency Act
                    </Col>
                    </Row>
                    </div>
                </Grid>
                </Panel.Body>
            </Panel>
                   
        );
    }
}
  export default Footer;
