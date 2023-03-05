import React from "react";
import { smileValue } from "./smileValue";
import "./styles.css";

export const Smile = ({ smileStatus, setSmileStatus }) => {
    return (
        <div
            className={`smile ${smileStatus}`}
            onMouseDown={() => setSmileStatus(smileValue.NORMAL_PUSHED)}
            onClick={() => document.location.reload()}
            //onMouseUp={setSmileStatus(smileValue.NORMAL)}
        />
    );
};
