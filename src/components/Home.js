import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
