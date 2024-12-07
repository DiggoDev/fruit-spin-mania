import { ContainerOptions } from "pixi.js";
import { TextWithLabelComponent } from "../general/text-with-label-component";

export class BalanceDisplayComponent extends TextWithLabelComponent {
    constructor(options?: ContainerOptions) {
        super('Balance: ', '0', options)
    }
    public updateBalance(newBalance: number) {
        this.updateValue(String(newBalance))
    }
}