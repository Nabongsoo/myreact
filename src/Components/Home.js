import React from 'react';
import Header from './Header';


class Home extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            <div>
                <Header logged={this.state.logged} onClick={(e)=>{}} />
            </div>
        );
    }
}
  export default Home;
