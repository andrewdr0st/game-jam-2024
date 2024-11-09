let robotId = 0;

class Robot {
    constructor(hp=30) {
        this.hp = hp;
        this.maxHp = hp;
        this.skills = [null, null, null];
        this.canAct = true;
        this.statusing = false;
        this.target = null;
        this.id = robotId++;

        this.x = 0;
        this.y = 0;
        this.homeX = 0;
        this.homeY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.s = 1;
        this.arm1r = 0;
        this.arm2r = 0;
        this.dir = 1;

        this.animationStage = 0;
        this.effectPoint = 0;
        this.effectTriggered = false;
        this.animating = false;
        this.currentAnimation = this.smackAnimation;

        this.setSkill(0, new Smack());
        this.setSkill(1, new Rush());
        this.setSkill(2, new Burn());
    }

    draw() {
        let s = this.dir * this.s;
        push();
        translate(this.x, this.y);
        scale(s, this.s);
        drawSprite(robotArm, 39, -48, 1, this.arm2r);
        drawSprite(robotTreads, 29, 2, 1);
        drawSprite(robotBody, 0, 0, 1);
        drawSprite(robotHead, 17, -55, 1);
        drawSprite(robotTreads, -15, 40, 1);
        drawSprite(robotArm, -13, -15, 1, this.arm1r);
        pop();
    }

    drawBattery() {
        push();
        translate(this.homeX - 80 * this.dir, this.homeY - 40);
        fill(110, 110, 115);
        rect(-15, -10, 30, 45);
        rect(-7, -10, 14, -5);
        fill(70, 190, 80);
        rect(-13, 33, 26, -41 * (this.hp / this.maxHp));
        fill(250, 235, 240);
        textAlign(CENTER, CENTER);
        textSize(23);
        text(this.hp, 0, 12);
        pop();
    }

    setPosition(x, y) {
        this.x = x;
        this.homeX = x;
        this.targetX = x + 160 * this.dir;
        this.y = y;
        this.homeY = y;
        this.targetY = y + 5;
    }

    takeDamage(amount) {
        this.hp = max(0, this.hp - amount);
        addParticle(new TextParticle(this.x, this.y - 40, amount, 1));
    }

    heal(amount) {
        this.hp = min(this.maxHp, this.hp + amount);
        addParticle(new TextParticle(this.x, this.y - 40, amount, 0));
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

    setSkill(i, s) {
        this.skills[i] = s;
        s.owner = this;
    }

    update() {
        if (this.animating) {
            skillButtonsEnabled = false;
            
            this.currentAnimation();
            this.animationStage += deltaTime;

            if (this.animationStage > this.effectPoint && !this.effectTriggered) {
                selectedSkill.effect();
                this.effectTriggered = true;
            }
        }
    }

    setAnimation(a) {
        this.animationStage = 0;
        this.effectTriggered = false;
        if (a == 1) {
            this.currentAnimation = this.rushAnimation;
            this.effectPoint = 0.6;
        } else if (a == 2) {
            this.currentAnimation = this.repairAnimation;
            this.effectPoint = 1;
        } else {
            this.currentAnimation = this.smackAnimation;
            this.effectPoint = 1.25;
        }
    }

    smackAnimation() {
        if (this.animationStage < 0.75) {
            this.x = lerpp(this.animationStage / 0.75, this.homeX, this.target.targetX);
            this.y = lerpp(this.animationStage / 0.75, this.homeY, this.target.targetY);
        } else if (this.animationStage < 1.05) {
            let a = this.animationStage - 0.75;
            this.arm1r = lerpp(a / 0.3, 0, -120);
            this.arm2r = lerpp(a / 0.3, 0, -120);
        } else if (this.animationStage < 1.25) {
            let a = this.animationStage - 1.05;
            this.arm1r = lerpp(a / 0.2, -120, 0);
            this.arm2r = lerpp(a / 0.2, -120, 0);
        } else if (this.animationStage < 1.5) {
            
        } else if (this.animationStage < 2.25) {
            let a = this.animationStage - 1.5;
            this.x = lerpp(a / 0.75, this.target.targetX, this.homeX);
            this.y = lerpp(a / 0.75, this.target.targetY, this.homeY);
        } else {
            this.x = this.homeX;
            this.y = this.homeY;
            this.animating = false;
            skillButtonsEnabled = true;
        }
    }

    rushAnimation() {
        if (this.animationStage < 0.2) {
            this.x = lerpp(this.animationStage / 0.2, this.homeX, this.homeX - 50 * this.dir);
        } else if (this.animationStage < 0.9) {
            let a = this.animationStage - 0.2;
            this.x = lerpp(a / 0.5, this.homeX - 50, this.target.x);
            this.y = lerpp(a / 0.5, this.homeY, this.target.y);
        } else if (this.animationStage < 1.4) {
            let a = this.animationStage - 0.9;
            this.x = lerpp(a / 0.5, this.homeX - 500 * this.dir, this.homeX);
            this.y = this.homeY;
        } else {
            this.x = this.homeX;
            this.y = this.homeY;
            this.animating = false;
            skillButtonsEnabled = true;
        }
    }

    repairAnimation() {
        if (this.animationStage < 0.2) {
            this.arm1r = lerpp(this.animationStage / 0.2, 0, -90);
        } else if (this.animationStage < 0.4) {
            let a = this.animationStage - 0.2;
            this.arm1r = lerpp(a / 0.2, -90, 0);
            this.arm2r = lerpp(a / 0.2, 0, -90);
        } else if (this.animationStage < 0.6) {
            let a = this.animationStage - 0.4;
            this.arm1r = lerpp(a / 0.2, 0, -90);
            this.arm2r = lerpp(a / 0.2, -90, 0);
        } else if (this.animationStage < 0.8) {
            let a = this.animationStage - 0.6;
            this.arm1r = lerpp(a / 0.2, -90, 0);
            this.arm2r = lerpp(a / 0.2, 0, -90);
        } else if (this.animationStage < 1) {
            let a = this.animationStage - 0.8;
            this.arm1r = lerpp(a / 0.2, 0, -90);
            this.arm2r = lerpp(a / 0.2, -90, 0);
        } else if (this.animationStage < 1.2) {
            let a = this.animationStage - 1;
            this.arm1r = lerpp(a / 0.2, -90, 0);
            this.arm2r = lerpp(a / 0.2, 0, -90);
        } else if (this.animationStage < 1.4) {
            let a = this.animationStage - 1.2;
            this.arm2r = lerpp(a / 0.2, -90, 0);
        } else {
            this.arm2r = 0;
            this.arm1r = 0;
            this.animating = false;
            skillButtonsEnabled = true;
        }
    }
}
