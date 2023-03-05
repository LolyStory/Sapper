import { bombDetonate } from "../../../utils/bombDetonate";
import { getBombFieldValue } from "../../../utils/getBombFieldValue";
import { openSquare } from "../../../utils/openSquare";
import { smileValue } from "../../smile/smileValue";
import { squareValue } from "../../square/squareValues";

export const mouseUpHandler = ({
    setIsMouseOnSquare,
    setPushedSquare,
    field,
    pushedSquare,
    setField,
    isMouseOnSquare,
    setIsBombPlanted,
    isBombPlanted,
    bombField,
    setBombField,
    X,
    Y,
    setIsGameOver,
    setSmileStatus,
    isGameStart,
}) => {
    if (isMouseOnSquare) {
        if (!isBombPlanted) {
            setIsBombPlanted(true);
            const currentBombField = getBombFieldValue({ X, Y });
            setBombField(currentBombField);
            setSmileStatus(smileValue.NORMAL);
            isGameStart(true);
            openSquare({
                X,
                Y,
                field,
                setField,
                bombField: currentBombField,
                setSmileStatus,
                isGameStart,
            });
        } else {
            const isDetonate = bombDetonate({
                field,
                setField,
                bombField,
                X,
                Y,
            });
            if (!isDetonate) {
                setSmileStatus(smileValue.NORMAL);
                openSquare({
                    X,
                    Y,
                    field,
                    setField,
                    bombField,
                    setSmileStatus,
                    isGameStart,
                });
            } else {
                isGameStart(false);
                setSmileStatus(smileValue.GAME_OVER);
                setIsGameOver(true);
            }
        }
    } else if (pushedSquare) {
        const currentField = field.slice(0);
        const { X: selectedX, Y: selectedY } = pushedSquare;
        currentField[selectedY][selectedX] = squareValue.CLOSE;
        setField(currentField);
        setSmileStatus(smileValue.NORMAL);
    }
    setIsMouseOnSquare(true);
    setPushedSquare(null);
};
