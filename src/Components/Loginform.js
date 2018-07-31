import React from 'react';
import {
Col, 
FormGroup,
Checkbox,
Button,
FormControl,
ControlLabel,
Form,
} from 'react-bootstrap'

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    //Khoi tao 1 trang thai thuoc tinh date
    this.state = {data : {loginname: "", password:"" }};
  }

onSubmit(){
  console.log(123, this.state.data)
  if (this.state.data.loginname === "danthuy@yahoo.com" && this.state.data.password === "abs" ){
    this.props.onShow();
  } else {
   /* alert (
      "Login Name:" + this.state.data.loginname + 
      "\nPassword:" + this.state.data.password
    ); */
  }
}

  onHandle(event) {
    let newState = {
      data: this.state.data
    }; 

    let inputName = event.target.name;
    newState.data[inputName] = event.target.value;

    console.log(event.target.value)

    this.setState(newState);
   
  }

  render() {
    return (
      <div>
      <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl name="loginname" type="email" placeholder="Email" onChange={this.onHandle.bind(this)} />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl name="password" type="password" placeholder="Password" onChange={this.onHandle.bind(this)} />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="button" onClick={this.onSubmit.bind(this)} >Sign in</Button>
    </Col>
  </FormGroup>
</Form>
</div>
    );
  }
}

export default Loginform;
