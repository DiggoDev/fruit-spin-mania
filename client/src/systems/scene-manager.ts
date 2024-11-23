import { Application } from 'pixi.js';
import { Scene } from '../scenes/scene';

export class SceneManager {
	private app: Application;
	private currentScene?: Scene;

	constructor(app: Application) {
		this.app = app;
	}

	async changeScene(newScene: Scene) {
		if (this.currentScene) {
			this.currentScene.destroy();
			this.app.stage.removeChild(this.currentScene);
		}

		this.currentScene = newScene;
		await this.currentScene.init();
		this.app.stage.addChild(this.currentScene);
	}

	update(delta: number) {
		if (this.currentScene) {
			this.currentScene.update(delta);
		}
	}
}
