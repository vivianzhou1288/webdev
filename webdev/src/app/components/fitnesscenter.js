"use client";
import React from "react";
import ProgressCircle from "./progresscircle";
import styles from "../page.module.css";

function FitnessCenter({ name, usage, capacity, status }) {
  const usagePercentage = Math.round((usage / capacity) * 100);
  const displayStatus = status || `${usage}/${capacity} Using`;

  return (
    <div className={styles.fitnessCenter}>
      <h2>{name}</h2>
      <p>{displayStatus}</p>
      <ProgressCircle percentage={usagePercentage} />
      <p>{usagePercentage}%</p>
    </div>
  );
}

export default FitnessCenter;
