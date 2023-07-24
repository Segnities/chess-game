import React from "react";

import { nanoid } from "nanoid";

import BoardModel from "../models/board-model";

import CellModel from "../models/cell-model";
import Cell from "./Cell";
import PlayerModel from "../models/player-model";

interface BoardProps {
    board: BoardModel;
    updateBoardAndStep: (board: BoardModel) => void;
    currentPlayer: PlayerModel | null;
    swapPlayer: () => void;
    setBoard: (board: BoardModel) => void;
}

export default function Board({
    board,
    updateBoardAndStep,
    currentPlayer,
    swapPlayer,
    setBoard
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
            updateBoardAndStep(board);

        } else {
            if (cell.figure?.color !== currentPlayer?.color) {
                return;
            }
            setSelectedCell(cell);
        }
    }

    React.useEffect(() => {
        highlightCells();
    }, [selectedCell?.id])

    return (
        <div className="board">
            {
                board.cells.map((row, rowIndex) => (
                    <React.Fragment key={nanoid()}>
                        {
                            row.map((cell, columnIndex) => {
                                const xAxisLabel = String.fromCharCode(97 + columnIndex);
                                const yAxisLabel = 8 - rowIndex;

                                if (cell.x === 0 && cell.y >= 0) {
                                    return (
                                        <div className="cell-positionY__container cell-position__container" key={cell.id}>
                                            <span className="left-cells__position">
                                                {cell.x === 0 ? yAxisLabel : null}
                                            </span>
                                            <span className="right-cells__position">
                                                {yAxisLabel}
                                            </span>
                                            {
                                                cell.x === 0 && cell.y === 0 ? (
                                                    <span className="top-cells__position">a</span>
                                                ) : null
                                            }
                                            {
                                                cell.x === 0 && cell.y === 7 ? (
                                                    <span className="bottom-cells__position">a</span>
                                                ) : null
                                            }
                                            <Cell
                                                key={cell.id}
                                                cell={cell}
                                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                                onCellClick={onCellClick}

                                            />
                                        </div>
                                    );
                                } else if (cell.x >= 0 && cell.y === 0) {
                                    return (
                                        <div className="cell-positionX__container cell-position__container">
                                            <span className="top-cells__position">{xAxisLabel}</span>
                                            <span className="bottom-cells__position">{xAxisLabel}</span>
                                            <Cell
                                                key={cell.id}
                                                cell={cell}
                                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                                onCellClick={onCellClick}

                                            />
                                        </div>
                                    )
                                } else if (cell.x >= 1 && cell.y >= 1) {
                                    return (
                                        <Cell
                                            key={cell.id}
                                            cell={cell}
                                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                            onCellClick={onCellClick}
                                        />
                                    );
                                }

                                return null;
                            })
                        }
                    </React.Fragment>
                ))
            }
        </div>
    );
}