import CellModel from "./cell-model";
import { ColorsModel } from "./colors-model";
import BishopModel from "./figures/bishop-model";
import FigureModel from "./figures/figure-model";
import KingModel from "./figures/king-model";
import KnightModel from "./figures/knight-mode";
import PawnModel from "./figures/pawn-model";
import QueenModel from "./figures/queen-model";
import RookModel from "./figures/rook-model";

export default class BoardModel {
    cells: CellModel[][] = [];
    lostBlackFigures: FigureModel[] = [];
    lostWhiteFigures: FigureModel[] = []; 

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: CellModel[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new CellModel(this, j, i, ColorsModel.BLACK, null)); //Black cells
                } else {
                    row.push(new CellModel(this, j, i, ColorsModel.WHITE, null)); //White cells
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            this.cells[1][i].figure = new PawnModel(ColorsModel.BLACK, this.getCell(i, 1));
            this.cells[6][i].figure = new PawnModel(ColorsModel.WHITE, this.getCell(i, 6));
        }
    }

    private addKings() {
        new KingModel(ColorsModel.BLACK, this.getCell(4, 0));
        new KingModel(ColorsModel.WHITE, this.getCell(4, 7));
    }

    private addQueens() {
        new QueenModel(ColorsModel.BLACK, this.getCell(3, 0));
        new QueenModel(ColorsModel.WHITE, this.getCell(3, 7));
    }

    private addBishops() {
        new BishopModel(ColorsModel.BLACK, this.getCell(2, 0));
        new BishopModel(ColorsModel.BLACK, this.getCell(5, 0));
        new BishopModel(ColorsModel.WHITE, this.getCell(2, 7));
        new BishopModel(ColorsModel.WHITE, this.getCell(5, 7));
    }

    private addKnights() {
        new KnightModel(ColorsModel.BLACK, this.getCell(1, 0));
        new KnightModel(ColorsModel.BLACK, this.getCell(6, 0));
        new KnightModel(ColorsModel.WHITE, this.getCell(1, 7));
        new KnightModel(ColorsModel.WHITE, this.getCell(6, 7));

    }

    private addRooks() {
        new RookModel(ColorsModel.BLACK, this.getCell(0, 0));
        new RookModel(ColorsModel.BLACK, this.getCell(7, 0));
        new RookModel(ColorsModel.WHITE, this.getCell(0, 7));
        new RookModel(ColorsModel.WHITE, this.getCell(7, 7));

    }

    public clone():BoardModel {
        const boardClone = new BoardModel();
        boardClone.cells = this.cells;
        boardClone.lostBlackFigures = this.lostBlackFigures; 
        boardClone.lostWhiteFigures = this.lostWhiteFigures;

        return boardClone;
    }

    public highlightCells(selectedCell: CellModel | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    public addFigures() {
        this.addBishops();
        this.addKnights();
        this.addRooks();
        this.addQueens();
        this.addKings();
        this.addPawns();
    }
} 