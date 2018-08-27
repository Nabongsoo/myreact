import React from 'react';
import DataUtils from './DataUtils'
import './Loginform.css'
import {
  Label,
  Col,
  FormGroup,
  Checkbox,
  Button,
  FormControl,
  ControlLabel,
  Form,
} from 'react-bootstrap';

let imgUrl = 'image/plantback.jpeg';

class Loginform extends React.Component {
  constructor(_props) {
    super(_props);
    //Khoi tao 1 trang thai thuoc tinh data
    this.state = {
      data: { loginname: "", password: "" },
      logged: false
    };

    let session = this.getSession();
    if (session !== null) {
      this.state.logged = true;
    }
    console.log(this.state)
    this.onKeyDownHandle = this.onKeyDownHandle.bind(this);
  }

  onKeyDownHandle(event) {
    if (event.keyCode == 13) {
      this.onSubmit(event, 13);
    }
  }

  componentWillMount(_event) {
    if (this.state.logged === true) {
      window.location.href = "/";
    }
  }

  getSession() {
    let session = window.localStorage.getItem("session");
    if (session != null) {
      return JSON.parse(session);
    }
    return null;
  }

  onSubmit(_event, _keyCode) {
    console.log(123, this.state.data)
    if (this.state.data.loginname === "" && this.state.data.password === "") {
      alert("NOPE");
    } else {
      let userInfo = DataUtils.checkUser(this.state.data.loginname, this.state.data.password);
      if (userInfo !== null) {
        window.localStorage.setItem("session", JSON.stringify(userInfo));
        window.location.href = "/";
      }

    };

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
    
      <div className="Login">
      <section  style = {{ backgroundImage: 'url(' + imgUrl + ')', 
                backgroundSize: '1356px 758px',
                backgroundPosition: 'right top',
                backgroundRepeat: 'no-repeat',
                }}></section>
        
        <Form className="form-horizontal" horizontal>
        <legend><h1 className="login">ADMINISTRATION</h1></legend>
        
          <FormGroup className="Email" controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel}  sm={2}  >
              Email
            </Col>
            <Col sm={10} md={10}>
              <FormControl onKeyUp={this.onKeyDownHandle.bind(this)} name="loginname" type="email" placeholder="Email" onChange={this.onHandle.bind(this)} />
            </Col>
          </FormGroup>

          <FormGroup className="Pass" controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10} md={10}>
              <FormControl onKeyUp={this.onKeyDownHandle.bind(this)} name="password" type="password" placeholder="Password" onChange={this.onHandle.bind(this)} />
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
      </div>
      
    );
  }
}

export default Loginform;
