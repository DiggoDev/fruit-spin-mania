import { ContainerOptions } from "pixi.js";
import { TextWithLabelComponent } from "../general/text-with-label-component";

export class BetDisplayComponent extends TextWithLabelComponent {
    constructor(options?: ContainerOptions) {
        super('Bet: ', 1, options)
    }
}