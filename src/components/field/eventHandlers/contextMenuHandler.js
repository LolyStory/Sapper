import { squareValue } from "../../square/squareValues";

export const contextMenuHandler = ({
    field,
    setField,
    X,
    Y,
    flagCount,
    setFlagCount,
}) => {
    const currentField = field.slice(0);
    if (currentField[Y][X] === squareValue.CLOSE && flagCount > 0) {
        setFlagCount(flagCount - 1);
        currentField[Y][X] = squareValue.FLAG;
    } else if (currentField[Y][X] === squareValue.FLAG) {
        setFlagCount(flagCount + 1);
        currentField[Y][X] = squareValue.QUESTION;
    } else if (currentField[Y][X] === squareValue.QUESTION) {
        currentField[Y][X] = squareValue.CLOSE;
    }
    setField(currentField);
};
