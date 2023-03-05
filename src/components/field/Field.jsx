import React, { useState } from "react";
import "./styles.css";
import { getInitialFieldValue } from "./helpers/getInitialFieldValue";
import { Row } from "../row/Row";
import { useClickHandler } from "./hooks/useClickHandler";

export const Field = ({
    smileStatus,
    setSmileStatus,
    isGameStart,
    flagCount,
    setFlagCount,
}) => {
    const [field, setField] = useState(getInitialFieldValue());
    const [bombField, setBombField] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    const clickHandler = useClickHandler({
        setField,
        field,
        setBombField,
        bombField,
        isGameOver,
        setIsGameOver,
        setSmileStatus,
        smileStatus,
        isGameStart,
        flagCount,
        setFlagCount,
    });
    return (
        <div className="field">
            {field.map((fieldRow, Y) => (
                <Row fieldRow={fieldRow} Y={Y} clickHandler={clickHandler} />
            ))}
        </div>
    );
};
