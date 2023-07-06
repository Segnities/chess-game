import React from "react";

import { nanoid } from "nanoid";

import BoardModel from "../models/board-model";
import Cell from "./Cell";

interface BoardProps {
    board: BoardModel;
    setBoard: (board: BoardModel) => void;
}

export default function Board({ board, setBoard }: BoardProps) {
    return (
        <div className="board">
            {board.cells.map((row,) => (
                <React.Fragment key={nanoid()}>
                    {
                        row.map((cell) => (
                            <Cell/>
                        ))
                    }
                </React.Fragment>
            ))}
        </div>
    );
}