var canvas;
var backgroundImage;
var car1_img, car2_img, track;
//essas
var fuelImg, powerCoinImg;
var obstacleImg1, obstacleImg2;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var fuels, powerCoins, obstacles;//grupos
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImg = loadImage("./assets/fuel.png");
  powerCoinImg = loadImage("./assets/goldCoin.png");
  obstacleImg1 = loadImage("./assets/obstacle1.png");
  obstacleImg2 = loadImage("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
