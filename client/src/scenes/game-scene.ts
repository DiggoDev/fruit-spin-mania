import { Assets, Sprite } from 'pixi.js';

import backgroundImage from '../assets/background.png'
import reelsBackgroundImage from '../assets/reel-background.png'
import reelsFrameImage from '../assets/reel-frame.png'

import { Scene } from './scene';
import { ReelsContainerEntity } from '../entities/reels-container-entity';
import { centerContainer, resizeContainerAfterWindow } from '../utils/container-helper';

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
		const reelsContainer = new ReelsContainerEntity(reelsBackgroundTexture, reelsFrameTexture)

		centerContainer(reelsContainer, this)

		this.addChild(reelsContainer)
	}

	public async update(delta: number) {
	}
}
