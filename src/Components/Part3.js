import React from 'react';
import './Part3.css'
import {Col, Button, Jumbotron,Grid,Row,Image, Thumbnail} from 'react-bootstrap'

class Part3 extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }
    handleChange(){
        if (this.state.logged === true){
        window.location.href = "/sweet"
        }
    }

    render(){
        return (
            
            <Grid>
            <h2 className="heading">NEW ARRIVALS</h2>
                <Row>
                    <Col xs={12} sm={4} md={4}>
                    <a href="/sweet"><Thumbnail className="hover-shadow cursor" src="image/items/VALENTINO_VA402855_$360.00_Black&Brown.jpg" alt="242x200">   
                    </Thumbnail></a>
                    <Row className="arivals">
                    <a className="arivals" href="/sweet"><h4>Thumbnail label</h4></a>
                    <p>Description</p>
                    <Button className="arivals" bsStyle="default" onClick={this.handleChange.bind(this)}>Button</Button>
                    </Row>
                    </Col>
                
                    <Col xs={12} sm={4} md={4}>
                    <a href="/sweet"><Thumbnail className="hover-shadow cursor" src="image/items/FENDI_FF0290S58_Pink&Bronze_$500.00.jpg" alt="242x200">   
                    </Thumbnail></a>
                    <Row className="arivals">
                    <a className="arivals" href="/sweet"><h4>Thumbnail label</h4></a>
                    <p>Description</p>
                    <Button className="arivals" bsStyle="default" onClick={this.handleChange.bind(this)}>Button</Button>
                    </Row>
                    </Col>
                
                    <Col xs={12} sm={4} md={4}>
                    <a href="/sweet"><Thumbnail className="hover-shadow cursor" src="image/items/PRADA_PR21US56_Gold&Grey_$370.jpg" alt="242x200">   
                    </Thumbnail></a>
                    <Row className="arivals">
                    <a className="arivals" href="/sweet"><h4>Thumbnail label</h4></a>
                    <p>Description</p>
                    <Button className="arivals" bsStyle="default" onClick={this.handleChange.bind(this)}>Button</Button>
                    </Row>
                    </Col> 

                    <div className="row2">
                    <Col xs={12} sm={4} md={4}>
                    <a href="/sweet"><Thumbnail className="hover-shadow cursor" src="image/items/PRADA_PR16US54_Black&Grey_$290.00.jpg" alt="242x200">   
                    </Thumbnail></a>
                    <Row className="arivals">
                    <a className="arivals" href="/sweet"><h4>Thumbnail label</h4></a>
                    <p>Description</p>
                    <Button className="arivals" bsStyle="default" onClick={this.handleChange.bind(this)}>Button</Button>
                    </Row>
                    </Col> 

                    <Col xs={12} sm={4} md={4}>
                    <a href="/sweet"><Thumbnail className="hover-shadow cursor" src="image/items/BVLGARI_BV610962_Black Matte&Grey_$470.00.jpg" alt="242x200">   
                    </Thumbnail></a>
                    <Row className="arivals">
                    <a className="arivals" href="/sweet"><h4>Thumbnail label</h4></a>
                    <p>Description</p>
                    <Button className="arivals" bsStyle="default" onClick={this.handleChange.bind(this)}>Button</Button>
                    </Row>
                    </Col> 

                    <Col xs={12} sm={4} md={4}>
                    <a href="/sweet"><Thumbnail className="hover-shadow cursor" src="image/items/TIFFANY&CO_TF306164_Silver&Blue_$360.jpg" alt="242x200">   
                    </Thumbnail></a>
                    <Row className="arivals">
                    <a className="arivals" href="/sweet"><h4>TIFFANY & CO</h4></a>
                    <p>$360.00</p>
                    <Button className="arivals" bsStyle="default" onClick={this.handleChange.bind(this)}>Shop now</Button>
                    </Row>
                    </Col>
                    </div>                   
                </Row>
            </Grid>         

        );
    }
}
  export default Part3;
