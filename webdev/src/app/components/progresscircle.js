import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCircle({ percentage }) {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        pathColor: percentage > 0 ? "green" : "gray",
        textColor: "white",
        trailColor: "lightgray",
        backgroundColor: "black",
      })}
    />
  );
}

export default ProgressCircle;
