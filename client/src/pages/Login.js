import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post("api/user/login", values);
      console.log(user)
      console.log(values)
      message.success("Login successfull");
      localStorage.setItem("sheyresume-user", JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Login failed");
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('sheyresume-user'))
    {
      navigate('/home')
    }
  })

  return (
    <div className="auth-parent">
      {loading && <Spin size="large"/>}
      <Form layout="vertical" onFinish={onFinish}>
        <h1 style={{color:'white'}}>Login</h1>
        <hr />
        <Form.Item name="username" label="Username" style={{color:'white'}}>
          <Input style={{background:'rgba(28,29,31, 0.5 )',color:'white'}}/>
        </Form.Item>
        <Form.Item name="password" label="Password" style={{color:'white'}}>
          <Input type="password" style={{background:'rgba( 28,29,31, 0.5 )',color:'white'}}/>
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here to Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
