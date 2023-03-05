import React, { useEffect, useState } from "react";

import "./styles.css";
import { timerValue } from "./timerValue";

export const Timer = ({ isGameStart }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((currentCount) =>
                isGameStart === true
                    ? counter < 1000
                        ? currentCount + 1
                        : (currentCount = 999)
                    : (currentCount = counter)
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [counter, isGameStart]);

    return (
        <div className="timer">
            <div
                className={`timer hundred ${
                    timerValue[Math.floor(counter / 100)]
                }`}
            ></div>
            <div
                className={`timer tan ${
                    timerValue[Math.floor((counter % 100) / 10)]
                }`}
            ></div>
            <div className={`timer first ${timerValue[counter % 10]}`}></div>
        </div>
    );
};
