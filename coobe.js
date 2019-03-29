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
// let airSpikes = [];
// let airSpikes2 = [];
let groundSquares = [];
let airSquares1 = [];
let airSquares2 = [];

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


document.onkeydown = function(e) 
{
    if(e.keyCode == 32)
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
// Intro
157, 
308, 311,
394, 397, 400,
481, 484, 487, 490,
556, 559, 562, 
627, 630, 
709, 
787, 790, 
865, 868, 871,
908, 911, 
949, 952, 955, 

// Lyrics Entrance
1090, 1093, 1096, 1099, 1102, 1105, 
1224, 1227, 1230, 1263, 1266, 1269, 1304, 1307, 1310, 1344, 1347, 1350, 1424, 1427, 1430, 1463, 1466, 1469, 1502, 1505, 1508,
1747,
// Underground Spikes
1947, 1950, 1953, 1956, 1959, 1962,

// Triple Spikes
2170, 2173, 2176,
2207, 2210, 2213,
2246, 2249, 2252,
2326, 2329, 2332,
2363, 2366, 2369,
2401, 2404, 2407,

// Double Spikes
2480, 2483,
2521, 2524,
2560, 2563,
2597, 2600,
2677, 2680,
2715, 2718,
2754, 2757,

2784, 2787,
2857, 2860, 
2934, 2937,
3012, 3015, 
3092, 3095, 3113, 3116,
3172, 3175, 3193, 3196,
3247, 3250, 3268, 3271,
3321, 3324, 3342, 3345,

3551, 3554, 3557,
3590, 3593, 3596, 3599,

3617, 
3806,
4316, 
4396, 
4475, 
4551,

3846, 
3886, 
3964, 
4043,
4590, 
4631, 
4707, 
4825,

4122, 
4160, 
4198, 
4239,
4906, 
4979, 
5052, 
5133, 
5212,

// Beat Filler
 
// 3688, 3725, 3766, 3880, 3961, 3991, 4039, 4080, 4157, 4238, 4312, 4393, 4470, 4548, 4624, 4702, 4783, 4896, 4978, 5056, 5137, 5211, 
//5368, 5447, 5525, 5617, 5693, 5777, 5839, 5920, 5995, 6101, 6139, 6179, 6218, 6256, 6396, 6430, 6538, 6575, 6615,
//6725, 6765, 6889, 6930, 6967, 7046, 7085, 7123, 7199, 7238, 7274, 7353, 7393, 7430, 7515, 7591, 7671, 7748, 7827, 7905, 7950, 7988, 8099, 8177, 8257, 8335, 8410, 8489, 8568, 8644, 8685, 8726, 8806, 8883, 8964, 9038, 9117, 9157, 9197, 9236, 9291, 9354, 9395, 9437, 9513, 9555, 9592, 9763, 9805, 9856, 9895, 9934, 9977, 10017, 10073, 10138, 10176, 10228, 10328, 10406, 10485, 10564, 10642, 10720, 10795, 10875, 10955, 11037, 11114, 11191, 11257, 11299, 11335, 11380, 11417, 11461, 11496, 11539, 11580, 11663, 11701, 11741, 11927, 11972, 12012, 12054, 12092, 12131, 12168, 12205, 12289, 12328, 12366, 12520, 12597, 12672, 12714, 12757, 12793, 12833,
//13147, 13185, 13226, 13269, 13309, 13351, 13388, 13428, 13466, 13547, 13624, 13701, 13780, 13857, 13933, 13975, 14016, 14093, 14131, 14172, 14212, 14250, 14287, 14328, 14367, 14405, 14443, 14483, 14523, 14561, 14600, 14641, 14680, 14715,

//Demo Kill Screen

// Kill Screen
//14900, 14903, 14906, 14909, 14912, 14915, 14918, 14921, 14924, 14927, 14930, 14933, 14936, 14939, 14942, 14945, 14948, 14951, 14954, 14957, 14960, 14963, 14966, 14969, 14972, 14975, 14978, 14981, 14984, 14987, 14990, 14993, 14996, 14999, 15002, 15005, 15008, 15011, 15014, 15017, 15020
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

// // Air Spikes 1
// var obstacle5 = 
// {
//     x: 850,
//     y: 270,
//     width: 20,
//     height: 20,
// }
// function drawAirSpike1(obstacle5)
// {
//     ctx.beginPath();
//     ctx.moveTo(obstacle5.x,obstacle5.y);
//     ctx.lineTo(obstacle5.x + 15, obstacle5.y - 30);
//     ctx.lineTo(obstacle5.x + 30, obstacle5.y);
//     ctx.fillStyle = "black"
//     ctx.fill();
//     obstacle5.x -= 10;
// }
// function drawAirSpikes1()
// {
//     for(let airSpike1 of airSpikes1)
//     {
//         drawAirSpike1(airSpike1)
//     }
// }
// // Map of Air Spikes 1
// let airSpike1Beatles = 
// [
// 100,
// ];
// createAirSpikes1()
// function createAirSpikes1()
// {
//     for(let i = 0; i < airSpike1Beatles.length; i++)
//     {
//         airSpikes1.push({...obstacle5, x:airSpike1Beatles[i]*10+150})
//     }
//     //console.log(spikes);
// }


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
// Map of Ground Squares
let groundSquareBeatles = 
[
993, 996, 999, 1002, 1005, 1008, 1011, 1014, 1017, 1020, 1023, 1026, 1029, 1032, 
1123, 1126, 1129, 1132, 1135, 1138, 1141,
1571, 1574, 1577, 1580, 1583, 1586, 1589, 1592, 1595, 1598, 1601, 1604, 1607, 1610, 1613, 1616, 
1649, 1652, 1655, 1658, 1661, 1664, 1667, 1670, 1673, 1676, 1679, 1682, 1685, 1688, 1691, 1694, 1697, 1700, 1703, 1706, 1709, 1712, 1715, 1718, 1721, 1724, 1727, 
1774, 1777, 1780, 1783, 1785, 1788, 1791, 1794, 1797, 1800, 1803, 1806, 1809, 1812,
2025, 2028, 2031, 2034, 2037, 2040, 2043, 2046, 2049, 2051, 2054, 2057, 2060, 2063, 2066, 2069,

2790, 2793, 2796, 2799, 2802,
2863, 2866, 2869, 2872, 2875,
2940, 2943, 2946, 2949, 2952,
3018, 3021, 3024, 3027, 3030,
3098, 3101, 3104, 3107, 3110,
3178, 3181, 3184, 3187, 3190,
3253, 3256, 3259, 3262, 3265,
3327, 3330, 3333, 3336, 3339,

3536, 3539, 3542, 3545, 3548, 
3560, 3563, 3566, 3569, 3572, 3575, 3578, 3581, 3584, 3587, 
3602, 3605, 3608, 3611, 3614,



// 2200, 2241, 2319, 2358, 2395, 2479, 2558, 2634, 2675, 2713, 2753, 2793, 2831, 2869, 2950, 3018, 3099, 3178, 3256, 3294,
// 3341, 3344, 3347, 3350, 3353, 3356, 3359, 3362, 3365, 3368, 3371, 3374, 3377, 3415, 3453, 3492, 3531, 3573, 3613, 3650
//1778, 1817, 1892, 1972, 2050, 2090, 2128, 2167, 2242, 2320, 2400, 2480, 2558, 2636, 2713, 2792, 2871, 2950, 3026, 3103, 3183, 3261, 3300,
// 1778, 1817, 1892, 1972, 2050, 2090, 2128, 2167, 2242, 2320, 2400, 2480, 2558, 2636, 2713, 2792, 2871, 2950, 3026, 3103, 3183, 3261, 3300, 3337, 3376, 3417, 3452
// 1023, 1066, 1106, 1183, 1223, 1261, 1338, 1377, 1416, 1456, 1494, 1563, 1718, 1760, 1802, 1843, 1883, 2016, 2155, 2196, 2237, 2314, 2352, 2391, 2493, 2533, 2576, 2671, 2709, 2751, 2830, 2867, 2945, 2985, 3138, 3217, 3297, 3341, 3378, 3415, 3453, 3492, 3531, 3573, 3613, 3650, 3688, 3725, 3766, 3880, 3961, 3991, 4039, 4080, 4157, 4238, 4312, 4393, 4470, 4548, 4624, 4702, 4783, 4896, 4978, 5056, 5137, 5211, 5241, 5289, 5368, 5447, 5525, 5617, 5693, 5777, 5839, 5920, 5995, 6101, 6139, 6179, 6218, 6256, 6396, 6430, 6538, 6575, 6615,
// 6725, 6765, 6889, 6930, 6967, 7046, 7085, 7123, 7199, 7238, 7274, 7353, 7393, 7430, 7515, 7591, 7671, 7748, 7827, 7905, 7950, 7988, 8099, 8177, 8257, 8335, 8410, 8489, 8568, 8644, 8685, 8726, 8806, 8883, 8964, 9038, 9117, 9157, 9197, 9236, 9291, 9354, 9395, 9437, 9513, 9555, 9592, 9763, 9805, 9856, 9895, 9934, 9977, 10017, 10073, 10138, 10176, 10228, 10328, 10406, 10485, 10564, 10642, 10720, 10795, 10875, 10955, 11037, 11114, 11191, 11257, 11299, 11335, 11380, 11417, 11461, 11496, 11539, 11580, 11663, 11701, 11741, 11927, 11972, 12012, 12054, 12092, 12131, 12168, 12205, 12289, 12328, 12366, 12520, 12597, 12672, 12714, 12757, 12793, 12833,
// 13147, 13185, 13226, 13269, 13309, 13351, 13388, 13428, 13466, 13547, 13624, 13701, 13780, 13857, 13933, 13975, 14016, 14093, 14131, 14172, 14212, 14250, 14287, 14328, 14367, 14405, 14443, 14483, 14523, 14561, 14600, 14641, 14680, 14715
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

// The Air Squares 1
var obstacle3 = 
{
    x: 850,
    y: 240,
    width: 30,
    height: 30
}
function drawOnePlatform1(obstacle3)
{
    ctx.beginPath();
    ctx.rect(obstacle3.x, obstacle3.y, obstacle3.width, obstacle3.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    obstacle3.x -= 10;
}
function drawAirSquares1()
{
    for(let airSquare1 of airSquares1)
    {
        drawOnePlatform1(airSquare1)
    }
}
// Map of Air Squares 1
let airSquare1Beatles = 
[
1033, 1036, 1039, 1042, 1045, 1048, 1051, 1054, 1057, 1060, 1063, 1066, 1069, 1072, 1075, 1078, 1081, 1084, 1087, 
1108, 1111, 1114, 1117, 1120,
1813, 1816, 1819, 1822, 1825, 1828, 1831, 1834, 1837, 1840, 1843, 1846, 1849, 1852, 
1895, 1898, 1901, 1904, 1907, 1911, 1914, 1917, 1920, 1923, 1926, 1929, 1932, 1935, 1938, 1941, 1944, 1965, 1968, 1971, 1974, 1977, 1980, 1983, 1986, 1989, 1991, 1994, 1997, 2000, 2003, 2006, 2009, 2012, 2015, 2018, 2021, 2024,
2025,

4122, 
4160, 
4198, 
4239,
4906, 
4979, 
5052, 
5133, 
5212,

//963, 966, 969, 972, 975, 978, 981, 984, 987, 990, 993, 996, 999
];
createPlatforms1()
function createPlatforms1()
{
    for(let i = 0; i < airSquare1Beatles.length; i++)
    {
        airSquares1.push({...obstacle3, x:airSquare1Beatles[i]*10+150});
    }
    //console.log(airSquares);
}


// The Air Squares 2
var obstacle4 = 
{
    x: 850,
    y: 210,
    width: 30,
    height: 30
}
function drawOnePlatform2(obstacle4)
{
    ctx.beginPath();
    ctx.rect(obstacle4.x, obstacle4.y, obstacle4.width, obstacle4.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    obstacle4.x -= 10;
}
function drawAirSquares2()
{
    for(let airSquare2 of airSquares2)
    {
        drawOnePlatform2(airSquare2)
    }
}
// Map of Air Squares 2
let airSquare2Beatles = 
[
1855, 1858, 1861, 1864, 1867, 1870, 1873, 1877, 1880, 1883, 1886, 1889, 1891, 1894,



];
createPlatforms2()
function createPlatforms2()
{
    for(let i = 0; i < airSquare2Beatles.length; i++)
    {
        airSquares2.push({...obstacle4, x:airSquare2Beatles[i]*10+150});
    }
    //console.log(airSquares);
}


// COLLISION AND PLATFORMING
function collision()
{
    // Spike Collision
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


    // // Air Spike 1 Collision
    // for(let airSpike1 of airSpikes1)
    // {
    //     if 
    //     (coobe.x < (airSpike1.x + airSpike1.width) &&
    //     coobe.x + coobe.width > airSpike1.x &&
    //     coobe.y < airSpike1.y &&
    //     coobe.y + coobe.height > airSpike1.y - 30) 
    //     {
    //         //console.log("collided")

    //         gameOver = true; 
    //         // collision detected!
    //     }
    // }


    // Ground Square Collision
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

    // Air Square 1 Collision
    for(let airSquare1 of airSquares1)
    {
        if 
        (coobe.x < airSquare1.x + airSquare1.width &&
        coobe.x + coobe.width > airSquare1.x &&
        coobe.y < airSquare1.y + airSquare1.height &&
        coobe.y + coobe.height > airSquare1.y) 
        {
            coobe.jump = 180 - airSquare1.height //airSquare1.height + 30; 

            if(coobe.falling)
            {
                //console.log("on platform")
                coobe.y = (airSquare1.y - airSquare1.height);
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

     // Air Square 2 Collision
     for(let airSquare2 of airSquares2)
     {
         if 
         (coobe.x < airSquare2.x + airSquare2.width &&
         coobe.x + coobe.width > airSquare2.x &&
         coobe.y < airSquare2.y + airSquare2.height &&
         coobe.y + coobe.height > airSquare2.y) 
         {
             coobe.jump = 180 - airSquare2.height //airSquare2.height + 30; 
 
             if(coobe.falling)
             {
                 //console.log("on platform")
                 coobe.y = (airSquare2.y - airSquare2.height);
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
    drawSpikes();
    //drawAirSpikes1();
    drawGroundSquares();
    drawAirSquares1();
    drawAirSquares2();
    collision();
    frames++; 
}


