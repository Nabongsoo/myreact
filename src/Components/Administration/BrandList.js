import React from 'react';
import {Table, Panel, Grid, Button} from 'react-bootstrap';
import './BrandList.css'
import DataUtils from '../DataUtils';

let $  = require('jquery');

class BrandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brandList: []
        };
        this.buildBrandList = this.buildBrandList.bind(this);
        this.getBrandList();
    }
    onDetail(event) {
        let ele = $(event.target);
        if(ele[0].tagName == 'TD')
            ele = ele.parent();
        let id = ele.attr('id');
        window.location.href = "/brand?id="+id;
    }
    getBrandList() {
        DataUtils.getList("/api/brand/list")
        .then(this.buildBrandList);
    }
    buildBrandList(data) {
        let brandList = [];
        if(data.Success && data.Data)
            brandList = data.Data;

        let _brandList = [];

        for(let i in brandList) {
            _brandList.push(
                <tr key={i} onDoubleClick={this.onDetail} id={brandList[i].brand_id}>
                    <td>{i + 1}</td>
                    <td>{brandList[i].brand_name}</td>
                    <td>{brandList[i].brand_company}</td>
                    <td>{brandList[i].brand_description}</td>
                </tr>
            )
        }
        this.setState({brandList: _brandList});
    }
    onCreateNew() {
        window.location.href = "/brand?id=0";
    }
    render() {
        return (
            <div>
            <Grid>
                <Panel className="page-panel" bsStyle="info">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">Thương Hiệu<Button onClick={this.onCreateNew.bind(this)} type="button" bsStyle="primary" bsSize="large" sx={1} striped bordered condensed hover>Create New</Button>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
    
                        <Table className="brand-list" striped bordered condensed hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Tên Thương Hiệu</th>
                                <th>Công Ty</th>
                                <th>Mô Tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.brandList}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
                </Grid>
            </div>
        );
    }
}

export default BrandList;