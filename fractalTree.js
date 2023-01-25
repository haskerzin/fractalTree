const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
};

let fps = 30;
let oneBlockSize = 20;
let treeColor = "#8A591B";
let whiteColor = "#D49191";
let greenColor = "#008000";

let map = [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
];

let draw = () => {
    // to do
    createRect(0, 0, canvas.width, canvas.height, greenColor)
    drawGrid()
        
};

let treeLoop = () => {
    //to do
};

let updateInterval = setInterval(treeLoop, 1000 / fps);

let drawGrid = () => {
    for (let i = 0; i < map[0].length; i++){
        for (let j = 0; j < map.length; j++){
            if (map[i][j] == 1){
                createRect(
                    j * oneBlockSize,
                    i * oneBlockSize,
                    oneBlockSize,
                    oneBlockSize,
                    treeColor
                    );
                }
            }
        }
    };

