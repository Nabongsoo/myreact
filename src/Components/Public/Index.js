import React from 'react';
import MenuCatalog from './MenuCatalog'
import ProductList from './ProductList'
import {Panel, Col, Row, Grid, Breadcrumb} from 'react-bootstrap'

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
            <Breadcrumb.Item key={0} href="/">Home </Breadcrumb.Item>
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
                <div>
                <Panel bsStyle="primary" className="app-product">
                    <Panel.Heading>

                    <Panel.Title>
                    <Breadcrumb>
                      {breadcrumb}
                    </Breadcrumb>
                    </Panel.Title>

                    </Panel.Heading>

                    <Panel.Body>
                    <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={6} md={2}>
                        
                        <MenuCatalog onMenuClick={this.onMenuClick.bind(this)}/>
                        </Col>
                        <Col xs={12} md={10}>
                        <ProductList type={this.state.type}/>
                        </Col>
                    </Row>
                    </Grid>
                    </Panel.Body>
                </Panel>
 
                </div>
                   
                );
            }
        }
 export default Index;
