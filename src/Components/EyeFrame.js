import React from 'react';
import './EyeFrame.css'
import {Col, Button, Jumbotron,Grid,Row,Image, Thumbnail, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup className="framefit" controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class EyeFrame extends React.Component {
    constructor(_props){
    super(_props);
    
    }

    render(){
        return (
            <Grid className="container">
                <Row>
                <Col className="framefit" xs={12} sm={12} md={12} lg={12}> 
                <Thumbnail className="framefit" src="image/framefit.jpg" alt="242x200">
                
                </Thumbnail> 
                <h2>"Upload your image"</h2>
                <FieldGroup
                id="formControlsFile"
                type="file"
                
                help="123456"
                />
                </Col>
                
                </Row>
            </Grid>

        );
    }
}
  export default EyeFrame;
