class Robot {
    constructor(hp=30) {
        this.hp = hp;
        this.maxHp = hp;
        this.skills = [new Smack(), new Rush(), new Smack()];
        this.canAct = true;

        this.x = 0;
        this.y = 0;
        this.s = 1;
        this.arm1r = 0;
        this.arm2r = 0;
        this.dir = 1;
    }

    draw() {
        let s = this.dir * this.s;
        if (this.dir < 0) {
            drawSprite(robotArm, this.x - 39, this.y - 48, s, this.arm2r);
            drawSprite(robotTreads, this.x - 29, this.y + 2, s);
            drawSprite(robotBody, this.x, this.y, s);
            drawSprite(robotHead, this.x - 17, this.y - 55, s);
            drawSprite(robotTreads, this.x + 15, this.y + 40, s);
            drawSprite(robotArm, this.x + 13, this.y - 15, s, this.arm1r);
        } else {
            drawSprite(robotArm, this.x + 39, this.y - 48, s, this.arm2r);
            drawSprite(robotTreads, this.x + 29, this.y + 2, s);
            drawSprite(robotBody, this.x, this.y, s);
            drawSprite(robotHead, this.x + 17, this.y - 55, s);
            drawSprite(robotTreads, this.x - 15, this.y + 40, s);
            drawSprite(robotArm, this.x - 13, this.y - 15, s, this.arm1r);
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    takeDamage(amount) {
        this.hp = max(0, this.hp - amount);
    }

    heal(amount) {
        this.hp = min(this.maxHp, this.hp + amount);
    }

    endOfTurn() {
        this.canAct = false;
        for (let i = 0; i < 3; i++) {
            this.skills[i].endOfTurn();
        }
    }

    startOfTurn() {
        this.canAct = true;
    }
}
