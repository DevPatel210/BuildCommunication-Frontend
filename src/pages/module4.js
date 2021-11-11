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
import { getSpeechRate } from "../Utils/Common";

function Module4() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];
  const synthRef = useRef(window.speechSynthesis);
  const [comprehensions, setComprehension] = useState();
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [scoreMap, setscoreMap] = useState(new Map());
  const fetchData = React.useCallback(() => {
    axios
      .get(API_BASE_URL + "/module4/get")
      .then((res) => {
        console.log(res.data);
        setComprehension(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occurred. Please refresh the page");
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const captureAnswer = (e) => {
    console.log(e.target.name + " " + e.target.value);
    scoreMap.set(e.target.name, e.target.value);
  };

  function speak(text) {
    if (text !== "") {
      // Get speak text
      const speakText = new SpeechSynthesisUtterance(text);
      const speech_rate = getSpeechRate();
      if (speech_rate) speakText.rate = speech_rate;
      else speakText.rate = "0.5";
      speakText.pitch = 1.4;
      // Speak
      synthRef.current.speak(speakText);
    }
  }
  function stop() {
    synthRef.current.cancel();
  }

  const submitScore = (e) => {
    e.preventDefault();
    var currscore = 0;
    console.log(comprehensions[0]);
    console.log(comprehensions[1]);
    console.log(comprehensions.length);
    for (var i = 0; i < comprehensions.length; i++) {
      for (var j = 0; j < comprehensions[i].questions.length; j++) {
        console.log(comprehensions[i].questions[j]);
        if (scoreMap.has(comprehensions[i].questions[j]._id)) {
          if (
            scoreMap.get(comprehensions[i].questions[j]._id) ===
            comprehensions[i].questions[j].options[
              comprehensions[i].questions[j].answer
            ]
          )
            currscore++;
        }
      }
    }

    const currDate = new Date();
    axios.defaults.withCredentials = true;
    var data = {
      score: currscore,
      date: currDate,
    };
    console.log(data);
    axios
      .post(API_BASE_URL + "/module4/score", data)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        console.log("Score submitted");
        console.log(currscore);
        setScore(currscore);
        setSubmitted(true);
        // else{
        //     props.showError("Username does not exists");
        // }
      })
      .catch(function (error) {
        if (error.response && error.response.data) alert(error.response.data);
        else alert("Please try again");
      });
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar />
        <div className="projects-section">
          <div className="projects-section-header">
            <p>Comprehension</p>
            <p className="time">
              {comprehensions ? comprehensions.length : 10} Comprehensions
            </p>
          </div>
          {comprehensions
            ? comprehensions.map((comprehension) => (
                <div className="project-boxes jsListView">
                  <div className="project-box-wrapper">
                    <div
                      style={{
                        backgroundColor: "#dbf6fd",
                        borderRadius: "35px",
                        padding: "20px",
                      }}
                    >
                      <div style={{ fontSize: "120%" }}>
                        {comprehension ? comprehension.comprehension : null}
                      </div>

                      <Button
                        color="primary"
                        variant="contained"
                        endIcon={<GraphicEqRoundedIcon />}
                        style={{
                          maxWidth: "100px",
                          alignSelf: "center",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                        onClick={() =>
                          speak(
                            comprehension ? comprehension.comprehension : null
                          )
                        }
                      >
                        Listen
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        style={{
                          maxWidth: "100px",
                          alignSelf: "center",
                          marginLeft: "5px",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                        onClick={() => stop()}
                      >
                        Stop
                      </Button>
                      <br />
                    </div>
                  </div>
                  {comprehension
                    ? comprehension.questions.map((question, index) => (
                        <div className="project-box-wrapper" key={question._id}>
                          <div
                            style={{
                              backgroundColor: colors[index % colors.length],
                              borderRadius: "35px",
                              padding: "20px",
                            }}
                          >
                            <div style={{ fontSize: "120%" }}>
                              {index + 1}. {question.question}
                            </div>

                            <br />
                            <div
                              style={{ fontSize: "110%" }}
                              onChange={captureAnswer}
                            >
                              {question.options
                                ? question.options.map((option, index) => (
                                    <div style={{ margin: "10px" }} key={index}>
                                      <input
                                        type="radio"
                                        name={question._id}
                                        value={option}
                                      />
                                      <span
                                        // htmlFor="question11"
                                        style={{ marginLeft: "8px" }}
                                      >
                                        {option}
                                        {index === question.answer &&
                                        submitted ? (
                                          <img
                                            src={
                                              require("../images/greentick.png")
                                                .default
                                            }
                                            alt="correct ans"
                                            style={{
                                              maxWidth: "17px",
                                              marginLeft: "12px",
                                              marginBottom: "8px",
                                            }}
                                          />
                                        ) : null}
                                      </span>
                                    </div>
                                  ))
                                : "No options available"}
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              ))
            : null}

          <div style={{ margin: "15px 5px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "35px" }}
              onClick={submitScore}
            >
              Submit
            </Button>

            <span
              style={{
                paddingLeft: "5%",
                fontSize: "110%",
                fontWeight: "bold",
              }}
            >
              {score}/8
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Module4);
