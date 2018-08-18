import React from 'react';

class Vegetable extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            <div>
                

                
                <div className="list-group">
                    <a className="list-group-item active">
                        <h4 className="list-group-item-heading">List group item heading</h4>
                        <p className="list-group-item-text">Content goes here</p>
                    </a>
                </div>
                
            </div>

        );
    }
}
  export default Vegetable;
