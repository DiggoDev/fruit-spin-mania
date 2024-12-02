import { Graphics, GraphicsContext, GraphicsOptions } from "pixi.js";

export class ButtonComponent extends Graphics {

    constructor(options?: GraphicsOptions | GraphicsContext) {
        super(options)
        this
            .circle(0, 0, 30)
            .stroke({ width: 5, color: 0xff0000 })
            .fill(0x00ff00);

        this.width = 60
        this.height = 60

        this.interactive = true;
    }
}