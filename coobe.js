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
    falling: false,
    jump: 180,
    onSomething: true
};

let spikes = [];
let groundSquares = [];
let airSquares = [];

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
}

// color: "rgb(23, 234, 167)"
// falling: false
// height: 30
// jump: 180
// jumpPressed: true
// onSomething: false
// width: 30
// x: 100
// y: 193
function drawCoobe()
{
    ctx.beginPath();
    ctx.rect(coobe.x, coobe.y, coobe.width, coobe.height, coobe.color)
    ctx.fillStyle = coobe.color;
    ctx.fill();
    ctx.strokeRect(coobe.x, coobe.y, coobe.width, coobe.height, "rgb(0, 221, 255)")
    ctx.closePath();
    coobe.falling = false;

    if(coobe.jumpPressed && coobe.onSomething) //Jumping up 
    {
        coobe.y -= 7; 
        coobe.falling = false;
       // coobe.jumpPressed = false;

    }
    if(!coobe.jumpPressed && coobe.y <= 268) //Falling until hits the ground
    {
        coobe.jump = 180
        coobe.y += 7;
        coobe.falling = true;
        coobe.jumpPressed = false
        //coobe.onSomething = true; 

    }
    if(coobe.y >= 269){
       coobe.onSomething = true;
       coobe.jumpPressed = false;
    }
    //console.log(coobe.y, obstacle2.height)
    //let currentHeight = coobe.y; 
    //console.log(coobe.jump)
    if(coobe.y < (coobe.jump)) //Reach his jump limit
    {
        coobe.jumpPressed = false;
        coobe.onSomething = false; 

    }
}


// function jump()
// {   
//     coobe.jumpPressed === true; // As soon as spacebar is pressed
//     //coobe.jump = 180; 

//     //setInterval(function ()
// }
document.onkeydown = function(e) 
{
    if(e.keyCode == 32)//&& coobe.y == 270)
    {
        //jump();
        beats.push(frames);
        console.log("beat");
        if(coobe.onSomething)
        {
            coobe.jumpPressed = true;
        }
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
    width: 20,
    height: 20,
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
let spikeBeatles = 
[
160, 315, 318, 
];
createSpikes()
function createSpikes()
{
    for(let i = 0; i < spikeBeatles.length; i++)
    {
        spikes.push({...obstacle1, x:spikeBeatles[i]*10+150})
    }
    //console.log(spikes);
}


// The Ground Squares
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
function drawGroundSquares()
{
    for(let groundSquare of groundSquares)
    {
        drawOneSquare(groundSquare)
    }
}
// Map of Squares
let groundSquareBeatles = 
[157, 308, 394, 475, 556, 627, 709, 787, 865, 908, 949, 1023, 1066, 1106, 1183, 1223, 1261, 1338, 1377, 1416, 1456, 1494, 1563, 1718, 1760, 1802, 1843, 1883, 2016, 2155, 2196, 2237, 2314, 2352, 2391, 2493, 2533, 2576, 2671, 2709, 2751, 2830, 2867, 2945, 2985, 3138, 3217, 3297, 3341, 3378, 3415, 3453, 3492, 3531, 3573, 3613, 3650, 3688, 3725, 3766, 3880, 3961, 3991, 4039, 4080, 4157, 4238, 4312, 4393, 4470, 4548, 4624, 4702, 4783, 4896, 4978, 5056, 5137, 5211, 5241, 5289, 5368, 5447, 5525, 5617, 5693, 5777, 5839, 5920, 5995, 6101, 6139, 6179, 6218, 6256, 6396, 6430, 6538, 6575, 6615,
6725, 6765, 6889, 6930, 6967, 7046, 7085, 7123, 7199, 7238, 7274, 7353, 7393, 7430, 7515, 7591, 7671, 7748, 7827, 7905, 7950, 7988, 8099, 8177, 8257, 8335, 8410, 8489, 8568, 8644, 8685, 8726, 8806, 8883, 8964, 9038, 9117, 9157, 9197, 9236, 9291, 9354, 9395, 9437, 9513, 9555, 9592, 9763, 9805, 9856, 9895, 9934, 9977, 10017, 10073, 10138, 10176, 10228, 10328, 10406, 10485, 10564, 10642, 10720, 10795, 10875, 10955, 11037, 11114, 11191, 11257, 11299, 11335, 11380, 11417, 11461, 11496, 11539, 11580, 11663, 11701, 11741, 11927, 11972, 12012, 12054, 12092, 12131, 12168, 12205, 12289, 12328, 12366, 12520, 12597, 12672, 12714, 12757, 12793, 12833,
13147, 13185, 13226, 13269, 13309, 13351, 13388, 13428, 13466, 13547, 13624, 13701, 13780, 13857, 13933, 13975, 14016, 14093, 14131, 14172, 14212, 14250, 14287, 14328, 14367, 14405, 14443, 14483, 14523, 14561, 14600, 14641, 14680, 14715
// 453, 541, 622, 697, 776, 858, 919, 921, 924, 927, 930, 933, 936, 939, 942, 945, 948, 951, 954, 957, 960, 
// 1200, 1203, 1206, 1209, 1212, 1215, 1218, 1221, 1224, 1227, 1230
];
createSquares()
function createSquares()
{
    for(let i = 0; i < groundSquareBeatles.length; i++)
    {
        groundSquares.push({...obstacle2, x:groundSquareBeatles[i]*10+150})
    }
    //console.log(groundSquares);
}


// The Air Squares
var obstacle3 = 
{
    x: 850,
    y: 250,
    width: 30,
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
function drawAirSquares()
{
    for(let airSquare of airSquares)
    {
        drawOnePlatform(airSquare)
    }
}
// Map of Platforms
let airSquareBeatles = 
[
963, 966, 969, 972, 975, 978, 981, 984, 987, 990, 993, 996, 999
];
createPlatforms()
function createPlatforms()
{
    for(let i = 0; i < airSquareBeatles.length; i++)
    {
        airSquares.push({...obstacle3, x:airSquareBeatles[i]*10+150});
    }
    //console.log(airSquares);
}


// COLLISION AND PLATFORMING
function collision()
{
    for(let spike of spikes)
    {
        if 
        (coobe.x < (spike.x + spike.width) &&
        coobe.x + coobe.width > spike.x &&
        coobe.y < spike.y &&
        coobe.y + coobe.height > spike.y - 30) 
        {
            //console.log("collided")

            gameOver = true; 
            // collision detected!
        }
    }

    for(let groundSquare of groundSquares)
    {
        if 
        (coobe.x < groundSquare.x + groundSquare.width &&
        coobe.x + coobe.width > groundSquare.x &&
        coobe.y < groundSquare.y + groundSquare.height &&
        coobe.y + coobe.height > groundSquare.y) 
        {
            coobe.jump = 180 - groundSquare.height//groundSquare.height + 30;
            if(coobe.falling)
            {
                //console.log("on platform")
                coobe.y = (groundSquare.y - groundSquare.height);
                coobe.falling = false;
                coobe.onSomething = true; 
            }
            else
            {
                gameOver = true; 
            }
                //gameOver = true; 
                // collision detected!
        } 
    }

    for(let airSquare of airSquares)
    {
        if 
        (coobe.x < airSquare.x + airSquare.width &&
        coobe.x + coobe.width > airSquare.x &&
        coobe.y < airSquare.y + airSquare.height &&
        coobe.y + coobe.height > airSquare.y) 
        {
            coobe.jump = 180 - airSquare.height //airSquare.height + 30; 

            if(coobe.falling)
            {
                //console.log("on platform")
                coobe.y = (airSquare.y - airSquare.height);
                coobe.falling = false;
                coobe.onSomething = true; 

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
        }, 250)
        
        return;
    }
    window.requestAnimationFrame(animate);
    //draw everything and erase everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCoobe();
    //drawOneSpike();
    //drawSpikes();
    drawGroundSquares();
    //drawAirSquares();
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