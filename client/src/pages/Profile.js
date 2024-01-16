import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Form, message, Spin, Tabs } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
import Documents from "../components/Documents";
import LinkedInProfile from "../components/LinkedInProfile";
import GithubProfile from "../components/GithubProfile";
import ProfilePic from "../components/ProfilePic";
import axios from "axios";

const { TabPane } = Tabs;
export default function Profile() {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("sheyresume-user", JSON.stringify(result.data));
      setLoading(false);
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };
  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4><b>Update Profile</b></h4>
        <hr />
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Add Profile Pic" key="2">
              <ProfilePic />
            </TabPane>
            <TabPane tab="Skills and Education" key="3">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="4">
              <ExperienceProjects />
            </TabPane>
            
            <TabPane tab="Upload Documents" key="5">
              <Documents />
            </TabPane>
            <TabPane tab="Upload LinkedIn" key="6">
              <LinkedInProfile />
            </TabPane>
            <TabPane tab="Upload Github" key="7">
              <GithubProfile />
            </TabPane>
            

          
          </Tabs>

          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

 