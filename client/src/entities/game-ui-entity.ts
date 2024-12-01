import { Container } from "pixi.js";
import { ButtonComponent } from "../components/ui/button-component";
import { SpinButtonComponent } from "../components/ui/spin-button-component";
import { UiBackgroundComponent } from "../components/ui/ui-background-component";
import { getWindowHeight, getWindowWidth } from "../config/window-config";

export class GameUiEntity extends Container {
    readonly buttons: ButtonComponent[] = []
    readonly spinButton: SpinButtonComponent
    readonly background: UiBackgroundComponent
    constructor() {
        super()
        const windowHeight = getWindowHeight()
        const windowWidth = getWindowWidth()
        this.width = windowWidth
        this.height = windowHeight
        this.spinButton = new SpinButtonComponent()
        this.buttons.push(this.spinButton)
        this.spinButton.y = windowHeight - 30 - 5
        this.spinButton.x = windowWidth - 30 - 5
        this.background = new UiBackgroundComponent({
            y: windowHeight - this.spinButton.height,
            width: windowWidth,
            height: this.spinButton.height,
        })
        // this.background.x = 0
        // this.background.y = 0
        // this.background.width = windowWidth
        // this.background.height = windowHeight
        this.addChild(this.background)
        this.addChild(this.spinButton)
    }
}