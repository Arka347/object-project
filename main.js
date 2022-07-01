img = "";
function preload(){
    img = loadImage('176-1761601_simple-home-interior-design-bedroom.jpg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FFA500");
    text("Bed and lamp", 45, 75);
    noFill();
    stroke("#FFA500");
    rect(30, 60, 450, 350);
}
