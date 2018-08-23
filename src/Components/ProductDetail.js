import React from 'react'
import DataUtils from './DataUtils';
import queryString from 'query-string'
import { Row, Col, Grid, Image, ListGroup, ListGroupItem, Button, ButtonToolbar, FormControl, FormGroup, ControlLabel, Panel,HelpBlock } from 'react-bootstrap'
import "./ProductDetail.css"
import CurrencyFormat from 'react-currency-format';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
class ProductDetail extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = { Id: null, info: null, isEdit: false};
        this.state.Id = this.getIdFromQueryString();
        this.state.info = this.getProduct();

    }

    onEdit(_event) {
        this.setState({isEdit:true})
    }

    buildeditproductTemplate(){
        const formInstance = (
            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
              />
              <FieldGroup id="formControlsPassword" label="Password" type="password" />
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Example block-level help text here."
              />
          
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Multiple select</ControlLabel>
                <FormControl componentClass="select" multiple>
                  <option value="select">select (multiple)</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
          
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
          
              <FormGroup>
                <ControlLabel>Static text</ControlLabel>
                <FormControl.Static>email@example.com</FormControl.Static>
              </FormGroup>
          
              <Button type="submit">Submit</Button>
            </form>
          );
          return formInstance;
    }
    
    
    componentDidMount() {
        console.log( window.jQuery(".product-image"))
       window.jQuery(".product-image").elevateZoom()
        
    }

    buildProductDetail() {
        let productDetail = [];
        let product = this.getProduct();
        if (product !== null) {
            productDetail.push(
                <div key={1}>
                    <span>Name: {product.name} </span>
                    <span>Name: {product.type} </span>
                    <span>Name: {product.price} </span>
                </div>
            );
        }
        return productDetail;
    }

    getProduct() {
        let product = null;
        if (this.state.Id !== null) {
            product = DataUtils.getProduct(this.state.Id);
        }
        return product;
    }

    getIdFromQueryString() {
        let Obj = null;
        if (this.props.location && this.props.location.search) {
            Obj = queryString.parse(this.props.location.search);
        }
        if (Obj.id) {
            Obj.id = parseInt(Obj.id);
        }

        return Obj.id || null;
    }

    buildImage() {
        let imageTemplate = [];
        if (this.state.info !== null) {
            imageTemplate.push(
                <div key={1}>
                    <Image className="product-image" src={this.state.info.image} responsive />
                    
                </div>
            )
        }
        return imageTemplate;
    }


    buildDescription() {
        let desTemp = [];
        if (this.state.info !== null) {
            let saleoffPrice = (this.state.info.price * (this.state.info.saleoff * 0.01));
            let salePrice = this.state.info.price - saleoffPrice;
            let saleoffPriceTemp = (<CurrencyFormat value={salePrice} decimalSeparator={'.'} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            )
            console.log(saleoffPrice)

            desTemp.push(
                <div key={2}>
                    <ListGroup>
                        <ListGroupItem className="des-name" header={this.state.info.name}>
                            <span className="product-name">Thuong Hieu: {this.state.info.company} </span>

                        </ListGroupItem>
                        <ListGroupItem className="des-price" header={saleoffPriceTemp}>
                            <span> Tiet kiem: {this.state.info.saleoff}% </span><br />
                            <span> Gia thi truong:
                           <span>
                                    <CurrencyFormat value={this.state.info.price} decimalSeparator={'.'} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <span>{value}</span>} />
                            </span>
                            </span>

                        </ListGroupItem>
                        <ListGroupItem header="">
                            <span dangerouslySetInnerHTML={{ __html: this.state.info.description }}></span>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            )
        }
        return desTemp
    }

    render() {
        if(this.state.isEdit === true) {
            let editTemplate = this.buildeditproductTemplate();
        return (
            <div>
            <Panel className="page-panel product-detail" bsStyle="primary" >
                <Panel.Heading>
                <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Grid fluid={false}>
                        <Row className="show-grid">
                        <Col className="product-edit"  xs={12} sm={5} md={5}>
                        {editTemplate}
                        </Col>
                        </Row>
                    </Grid>    
                </Panel.Body>
            </Panel>
            </div>
        );
    }

        let imageTemplate = this.buildImage()
        let productDetail = this.buildProductDetail();
        let desTemp = this.buildDescription();
        return (
            <div className="product-detail">
                <Grid>
                    <Row className="show-grid">
                        <Col className="detail-image" xs={12} sm={5} md={5}>
                            {imageTemplate}
                        </Col>
                        <Col className="detail-des" xs={12} md={7}>
                            {desTemp}
                        </Col>
                    </Row>
                        <Col  xs={12} sm={5} md={5} ></Col>
                        <Col  xs={12} sm={5} md={5} >
                        <ButtonToolbar>
                        <Button onClick= {this.onEdit.bind(this)} bsStyle="primary" bsSize="large">
                        Edit
                        </Button>
                        </ButtonToolbar>
                        </Col>
                </Grid>
                {productDetail}
            </div>
        )
    }

}
export default ProductDetail;

