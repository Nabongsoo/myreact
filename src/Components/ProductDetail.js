import React from 'react'
import DataUtils from './DataUtils';
import queryString from 'query-string'
import { Row, Col, Grid, Image, ListGroup, ListGroupItem, Button, FormControl, FormGroup, ControlLabel, Panel,HelpBlock } from 'react-bootstrap'
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
        if (this.state.Id === 0){
            this.state.isEdit = true;

        }
        this.state.info = this.getProduct();
        this.handleChange = this.handleChange.bind(this);

    }

    onEdit(_event) {
        this.setState({isEdit:true})
    }

    onRemove(_event){
        DataUtils.removeProduct(this.state.info);
    }

    onSave(_event) {
        if(this.state.info.id === 0){
            DataUtils.createProduct(this.state.info);
        }else {
            DataUtils.saveProduct(this.state.info)
        }
       
    }

    buildeditproductTemplate(){
        const formInstance = (
            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                name="name"
                label="Product's Name"
                placeholder="Enter Product's Name"
                defaultValue = {this.state.info.name}
                onChange={this.handleChange}
              />

              <FieldGroup
                id="formControlsimage"
                type="img"
                label="Image"
                name="img"
                defaultValue = {this.state.info.img}
                onChange={this.handleChange}
              />

              <FieldGroup
                id="formControlsSaleoff"
                type="number"
                label="Price"
                name="price"
                placeholder="Enter Price"
                defaultValue = {this.state.info.price}
                onChange={this.handleChange}
              />

              <FieldGroup
                id="formControlsBrand"
                type="text"
                label="Brand"
                name="Brand"
                placeholder="Enter Brand"
                defaultValue = {this.state.info.company}
                onChange={this.handleChange}
              />

               <FieldGroup
                id="formControlsDes"
                type="text"
                label="Description"
                placeholder="Enter description"
                defaultValue = {this.state.info.description}
                onChange={this.handleChange}
              />
              
              <Button type="submit" onClick={this.onSave.bind(this)}> Submit</Button>
            </form>
          );
          return formInstance;
    }
    
    
    componentDidMount() {
        console.log( window.jQuery(".product-image"))
        window.jQuery(".product-image").elevateZoom()
        
    }

    handleChange(_e){
        let name = _e.target.name;
        let _info = this.state.info;
        _info[name] = _e.target.value;
        this.setState({info: _info});
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
        if (this.state.Id !== 0) {
            product = DataUtils.getProduct(this.state.Id);
        } else {
            product = {
               
                id: 0,
                name:"",
                image:"",
                price: 0,
                type:"",
                company: "",
                saleoff: 0,
                description:""
            
            }
        }
        return product;
    }

    getIdFromQueryString() {
        let Obj = null;
        if (this.props.location && this.props.location.search) {
            Obj = queryString.parse(this.props.location.search);
        }
        if (Obj.id !== undefined) {
            Obj.id = parseInt(Obj.id);
        }

        return Obj.id !== undefined?Obj.id: null;
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
            let saleoffPriceTemp = (<CurrencyFormat value={salePrice} decimalSeparator={'.'} displayType={'text'} thousandSeparator={true} prefix={'$'} />);

            let HeaderProduct = (
            <div>
                <span>{this.state.info.name}</span>
                <span className="product-detail-tool product-detail-edit"><a href="javascript:void(0)" onClick= {this.onEdit.bind(this)}>Edit</a></span>
                <span className="product-detail-tool product-detail-detele"><a href="javascript:void(0)" onClick= {this.onRemove.bind(this)}>Remove</a></span>
            </div>

            );

        
            console.log(saleoffPrice)

            
            desTemp.push(
                <div key={2}>
                    <ListGroup>
                        <ListGroupItem className="des-name" header={HeaderProduct} >
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
                        
                </Grid>
                {productDetail}
            </div>
        )
    }

}
export default ProductDetail;

