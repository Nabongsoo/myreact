import React from 'react';
import DataUtils from './DataUtils';
import './ABC.css';
import {Panel, Table, Button, Grid, Row, Col} from 'react-bootstrap';
import $ from 'jquery'

class ABC extends React.Component {
    constructor(_props) {
        super(_props);
        this.onDetail = this.onDetail.bind(this)
    }

    onDetail(event){
        console.log("event")
        let Id = $(event.target).parent().attr("id");
        window.location.href = "/productdetail?id="+Id;
    }
    
    onCreateNew (event){
        window.location.href = "/productdetail?id=0";
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
            <div className="container">
            <Grid>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Panel heading
                    <Button type="button" 
                    onClick={this.onCreateNew.bind(this)} bsStyle="primary" bsSize="large">
                    Create New</Button>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                    <Col xs={12} sm={12}>
                    <Table striped bordered condensed hover >
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
                    </Col>
                    </Row>
                </Panel.Body>
            </Panel>
            </Grid>
            </div>
        );
    }
}
export default ABC;
