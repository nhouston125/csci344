let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5Circles();
    draw5RedSquares();
    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircles(20);
    drawNCirclesFlexible(30, 25, 400, 0);
    drawNShapesFlexible(5, 25, 575, 212, "circle");
    drawNShapesFlexible(5, 25, 600, 200, "square");
    drawNShapesDirectionFlexible(8, 30, 535, 400, "circle", "row");
    drawNShapesDirectionFlexible(8, 30, 520, 450, "sqaure", "row");
    drawNShapesDirectionFlexible(8, 30, 450, 400, "circle", "column");
    drawNShapesDirectionFlexible(8, 30, 475, 385, "sqaure", "column");
    drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
    noFill();
    fill('red');
    circle(100, 200, 50); // centerX, centerY, radius
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

function draw5CirclesWhile() {
    nWhile = 0;
    yWhile = 200;
    fill("blue");
    while(nWhile < 5){
        circle(175, yWhile, 50);
        yWhile += 50;
        nWhile++;
    }
}

function draw5CirclesFor() {
    yFor = 200
    fill("purple");
    for (let index = 0; index < 5; index++) {
        circle(250, yFor, 50);
        yFor +=50;
    }
}

function drawNCircles(n) {
    yFor = 450;
    fill("green");
    for (let index = 0; index < n; index++) {
        circle(250, yFor, 10);
        yFor += 10;
    }
}

function drawNCirclesFlexible(n, size, x, y) {
    noFill();
    for (let index = 0; index < n; index++) {
        circle(x, y, size);
        y += size;
    }
}

function drawNShapesFlexible(n, size, x, y, shape) {
    fill("yellow");
    if (shape === "circle") {
        for (let index = 0; index < n; index++) {
            circle(x, y, size);
            y += size;
        }
    } else {
        for (let index = 0; index < n; index++) {
            square(x, y, size);
            y += size;
       }
    }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
    fill("pink");
    if (shape === "circle") {
        if (direction === "row") {
            for (let index = 0; index < n; index++) {
                circle(x, y, size);
                x += size;
            }
        } else {
            for (let index = 0; index < n; index++) {
                circle(x, y, size);
                y += size;
            }
        }
    } else {
        if (direction === "row") {
            for (let index = 0; index < n; index++) {
                square(x, y, size);
                x += size;
            }
        } else {
            for (let index = 0; index < n; index++) {
                square(x, y, size);
                y += size;
            }
        }
    }
}