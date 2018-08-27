import React from 'react';
import { Table, Panel, Button, ButtonToolbar } from "react-bootstrap";
import './AccList.css'
import DataUtils from './DataUtils';

class AccList extends React.Component {
    constructor(_props) {
        super(_props);
    }

    buildAccountlist() {
        let Accountlist = DataUtils.getUserList()
        let accountList = [];
        for (let i in Accountlist) {
            accountList.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{Accountlist[i].firstname}</td>
                    <td>{Accountlist[i].lastname}</td>
                    <td>{Accountlist[i].email}</td>
                </tr>
            )
        }
        return accountList
    }

    render() {
        let accountList = this.buildAccountlist();
        return (
       
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <span><Panel.Title componentClass="h5">ACCOUNTLIST<Button type="button" bsStyle="primary" bsSize="large" sx={1}>
                                Create New
                            </Button></Panel.Title></span>
                    
                        </Panel.Heading>
              
                        <Panel.Body>
                        <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>NO.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            {accountList}
                        </tbody>

                        </Table>
                        </Panel.Body>

                    </Panel>

                );
            }
        }
          export default AccList;
