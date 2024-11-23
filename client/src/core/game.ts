import { addDevTools } from '../utils/debug-helper';
import { Application } from 'pixi.js';

import { SceneManager } from '../systems/scene-manager';
import { Scene } from '../scenes/scene';
import { GameScene } from '../scenes/game-scene';

export class Game {
	private app: Application;
	private exitGame = false;
	private sceneManager: SceneManager;
	private scenes: Record<string, Scene>;

	constructor() {
		this.app = new Application();
		this.sceneManager = new SceneManager(this.app);
		this.scenes = {};
	}

	public async start() {
		// Init
		addDevTools(this.app);
		// Intialize the application.
		await this.app.init({ background: '#1099bb', resizeTo: window });
		// Then adding the application's canvas to the DOM body.
		document.body.appendChild(this.app.canvas);

		this.scenes['game'] = new GameScene();

		await this.sceneManager.changeScene(this.scenes['game']);

		// Start game loop
		this.gameLoop();
	}

	private gameLoop() {
		this.app.ticker.add((ticker) => {
			if (this.exitGame) ticker.stop();
			this.sceneManager.update(ticker.deltaMS);
		});
	}
}
