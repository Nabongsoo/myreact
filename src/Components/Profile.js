import React from 'react'
import DataUtils from './DataUtils'
class Profile extends React.Component {
    buildUserInfo(){
        let userInfo = DataUtils.getUserInfo();
        let template = [];
        if (userInfo !=null){
            template.push(
                <div key={1}>
                    abc
                </div>
            )
        }
        return template;
    }
    render(){
        let userTemplate = this.buildUserInfo();
        return (
            <div>
                123123
                
            </div> 
        );
    }
};
export default Profile