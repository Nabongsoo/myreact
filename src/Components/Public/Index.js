import React from 'react';
import MenuCatalog from './MenuCatalog'
import ProductList from './ProductList'
import {Panel, Col, Row, Grid} from 'react-bootstrap'

class Index extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = {
            path:"",
            type:0,
        }
    }

    onMenuClick(id){
        this.setState (
            
        )
    }

    buildBreadcrumb(){
        let template = [];
        template.push(
            <Breadcrumb.Item key={0} href="/">Home </Breadcrumb.Item>
        )
        let template = [];
        template.push(
            <Breadcrumb.Item key={0} href="/">Home </Breadcrumb.Item>
        )
    }

    render() {

        return (
                <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>

                    <Panel.Title componentClass="h3">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{this.state.path}</Breadcrumb.Item>
                        </Breadcrumb>;
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
