let canvas = document.getElementById("canvas");
const brush = canvas.getContext("2d");

let createLine = (x0, y0, x1, y1, color) =>{
    brush.strokeStyle = color;
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(x0, y0);
    brush.lineTo(x1, y1);
    brush.stroke();
};

let createRect = (x, y, width, height, color) =>{
    brush.fillStyle = color;
    brush.fillRect(x, y, width, height)
};

let angle = Math.PI/4;
let steps = 5;

let drawTree = (angle, steps) =>{
    var initialPos = [canvas.width/2, canvas.height];
    var initialLength = 250;
    var branchOrigin = [[canvas.width/2, canvas.height - initialLength]]
    // Array used for storing the new branch origins generated in each step
    var newBranchOrigin = [];
    var growthFactor = 1/2;
    // Creating the main log
    createLine( initialPos[0],
                initialPos[1],
                initialPos[0],
                initialPos[1] - initialLength,
                'white');
    // Creating the branches
    for(let i=0; i < steps; i++){
        for(let j=0; j<branchOrigin.length; j++){
            // drawing the branches from the left side
            createLine( branchOrigin[j][0],
                        branchOrigin[j][1],
                        branchOrigin[j][0] - Math.sin((i*0.1+1)*angle)*initialLength*growthFactor,
                        branchOrigin[j][1] - Math.cos((i*0.1+1)*angle)*initialLength*growthFactor,
                        'white');

            // drawing the branches from the right side
            createLine( branchOrigin[j][0],
                        branchOrigin[j][1],
                        branchOrigin[j][0] + Math.sin((i*0.1+1)*angle)*initialLength*growthFactor,
                        branchOrigin[j][1] - Math.cos((i*0.1+1)*angle)*initialLength*growthFactor,
                        'white');
            
            // Saving the new branch origins
            newBranchOrigin.push([branchOrigin[j][0] - Math.sin((i*0.1+1)*angle)*initialLength*growthFactor,
                                 branchOrigin[j][1] - Math.cos((i*0.1+1)*angle)*initialLength*growthFactor],
                                 [branchOrigin[j][0] + Math.sin((i*0.1+1)*angle)*initialLength*growthFactor,
                                 branchOrigin[j][1] - Math.cos((i*0.1+1)*angle)*initialLength*growthFactor]);
            
            
            
        }
        // Updating the growthfactor for the next generation of branches
        growthFactor *= 0.65;
        // Updating the branchOrigin with the new ones generated in the last step
        branchOrigin = newBranchOrigin;
        // Clearing the array newBranchOrigin for the next loop
        newBranchOrigin = [];


    }
}


createRect(0, 0, canvas.width, canvas.height, 'blue');

// createLine( canvas.width/2, 
//             canvas.height, 
//             canvas.width/2, 
//             canvas.height - initialLength, 
//             'white');

// createLine( canvas.width/2, 
//             canvas.height - initialLength, 
//             canvas.width/2 - Math.sin(angle)*initialLength*growthFactor, 
//             canvas.height - initialLength - Math.cos(angle)*initialLength*growthFactor,
//             'white');


// createLine( canvas.width/2, 
//             canvas.height - initialLength, 
//             canvas.width/2 + Math.sin(angle)*initialLength*growthFactor, 
//             canvas.height - initialLength - Math.cos(angle)*initialLength*growthFactor,
//             'white');


drawTree(angle, 10);



