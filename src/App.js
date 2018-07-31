import React from 'react';
import './App.css'
import Loginform from './Components/Loginform';
import Header from './Components/Header';

class App extends React.Component {
  constructor(_props) {
    super(_props);
    this.state = { logged: false };
  }

    onLogged() {
      this.setState({ logged: true });
    }

    onLogout(){
      this.setState({ logged: false });
    }

    buildLoginform() {
      let LoginForm = [];
      if (this.state.logged === false) {
        LoginForm.push((<Loginform onShow={this.onLogged.bind(this)} key={1} />))
      }
      return LoginForm;
    }
    
      render() {
        let Loginform = this.buildLoginform();
        return (
          <div>
            <Header logged={this.state.logged} onLogout={this.onLogout.bind(this)} />
            {Loginform}
          </div>
        );
      }
    }
  
  export default App;
