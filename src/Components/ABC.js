import React from 'react';
import DataUtils from './DataUtils';
import './ABC.css';
import {Panel, Table, Button, Grid, Row, Col} from 'react-bootstrap';
import $ from 'jquery'

class ABC extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = {DataList: []};
        this.onDetail = this.onDetail.bind(this)
        this.buildProductList = this.buildProductList.bind(this);
    }

    componentDidMount() {
        this.loadProductList();
    }

    onDetail(event){
        let Id = $(event.target).parent().attr("id");
        window.location.href = "/productdetail?id="+Id;
    }

    loadProductList() {
        DataUtils.getList("/api/inventory/list", "")
        .then(this.buildProductList);
    }

    onCreateNew (event){
        window.location.href = "/productdetail?id=0";
    }

    buildProductList(res) {
        if(res.Success == false)
            return [];
        let ProductList = res.Data; //DataUtils.getProductList()
        let _productList = [];

        for (let i in ProductList) {
            _productList.push(
                <tr key={i} id={ProductList[i].inventory_id} onDoubleClick={this.onDetail}>
                    <td>{parseInt(i) + 1}</td>
                    <td>{ProductList[i].inventory_name}</td>
                    <td>{ProductList[i].inventory_catalog}</td>
                    <td>{ProductList[i].inventory_price}</td>
                    <td>{ProductList[i].inventory_description}</td>
                </tr>
            )
        }
        this.setState({DataList: _productList});
        //return productList
    }

    render() {
        //let productList = this.buildProductList();
        return (
            <div>
            <Grid>
            <Panel bsStyle="primary" bsStyle="info">
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
                    <Table striped bordered condensed hover responsive>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product Name</th>
                                <th>Catalog</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.DataList}
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
