import React from "react";

import { nanoid } from "nanoid";

import BoardModel from "../models/board-model";

import CellModel from "../models/cell-model";
import Cell from "./Cell";
import PlayerModel from "../models/player-model";

interface BoardProps {
    board: BoardModel;
    setBoard: (board: BoardModel) => void;
    currentPlayer: PlayerModel | null;
    swapPlayer: () => void;
}

export default function Board({ 
    board, 
    setBoard,
    currentPlayer,
    swapPlayer
}: BoardProps) {
    const [selectedCell, setSelectedCell] = React.useState<CellModel | null>(null);

    const updateBoard = () => {
        const newBoard = board.clone();
        setBoard(newBoard);
    }

    const highlightCells = () => {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    const onCellClick = (cell: CellModel) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        }  else {
            if (cell.figure?.color !== currentPlayer?.color) {
                return;
            } 
            setSelectedCell(cell);
        }
    }

    React.useEffect(() => {
        highlightCells();
    }, [selectedCell])

    return (
        <div className="board">
            {board.cells.map((row,) => (
                <React.Fragment key={nanoid()}>
                    {
                        row.map((cell) => (
                            <Cell
                                key={cell.id}
                                cell={cell}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                onCellClick={onCellClick}

                            />
                        ))
                    }
                </React.Fragment>
            ))}
        </div>
    );
}