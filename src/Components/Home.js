import React from 'react';
import "./Home.css"


let imgUrl = 'image/BACKGROUND.png'

class Home extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
           
            <div>adasdasd</div>
         /*   <div className="container-fluid">
             
            <div className="row">
                <div className="col-xs- col-sm-12 col-md- col-lg-"> 
                <section  style = {{ backgroundImage: 'url(' + imgUrl + ')', 
                backgroundSize: '1356px 758px',
                backgroundPosition: 'right top',
                backgroundRepeat: 'no-repeat',
                }}>

                <div className="row">
                <div className="col-xs- col-sm- col-md- col-lg-"> 
                <div className="Title-text">
                    <h1/>Organic House<br></br>
                </div>
                
                </div>
                </div>
                </section>
                </div>
            </div>
                
            </div> */
            
        );
    }
}
  export default Home;
