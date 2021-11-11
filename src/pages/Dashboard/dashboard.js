import React, { useState } from "react";
import axios from "axios";
import "./dashboard.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../apiConstants";
import { Link, withRouter } from "react-router-dom";
import { getUser, removeUserSession } from "../../Utils/Common";

function Dashboard(props) {
  const [data, setData] = useState();
  const fetchData = React.useCallback(() => {
    setData(getUser());
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var currMonth = month[d.getMonth()];
  var currDate = d.getDate();
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar />

        <div className="projects-section" style={{ paddingBottom: "15px" }}>
          <div className="projects-section-header">
            <p>Modules</p>
            <p className="time">
              {currMonth}, {currDate}
            </p>
          </div>
          <div className="project-boxes jsGridView">
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#fee4cb" }}
              >
                <div className="project-box-header"></div>

                <Link
                  to="/chwordsi"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ch' words</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 1
                    </p>
                  </div>
                </Link>

                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.chwordsi ? data.chwordsi.score * 20 : 0
                        }%`,
                        backgroundColor: "#ff942e",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.chwordsi ? data.chwordsi.score * 20 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#e9e7fd" }}
              >
                <div className="project-box-header"></div>
                <Link
                  to="/thwordsi"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">'th' words</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 1
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.thwordsi ? data.thwordsi.score * 20 : 0
                        }%`,
                        backgroundColor: "#4f3ff0",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.thwordsi ? data.thwordsi.score * 20 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div className="project-box">
                <div className="project-box-header"></div>
                <Link
                  to="/ingwordsi"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ing' words</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 1
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.ingwordsi ? data.ingwordsi.score * 20 : 0
                        }%`,
                        backgroundColor: "#096c86",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.ingwordsi ? data.ingwordsi.score * 20 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#ffd3e2" }}
              >
                <div className="project-box-header"></div>
                <Link
                  to="/chwords"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ch' words</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 2
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.chwords ? data.chwords.score * 10 : 0
                        }%`,
                        backgroundColor: "#df3670",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.chwords ? data.chwords.score * 10 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#d5deff" }}
              >
                <div className="project-box-header"></div>
                <Link
                  to="/thwords"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">'th' words</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 2
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.thwords ? data.thwords.score * 10 : 0
                        }%`,
                        backgroundColor: "#4067f9",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.thwords ? data.thwords.score * 10 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#fee4cb" }}
              >
                <div className="project-box-header"></div>
                <Link
                  to="/ingwords"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">'ing' words</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 2
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.ingwords ? data.ingwords.score * 10 : 0
                        }%`,
                        backgroundColor: "#ff942e",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.ingwords ? data.ingwords.score * 10 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#e9e7fd" }}
              >
                <div className="project-box-header"></div>
                <Link
                  to="/module3"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">Wonder Speak</p>
                    <p className="box-content-subheader">Speech Recognition</p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.module3
                            ? (data.module3.score * 100) / 16
                            : 0
                        }%`,
                        backgroundColor: "#4f3ff0",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.module3 ? (data.module3.score * 100) / 16 : 0}
                    %
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div className="project-box">
                <div className="project-box-header"></div>
                <Link
                  to="/module4"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">Comprehension</p>
                    <p className="box-content-subheader">
                      Speech Synthesis Level 3
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.module4
                            ? (data.module4.score * 100) / 8
                            : 0
                        }%`,
                        backgroundColor: "#096c86",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.module4 ? (data.module4.score * 100) / 8 : 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
