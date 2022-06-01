import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import { Input } from "antd";
import Subheader from "../components/Subheader";

function Explore() {
  const [people, conversation] = Object.keys(data).map((key) => data[key]);

  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <Subheader pageTitle="EXPLORE"/>
        <Input
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            padding: "0.3em 1em",
            border: "none",
            boxShadow: "none",
          }}
          size="large"
          placeholder="Find People and Clubs"
          prefix={<img src="/images/search.png" width="15px" alt="" />}
        ></Input>
      </div>
      <h4>PEOPLE TO FOLLOW</h4>
      <div className={style.peopleContainer}>
        {people.map((item) => (
          <div className="d-flex justify-content-between align-items-center my-2">
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="" />
              <div className="ms-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show more people <DownOutlined />
        </button>
      </div>
      <h6 className="mt-4">FIND CONVERSATIONS ABOUT...</h6>
      <div className="row mx-0">
        {conversation.map((item) => (
          <div className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
