import { Assets, Sprite } from 'pixi.js';

import backgroundImage from '../assets/background.png'
import reelsBackgroundImage from '../assets/reel-background.png'
import reelsFrameImage from '../assets/reel-frame.png'

import { Scene } from './scene';
import { ReelsContainerEntity } from '../entities/reels-container-entity';

export class GameScene extends Scene {

	public constructor() {
		super();
	}

	public async init() {
		const backgroundTexture = await Assets.load(backgroundImage)
		const background = new Sprite(backgroundTexture)
		this.addChild(background)
		const reelsBackgroundTexture = await Assets.load(reelsBackgroundImage)
		const reelsFrameTexture = await Assets.load(reelsFrameImage)
		const reelsContainer = new ReelsContainerEntity(reelsBackgroundTexture, reelsFrameTexture)

		reelsContainer.x = this.width / 4
		reelsContainer.y = this.height / 4
		this.addChild(reelsContainer)
	}

	public async update(delta: number) {
	}
}
