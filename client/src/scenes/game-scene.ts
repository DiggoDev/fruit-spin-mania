import { Assets, Sprite, Texture } from 'pixi.js';

import backgroundImage from '../assets/background.png'
import reelsBackgroundImage from '../assets/reel-background.png'
import reelsFrameImage from '../assets/reel-frame.png'
import symbol1Image from '../assets/symbol1.png'
import symbol2Image from '../assets/symbol2.png'

import { Scene } from './scene';
import { ReelsContainerEntity } from '../entities/reels-container-entity';
import { centerContainer, resizeContainerAfterWindow } from '../utils/container-helper';
import { GameUiEntity } from '../entities/game-ui-entity';

export class GameScene extends Scene {

	public constructor() {
		super();
	}

	public async init() {
		const backgroundTexture = await Assets.load(backgroundImage)
		const background = new Sprite(backgroundTexture)
		resizeContainerAfterWindow(background)
		this.addChild(background)
		const reelsBackgroundTexture = await Assets.load(reelsBackgroundImage)
		const reelsFrameTexture = await Assets.load(reelsFrameImage)
		const symbolTextures: Record<number, Texture> = {
			1: await Assets.load(symbol1Image),
			2: await Assets.load(symbol2Image),
		}
		const reelsContainer = new ReelsContainerEntity(reelsBackgroundTexture, reelsFrameTexture, symbolTextures)
		const ui = new GameUiEntity()

		centerContainer(reelsContainer, this)

		this.addChild(reelsContainer)
		this.addChild(ui)

		this.handleEvents(reelsContainer, ui)
	}

	public async update(delta: number) {
	}

	private handleEvents(reelsContainer: ReelsContainerEntity, ui: GameUiEntity) {
		// TODO update to random symbols on spin
		ui.spinButton.onSpinButtonClicked(() => {
			reelsContainer.symbolReelGrid.fillGridWithSymbol(2)
			reelsContainer.symbolReelGrid.addSpritesToGrid()
		})
	}
}
