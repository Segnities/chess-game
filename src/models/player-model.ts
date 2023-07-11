import { ColorsModel } from "./colors-model";

export default class PlayerModel {
    color: ColorsModel;

    constructor(color: ColorsModel) {
        this.color = color;
    }
}