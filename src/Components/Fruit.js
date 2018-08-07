import React from 'react';
import Header from './Header'

class Fruit extends React.Component {
    constructor(_props){
        super(_props);
        this.state = {logged: true};
        }
   
     render(){
        return (
            <div>
            <Header logged={this.state.logged} onClick={(e)=>{}} /> 
            
            <div class="row">
            
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
            </div>
            
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            
                <div className="thumbnail">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/fruit-salad-horizontal-jpg-1522181219.jpg" alt="fruit"/>
                    <div className="caption">
                        <h2>Title</h2>
                        <p>
                            ...
                        </p>
                        <p>
                            <a  className="btn btn-primary">Buy now</a>
                            <a  className="btn btn-default">Add to card</a>
                        </p>
                    </div>
                </div>

                <div className="thumbnail">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/fruit-salad-horizontal-jpg-1522181219.jpg" alt="fruit"/>
                    <div className="caption">
                        <h2>Title</h2>
                        <p>
                            ...
                        </p>
                        <p>
                            <a  className="btn btn-primary">Buy now</a>
                            <a  className="btn btn-default">Add to card</a>
                        </p>
                    </div>
                </div>

                <div className="thumbnail">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/fruit-salad-horizontal-jpg-1522181219.jpg" alt="fruit"/>
                    <div className="caption">
                        <h2>Title</h2>
                        <p>
                            ...
                        </p>
                        <p>
                            <a  className="btn btn-primary">Buy now</a>
                            <a  className="btn btn-default">Add to card</a>
                        </p>
                    </div>
                </div>
                
            </div>
                
            </div>
            </div>
           
        );
    }
}
  export default Fruit;
