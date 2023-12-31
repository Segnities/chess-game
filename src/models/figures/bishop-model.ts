import CellModel from "../cell-model";
import { ColorsModel } from "../colors-model";
import FigureModel, { FigureNames } from "./figure-model";

import blackLogo from "../../assets/img/black-bishop.png";
import whiteLogo from "../../assets/img/white-bishop.png";

export default class BishopModel extends FigureModel {
    
    constructor(color: ColorsModel, cell: CellModel) {
        super(color, cell);
        this.logo = color === ColorsModel.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: CellModel): boolean {
        if(!super.canMove(target)) {
            return false;
        } 
        if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}