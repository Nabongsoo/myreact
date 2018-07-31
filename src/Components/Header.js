import React from 'react';
import './Header.css';

import {
    Navbar,
    MenuItem,
    Nav,
    NavItem,
    NavDropdown,
} from 'react-bootstrap'

class Header extends React.Component {

    constructor(_props) {
        super(_props);

       // this.state = { logged: this.state.logged };

    }

    buildMenus() {
        let menus = [];
        if (this.props.logged === true) {
            menus.push((
                <Navbar.Collapse key={1}>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Our Story
                    </NavItem>
                        <NavItem eventKey={2} href="#">
                            Events
                    </NavItem>
                        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                            <MenuItem href="/Meat" eventKey={3.1}>Meat</MenuItem>
                            <MenuItem href="/Vegetable" eventKey={3.2}>Vegetable</MenuItem>
                            <MenuItem href="/Fruit" eventKey={3.3}>Fruit</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/findstore" eventKey={3.3}>Find store</MenuItem>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        <NavItem onClick={this.onLogout.bind(this)} eventKey={1}>
                            Log out
                     </NavItem>
                        <NavItem eventKey={2} href="/Signin">
                            Sign in
                     </NavItem>
                    </Nav>
                </Navbar.Collapse>
            ))
        }
        return menus;

    }


    onLogout(_event) {
        // window.location.href ="/";
       // this.setState({ logged: false });
       this.props.onLogout();
    }


    render() {
        let menus = this.buildMenus();
        
        return (
            <div fluid="true">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Home</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    {menus}
                </Navbar>
               
            </div>
        );
    }
}
export default Header;
