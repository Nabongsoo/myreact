import React from 'react';
import DataUtils from './DataUtils';
import './Fruit.css';
import {Panel, Table} from 'react-bootstrap';
import $ from 'jquery'
class Fruit extends React.Component {
    constructor(_props) {
        super(_props);
        this.onDetail = this.onDetail.bind(this)
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
                    <td>{ProductList[i].image}</td>
                    <td>{ProductList[i].name}</td>
                    <td>{ProductList[i].type}</td>
                    <td>{ProductList[i].price}</td>
                    <td>{ProductList[i].description}</td>
                </tr>
            )
        }
        return productList
    }

    render() {
        let productList = this.buildProductList();
        return (
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList}
                        </tbody>
                    </Table>
                </Panel.Body>
            </Panel>

        );
    }
}
export default Fruit;
