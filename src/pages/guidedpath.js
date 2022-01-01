import React, { useRef, useState } from "react";
import axios from "axios";
import "./Dashboard/dashboard.scss";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/core/styles";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import { Link, withRouter } from "react-router-dom";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { getUser } from "../Utils/Common";
import ReactPlayer from "react-player";

function Guidedpath() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar />
        <div className="projects-section">
          <div className="projects-section-header">
            <p>Guided learning</p>
          </div>
          <div className="project-boxes jsListView">
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[0],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <ReactPlayer
                  controls="true"
                  pip="true"
                  stopOnUnmount="false"
                  url="https://youtu.be/Nkmarl4ynRM"
                />
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[4],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <ReactPlayer
                  controls="true"
                  pip="true"
                  stopOnUnmount="false"
                  url="https://www.youtube.com/embed/8JmCrl4FHj8"
                />
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[1],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/chwordsi"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ch' words</p>
                    <p className="box-content-subheader">Level 1</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[2],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/chwords"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ch' words</p>
                    <p className="box-content-subheader">Level 2</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[3],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <ReactPlayer
                  controls="true"
                  pip="true"
                  stopOnUnmount="false"
                  url="https://youtu.be/V-cvlZLNEBM?list=PL_ym6QHjS1sxYJiSOz1ij-tPJxeoan7WR"
                />
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[4],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/thwordsi"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">'th' words</p>
                    <p className="box-content-subheader">Level 1</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[0],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/thwords"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">'th' words</p>
                    <p className="box-content-subheader">Level 2</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[1],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <ReactPlayer
                  controls="true"
                  pip="true"
                  stopOnUnmount="false"
                  url="https://www.youtube.com/embed/BhMk_o1Iu9Y"
                />
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[2],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/ingwordsi"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ing' words</p>
                    <p className="box-content-subheader">Level 1</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[3],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/ingwords"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ing' words</p>
                    <p className="box-content-subheader">Level 2</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[4],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <Link
                  to="/module4"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-header"></div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">Comprehension</p>
                    <p className="box-content-subheader">Level 3</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Guidedpath);
