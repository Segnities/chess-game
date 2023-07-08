import { nanoid } from "nanoid";

import BoardModel from "./board-model";
import { ColorsModel } from "./colors-model";
import FigureModel from "./figures/figure-model";

export default class CellModel {
    readonly x: number;
    readonly y: number;
    readonly color: ColorsModel;
    figure: FigureModel | null;
    board: BoardModel;
    available: boolean;
    id: string;

    constructor(
        board: BoardModel,
        x: number,
        y: number,
        color: ColorsModel,
        figure: FigureModel | null
    ) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.id = nanoid();
        this.available = false;
    }

    moveFigure(target: CellModel) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure?.moveFigure(target);
            target.figure = this.figure;
            this.figure = null;
        }
    }
}