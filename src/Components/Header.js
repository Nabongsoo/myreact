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
                        <NavDropdown eventKey={2} title="WOMEN" id="basic-nav-dropdown">
                        <img className="exback" src="image/exback7.jpg"/>
                        <div className="dropdown">
                            <h2>Women's Glasses</h2>
                            <MenuItem href="/ourstory" eventKey={2.1}>SunGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.1}>EyeGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>New Arrivals</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>Best Sellers</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>Shop By Style</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>View All Women's Glasses</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavDropdown eventKey={3} title="MEN" id="basic-nav-dropdown">
                        <img className="exback" src="image/exback2.jpg"/>
                        <div className="dropdown">
                            <h2>Men's Glasses</h2>
                            <MenuItem href="/ourstory" eventKey={2.1}>SunGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.1}>EyeGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>New Arrivals</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>Best Sellers</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>Shop By Style</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>View All Men's Glasses</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavDropdown eventKey={4} title="KIDS" id="basic-nav-dropdown">
                        <img className="exback" src="image/exback16.jpg"/>
                        <div className="dropdown">
                            <h2>Kids's Glasses</h2>
                            <MenuItem href="/ourstory" eventKey={2.1}>SunGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.1}>EyeGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>New Arrivals</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>Best Sellers</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>Shop By Style</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.2}>View All Kids's Glasses</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavDropdown eventKey={5} title="Managerment" id="basic-nav-dropdown">
                        <img className="exback" src="image/exbacklist.jpg"/>
                        <div className="dropdown">
                            <h2>Accounts List</h2>
                            <MenuItem href="/acclist" eventKey={5.1}>Users' List</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavItem className="saleoff" eventKey={6} href="/event">Sale</NavItem>

                        <NavDropdown eventKey={7} title="Hot Items" id="basic-nav-dropdown">
                            <MenuItem href="/fruit" eventKey={7.1}>Fruit</MenuItem>
                            <MenuItem href="/vegetable" eventKey={7.2}>Vegetable</MenuItem>
                            <MenuItem href="/sweet" eventKey={7.3}>Sweet</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/findstore" eventKey={7.4}>Find store</MenuItem>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        <NavDropdown eventKey={8} title="Help" id="nav-help">
                            <NavItem eventKey={1}>
                                Contact us
                            </NavItem>
                            <NavItem eventKey={2}>
                                Shipment & Return
                            </NavItem>
                            <NavItem eventKey={3}>
                                Find store
                            </NavItem>
                            <MenuItem divider />
                        </NavDropdown>

                        <NavDropdown eventKey={9} title={this.state.userinfo.name} id="nav-profile">
                            <NavItem onClick={this.onLogout.bind(this)} eventKey={4}>
                                Log out
                            </NavItem>
                            <NavItem eventKey={5} href="/profile">
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
