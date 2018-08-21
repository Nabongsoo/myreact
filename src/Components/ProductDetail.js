import React from 'react'
import DataUtils from './DataUtils';
import queryString from 'query-string'
import { Row, Col, Grid, Image, ListGroup, ListGroupItem } from 'react-bootstrap'
import "./ProductDetail.css"
import CurrencyFormat from 'react-currency-format';

class ProductDetail extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = { Id: null, info: null };
        this.state.Id = this.getIdFromQueryString();
        this.state.info = this.getProduct();

    }

    componentDidMount() {

    }

    buildProductDetail() {
        let productDetail = [];
        let product = this.getProduct();
        if (product != null) {
            productDetail.push(
                <div>
                    <span>Name: {product.name} </span>
                    <span>Name: {product.type} </span>
                    <span>Name: {product.price} </span>
                </div>
            );
        }
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
                    <Image src={this.state.info.image} responsive />
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

