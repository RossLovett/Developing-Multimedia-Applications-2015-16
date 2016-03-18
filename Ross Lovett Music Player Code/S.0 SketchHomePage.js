function setup() {
    createCanvas (700, 700)     // Draw Canvas Page 700x700
}


function preload(){
    
}

    


function draw() {
    fill(125, 125, 125)          // Backround Grey
    rect(0, 0, 700, 700)         // Backround Rectangle
    fill(100)                    // Rectangles Dark Grey
    rect(200, 100, 300, 300)     // Client Logo Rectangle
    rect(100, 500, 100, 100)     // Andrew Howes "May Day" Album Art and Button
    rect(300, 500, 100, 100)     // Baby Gramps "Live at WFMU" Album Art and Button
    rect(500, 500, 100, 100)     // The Blend "Losing the Game" Album Art and Button
}



    
function mousePressed(){
    LoadIndexTheBlendPage()
}



function LoadIndexTheBlendPage(){
    window.location.href = 'I.3 IndexTheBlend.html'
}