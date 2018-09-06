import React from 'react';
import './Part4.css'
import {Col, Button, Jumbotron,Grid,Row,Image} from 'react-bootstrap'

class Part4 extends React.Component {
    constructor(_props){
    super(_props);
    
    }

    render(){
        return (
            
            <Grid>
                <Row>
                    <Col className="part4a" xs={12} sm={12} md={6} lg={6}>
                        <img className="part4" src="image/pexels-photo-762080.jpeg"/>
                        <div className="carousel-caption" draggable>
                        <h3 className="img1">Hello, world!</h3>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p className="button"><Button className="btn btn-lg btn-default" href="#" role="button">Sign up today</Button></p>
                        </div>
                    </Col>
                    <Col className="part4b" xs={12} sm={12} md={6} lg={6}>
                        <img className="part4"  src="image/back3.jpeg"/>
                        <Grid>
                        <div className="carousel-caption" draggable>
                        <h3 className="img2">Example headline.</h3>
                        <p>
                        Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.
                        </p>
                        <p className="button" ><Button className="btn btn-lg btn-default" href="#" role="button">Sign up today</Button></p>
                        </div>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
            

        );
    }
}
  export default Part4;
