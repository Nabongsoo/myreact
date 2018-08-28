import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class MenuCatalog extends React.Component {
    constructor(_props) {
        super(_props);
        this.menuCatalogHandle= this.menuCatalogHandle.bind(this)
    }
      
    menuCatalogHandle(_event){

    }

    render() {
        return (
                <div>
                    <ListGroup>
                    <ListGroupItem onClick={this.menuCatalogHandle} >
                    Glasses 1
                    </ListGroupItem>

                    <ListGroupItem onClick={this.menuCatalogHandle}>
                     Glasses 3
                    </ListGroupItem>

                    <ListGroupItem onClick={this.menuCatalogHandle}>
                       Glasses 2
                    </ListGroupItem>
                    </ListGroup>;
                </div>
                   
                );
            }
        }
 export default MenuCatalog;
