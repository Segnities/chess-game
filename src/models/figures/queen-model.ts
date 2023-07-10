import FigureModel from "./figure-model";

import { FigureNames } from "./figure-model";
import { ColorsModel } from "../colors-model";
import CellModel from "../cell-model";

import blackLogo from "../../assets/img/black-queen.png";
import whiteLogo from "../../assets/img/white-queen.png";

export default class QueenModel extends FigureModel {
    constructor(color: ColorsModel, cell: CellModel) {
        super(color, cell);
        this.logo = color === ColorsModel.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: CellModel): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        if(this.cell.isEmptyVertical(target)) {
            return true;
        } 
        if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}