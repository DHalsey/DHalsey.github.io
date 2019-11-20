//load.js

var game = new Phaser.Game(1200, 704, Phaser.AUTO, '');
var score = 0;
console.log("In Load"); //debug message to show we are in loadState


game.state.add('main',mainState);
game.state.add('menu',menuState);
game.state.add('load',loadState);
game.state.add('gameOver',gameOverState);

game.state.start('load');


