import { Form, Input } from "antd";
import React from "react";
import { Space, Typography } from 'antd';
const { Text, Link } = Typography;


function GithubInfo() {
  const gh=`<div className="github-profile-badge" data-user="Fathi-The-Great" style={{ display:'flex',justifyContent:'center',paddingTop:'10px' }} ></div>`
    return (
        <div>
          <Form.Item
            name="githublink"
            label="Enter Github Username"
          
          >   

            
             
            <Input/>
          </Form.Item>
        </div>
   );
}

export default GithubInfo;