// Code by Ross Lovett

function setup() {

    createCanvas (700, 700);     // Draw Page 700x700
    
}

function draw() {
  
    fill(125, 125, 125)          
    rect(0, 0, 700, 700)         // Backround Grey
    fill(100)                    // Rectangles Dark Grey
    
    
    rect(50, 50, 250, 250)       // The Blend "Losing The Game" Album Art (Resized)
    
    
    rect(50, 350, 250, 50)       // The Blend "Modern Techniques" Track Name (Text) and button to play track when clicked
    
    rect(50, 450, 250, 50)       // The Blend "Special Deluxe" Track Name (Text) and button to play track when clicked
    
    rect(50, 550, 250, 50)       // The Blend "The Bandit" Track Name (Text) and button to play track when clicked
    
    
    rect(400, 75, 200, 50)      // Home (Text) Button to navigate to home page
    
    rect(400, 150, 75, 50)       // Next (Text) Button to navigate to next artist page
    
    rect(525, 150, 75, 50)       // Prev (Text) Button to navigate to previous artist page
    
    
    rect(375, 250, 250, 250)     // Visualiser area
    
    
    rect(400, 550, 75, 50)       // Play (Text) Button to play track
    
    rect(525, 550, 75, 50)       // Pause (Text) Button to pause track
    
}