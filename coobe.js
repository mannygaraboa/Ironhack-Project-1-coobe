//To start the game
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

    canvas.width = 800;
    canvas.height = 300;
    

    
    let drag = 0;
    function drawCoobe(x, y, width, height, color)
    {
        ctx.beginPath();
        ctx.rect(x, y, width, height, color)
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
        
        if(coobe.jumpPressed){
            coobe.y -= 5;
        }
        if(!coobe.jumpPressed && coobe.y < 270){
            coobe.y += 5;
        }
        if(coobe.y < 220){
            coobe.jumpPressed = false;
        }


             // if(coobe.jumpPressed){
        //     drag++; 
        //     coobe.y -= (2 - (drag/30))
        // }
        // if(!coobe.jumpPressed && coobe.y < 270){
        //     drag++;
        //     coobe.y += (2 + (drag/30))
        // }
        // console.log(coobe.y)
        // if(coobe.y < 212){
        //     coobe.jumpPressed = false;
        //     drag = 0; 
        //     //coobe.y = 270;
        // }
        // if(coobe.y > 270){
        //     coobe.y = 270;
        //     drag = 0;
        // }

        /*if(coobe.jumpPressed && coobe.y > 220 && coobe.y <= 270)       // Will make cube jump
        {
            speed = 0;
            speed += 3;
            resistance++;
            speed - resistance;
            coobe.y -= speed;
        }

        console.log(coobe);
        if(coobe.y == 219)
        {
            coobe.jumpPressed = false;
        }
        if(coobe.y > 220  && !coobe.jumpPressed)
        {
            speed = 1;
            coobe.y += 1;
        }
        else if(coobe.y <= 220)
        {

        }

        else if(coobe.jumpPressed === false)
        {
            speed = 0;
            resistance = 0;
        }*/
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
        ctx.fill();
        obstacle.x -= 5;
    }


    function drawSpikes(){
        for(let spike of spikes){
            drawOneSpike(spike)
        }
    }



    //setInterval(createSpikes, 2000)
    createSpikes()
    function createSpikes(){
        for(let i=0; i<100; i++){
            spikes.push({...obstacle, x:850+(i*300)})
        }
    }

    function collision()
    {
        for(let spike of spikes){

            if(
                spike.y - 30 == coobe.y             // spike hit cube from underneath
                && ((coobe.x <= spike.x          // spike is right of cube
                && coobe.x >= spike.x )          // spike is left of cube
                || (coobe.x + 30 >= spike.x      // spike hit cube from the back
                && coobe.x + 30 <= spike.x)))    // obstacle hit cube from the front
            {
                gameOver = true; 
                alert("collision");           // cube explodes and restarts game
            }
        }
    }
            

    let frames = 0; 

    function animate()
    {
        if(gameOver){
            //return;
            window.location.reload()
            return;
        }
        window.requestAnimationFrame(animate);
        //draw everything and erase everything
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCoobe(coobe.x, coobe.y, 30, 30, "black");
        //drawOneSpike();
        drawSpikes()
        frames++; 
        collision();
    }
    animate();
}
//             //streetlines();
//             //ctx.drawImage(img, car.x, car.y, 150*imgScale/2,150); //car
//             animateObstacle();

   

        


// if(
//     obstacle.y - 30 == coobe.y             // obstacle hit cube from underneath
//     && ((coobe.x <= obstacle.x          // obstacle is right of cube
//     && coobe.x >= obstacle.x )          // obstacle is left of cube
//     || (coobe.x + 30 >= obstacle.x      // obstacle hit cube from the back
//     && coobe.x + 30 <= obstacle.x)))    // obstacle hit cube from the front
// {
//     console.log("collision");      