import { GraphicsContext, GraphicsOptions } from "pixi.js";
import { ButtonComponent } from "./button-component";

export class SpinButtonComponent extends ButtonComponent {
    readonly SPIN_BUTTON_CLICKED_EVENT = 'spinButtonClickedEvent'
    constructor(options?: GraphicsOptions | GraphicsContext) {
        super(options)
        this.on('click', () => {
            this.emit(this.SPIN_BUTTON_CLICKED_EVENT)
        })
    }
    public onSpinButtonClicked(fn: () => void | Promise<void>) {
        return this.on(this.SPIN_BUTTON_CLICKED_EVENT, fn)
    }
}