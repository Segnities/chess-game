import FigureModel from "./figure-model";

import { FigureNames } from "./figure-model";
import { ColorsModel } from "../colors-model";
import CellModel from "../cell-model";

import blackLogo from "../../assets/img/black-pawn.png";
import whiteLogo from "../../assets/img/white-pawn.png";


export default class PawnModel extends FigureModel {
    private _isFirtsStep = true;
    constructor(color: ColorsModel, cell: CellModel) {
        super(color, cell);
        this.logo = color === ColorsModel.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    moveFigure(target: CellModel): void {
        super.moveFigure(target);
        this._isFirtsStep = false;
    }

    canMove(target: CellModel): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        const direction = this.cell.figure?.color === ColorsModel.BLACK ? 1 : -1;
        const firtsStepDirection = this.cell.figure?.color === ColorsModel.BLACK ? 2 : -2;

        if (
            (target.y === this.cell.y + direction ||
                this._isFirtsStep && (target.y === this.cell.y + firtsStepDirection)) &&
            (target.x === this.cell.x) &&
            this.cell.board.getCell(target.x, target.y).isEmpty()
        ) {
            return true;
        }

        if (
            target.y === this.cell.y + direction &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
            this.cell.isEnemy(target)
        
        ) {
            return true;
        }
        return false;
    }
}