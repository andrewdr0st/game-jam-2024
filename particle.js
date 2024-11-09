let particleList = [];

function drawParticles() {
    for (let i = 0; i < particleList.length; i++) {
        particleList[i].draw();
    }
}

function updateParticles() {
    for (let i = 0; i < particleList.length; i++) {
        let p = particleList[i];
        if (p.lifespan > 0) {
            p.update();
        } else {
            particleList.splice(i, 1);
            i--;
        }
    }
}

function addParticle(p) {
    particleList.push(p);
}

class Particle {
    constructor(x, y, lifespan) {
        this.x = x;
        this.y = y;
        this.xv = 0;
        this.yv = 0;
        this.xa = 0;
        this.ya = 0;
        this.lifespan = lifespan;
    }

    draw() {

    }

    update() {
        this.x += this.xv * deltaTime;
        this.y += this.yv * deltaTime;
        this.xv += this.xa * deltaTime;
        this.yv += this.ya * deltaTime;
        this.lifespan -= deltaTime;
    }
}

class TextParticle extends Particle {
    constructor(x, y, t, c) {
        super(x, y, 1);
        this.t = t;
        this.c = c;
        this.xv = random(10, 45);
        if (random(0, 2) < 1) {
            this.xv *= -1;
        }
        this.yv = -180;
        this.ya = 420;
    }

    draw() {
        if (this.c == 0) {
            fill(140, 220, 160);
        } else {
            fill(230, 50, 50);
        }
        textAlign(CENTER, CENTER);
        textSize(36);
        text(this.t, this.x, this.y);
    }
}
