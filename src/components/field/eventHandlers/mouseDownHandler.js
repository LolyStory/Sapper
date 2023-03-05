import { smileValue } from "../../smile/smileValue";
import { squareValue } from "../../square/squareValues";

export const mouseDownHandler = ({
    setIsMouseOnSquare,
    setPushedSquare,
    field,
    setField,
    X,
    Y,
    setSmileStatus,
}) => {
    setIsMouseOnSquare(true);
    setPushedSquare({ X, Y });

    const currentField = field.slice(0);
    currentField[Y][X] = squareValue.OPEN;

    setSmileStatus(smileValue.FEAR);
    setField(currentField);
};
