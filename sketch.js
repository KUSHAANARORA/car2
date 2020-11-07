var game, player, form;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
function setup() {
    createCanvas(displayWidth -20, displayHeight -20)
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}
function draw() {
    if(playerCount === 4) {
        game.update(1)
    
    }
    if(gameState === 1) {
        game.play()
    }
}