import React from 'react';
import {Jumbotron, Thumbnail , Image, Button} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import './Product2.css'

class Product2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                    id: 1,
                    name:"Nike COrtez Red-White",
                    image:"image/RW.jpg",
                    price: 70,
                    type:"Shoes",
                    company: "Nike",
                    saleoff: 50,
                    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            }
            
        };
        if(props.data) {
            this.state.data = props.data;
        }
    }
    render() {
            let saleoffPrice = (this.state.data.price * (this.state.data.saleoff * 0.01));
            let salePrice = this.state.data.price - saleoffPrice;
            let realprice = (<CurrencyFormat value={this.state.data.price} decimalSeparator={'.'} displayType={'text'} thousandSeparator={true} prefix={'$'} />);
            let saleprice = (<CurrencyFormat value={salePrice} decimalSeparator={'.'} displayType={'text'} thousandSeparator={true} prefix={'$'} />);

        return (
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-3">
            <div className="thumbnail">
                
                    
                    <Image src={this.state.data.image} responsive />
                    

                    <h1>Hello, world!</h1>

                    <p>
                        <span>{this.state.data.name}</span>
                    </p>

                    <p>
                    <span className="real-price" > {realprice} </span>
                    <span className="saleoff-price" >{this.state.data.saleoff}%</span><br/>
                   
                    <span className="sale-price" >{saleprice}</span>
                    <Button>Lien he</Button>
                    </p>
                    
            </div>
            </div>
               
                   
                );
            }
        }
 export default Product2;
