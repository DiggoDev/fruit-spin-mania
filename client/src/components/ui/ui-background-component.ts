import { Container, ContainerChild, ContainerOptions, Graphics } from "pixi.js";
import { getWindowWidth } from "../../config/window-config";

export class UiBackgroundComponent extends Container {
    readonly background: Graphics
    readonly onClick?: () => void

    constructor(options?: ContainerOptions<ContainerChild> | undefined) {
        super(options)
        this.background = new Graphics();

        this.background.rect(0, 0, options?.width ?? 0, options?.height ?? 0)
        this.background.fill(0x7f7b94);

        this.addChild(this.background)
    }
}