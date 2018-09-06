import React from 'react';
import Product2 from './Product2'
import DataUtils from '../DataUtils'
import {Grid, Row, Col} from 'react-bootstrap'

const Number_of_row = 3

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {ProductList: []};
        this.buildProductList = this.buildProductList.bind(this);
    }

componentDidMount() {
    this.getProductList();
}

componentWillReceiveProps(props) {
        
    if(props.type != this.props.type) {console.log(3535)
        this.getProductList();
    }
}

getProductList() {
    let type = this.props.type || null;
    let filter = null;
    if(type)
        filter = {"catalog_id": type};
        DataUtils.getList("/api/inventory/list", filter)
        .then(this.buildProductList);
}

buildProductList(res) {
    let productListTemplate = [];
    let productData = []
    if(res.Success && res.Data)
            productData = res.Data;
            
    let productList = [];
    for (let index in productData){
        productList.push(
        <Col key={index} >
         <Product2  data = {productData[index]}/>
         </Col>
        )
    if (productList.length == Number_of_row){
            productListTemplate.push(
                <Row key={"row" + index}>
                {productList}
                </Row>
            )
            productList = []
        }
    }
    if(productList.length && productList.length < Number_of_row){
        productListTemplate.push(
            <Row key={"row"}>
                {productList}
                </Row>
        )
    }
    this.setState({ProductList: productListTemplate});
}
    render() {
        
        return (
            
                <div style={{marginTop: '10px'}}>
                    <Grid>
                        {this.state.ProductList}        
                    </Grid>   
                </div>
                   
                );
        }
 }
 export default ProductList;
