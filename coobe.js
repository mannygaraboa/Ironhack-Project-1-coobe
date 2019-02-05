//To start the game
let time = 0;
let beats = []

function music() {
  setInterval(function () {
    time += 10
  }, 10)
  var audio = new Audio("Synthetic Life.mp3")
  audio.play();
}

let coobe = 
{
    x: 100,
    y: 270,
    jumpPressed: false,
    speed: 0,
    resistance: 0,
};

let spikes = []

let gameOver  = false; 
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
    let canvas = document.getElementById('grid');
    let ctx = canvas.getContext('2d');
    //document.getElementById().blur;
    music();
    canvas.width = 800;
    canvas.height = 300;
    

    
    let drag = 0;
    function drawCoobe(x, y, width, height, color)
    {
        ctx.beginPath();
        ctx.rect(x, y, width, height, color)
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeRect(x, y, width, height, "rgb(0, 221, 255)")
        ctx.closePath();
        
        if(coobe.jumpPressed){
            coobe.y -= 5;
        }
        if(!coobe.jumpPressed && coobe.y < 270){
            coobe.y += 5;
        }
        if(coobe.y < 200){
            coobe.jumpPressed = false;
        }
    }

    function jump()
    {
        if(coobe.jumpPressed === true) // As soon as spacebar is pressed
        {
            coobe.y -= 10;
        }
    }


    document.onkeydown = function(e) 
    {
        if(e.keyCode == 32)
        {
            jump();
            beats.push(time);
            console.log("beat");
            coobe.jumpPressed = true;
        }
        else
        {
            coobe.jumpPressed = false;
        }
    }
    

    var obstacle = 
    {
        x: 850,
        y: 300
    }


    function drawOneSpike(obstacle)
    {
        ctx.beginPath();
        ctx.moveTo(obstacle.x,obstacle.y);
        ctx.lineTo(obstacle.x + 15, obstacle.y - 30);
        ctx.lineTo(obstacle.x + 30, obstacle.y);
        ctx.fillStyle = "black"
        ctx.fill();
        obstacle.x -= 5;
    }


    function drawSpikes()
    {
        for(let spike of spikes)
        {
            drawOneSpike(spike)
        }
    }


    //setInterval(createSpikes, 2000)
    //let beats = [4400, 5000, 6300, 7600, 8400, 8900, 17300, 17500, 17700, 17900, 18100, 18300, 18500]
    let beatles = [2600, 5270, 6650, 7960, 9280, 10520, 11840, 13150, 14440, 15120, 15770, 17060, 17750, 18440, 19710, 20960, 21950]
    createSpikes()
    function createSpikes()
    {
        for(let i=0; i<beatles.length; i++)
        {
            spikes.push({...obstacle, x:beatles[i]/1})
        }
    }

    function collision()
    {
        for(let spike of spikes)
        {

            if(
                spike.y - 30 == coobe.y             // spike hit cube from underneath
                && ((coobe.x <= spike.x          // spike is right of cube
                && coobe.x >= spike.x )          // spike is left of cube
                || (coobe.x + 25 >= spike.x      // spike hit cube from the back
                && coobe.x + 25 <= spike.x)))    // obstacle hit cube from the front
            {
                gameOver = true; 
                //alert("collision");           // cube explodes and restarts game
            }
        }
    }
            

    let frames = 0; 

    function animate()
    {
        if(gameOver)
        {
            window.location.reload()
            return;
        }
        window.requestAnimationFrame(animate);
        //draw everything and erase everything
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCoobe(coobe.x, coobe.y, 30, 30, "rgb(23, 234, 167)");
        //drawOneSpike();
        drawSpikes()
        //frames++; 
        collision();
    }
    animate();
}


   