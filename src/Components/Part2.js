import React from 'react';
import './Part2.css'
import {Col, Button, Jumbotron,Grid,Row,Image, Pager, Item} from 'react-bootstrap'

class Part2 extends React.Component {
    constructor(_props){
    super(_props);
    
    }

    render(){
        return (
            <Grid className="part2">
            <Pager className="part2">
            
            <h4 className="Shopbybrand" >Shop by Brand</h4>
            
            <Pager.Item className="ViewAll" next href="#" >
                View All &rarr;
            </Pager.Item>
            </Pager>
                <Row className="part2a">
                <a href="/sweet"><Col className="part2" xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/versace_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/bulgari_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/coach_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/dior_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col className="part2" xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/dolcegabbana_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col className="part2" xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/gucci_bl_18.jpg" responsive/>
                    </Col></a>
                </Row>
                <Row className="part2b">
                <a href="/sweet"><Col className="part2" xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/giorgio-armani_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/michael_kors_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/oakley_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/oliver_peoples_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col className="part2" xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/persol_bl_18.jpg" responsive/>
                    </Col></a>
                <a href="/sweet"><Col className="part2" xs={4} sm={4} md={2} lg={2}>
                    <Image className="imagepart2"  src="image/brand/ray-ban_wt_18.jpg" responsive/>
                    </Col></a>
                </Row>
            </Grid>

        );
    }
}
  export default Part2;
