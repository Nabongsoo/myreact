import React from 'react';
import DataUtils from './DataUtils';
//import './ProductListM.css';
import {Panel, Table, Button, ButtonToolbar} from 'react-bootstrap';
import $ from 'jquery'

class ProductListM extends React.Component {
    constructor(_props) {
        super(_props);
        this.onDetail = this.onDetail.bind(this)
    }

    onCreateNew (event){
        window.location.href = "/productdetail?id=0";
    }

    onDetail(event){
        console.log("event")
        let Id = $(event.target).parent().attr("id");
        window.location.href = "/productdetail?id="+Id;
    }
    

    buildProductList() {
        let ProductList = DataUtils.getProductList()
        let productList = [];

        for (let i in ProductList) {
            productList.push(
                <tr key={i} id={ProductList[i].id} onDoubleClick={this.onDetail}>
                    <td>{parseInt(i) + 1}</td>
                    <td>{ProductList[i].img}</td>
                    <td>{ProductList[i].name}</td>
                    <td>{ProductList[i].type}</td>
                    <td>{ProductList[i].price}</td>
                    <td>{ProductList[i].description}</td>
                    <td>{ProductList[i].saleoff}</td>
                </tr>
            )
        }
        return productList
    }

    render() {
        let productList = this.buildProductList();
        return (
            
            <div className="container">

            
            <Panel.Collapse>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Products' List
                    <Button type="button" 
                    onClick={this.onCreateNew.bind(this)} bsStyle="primary" bsSize="large">
                    Create New</Button></Panel.Title>
                </Panel.Heading>

                <Panel.Body>
                    <Table striped bordered condensed hover >
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Sale off</th>

                            </tr>
                        </thead>
                        <tbody>
                            {productList}
                        </tbody>
                    </Table>
                </Panel.Body>
                </Panel.Collapse>
            
            </div>
        );
    }
}
export default ProductListM;
