import { Container } from "pixi.js";
import { ButtonComponent } from "../components/ui/button-component";
import { SpinButtonComponent } from "../components/ui/spin-button-component";
import { UiBackgroundComponent } from "../components/ui/ui-background-component";
import { getWindowHeight, getWindowWidth } from "../config/window-config";
import { BalanceDisplayComponent } from "../components/ui/balance-display-component";
import { BetDisplayComponent } from "../components/ui/bet-display-component";

export class GameUiEntity extends Container {
    readonly buttons: ButtonComponent[] = []
    readonly background: UiBackgroundComponent
    readonly spinButton: SpinButtonComponent

    readonly balanceDisplay: BalanceDisplayComponent
    readonly betDisplay: BetDisplayComponent
    constructor() {
        super()
        const windowHeight = getWindowHeight()
        const windowWidth = getWindowWidth()
        this.width = windowWidth
        this.height = windowHeight
        // Buttons init
        this.spinButton = new SpinButtonComponent({
            y: windowHeight - 30 - 5,
            x: windowWidth - 30 - 5
        })
        this.buttons.push(this.spinButton)
        // Background init
        this.background = new UiBackgroundComponent({
            y: windowHeight - this.spinButton.height,
            width: windowWidth,
            height: this.spinButton.height,
        })

        // Balance display init
        this.balanceDisplay = new BalanceDisplayComponent({
            y: windowHeight - 30 - 5,
            x: 5
        })
        this.betDisplay = new BetDisplayComponent({
            y: windowHeight - 30 - 5,
            x: 10 + this.balanceDisplay.width
        })

        this.addChild(this.background)
        this.addChild(this.balanceDisplay)
        this.addChild(this.betDisplay)
        this.addChild(this.spinButton)
    }

    public updateBalance(balance: number) {
        this.balanceDisplay.updateBalance(balance)
        this.betDisplay.x = 10 + this.balanceDisplay.width
    }
}