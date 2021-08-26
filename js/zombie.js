class Zombie {
    constructor(x, y, w, h, pos) {
        var options = {
                isStatic: true,
            }
            // this.anime = loadAnimation("assets/male/Walk (1).png", "assets/male/Walk (2).png", "assets/male/Walk (3).png", "assets/male/Walk (4).png", "assets/male/Walk (5).png", "assets/male/Walk (6).png", "assets/male/Walk (7).png", "assets/male/Walk (8).png", "assets/male/Walk (9).png", "assets/male/Walk (10).png");
            // this.zombie;
        this.image = loadImage("assets/Walk (10).png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        // this.pos = pos;
        this.life = 100;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        // this.zombie = createSprite(0, 0, this.width, this.height);
        // this.zombie.addAnimation("walk",this.anime);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    move() {
        if (this.body.position.x > 300) {
            Matter.Body.translate(this.body, { x: -1, y: 0 });
        }
    }
}