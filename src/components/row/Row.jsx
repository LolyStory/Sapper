import React from "react";
import { Square } from "../square/Square";
import "./styles.css";

export const Row = ({ fieldRow, Y, clickHandler }) => (
    <div className="row">
        {fieldRow.map((squareValue, X) => (
            <Square
                squareValue={squareValue}
                Y={Y}
                X={X}
                clickHandler={clickHandler}
            />
        ))}
    </div>
);
