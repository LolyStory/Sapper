import React from "react";
import { timerValue } from "../Timer/timerValue";
import "./styles.css";

export const FlagCounter = ({ flagCount }) => (
    <div className="flagCounter">
        <div
            className={`flagCounter hundred ${
                timerValue[Math.floor(flagCount / 100)]
            }`}
        ></div>
        <div
            className={`flagCounter tan ${
                timerValue[Math.floor((flagCount % 100) / 10)]
            }`}
        ></div>
        <div
            className={`flagCounter first ${timerValue[flagCount % 10]}`}
        ></div>
    </div>
);
