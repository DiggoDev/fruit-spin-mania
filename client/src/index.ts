import { Game } from './core/game';

async function main() {
	// Create a PixiJS application.
	const game = new Game();

	await game.start();
}

main();
