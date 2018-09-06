import React from 'react';
import {Jumbotron, Thumbnail , Image, Button, Grid, Col, Row} from 'react-bootstrap';
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
        let salesOffPrice = parseFloat(this.state.data.inventory_price) * (parseFloat(this.state.data.inventory_saleoff)*0.01);
        let salePrice = (<CurrencyFormat value={parseFloat(this.state.data.inventory_price) - salesOffPrice} decimalSeparator={'.'} displayType={'text'} thousandSeparator={','} prefix={'$'} />);
        let realPrice = (<CurrencyFormat value={parseFloat(this.state.data.inventory_price)} decimalSeparator={'.'} displayType={'text'} thousandSeparator={','} prefix={'$'} />);

        return (
            <div>
                <Grid>
                    <Row>
                        <Thumbnail className="product-item" src={this.state.data.inventory_img} alt="171x180">
                    <h3 className="item">{this.state.data.inventory_name}</h3>
                    <p className="product-item-price">
                        <span className="real-price">
                            { realPrice }
                        </span>
                        <span className="saleoff-price">
                            -{parseFloat(this.state.data.inventory_saleoff)}%
                        </span> <br/>
                        <span className="sale-price">
                            { salePrice }
                        </span>
                        <br/>
                        
                    </p>
                    <p className="buttonitem">
                        <Button className="detail" bsStyle="default">Detail</Button>    
                        <Button className="buynow" bsStyle="default">Buy now</Button>
                    </p>
                </Thumbnail>
                    </Row>
                </Grid>
                
            </div>
        );
        }
        }
 export default Product2;
