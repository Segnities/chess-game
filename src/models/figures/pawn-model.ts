import FigureModel from "./figure-model";

import { FigureNames } from "./figure-model";
import { ColorsModel } from "../colors-model";
import CellModel from "../cell-model";

import blackLogo from "../../assets/img/black-pawn.png";
import whiteLogo from "../../assets/img/white-pawn.png";


export default class PawnModel extends FigureModel {
    constructor(color: ColorsModel, cell: CellModel) {
        super(color, cell);
        this.logo = color === ColorsModel.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: CellModel): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        return true
    }
}