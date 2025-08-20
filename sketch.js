let majorMono;
function preload() {
    majorMono = loadFont('fonts/majormono.ttf');
}

function setup() {
    createCanvas(1000, 1000);
    textFont(majorMono);
    textAlign(LEFT, TOP);
}

let quote = "To remember the future\nis a radical act.\nTo build it with\nancestral memory\nis our technology.";

function draw() {
    background('#f1f1f1');
    fill(0);

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
            text(lines[i], 50, 0);
        } else {
            let t = (sin(frameCount * speed) + 1) / 2;
            let offset = amplitude * (1 - t);
            text(lines[i], 50, i * fontSize * lineHeight - prevOffsets - offset);
            prevOffsets += offset;
        }
    }
}
