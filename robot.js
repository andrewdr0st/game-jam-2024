class Robot {
    constructor() {
        this.hp = 30;
        this.maxHp = 30;
        this.skills = [null, null, null, null];

        this.x = 0;
        this.y = 0;
        this.arm1r = 0;
        this.arm2r = 0;
        this.dir = 1;
    }

    draw() {
        if (this.dir < 0) {
            drawSprite(robotArm, this.x - 39, this.y - 48, this.dir, this.arm2r);
            drawSprite(robotBody, this.x, this.y, this.dir);
            drawSprite(robotHead, this.x - 17, this.y - 55, this.dir);
            drawSprite(robotArm, this.x + 13, this.y - 15, this.dir, this.arm1r);
        } else {
            drawSprite(robotArm, this.x + 39, this.y - 48, this.dir, this.arm2r);
            drawSprite(robotBody, this.x, this.y, this.dir);
            drawSprite(robotHead, this.x + 17, this.y - 55, this.dir);
            drawSprite(robotArm, this.x - 13, this.y - 15, this.dir, this.arm1r);
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}
