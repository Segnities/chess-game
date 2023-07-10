import FigureModel from "./figure-model";

import { FigureNames } from "./figure-model";
import { ColorsModel } from "../colors-model";
import CellModel from "../cell-model";

import blackLogo from "../../assets/img/black-rook.png";
import whiteLogo from "../../assets/img/white-rook.png";

export default class RookModel extends FigureModel {
    constructor(color: ColorsModel, cell: CellModel) {
        super(color, cell);
        this.logo = color === ColorsModel.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: CellModel): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if(this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target)) {
            return true;
        } 
        return false;
    }
}