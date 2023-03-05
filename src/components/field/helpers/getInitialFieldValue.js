import { FIELD_SIZE } from "../../../constants";
import { squareValue } from "../../square/squareValues";

export const getInitialFieldValue = () => {
    const initialFieldValue = [];
    for (let i = 0; i < FIELD_SIZE; i++) {
        initialFieldValue[i] = [];
        for (let k = 0; k < FIELD_SIZE; k++) {
            initialFieldValue[i].push(squareValue.CLOSE);
        }
    }
    return initialFieldValue;
};
