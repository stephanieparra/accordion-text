let majorMono;
let bgImg;
let img;
function preload() {
    majorMono = loadFont('fonts/majormono.ttf');
    img = loadImage("images/agave-nb.png");
    bgImg = loadImage("images/navy-linen.png");
}

function setup() {
    createCanvas(1000, 600);
    img.resize(300, 0);
    textFont(majorMono);
    textAlign(LEFT, TOP);
}

let quote = "To remember the future\nis a radical act.\nTo build it with\nancestral memory\nis our technology.";

function draw() {
    image(bgImg, 0, 0, width, height);
    fill('#f0e5d8');
    let fontSize = 50;
    let lineHeight = 2;
    textSize(fontSize);
    textLeading(fontSize * lineHeight);

    let lines = quote.split('\n');
    let amplitude = fontSize * lineHeight;
    let speed = 0.01;

    let prevOffsets = 0;

    for (let i = 0; i < lines.length; i++) {
        if (i === 0) {
            // Line 1 is fixed
            text(lines[i], 50, 30);
        } else {
            let t = (sin(frameCount * speed) + 1) / 2;
            let offset = amplitude * (1 - t);
            text(lines[i], 50, i * fontSize * lineHeight - prevOffsets - offset);
            prevOffsets += offset;
        }
    }

    imageMode(CORNER);
    image(img, width - img.width - 10, height - img.height - 1);
}
