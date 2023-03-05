import { numbersMap } from "../components/square/squareValues";
import { FIELD_SIZE } from "../constants";

export const getBombCount = ({ X, Y, bombField, currentField, queue }) => {
    let bombCount = 0;

    if (Y > 0 && bombField[Y - 1][X]) {
        bombCount++;
    }

    if (Y > 0 && X > 0 && bombField[Y - 1][X - 1]) {
        bombCount++;
    }

    if (X > 0 && bombField[Y][X - 1]) {
        bombCount++;
    }

    if (Y < FIELD_SIZE - 1 && bombField[Y + 1][X]) {
        bombCount++;
    }

    if (Y < FIELD_SIZE - 1 && X < FIELD_SIZE - 1 && bombField[Y + 1][X + 1]) {
        bombCount++;
    }

    if (X < FIELD_SIZE - 1 && bombField[Y][X + 1]) {
        bombCount++;
    }

    if (Y > 0 && X < FIELD_SIZE - 1 && bombField[Y - 1][X + 1]) {
        bombCount++;
    }

    if (X > 0 && Y < FIELD_SIZE - 1 && bombField[Y + 1][X - 1]) {
        bombCount++;
    }

    if (bombCount) {
        currentField[Y][X] = numbersMap[bombCount];
    }
    return bombCount;
};
