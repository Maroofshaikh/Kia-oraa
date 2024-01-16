import React from "react";
import "../../resources/templates.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../components/firebase";
import { v4 } from "uuid";

function Template2() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    console.log(user)
    const imagesListRef = ref(storage, `profile/${user.username}`);
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `profile/${user.username}/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };

useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  const ProfilePic = () => {};
  return (
    <div className="template1-parent">
      {imageUrls.map((url) => {
        return <img src={url}  style={{borderRadius:'200px', backgroundRepeat:'no-repeat'}}/>;
      })}
      <div className="top d-flex flex-column">
      <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="divider mt-3"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Professional Summary</h3>
        <hr />
        <p>{user.ProfessionalSummary}</p>
      </div>
      <div className="divider mt-3"></div>

      <div className="education mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6>
              <p>
                <b>{education.qualification}</b> with{" "}
                <b>{education.percentage}%</b> in {education.institution}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{exp.range} : </b>
              </h6>
              <p>
                <b>{exp.company}</b> in <b>{exp.place}</b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Projects</h3>
        <hr />
        {user.projects.map((project) => {
          return (
            <div className="d-flex flex-column">
              <h6>
                <b>
                  {project.title} [{project.range}]{" "}
                </b>
              </h6>
              <p>{project.rating}</p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Skills</h3>
        <hr />
        {user.skills.map((skill) => {
          return <p>{skill.technology}</p>;
        })}
      </div>
    </div>
  );
}

export default Template2;