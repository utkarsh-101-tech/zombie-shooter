class Canon {
    constructor(x, y, w, h, angle) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.angle = angle;
        this.baseImg = loadImage("assets/wheel.png");
        this.snout = loadImage("assets/final.png");
        this.stand = loadImage("assets/stand.png");
    }
    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle < -0.55) {
            this.angle += 0.02;
        }
        if (keyIsDown(LEFT_ARROW) && this.angle > -1.6) {
            this.angle -= 0.02;
        }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CORNER);
        image(this.snout, -45, -10, this.width, this.width);
        pop();

        push();
        imageMode(CENTER);
        image(this.stand, this.x - 70, this.y + 30, 170, 150);
        image(this.baseImg, this.x - 20, this.y + 47, 130, 130);
        pop();
    }
}