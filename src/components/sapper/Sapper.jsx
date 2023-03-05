import React, { useState } from "react";
import { BOMB_COUNT } from "../../constants";
import { Field } from "../field/Field";
import { Header } from "../header";
import { smileValue } from "../smile/smileValue";
import "./styles.css";

export const Sapper = () => {
    const [smileStatus, setSmileStatus] = useState(smileValue.NORMAL);
    const [isGameStart, setIsGameStart] = useState(false);
    const [flagCount, setFlagCount] = useState(BOMB_COUNT);

    return (
        <div className="Sapper">
            <Header
                flagCount={flagCount}
                isGameStart={isGameStart}
                smileStatus={smileStatus}
                setSmileStatus={setSmileStatus}
            />
            <Field
                setSmileStatus={setSmileStatus}
                smileStatus={smileStatus}
                isGameStart={setIsGameStart}
                flagCount={flagCount}
                setFlagCount={setFlagCount}

            />
        </div>
    );
};
