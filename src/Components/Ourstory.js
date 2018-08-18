import React from 'react';
import { Table } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import DataUtils from './DataUtils';

class Ourstory extends React.Component {
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
                            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                        <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
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
          export default Ourstory;
