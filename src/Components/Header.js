import React from 'react';
import './Header.css';
import {
    Navbar,
    MenuItem,
    Nav,
    NavItem,
    NavDropdown,
    Col,
    Panel,
    PanelBody,
    FormGroup,
    FormControl,
    Button,
    Grid,
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
                
                <Navbar.Collapse key={2}>
                   
                    <Nav className="menus" >
                        <NavDropdown eventKey={2} title="WOMEN" id="basic-nav-dropdown">
                        <img className="exback" src="image/exback7.jpg"/>
                        <div className="dropdown">
                            <h2>Women's Glasses</h2>
                            <MenuItem href="/glasses A" eventKey={2.1}>SunGlasses</MenuItem>
                            <MenuItem href="/glasses B" eventKey={2.2}>EyeGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.3}>New Arrivals</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.4}>Best Sellers</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.5}>Shop By Style</MenuItem>
                            <MenuItem href="/ourstory" eventKey={2.6}>View All Women's Glasses</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavDropdown eventKey={3} title="MEN" id="basic-nav-dropdown">
                        <img className="exback" src="image/exback2.jpg"/>
                        <div className="dropdown">
                            <h2>Men's Glasses</h2>
                            <MenuItem href="/ourstory" eventKey={3.1}>SunGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={3.2}>EyeGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={3.3}>New Arrivals</MenuItem>
                            <MenuItem href="/ourstory" eventKey={3.4}>Best Sellers</MenuItem>
                            <MenuItem href="/ourstory" eventKey={3.5}>Shop By Style</MenuItem>
                            <MenuItem href="/ourstory" eventKey={3.6}>View All Men's Glasses</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavDropdown eventKey={4} title="KIDS" id="basic-nav-dropdown">
                        <img className="exback" src="image/exback16.jpg"/>
                        <div className="dropdown">
                            <h2>Kids's Glasses</h2>
                            <MenuItem href="/ourstory" eventKey={4.1}>SunGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={4.2}>EyeGlasses</MenuItem>
                            <MenuItem href="/ourstory" eventKey={4.3}>New Arrivals</MenuItem>
                            <MenuItem href="/ourstory" eventKey={4.4}>Best Sellers</MenuItem>
                            <MenuItem href="/ourstory" eventKey={4.5}>Shop By Style</MenuItem>
                            <MenuItem href="/ourstory" eventKey={4.6}>View All Kids's Glasses</MenuItem>
                        </div>
                        </NavDropdown>

                        <NavItem className="saleoff" eventKey={6} href="/event">Sale</NavItem>
                    </Nav>

                    <Nav pullRight>
                            <NavItem className="search"><Button className="search" type="button" href='' className="glyphicon glyphicon-search"></Button><FormControl className="search" type="text" placeholder="Search" /></NavItem>
                        <NavDropdown eventKey={8} title="Help" id="nav-help">
                            <NavItem id="contact" eventKey={1}>
                                Contact us
                            </NavItem>
                            <NavItem id="shipment" eventKey={2}>
                                Shipment & Return
                            </NavItem>
                            <NavItem id="store" eventKey={3}>
                                Find store
                            </NavItem>
                            <MenuItem divider />
                        </NavDropdown>

                        <NavDropdown eventKey={9} title={this.state.userinfo.name} id="nav-profile">
                            <NavItem id="logout" onClick={this.onLogout.bind(this)} eventKey={4}>
                                Log out
                            </NavItem>
                            <NavItem id="profile" eventKey={5} href="/profile">
                                Profile
                            </NavItem>
                            <MenuItem divider />
                            <h4>Managerment</h4>
                            <NavItem href="/acclist" eventKey={5.1}>
                                Users' List
                            </NavItem>
                            <NavItem href="/abc" eventKey={5.2}>
                               ABC
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

    handleChange(){
        window.location.href = "/glasses A"
    }
   
    render() {
        let menus = this.buildMenus();
        let headerTemplate = []

        if (this.state.logged === true && window.location.pathname != "/login") {
            menus = this.buildMenus();
            headerTemplate.push((
                <Grid key={4}>       
                <Navbar key={1} fluid={true} fixedTop={true} inverse collapseOnSelect >
                    <Panel className="saleoffpromotion" onClick={this.handleChange.bind(this)}>
                        <Panel.Body>Basic panel example</Panel.Body>
                    </Panel>
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
                </Grid>
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
