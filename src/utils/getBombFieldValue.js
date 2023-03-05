import { BOMB_COUNT, FIELD_SIZE } from "../constants";

export const getBombFieldValue = ({ X, Y }) => {
    const fieldValues = [];
    for (let i = 0; i < FIELD_SIZE; i++) {
        fieldValues[i] = [];
        for (let k = 0; k < FIELD_SIZE; k++) {
            fieldValues[i].push(0);
        }
    }

    let count = 0;
    while (count < BOMB_COUNT) {
        const x = Math.floor(Math.random() * FIELD_SIZE);
        const y = Math.floor(Math.random() * FIELD_SIZE);

        if (!fieldValues[y][x] && (y !== Y || x !== X)) {
            fieldValues[y][x] = 1;
            count++;
        }
    }

    return fieldValues;
};
