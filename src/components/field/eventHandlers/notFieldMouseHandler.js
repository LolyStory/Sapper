import { squareValue } from "../../square/squareValues";

export const notFieldMouseHandler = ({
    field,
    pushedSquare,
    setField,
    setIsMouseOnSquare,
    setPushedSquare,
}) => {
    if (!pushedSquare) return;

    const currentField = field.slice(0);
    const { X: selectedX, Y: selectedY } = pushedSquare;
    currentField[selectedY][selectedX] = squareValue.CLOSE;
    setField(currentField);
    setIsMouseOnSquare(true);
    setPushedSquare(null);
};
