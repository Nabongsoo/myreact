import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import DataUtils from '../DataUtils'

class MenuCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {MenuCatalogList: []};
        this.menuCatalogHandle= this.menuCatalogHandle.bind(this)
        this.buildMenuCatalog = this.buildMenuCatalog.bind(this);
    }
    componentDidMount(){
        DataUtils.getList("/api/catalog/list")
        .then(this.buildMenuCatalog);
    }

    menuCatalogHandle(event){
        let id = event.target.id;
        this.props.onMenuClick(id);
    }

    buildMenuCatalog(res)
    {
        let menuCatalog = [];
        if(res.Success && res.Data) {
            menuCatalog = res.Data;
        }
        let menuCatalogTemplate = [];
        for(let i in menuCatalog) {
            menuCatalogTemplate.push(
                <ListGroupItem key={i} id={menuCatalog[i].catalog_id} onClick={this.menuCatalogHandle}>
                    {menuCatalog[i].catalog_name}
                </ListGroupItem>
            )
        }

        this.setState({MenuCatalogList: menuCatalogTemplate});
    }

    render() {
        return (
                <div>
                    <ListGroup>
                    {this.state.MenuCatalogList}
                    </ListGroup>
                </div>
                   
                );
            }
        }
 export default MenuCatalog;
