let characterX;
let characterY;
let isCharacterClicked = false;

function setup() {
  createCanvas(400, 400);
  characterX = width / 2;
  characterY = height / 2;
}

function draw() {
  background(220);
  
  // Draw character
  fill(255, 0, 0); // Red color
  ellipse(characterX, characterY, 50, 50); // Head
  line(characterX, characterY + 25, characterX, characterY + 80); // Body
  line(characterX, characterY + 50, characterX - 30, characterY + 20); // Left arm
  line(characterX, characterY + 50, characterX + 30, characterY + 20); // Right arm
  line(characterX, characterY + 80, characterX - 20, characterY + 120); // Left leg
  line(characterX, characterY + 80, characterX + 20, characterY + 120); // Right leg
  
  // Check if character is clicked
  if (isCharacterClicked) {
    fill(0, 255, 0); // Green color when clicked
  } else {
    fill(255); // White color when not clicked
  }
  ellipse(characterX, characterY, 10, 10); // Mouse target
  
}

function mousePressed() {
  let d = dist(mouseX, mouseY, characterX, characterY);
  if (d < 25) {
    isCharacterClicked = !isCharacterClicked;
  }
}

function mouseDragged() {
  if (isCharacterClicked) {
    characterX = mouseX;
    characterY = mouseY;
  }
}
