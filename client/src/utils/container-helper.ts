import { Container, Sprite } from "pixi.js";

export function resizeContainerAfterWindow(container: Container, scaleWidth = 1, scaleHeight = 1) {
    container.width = window.innerWidth * scaleWidth;
    container.height = window.innerHeight * scaleHeight;
}
export function resizeContainerAfterOtherContainer(container: Container, otherContainer: Container, scaleWidth = 1, scaleHeight = 1) {
    container.width = otherContainer.width * scaleWidth;
    container.height = otherContainer.height * scaleHeight;
}

export function centerContainer(child: Container, parentContainer: Container) {

    child.x = (parentContainer.width / 2) - (child.width / 2)
    child.y = (parentContainer.height / 2) - (child.height / 2)
}