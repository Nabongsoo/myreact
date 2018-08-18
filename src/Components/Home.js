import React from 'react';

class Home extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        
                        <input type="date" name="" id="input${1/(\w+)/\u\1/g}" className="form-control" value="" required="required" title=""/>
                        
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        
                        <img src="https://pay.google.com/about/static/images/social/og_image.jpg" className="img-responsive" alt="Image"/>
                        
                    </div>
                </div>
                
            </div>
            
        );
    }
}
  export default Home;
