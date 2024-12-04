import { Container } from 'pixi.js';
import { Api } from '../api/api';

export class Scene extends Container {
	protected readonly api: Api
	constructor() {
		super();
		this.api = new Api()
	}

	async init(): Promise<void> {
		// Initialize assets and objects
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async update(_delta: number): Promise<void> {
		// Update game logic
	}

	async destroy(): Promise<void> {
		// Cleanup assets
	}
}
