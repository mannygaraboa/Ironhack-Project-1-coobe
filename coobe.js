//To start the game
window.onload = function() 
{
    document.getElementById("start-button").onclick = function() 
    {
        startGame();
    };
}

function startGame()
{
    let canvas = document.getElementById('grid');
    let ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 300;

    function drawGrid()
    {

    }

    function drawCoobe()
    {

    }

    class coobe
    {
        constructor(x,y)
        {
            this.x = x;
            this.y = y;
        }
    }
    let coobe = new coobe(0,0);

    var obstacles

    function drawObstacles()
    {

    }

    function collision()
    {

    }
            
    document.spacebar = function(e) 
    {

    }


    function animate()
    {
        window.requestAnimationFrame(animate);
        //draw everything and erase everything
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        drawCoobe();
        drawObstacles();
        collision();
    }
    animate();
}
//             //streetlines();
//             //ctx.drawImage(img, car.x, car.y, 150*imgScale/2,150); //car
//             animateObstacle();

   

        