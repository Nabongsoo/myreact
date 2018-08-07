import React from 'react';
import Header from './Header';


class Sweet extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            <div>
                <Header logged={this.state.logged} onClick={(e)=>{}} />

                <div>
                    
                    <div className="jumbotron">
                        <div className="container">
                            <h1>Hello, world!</h1>
                            <p>Contents ...</p>
                            <p>
                                <a className="btn btn-primary btn-lg">Learn more</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>

        );
    }
}
  export default Sweet;
