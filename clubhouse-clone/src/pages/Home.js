import React from "react";
import style from "../style/home.module.css";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import RoomInfoCard from "../components/RoomInfoCard";

function Home() {
  return (
    <>
      <Header />
      <div className={style.home_container}>
              <DailyInfoCard />
              <RoomInfoCard />
      </div>
    </>
  );
}

export default Home;
