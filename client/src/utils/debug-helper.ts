import { initDevtools } from '@pixi/devtools';
import { Application } from 'pixi.js';

export async function addDevTools(app: Application) {
	initDevtools({ app });
}
