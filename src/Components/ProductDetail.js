import React from 'react'
import DataUtils from './DataUtils';
import queryString from 'query-string'

class ProductDetail extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = {Id:null};
        this.state.Id = this.getIdFromQueryString();
    }

    componentDidMount(){

    }

    buildProductDetail(){
        let productDetail = [];
        let product = this.getProduct();
        if(product != null){
            productDetail.push(
                <div>
                    <span>Name: {product.name} </span>
                    <span>Name: {product.type} </span>
                    <span>Name: {product.price} </span>
                </div>
            );
        }
    }

    getProduct(){
        let product = null;
        if(this.state.Id != null){
            product = DataUtils.getProduct(this.state.Id);
        }
        return product;
    }

    getIdFromQueryString(){
        let Obj = null;
        if(this.props.location && this.props.locarion.search) {
            Obj = queryString.parse(this.props.location.search);
        }
        if(Obj.id){
            Obj.id = parseInt(Obj.id);
        }
        return Obj.id || null;
    }
        render() {
            let productDetail = this.buildProductDetail();
            return (
               <div> {productDetail} </div>
            )
        }
}
export default ProductDetail;

