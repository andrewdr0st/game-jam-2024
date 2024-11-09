let robo;
let bot;

let playerBots = [];
let enemyBots = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUiParams();

    noStroke();
    angleMode(DEGREES);
    textFont('Courier New');

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

    for (let i = 0; i < 3; i++) {
        let r = playerBots[i];
        for (let j = 0; j < 3; j++) {
            addButton(new SkillButton(padding + i * (padding + skillButtonW + skillSpacing), bottomStart + padding + j * (padding + skillButtonH), skillButtonW, skillButtonH, r.skills[j]));
        }
    }

    for (let i = 0; i < 3; i++) {
        let r = enemyBots[i];
        for (let j = 0; j < 3; j++) {
            addButton(new SkillButton(padding + (i + 3) * (padding + skillButtonW + skillSpacing) + skillGap, bottomStart + padding + j * (padding + skillButtonH), skillButtonW, skillButtonH, r.skills[j]));
        }
    }

}

function draw() {
    calculateDeltaTime();

    background(10, 15, 10);

    drawBottomPanel();

    for (let i = 0; i < 3; i++) {
        playerBots[i].draw();
    }
    for (let i = 0; i < 3; i++) {
        enemyBots[i].draw();
    }

    drawButtons();
}
