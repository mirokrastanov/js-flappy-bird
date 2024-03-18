import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSprite("bird", "sprites/bird.png");
loadSprite("bg", "sprites/bg.png");
loadSprite("pipe", "sprites/pipe.png");
// load sounds
loadSound("jump", "sounds/jump.mp3");
loadSound("bruh", "sounds/bruh.mp3");
loadSound("pass", "sounds/pass.mp3");

let highScore = 0;

// Game scene
scene("game", () => {
	const PIPE_GAP = 140;
	let score = 0;
	setGravity(1600);

	add([sprite("bg", { width: width(), height: height() })]);

	const scoreText = add([text(score), pos(12, 12)]);

	const player = add([sprite("bird"), scale(1.2), pos(100, 50), area(), body()]);

	function createPipes() {
		const offset = rand(-50, 50);
		// bottom pipe
		add([
			sprite("pipe"),
			pos(width(), height() / 2 + offset + PIPE_GAP / 2),
			"pipe",
			scale(2),
			area(),
			{ passed: false },
		]);

		// top pipe
		add([
			sprite("pipe", { flipY: true }),
			pos(width(), height() / 2 + offset - PIPE_GAP / 2),
			"pipe",
			anchor("botleft"),
			scale(2),
			area(),
		]);
	}



});

// Game over scene
scene("gameover", () => {

});

// Start the game
go("game");
