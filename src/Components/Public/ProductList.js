import React from 'react';
import Product2 from './Product2'
import DataUtils from '../DataUtils'
import {Grid, Row, Col} from 'react-bootstrap'

const Number_of_row = 3

class ProductList extends React.Component {
getProductList() {
    let type = this.props.type;
    return DataUtils.getProductList(type);
}
buildProductList() {
    let productListTemp = [];
    let productData = this.getProductList();
    let productList = [];
    for (let index in productData){
        productList.push(
        <Col key={index} >
         <Product2  data = {productData[index]}/>
         </Col>
        )
    if (productList.length == Number_of_row){
            productListTemp.push(
                <Row key={"row" + index}>
                {productList}
                </Row>
            )
            productList = []
        }
    }
    if(productList.length && productList.length < Number_of_row){
        productListTemp.push(
            <Row key={"row"}>
                {productList}
                </Row>
        )
    }
    return productListTemp;
}
    render() {
        let productList = this.buildProductList()
        return (
            
                <div>
                    <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                        {productList}
                        </Col>
                    </Row>
                    </Grid>
                  
                </div>
                   
                );
        }
 }
 export default ProductList;
