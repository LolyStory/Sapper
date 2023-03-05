import React from "react";
import "./styles.css";
import { squareValue as SQUARE_VALUE } from "./squareValues";

export const Square = ({ squareValue, Y, X, clickHandler }) => {
    const mouseDownEnable = squareValue === SQUARE_VALUE.CLOSE;
    const contextClickEnable =
        squareValue === SQUARE_VALUE.CLOSE ||
        squareValue === SQUARE_VALUE.FLAG ||
        squareValue === SQUARE_VALUE.QUESTION;

    return (
        <div
            className={`square ${squareValue}`}
            onClick={(event) => clickHandler({ event, Y, X })}
            onContextMenu={(event) =>
                contextClickEnable
                    ? clickHandler({ event, Y, X })
                    : event.preventDefault()
            }
            onMouseUp={(event) => clickHandler({ event, Y, X })}
            onMouseDown={(event) =>
                mouseDownEnable && clickHandler({ event, Y, X })
            }
            onMouseLeave={(event) => clickHandler({ event, Y, X })}
        />
    );
};
