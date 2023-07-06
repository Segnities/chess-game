import { nanoid } from "nanoid";

import { ColorsModel } from "../colors-model";
import logo from "../../assets/img/black-king.png";
import CellModel from "../cell-model";

export enum FigureNames {
    FIGURE='',
    KING='king',
    KNIGHT='knight',
    PAWN='pawn',
    QUEEN='queen',
    ROOK = 'rook',
    BISHOP = 'bishop'
}

export default class FigureModel {
    color: ColorsModel;
    logo: typeof logo | null;
    cell:CellModel;
    name: string;
    id: string;

    constructor(color:ColorsModel, cell:CellModel) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = nanoid();
    }

    canMove(target: CellModel): boolean {
        return true;
    }
    moveFigure(target: CellModel): void {
        console.log(target);
    }
}