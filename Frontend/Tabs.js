import React, { useState } from "react";
import BetwayLogo from "./Logo/logo.PNG";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("sports");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav
      style={{
        backgroundColor: "#303030",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        padding: "0 20px",
      }}
    >
      <a
        href="#home"
        onClick={() => handleTabClick("sports")}
        style={{
          color: "#FFFFFF",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        sports
        {activeTab === "sports" && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: "100%",
              backgroundColor: "#00a826",
            }}
          />
        )}
      </a>
      <a
        href="#services"
        onClick={() => handleTabClick("live")}
        style={{
          color: "#FFFFFF",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        live & real
        {activeTab === "live" && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: "100%",
              backgroundColor: "#00a826",
            }}
          />
        )}
      </a>
      <a
        href="#services"
        onClick={() => handleTabClick("casino")}
        style={{
          color: "#FFFFFF",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        casino
        {activeTab === "casino" && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: "100%",
              backgroundColor: "#00a826",
            }}
          />
        )}
      </a>
      <a
        href="#services"
        onClick={() => handleTabClick("esports")}
        style={{
          color: "#FFFFFF",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        esports
        {activeTab === "esports" && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: "100%",
              backgroundColor: "#00a826",
            }}
          />
        )}
      </a>
      <a
        href="#services"
        onClick={() => handleTabClick("vegas")}
        style={{
          color: "#FFFFFF",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        vegas
        {activeTab === "vegas" && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: "100%",
              backgroundColor: "#00a826",
            }}
          />
        )}
      </a>
    </nav>
  );
};

export default Tabs;
