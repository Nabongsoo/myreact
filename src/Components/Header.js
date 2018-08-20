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
        this.state = {
            logged: false,
            userinfo: {
                email: "",
                name: ""
            }
        };
        // this.state = { logged: this.state.logged };

        let session = this.getSession();
        if (session !== null) {
            this.state.userinfo.email = session.email;
            this.state.userinfo.name = session.name;
            this.state.logged = true;
        }
       
    }

    componentDidMount() {
        if (this.state.logged === false) {
            if (window.location.pathname != "/login") {
                window.location.href = "/login";
            }
        }
    }

    getSession() {
        let session = window.localStorage.getItem("session");
        if (session != null) {
            return JSON.parse(session);
        }
        return null;
    }

    buildMenus() {
        let menus = [];
        if (this.props.logged === true) {
            menus.push((
                <Navbar.Collapse key={1}>
                    <Nav>
                        <NavDropdown eventKey={3} title="Managerment" id="basic-nav-dropdown">
                            <MenuItem href="/ourstory" eventKey={3.1}>UserList</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="/event">
                            Events
                    </NavItem>
                        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                            <MenuItem href="/fruit" eventKey={3.1}>Fruit</MenuItem>
                            <MenuItem href="/vegetable" eventKey={3.2}>Vegetable</MenuItem>
                            <MenuItem href="/sweet" eventKey={3.3}>Sweet</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/findstore" eventKey={3.3}>Find store</MenuItem>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        <NavDropdown eventKey={4} title={this.state.userinfo.name} id="nav-profile">
                            <NavItem onClick={this.onLogout.bind(this)} eventKey={1}>
                                Log out
                     </NavItem>
                            <NavItem eventKey={2} href="/profile">
                                Profile
                     </NavItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            ))
        }
        return menus;

    }

    onLogout(_event) {
        window.localStorage.removeItem("session");
        window.location.href = "/login"; //dc defined trong AppRouter
        _event.preventDefault();
        // this.setState({ logged: false });
        // this.props.onLogout();
    }

    render() {
        let menus = this.buildMenus();
        let headerTemplate = [];
        if (this.state.logged === true && window.location.pathname != "/login") {
            menus = this.buildMenus();
            headerTemplate.push((
                <Navbar key={1} fluid={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">
                                <img className="app-logo" src="/image/logo.png" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    {menus}
                </Navbar>

            ));
        }

        return (
            <div>
                {headerTemplate}
            </div>
        );
    }
}
export default Header;
