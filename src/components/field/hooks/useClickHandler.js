import { useState, useEffect, useCallback } from "react";
import { smileValue } from "../../smile/smileValue";
import { contextMenuHandler } from "../eventHandlers/contextMenuHandler";
import { mouseDownHandler } from "../eventHandlers/mouseDownHandler";
import { mouseUpHandler } from "../eventHandlers/mouseUpHandler";
import { notFieldMouseHandler } from "../eventHandlers/notFieldMouseHandler";

export const useClickHandler = ({
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
}) => {
    const [isMouseOnSquare, setIsMouseOnSquare] = useState(true);
    const [pushedSquare, setPushedSquare] = useState(null);
    const [isBombPlanted, setIsBombPlanted] = useState(false);

    useEffect(() => {
        const mouseNotFieldHandler = (event) => {
            if (event.button === 0 && !isGameOver) {
                notFieldMouseHandler({
                    field,
                    pushedSquare,
                    setField,
                    setIsMouseOnSquare,
                    setPushedSquare,
                });
            }
        };
        document.addEventListener("mouseup", mouseNotFieldHandler);

        return () =>
            document.removeEventListener("mouseup", mouseNotFieldHandler);
    }, [pushedSquare, field]);

    return useCallback(
        ({ event, X, Y }) => {
            event.preventDefault();
            event.stopPropagation();
            if (event.type === "contextmenu" && !isGameOver) {
                contextMenuHandler({
                    field,
                    setField,
                    X,
                    Y,
                    flagCount,
                    setFlagCount,
                });
            }
            if (
                event.type === "mousedown" &&
                event.button === 0 &&
                !isGameOver
            ) {
                mouseDownHandler({
                    setIsMouseOnSquare,
                    setPushedSquare,
                    field,
                    setField,
                    X,
                    Y,
                    setSmileStatus,
                });
            }
            if (event.type === "mouseleave") {
                setIsMouseOnSquare(false);
            }
            if (event.type === "mouseup" && event.button === 0 && !isGameOver) {
                mouseUpHandler({
                    X,
                    Y,
                    setIsMouseOnSquare,
                    setPushedSquare,
                    setField,
                    isMouseOnSquare,
                    field,
                    pushedSquare,
                    setIsBombPlanted,
                    isBombPlanted,
                    setBombField,
                    bombField,
                    setIsBombPlanted,
                    setIsGameOver,
                    setSmileStatus,
                    isGameStart,
                });
            }
        },
        [
            field,
            isMouseOnSquare,
            pushedSquare,
            isBombPlanted,
            bombField,
            smileStatus,
        ]
    );
};
