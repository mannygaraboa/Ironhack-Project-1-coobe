//To start the game
let time = 0;
let beats = [];

let noise = new Audio("laser_death_noise.mp3");

function music() 
{
    setInterval(function () 
    {
        time += 1;
    }, 1)
  var audio = new Audio("Synthetic Life.mp3")
  audio.play();

}

let coobe = 
{
    x: 100,
    y: 270,
    width: 30,
    height: 30,
    jumpPressed: false,
    //jumpLimit: 
    color: "rgb(23, 234, 167)",
    falling: false
};

let spikes = [];
let squares = [];
let platforms = [];

let gameOver  = false; 
let canvas = document.getElementById('grid');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 300;

window.onload = function() 
{
    document.getElementById("start-button").onclick = function() 
    {
        startGame();
        this.blur()
    };
}

    function startGame()
    {
        music();
        animate();
        // setInterval(animate, 1)
    }

//let drag = 0;
function drawCoobe()
{
    ctx.beginPath();
    ctx.rect(coobe.x, coobe.y, coobe.width, coobe.height, coobe.color)
    ctx.fillStyle = coobe.color;
    ctx.fill();
    ctx.strokeRect(coobe.x, coobe.y, coobe.width, coobe.height, "rgb(0, 221, 255)")
    ctx.closePath();
    coobe.falling = false;

    if(coobe.jumpPressed)
    {
        coobe.y -= 8;
        coobe.falling = false;
    }
    if(!coobe.jumpPressed && coobe.y < 270)
    {
        coobe.y += 8;
        coobe.falling = true;
    }
    if(coobe.y < 180)
    {
        coobe.jumpPressed = false;
    }
}


function jump()
{
    coobe.jumpPressed === true; // As soon as spacebar is pressed
}
document.onkeydown = function(e) 
{
    if(e.keyCode == 32)//&& coobe.y == 270)
    {
        jump();
        beats.push(frames);
        console.log("beat");
        coobe.jumpPressed = true;
    }
    else
    {
        coobe.jumpPressed = false;
    }
}


// The Spikes
var obstacle1 = 
{
    x: 850,
    y: 300,
    width: 25,
    height: 25,
}
function drawOneSpike(obstacle1)
{
    ctx.beginPath();
    ctx.moveTo(obstacle1.x,obstacle1.y);
    ctx.lineTo(obstacle1.x + 15, obstacle1.y - 30);
    ctx.lineTo(obstacle1.x + 30, obstacle1.y);
    ctx.fillStyle = "black"
    ctx.fill();
    obstacle1.x -= 10;
}
function drawSpikes()
{
    for(let spike of spikes)
    {
        drawOneSpike(spike)
    }
}
// Map of Spikes
let spikeBeatles = [149, 152, 312, 387, 473, 551, 628, 706, 788, 829, 869, 909, 948, 1023, 1065, 1106, 1186, 1223, 1261, 1332, 1375, 1414, 1420, 1463, 1543, 1581, 1584, 1640, 1699, 1766, 1772, 1849, 1852, 1866, 1930, 1973, 2013, 2049, 2091, 2127, 2196, 2199, 2315, 2318, 2429, 2432, 2533, 2536, 2631, 2634, 2713, 2756, 2796, 2865, 2871, 2942, 2949, 3019, 3026, 3101, 3143, 3184, 3295, 3334, 3375, 3415, 3447, 3452, 3495, 3532, 3571, 3613, 3653, 3692, 3729, 3735, 3769, 3809, 3847, 3878, 3884, 3928, 3963, 4004, 4041, 4047, 4083, 4122, 4161, 4197, 4203, 4239, 4277, 4315, 4354, 4429, 4505, 4549, 4585, 4660, 4666];
createSpikes()
function createSpikes()
{
    for(let i = 0; i < spikeBeatles.length; i++)
    {
        spikes.push({...obstacle1, x:spikeBeatles[i]*10+150})
    }
    console.log(spikes);
}


// The Squares
var obstacle2 = 
{
    x: 850,
    y: 270,
    width: 30,
    height: 30
}
function drawOneSquare(obstacle2)
{
    ctx.beginPath();
    ctx.rect(obstacle2.x, obstacle2.y, obstacle2.width, obstacle2.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    obstacle2.x -= 10;
}
function drawSquares()
{
    for(let square of squares)
    {
        drawOneSquare(square)
    }
}
// Map of Squares
let squareBeatles = [200, 400, 600, 800, 1000, 1200, 1400, 1600];
createSquares()
function createSquares()
{
    for(let i = 0; i < squareBeatles.length; i++)
    {
        squares.push({...obstacle2, x:squareBeatles[i]*10+150})
    }
    console.log(squares);
}


// The Platforms
var obstacle3 = 
{
    x: 850,
    y: 250,
    width: 250,
    height: 30
}
function drawOnePlatform(obstacle3)
{
    ctx.beginPath();
    ctx.rect(obstacle3.x, obstacle3.y, obstacle3.width, obstacle3.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    obstacle3.x -= 10;
}
function drawPlatforms()
{
    for(let platform of platforms)
    {
        drawOnePlatform(platform)
    }
}
// Map of Platforms
let platformBeatles = [350, 450, 550, 650, 850, 900, 910];
createPlatforms()
function createPlatforms()
{
    for(let i = 0; i < platformBeatles.length; i++)
    {
        platforms.push({...obstacle3, x:platformBeatles[i]*10+150});
    }
    console.log(platforms);
}


// COLLISION AND PLATFORMING
function collision()
{
    for(let spike of spikes)
    {
        if 
        (coobe.x < spike.x + spike.width &&
        coobe.x + coobe.width > spike.x &&
        coobe.y < spike.y &&
        coobe.y + coobe.height > spike.y - 30) 
        {
            console.log("collided")

            gameOver = true; 
            // collision detected!
        }
            
    }

    for(let square of squares)
    {
        if 
        (coobe.x < square.x + square.width &&
        coobe.x + coobe.width > square.x &&
        coobe.y < square.y + square.height &&
        coobe.y + coobe.height > square.y) 
        {

            if(coobe.falling)
            {
                console.log("on platform")
                coobe.y = square.y - square.height
                coobe.falling = false;
                //debugger
                //coobe.y = coobe.y - (square.height)
            }
            else
            {
                gameOver = true; 
            }
                //gameOver = true; 
                // collision detected!
        } 
    }

    for(let platform of platforms)
    {
        if 
        (coobe.x < platform.x + platform.width &&
        coobe.x + coobe.width > platform.x &&
        coobe.y < platform.y + platform.height &&
        coobe.y + coobe.height > platform.y) 
        {

            if(coobe.falling)
            {
                console.log("on platform")
                coobe.y = platform.y - platform.height
                coobe.falling = false;
                //debugger
                //coobe.y = coobe.y - (square.height)
            }
            else
            {
                gameOver = true; 
            }
                //gameOver = true; 
                // collision detected!
        } 
    }
}

let frames = 0; 

function animate()
{
    if(gameOver)
    {
        noise.play();
        setTimeout(function() 
        {
            window.location.reload()
        }, 1000)
        
        return;
    }
    window.requestAnimationFrame(animate);
    //draw everything and erase everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCoobe();
    //drawOneSpike();
    drawSpikes();
    drawSquares();
    drawPlatforms();
    collision();
    frames++; 
}


// Beat Interval Patterns:
// 149, 312, 387, 473, 551, 628, 706, 788, 829, 869, 909, 948, 1023, 1065, 1106, 1186, 1223, 1261, 1332, 1375, 1414, 1420, 1463, 1543, 1581, 1587, 1620, 1699, 1766, 1772, 1849, 1854, 1866, 1930, 1973, 2013, 2049, 2091, 2127, 2196, 2202, 2315, 2321, 2429, 2434, 2533, 2539, 2631, 2636, 2713, 2756, 2796, 2865, 2871, 2942, 2949, 3019, 3026, 3101, 3143, 3184, 3295, 3334, 3375, 3415, 3447, 3452, 3495, 3532, 3571, 3613, 3653, 3692, 3729, 3735, 3769, 3809, 3847, 3878, 3884, 3928, 3963, 4004, 4041, 4047, 4083, 4122, 4161, 4197, 4203, 4239, 4277, 4315, 4354, 4429, 4505, 4549, 4585, 4660, 4666, …]


// Spikes Collision
// (coobe.x + 20 >= spike.x            // spike hit cube from the back
                // && coobe.x + 20 <= spike.x
                // && coobe.y == 270)                  // spike hit cube from the front
                // || (coobe.x + 20 == spike.x
                // && coobe.y <= obstacle1Tip))
                

                // (coobe.x + 100 == spike.x
                // && coobe.y == 230)
                // ||
                // spike.y - 30 == coobe.y          // spike hit cube from underneath
                // && ((coobe.x <= spike.x          // spike is right of cube
                // && coobe.x >= spike.x )          // spike is left of cube
            
                
                //alert("collision");           // cube explodes and restarts game   

// Squares Collision
// if(
            //     (coobe.x + 20 >= square.x
            //     && coobe.x +20 <= square.x
            //     && coobe.y == 270)
            // )
            // {

            // }