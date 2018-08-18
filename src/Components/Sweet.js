import React from 'react';

class Sweet extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            <div>
                

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
