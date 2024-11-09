let robo;
let bot;

let playerBots = [];
let enemyBots = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUiParams();

    noStroke();
    angleMode(DEGREES);

    for (let i = 0; i < 3; i++) {
        let r = new Robot();
        r.setPosition(200 + i * 70, 130 + i * 150);
        playerBots.push(r);
    }

    for (let i = 0; i < 3; i++) {
        let r = new Robot();
        r.setPosition(width + (i - 2) * 90 - 200, 130 + i * 150);
        r.dir = -1;
        enemyBots.push(r);
    }

    let r;
    for (let i = 0; i < 6; i++) {
        if (i < 3) {
            r = playerBots[i];
        } else {
            r = enemyBots[i - 3];
        }
        for (let j = 0; j < 2; j++) {
            addButton(new SkillButton(padding + (i * 2 + j) * (padding + skillButtonW), bottomStart + padding, skillButtonW, skillButtonH, r.skills[j]));
            addButton(new SkillButton(padding + (i * 2 + j) * (padding + skillButtonW), bottomStart + padding * 2 + skillButtonH, skillButtonW, skillButtonH, r.skills[j + 2]));
        }
    }

    
}

function draw() {
    calculateDeltaTime();

    background(30, 30, 40);

    drawBottomPanel();

    for (let i = 0; i < 3; i++) {
        playerBots[i].draw();
    }
    for (let i = 0; i < 3; i++) {
        enemyBots[i].draw();
    }

    drawButtons();
}
