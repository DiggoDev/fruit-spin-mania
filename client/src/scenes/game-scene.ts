import { Assets, Sprite } from 'pixi.js';

import backgroundImage from '../assets/background.png'

import { Scene } from './scene';

export class GameScene extends Scene {

	public constructor() {
		super();
	}

	public async init() {
		const backgroundTexture = await Assets.load(backgroundImage)
		const background = new Sprite(backgroundTexture)
		this.addChild(background)
	}

	public async update(delta: number) {
	}
}
