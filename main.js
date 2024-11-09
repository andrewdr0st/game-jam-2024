let robo;
let bot;

let playerBots = [];
let enemyBots = [];

let playerRays = 2;
let enemyRays = 2;

let enemyTurn = false;

let selectedSkill = null;

let applyingStatus = null;
let statusTarget = null;

let animating = false;


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
        addHover(new RobotHoverRegion(r.x - 40, r.y - 100, 95, 160, r));
        addButton(new RobotButton(r.x - 40, r.y - 100, 95, 160, r));
    }

    for (let i = 0; i < 3; i++) {
        let r = new Robot();
        r.dir = -1;
        r.setPosition(width + (i - 2) * 90 - 200, 130 + i * 150);
        enemyBots.push(r);
        r.canAct = false;
        addHover(new RobotHoverRegion(r.x - 55, r.y - 100, 95, 160, r));
        addButton(new RobotButton(r.x - 55, r.y - 100, 95, 160, r));
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

    addButton(new EndTurnButton(halfWidth - 65, bottomStart - 45, 130, 40));
    addButton(new CosmicRayButton(5, bottomStart - 45, 210, 40));
}

function draw() {
    calculateDeltaTime();

    updatePanels();
    updateButtons();
    hoverUpdate();
    updateParticles();

    background(10, 15, 10);

    for (let i = 0; i < 3; i++) {
        playerBots[i].draw();
        playerBots[i].drawBattery();
        playerBots[i].update();
    }
    for (let i = 0; i < 3; i++) {
        enemyBots[i].draw();
        enemyBots[i].drawBattery();
        enemyBots[i].update();
    }

    drawParticles();

    drawBottomPanel();
    drawButtons();
}

function mouseClicked() {
    buttonClick();
}
