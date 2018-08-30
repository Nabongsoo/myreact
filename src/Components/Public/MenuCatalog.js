import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class MenuCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.menuCatalogHandle= this.menuCatalogHandle.bind(this)
    }
      
    menuCatalogHandle(event){
        let id = event.target.id;
        this.props.onMenuClick(id);
    }

    render() {
        return (
                <div>
                    <ListGroup>
                    <ListGroupItem id={1} onClick={this.menuCatalogHandle} >
                    Glasses 1
                    </ListGroupItem>

                    <ListGroupItem id={2} onClick={this.menuCatalogHandle}>
                     Glasses 2
                    </ListGroupItem>

                    <ListGroupItem id={3} onClick={this.menuCatalogHandle}>
                    Glasses 3
                    </ListGroupItem>
                    </ListGroup>;
                </div>
                   
                );
            }
        }
 export default MenuCatalog;
