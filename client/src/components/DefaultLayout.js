import { Button, Dropdown, Menu,Image } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { CaretDownOutlined   } from "@ant-design/icons";
import logoimg from "./logo.png";


function DefaultLayout(props) {
  
  // to exchange data from server
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));


  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
       {/* navigates to home page */}
      <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
      {/* navigates to profile page */}
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
      {/* navigates to print card page */}
        <Link to="/Vcard" >Print Card</Link>
      </Menu.Item>
      <Menu.Item
      // logout from the current account
        onClick={() => {
          localStorage.removeItem("sheyresume-user");
          navigate("/login");
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    // navigation bar
        <div className="layout">
         
          <div className="header">
      
          <img  width={100} src={logoimg} alt="alt"/>
        <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Kia Ora</h1>
        
        

        <Dropdown overlay={menu} placement="bottomLeft">
          <Button >{user.username} {<CaretDownOutlined style={{marginTop:'-7px'}} />}</Button >
        </Dropdown>
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
