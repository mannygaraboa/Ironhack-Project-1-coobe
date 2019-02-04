//To start the game
window.onload = function() 
{
    //document.getElementById("start-button").onclick = function() 
    //{
        startGame();
    //};
}

function startGame()
{
    let canvas = document.getElementById('grid');
    let ctx = canvas.getContext('2d');
    //document.getElementById().blur;

    canvas.width = 800;
    canvas.height = 300;
    
    let coobe = 
    {
        x: 100,
        y: 270
    };
    
    function drawCoobe()
    {
        ctx.fillStyle = 'black';
        ctx.fillRect(coobe.x, coobe.y, 30, 30)
    }
    
    var obstacle = 
    {
        x: 850,
        y: 300
    }

    function drawObstacles()
    {
        

        ctx.beginPath();
        ctx.moveTo(obstacle.x,obstacle.y);
        ctx.lineTo(obstacle.x + 15, obstacle.y - 25);
        ctx.lineTo(obstacle.x + 30, obstacle.y);
        ctx.fill();
        obstacle.x -= 5;
        // ctx.beginPath();
        // ctx.moveTo(700,300);
        // ctx.lineTo(715,275);
        // ctx.lineTo(730,300);
        // ctx.fill();
        //ctx.fillRect(obstacle.x, obstacle.y, 30, 30);
    }

    // qbe = 
    // {
    //     x : 0,
    //     y : 0, 
    //     speed: 0,2
    //     size: 20,
    //     onFloor: false,
    //     drag: 0.99,
    //     jumpPower: -10
    // }
    // const gravity = 0.1;

    // cuebe.speed += gravity;
    // cuebe.y += cuebe.speed;

    // if(cuebe.y + cuebe.size >= 150)
    // {
    //     cuebe.y = 150 - cuebe.size;
    //     cuebe.speed = 0;
    //     cuebe.onFloor = true;
    // }
    // else
    // {
    //     cuebe.onFloor = false;
    // }

    // class Coobe
    // {
    //     constructor(x,y)
    //     {
    //         this.x = x;
    //         this.y = y;

    //         jump()
    //         {
    //             this.y -= 30;
    //         }
    //     }
    // }
    // let coobe = new Coobe(100,270)
    

    // function drawObstacles()
    // {

    // }

    // function collision()
    // {

    // }
            
    document.body.onkeydown = function(e) 
    {
        if(e.keyCode == 32 && coobe.onFloor)
        {
            coobe.jump();
        }
    }


    function animate()
    {
        window.requestAnimationFrame(animate);
        //draw everything and erase everything
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCoobe();
        drawObstacles();
        //collision();
    }
    animate();
}
//             //streetlines();
//             //ctx.drawImage(img, car.x, car.y, 150*imgScale/2,150); //car
//             animateObstacle();

   

        