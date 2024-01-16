import React from "react";
import { Form, Input } from "antd";

function LinkedInInfo() {
    return (
        <div>
          <Form.Item
            name="linkedinlink"
            label="LinkedIn Info (Enter Public Badge)"
          
          >
            <p style={{fontSize:'15px', paddingLeft:'10px',fontFamily:'serif',background:'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)',color:'#ffffff',width:'60%',padding:'10px'}}>Promote your profile by adding a badge to your blog, online resume, or website
            <br />Step 1: From your profile, click on See contact info
            <br />Step 2: Click on the pencil to edit
            <br />Step 3: Click on the arrow next to your LinkedIn Profile URL
            <br />Step 4: Scroll and click on the create the public profile badge button
            <br />Step 5: Choose a badge from the options below, copy and paste the code (includes a link to your public profile)
            </p>
            
            <Input placeholder="<div class=badge-base LI-profile-badge data-locale=en_US data-theme=light data-type=VERTICAL data-vanity Fathi-The-Great data-version=v1><a class=badge-base__link LI-simple-link" style={{marginTop:'20px'}}/>
            
          </Form.Item>
        </div>
   );
}

export default LinkedInInfo;