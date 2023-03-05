import { squareValue } from "../components/square/squareValues";
import { FIELD_SIZE } from "../constants";

export const bombDetonate = ({ field, setField, bombField, X, Y }) => {
    if (bombField[Y][X]) {
        const currentField = field.slice(0);
        for (let i = 0; i < FIELD_SIZE; i++) {
            for (let k = 0; k < FIELD_SIZE; k++) {
                if (bombField[i][k]) {
                    if (field[i][k] === squareValue.FLAG) {
                        currentField[i][k] = squareValue.BOMB_DEACTIVATE;
                    } else {
                        currentField[i][k] = squareValue.BOMB;
                    }
                }
            }
        }
        currentField[Y][X] = squareValue.BOMB_EXPLODED;
        setField(currentField);
        return true;
    }
    return false;
};
