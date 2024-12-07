import { Container, ContainerOptions, Text } from "pixi.js";

export class TextWithLabelComponent extends Container {
    readonly labelComponent: Text
    readonly valueComponent: Text

    constructor(labelText: string, valueText: string | number, options?: ContainerOptions) {
        super(options)
        this.labelComponent = new Text({
            text: labelText
        })
        this.valueComponent = new Text({
            text: valueText,
            x: this.labelComponent.width
        })
        this.width = this.labelComponent.width + this.valueComponent.width + 15
        this.height = this.labelComponent.height + this.valueComponent.height + 15

        this.addChild(this.labelComponent)
        this.addChild(this.valueComponent)
    }
}