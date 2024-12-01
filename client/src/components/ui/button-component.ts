import { Container, ContainerChild, ContainerOptions, Graphics } from "pixi.js";

export class ButtonComponent extends Container {
    readonly button: Graphics
    readonly onClick?: () => void

    constructor(options?: ContainerOptions<ContainerChild> | undefined) {
        super(options)
        this.button = new Graphics()
            .circle(0, 0, 30)
            .stroke({ width: 5, color: 0xff0000 })
            .fill(0x00ff00);

        this.width = 60
        this.height = 60

        this.addChild(this.button)
    }
}