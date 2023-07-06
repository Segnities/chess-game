import CellModel from "./cell-model";
import { ColorsModel } from "./colors-model";
import KingModel from "./figures/king-model";
import QueenModel from "./figures/queen-model";

export default class BoardModel {
    cells: CellModel[][] = [];

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: CellModel[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new CellModel(this, i, j, ColorsModel.BLACK, null)); //Black cells
                } else {
                    row.push(new CellModel(this, i, j, ColorsModel.WHITE, null)); //White cells
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addFigures() {
        new QueenModel(ColorsModel.WHITE, this.getCell(3, 3));
        new KingModel(ColorsModel.BLACK, this.getCell(4, 4));
    }
} 