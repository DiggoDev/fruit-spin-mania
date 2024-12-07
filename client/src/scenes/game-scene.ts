import { Assets, Sprite, Texture } from 'pixi.js';

import backgroundImage from '../assets/background.png'
import reelsBackgroundImage from '../assets/reel-background.png'
import reelsFrameImage from '../assets/reel-frame.png'
import symbol1Image from '../assets/symbol1.png'
import symbol2Image from '../assets/symbol2.png'
import symbol3Image from '../assets/symbol3.png'
import symbol4Image from '../assets/symbol4.png'
import symbol5Image from '../assets/symbol5.png'

import { Scene } from './scene';
import { ReelsContainerEntity } from '../entities/reels-container-entity';
import { centerContainer, resizeContainerAfterWindow } from '../utils/container-helper';
import { GameUiEntity } from '../entities/game-ui-entity';

export class GameScene extends Scene {
	private gameState: {
		accountId: number
		balance: number
	}
	private ui = new GameUiEntity()

	public constructor() {
		super();
		this.gameState = {
			accountId: -1,
			balance: -1
		}
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
			3: await Assets.load(symbol3Image),
			4: await Assets.load(symbol4Image),
			5: await Assets.load(symbol5Image),
		}
		const reelsContainer = new ReelsContainerEntity(reelsBackgroundTexture, reelsFrameTexture, symbolTextures)
		this.ui = new GameUiEntity()

		centerContainer(reelsContainer, this)

		this.addChild(reelsContainer)
		this.addChild(this.ui)

		this.handleEvents(reelsContainer, this.ui)
		this.createNewAccount()
			.then((data) => {
				this.gameState.accountId = data.accountId
				console.log(`New account with id ${this.gameState.accountId}`)
			})
			.then(async () => {
				const { balance } = await this.getBalance()
				this.gameState.balance = balance
				console.log(`New balance ${this.gameState.balance}`)
			})
			.then(() => {
				this.ui.updateBalance(this.gameState.balance)
				console.log(`Balance updated to ${this.gameState.balance}`)
			})
	}

	public async update(delta: number) {
	}

	private handleEvents(reelsContainer: ReelsContainerEntity, ui: GameUiEntity) {
		ui.spinButton.onSpinButtonClicked(async () => {
			const response = await this.api.game.getGameRequest()
			reelsContainer.symbolReelGrid.setGridWithSymbols(response.symbols)
			// reelsContainer.symbolReelGrid.fillGridWithSymbol(2)
			reelsContainer.symbolReelGrid.addSpritesToGrid()
		})
	}

	private async createNewAccount() {
		return await this.api.account.setAccountRequest({ balance: 1000 })
	}

	private async getBalance() {
		if (this.gameState.accountId == -1) throw new Error('AccountId in gameState was undefined')
		return await this.api.account.getBalance(this.gameState.accountId)
	}
}
