const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground, canon, zombie, canonBall;
var canonAngle = -90;
var balls = [];
var zombies = [];


function preload() {
    bg = loadImage("assets/BG.png");
    // zombieImg = loadAnimation("assets/male/Walk(1).png", "assets/male/Walk(2).png", "assets/male/Walk(3).png", "assets/male/Walk(4).png", "assets/male/Walk(5).png", "assets/male/Walk(6).png", "assets/male/Walk(7).png", "assets/male/Walk(8).png", "assets/male/Walk(9).png", "assets/male/Walk(10).png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth / 2, windowHeight - 50, windowWidth, windowHeight / 4);
    // canon = new Canon(windowWidth / 6, windowHeight -315, 120, 70, -PI / 4);
    canon = new Canon(200, 800, 120, 70, -PI/4);
    // zombie = new Zombie(windowWidth, windowHeight - 200, 200, 200);
    // zombies.push(zombie);
}

function draw() {
    background(bg);
    Engine.update(engine);
    ground.display();
    sendzombie();
   

    for (var i = 0; i < balls.length; i++) {
        launchBall(balls[i], i);
        console.log("canon ball display");
    }

    for (i = 0; i < zombies.length; i++) {
        zombies[i].display();
        zombies[i].move();
    }
    console.log(zombies.length);
    // if(zombies.length!==0){
    // for (a = 0; a < zombies.length; a++) {
    //     var collision = Matter.SAT.collides(canon.body, zombies[a].body);
    //     if (collision.collided) {
    //         gameOver();
    //     }
    // }}
  destroyBoth();
  canon.display();
}


function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        canonBall = new CanonBall(canon.x, canon.y + 29);
            balls.push(canonBall);
            balls[balls.length - 1].shoot();
            console.log("shoot");
    }
}

function sendzombie() {
    if(zombies.length===0){
            zombie = new Zombie(windowWidth, windowHeight - 200, 200, 200);
            zombies.push(zombie);
        }
        if (zombies[zombies.length - 1].body.position.x < width -random(120,100,150,300)) {
            zombie2 = new Zombie(windowWidth, height - 200, 200, 200);
            zombies.push(zombie2);
        
    }
   
}



function launchBall(ball, index) {
    ball.display();
    if (ball.body.position.x > windowWidth || ball.body.position.y >= windowHeight - 270) {
        Matter.World.remove(world, ball.body);
        balls.splice(index, 1);
    }
}

function destroyBoth() {
    if(zombies.length!==0){
        if(balls.length!==0){
           for (i = 0; i < balls.length; i++) {
               for (a = 0; a < zombies.length; a++) {
                  var collision = Matter.SAT.collides(balls[i].body, zombies[a].body);
                   if (collision.collided) {
                   console.log("win 1");

                   Matter.World.remove(world, zombies[a].body);
                   zombies.splice(a, 1);

                   Matter.World.remove(world, balls[i].body);
                   balls.splice(i, 1);
            }}}
        }
    }
}



function gameOver() {
    swal({
            title: `Game Over!!!`,
            text: "Thanks for playing!!",
            imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
            imageSize: "150x150",
            confirmButtonText: "Play Again"
        },
        function(isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    );
}