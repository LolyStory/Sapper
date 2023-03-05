import { squareValue } from "../components/square/squareValues";
import { FIELD_SIZE } from "../constants";
import { getBombCount } from "./getBombCount";
import { getWinCounter } from "./getWinCounter";

const finishedNodes = {};

export const openSquare = ({
    X,
    Y,
    field,
    setField,
    bombField,
    setSmileStatus,
    isGameStart,
}) => {
    const initialNode = { X, Y };
    const queue = [initialNode];
    const currentField = field.slice(0);

    while (queue.length) {
        const currentNode = queue.shift();

        if (finishedNodes[`${currentNode.Y}-${currentNode.X}`]) {
            continue;
        }
        finishedNodes[`${currentNode.Y}-${currentNode.X}`] = true;
        currentField[currentNode.Y][currentNode.X] = squareValue.OPEN;
        getWinCounter({
            field,
            setField,
            bombField,
            setSmileStatus,
            isGameStart,
        });

        if (
            getBombCount({
                X: currentNode.X,
                Y: currentNode.Y,
                bombField,
                currentField,
                queue,
            })
        ) {
            continue;
        } else {
            if (currentNode.Y - 1 > 0 && currentNode.X - 1 > 0) {
                if (
                    !getBombCount({
                        X: currentNode.X - 1,
                        Y: currentNode.Y - 1,
                        bombField,
                        currentField,
                        queue,
                    })
                ) {
                    queue.push({ X: currentNode.X - 1, Y: currentNode.Y - 1 });
                } else {
                    if (
                        !finishedNodes[
                            `${currentNode.Y - 1}-${currentNode.X - 1}`
                        ]
                    ) {
                        finishedNodes[
                            `${currentNode.Y - 1}-${currentNode.X - 1}`
                        ] = true;
                        getWinCounter({
                            field,
                            setField,
                            bombField,
                            setSmileStatus,
                            isGameStart,
                        });
                    }
                }
            }
            if (
                currentNode.Y + 1 < FIELD_SIZE - 1 &&
                currentNode.X + 1 < FIELD_SIZE - 1
            ) {
                if (
                    !getBombCount({
                        X: currentNode.X + 1,
                        Y: currentNode.Y + 1,
                        bombField,
                        currentField,
                        queue,
                    })
                ) {
                    queue.push({ X: currentNode.X + 1, Y: currentNode.Y + 1 });
                } else {
                    if (
                        !finishedNodes[
                            `${currentNode.Y + 1}-${currentNode.X + 1}`
                        ]
                    ) {
                        finishedNodes[
                            `${currentNode.Y + 1}-${currentNode.X + 1}`
                        ] = true;
                        getWinCounter({
                            field,
                            setField,
                            bombField,
                            setSmileStatus,
                            isGameStart,
                        });
                    }
                }
            }
            if (currentNode.Y - 1 > 0 && currentNode.X + 1 < FIELD_SIZE - 1) {
                if (
                    !getBombCount({
                        X: currentNode.X + 1,
                        Y: currentNode.Y - 1,
                        bombField,
                        currentField,
                        queue,
                    })
                ) {
                    queue.push({ X: currentNode.X + 1, Y: currentNode.Y - 1 });
                } else {
                    if (
                        !finishedNodes[
                            `${currentNode.Y - 1}-${currentNode.X + 1}`
                        ]
                    ) {
                        finishedNodes[
                            `${currentNode.Y - 1}-${currentNode.X + 1}`
                        ] = true;
                        getWinCounter({
                            field,
                            setField,
                            bombField,
                            setSmileStatus,
                            isGameStart,
                        });
                    }
                }
            }
            if (currentNode.Y + 1 < FIELD_SIZE - 1 && currentNode.X - 1 > 0) {
                if (
                    !getBombCount({
                        X: currentNode.X - 1,
                        Y: currentNode.Y + 1,
                        bombField,
                        currentField,
                        queue,
                    })
                ) {
                    queue.push({ X: currentNode.X - 1, Y: currentNode.Y + 1 });
                } else {
                    if (
                        !finishedNodes[
                            `${currentNode.Y + 1}-${currentNode.X - 1}`
                        ]
                    ) {
                        finishedNodes[
                            `${currentNode.Y + 1}-${currentNode.X - 1}`
                        ] = true;
                        getWinCounter({
                            field,
                            setField,
                            bombField,
                            setSmileStatus,
                            isGameStart,
                        });
                    }
                }
            }
        }
        if (currentNode.Y > 0) {
            if (
                !bombField[currentNode.Y - 1][currentNode.X] &&
                field[currentNode.Y][currentNode.X - 1] !==
                    squareValue.QUESTION &&
                field[currentNode.Y - 1][currentNode.X] !== squareValue.FLAG &&
                field[currentNode.Y - 1][currentNode.X] !== squareValue.OPEN
            ) {
                queue.push({ X: currentNode.X, Y: currentNode.Y - 1 });
            }
        }

        if (currentNode.Y < FIELD_SIZE - 1) {
            if (
                !bombField[currentNode.Y + 1][currentNode.X] &&
                field[currentNode.Y][currentNode.X - 1] !==
                    squareValue.QUESTION &&
                field[currentNode.Y + 1][currentNode.X] !== squareValue.FLAG &&
                field[currentNode.Y + 1][currentNode.X] !== squareValue.OPEN
            ) {
                queue.push({ X: currentNode.X, Y: currentNode.Y + 1 });
            }
        }

        if (currentNode.X > 0) {
            if (
                !bombField[currentNode.Y][currentNode.X - 1] &&
                field[currentNode.Y][currentNode.X - 1] !==
                    squareValue.QUESTION &&
                field[currentNode.Y][currentNode.X - 1] !== squareValue.FLAG &&
                field[currentNode.Y][currentNode.X - 1] !== squareValue.OPEN
            ) {
                queue.push({ X: currentNode.X - 1, Y: currentNode.Y });
            }
        }

        if (currentNode.X < FIELD_SIZE - 1) {
            if (
                !bombField[currentNode.Y][currentNode.X + 1] &&
                field[currentNode.Y][currentNode.X - 1] !==
                    squareValue.QUESTION &&
                field[currentNode.Y][currentNode.X + 1] !== squareValue.FLAG &&
                field[currentNode.Y][currentNode.X + 1] !== squareValue.OPEN
            ) {
                queue.push({ X: currentNode.X + 1, Y: currentNode.Y });
            }
        }
    }

    setField(currentField);
};
