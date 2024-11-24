import { Container, Sprite } from "pixi.js";

export function resizeContainerAfterWindow(sprite: Container, scaleWidth = 1, scaleHeight = 1) {
    sprite.width = window.innerWidth * scaleWidth;
    sprite.height = window.innerHeight * scaleHeight;
}

export function centerContainer(child: Container, parentContainer: Container) {

    child.x = (parentContainer.width / 2) - (child.width / 2)
    child.y = (parentContainer.height / 2) - (child.height / 2)
}