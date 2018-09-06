import React from 'react';
import MenuCatalog from './MenuCatalog'
import ProductList from './ProductList'

import {Panel, Col, Row, Grid, Breadcrumb, } from 'react-bootstrap'
import './Index.css'

class Index extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = {
            path:"",
            type:0,
        }
        if (this.props.type != undefined){
            this.state.type = this.props.type;
        }
    }

    onMenuClick(id){
        this.setState ({
            type: id
        })
    }

    buildBreadcrumb(){
        let template = [];
        template.push(
            <Breadcrumb.Item key={0} href="/glasses A">Home </Breadcrumb.Item>
        )
        if(this.state.path != "") {
            template.push(
                <Breadcrumb.Item key={1} href="#">Trang Chủ</Breadcrumb.Item>
            )
            }
            return template;
        }

    render() {
        let breadcrumb = this.buildBreadcrumb();
        return (  
                <div className="container-fluid">
                <Col xs={12}>
                <Row>
                    <Panel.Heading>
                        <Panel.Title>
                        <Breadcrumb>
                        {breadcrumb}
                        </Breadcrumb>
                        </Panel.Title>
                    </Panel.Heading>
                </Row> 
                    <Panel.Body>
                    <Grid className="menucatalog" fluid={true}>
                    <Row className="show-grid">
                        <Col xs={12} md={2}>
                        
                        <MenuCatalog onMenuClick={this.onMenuClick.bind(this)}/>
                        </Col>
                        <Col xs={12} md={10}>
                        <ProductList type={this.state.type}/>
                        
                        </Col>
                    </Row>
                    </Grid>
                    </Panel.Body>
                    </Col>
                    </div>
                    
                );
            }
                }
 export default Index;
