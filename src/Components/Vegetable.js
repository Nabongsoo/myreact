import React from 'react';
import Header from './Header';


class Vegetable extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            <div>
                <Header logged={this.state.logged} onClick={(e)=>{}} />

                
                <div className="list-group">
                    <a class="list-group-item active">
                        <h4 className="list-group-item-heading">List group item heading</h4>
                        <p className="list-group-item-text">Content goes here</p>
                    </a>
                </div>
                
            </div>

        );
    }
}
  export default Vegetable;
