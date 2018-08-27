import React from 'react';
import "./Home.css"


let imgUrl = 'image/back1.jpg'

class Home extends React.Component {
    constructor(_props){
    super(_props);
    this.state = {logged: true};
    }

    render(){
        return (
            
            <div className="container-fluid">


            <div id="carousel-id" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item">
                        <img data-src="holder.js/1558x889/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="image/back10.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="slide1">Example headline.</h1>
                                <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img data-src="holder.js/1558x889/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="image/back6.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="item active">
                        <img data-src="holder.js/1558x889/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="image/back1.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
             
            </div>
            
        );
    }
}
  export default Home;
