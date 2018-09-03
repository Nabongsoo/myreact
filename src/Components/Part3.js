import React from 'react';
import './Part3.css'
import {Col, Button, Jumbotron,Grid,Row,Image} from 'react-bootstrap'

class Part3 extends React.Component {
    constructor(_props){
    super(_props);
    
    }

    render(){
        return (
            <div className="container">
            <Grid>
                <Row>
                    <Col className="part3" xs={12} sm={12} md={6} lg={6}>
                        <img className="part3" src="image/RW.jpg"/>
                        <div className="carousel-caption">
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <img className="part3"  src="image/RW.jpg"/>
                        <div className="carousel-caption">
                        <h1 className="slide1">Example headline.</h1>
                        <p>
                        Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.
                        </p>
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                        </div>
                    </Col>
                </Row>
            </Grid>;
            </div>

        );
    }
}
  export default Part3;
