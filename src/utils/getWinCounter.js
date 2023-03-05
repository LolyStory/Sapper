import { smileValue } from "../components/smile/smileValue";
import { squareValue } from "../components/square/squareValues";
import { BOMB_COUNT, FIELD_SIZE } from "../constants";

let countWinner = 0;

export const getWinCounter = ({
    field,
    setField,
    bombField,
    setSmileStatus,
    isGameStart,
}) => {
    countWinner++;

    if (countWinner === FIELD_SIZE * FIELD_SIZE - BOMB_COUNT) {
        const currentField = field.slice(0);
        for (let i = 0; i < FIELD_SIZE; i++) {
            for (let k = 0; k < FIELD_SIZE; k++) {
                if (bombField[i][k]) {
                    currentField[i][k] = squareValue.BOMB_DEACTIVATE;
                }
            }
        }
        isGameStart(false);
        setSmileStatus(smileValue.WINNER);
        setField(currentField);
        return true;
    } else return countWinner;
};
