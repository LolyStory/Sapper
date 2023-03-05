import React from "react";
import { FlagCounter } from "../FlagCounter";
import { Smile } from "../smile/Smile";
import { Timer } from "../Timer/Timer";
import "./styles.css";

export const Header = ({
    isGameStart,
    smileStatus,
    setSmileStatus,
    flagCount,
}) => {
    return (
        <div className="header">
            <FlagCounter flagCount={flagCount} />
            <Smile smileStatus={smileStatus} setSmileStatus={setSmileStatus} />
            <Timer isGameStart={isGameStart} />
        </div>
    );
};
