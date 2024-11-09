var buttons = [];

function drawButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].draw();
    }
}

function updateButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].update();
    }
}

function buttonClick() {
    for (let i = 0; i < buttons.length; i++) {
        let b = buttons[i];
        if (b.enabled && b.checkHover()) {
            b.onClick();
        }
    }
}

function addButton(b) {
    buttons.push(b);
}

class Button {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.enabled = true;
    }

    checkHover() {
        return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
    }

    onClick() {

    }

    draw() {

    }

    update() {

    }
}

let skillButtonsEnabled = true;

class SkillButton extends Button {
    constructor(x, y, w, h, s) {
        super(x, y, w, h);
        this.s = s;
    }

    draw() {
        if (!this.enabled) {
            fill(145, 145, 145);
        } else if ( this.checkHover()) {
            fill(180, 180, 180);
        } else {
            fill(160, 160, 160);
        }
        rect(this.x, this.y, this.w, this.h);
        fill(30, 30, 30);
        textAlign(LEFT, CENTER);
        textSize(22);
        text(this.s.name, this.x + 5, this.y + this.h * 0.5);
    }

    update() {
        this.enabled = (this.s.owner.canAct || this.s.owner.statusing) && skillButtonsEnabled;
    }

    onClick() {
        if (applyingStatus != null) {
            this.s.applyStatus(applyingStatus);
            applyingStatus = null;
            this.s.owner.statusing = false;
            skillButtonsEnabled = true;
        } else {
            if (!this.s.active) {
                return;
            }
            selectedSkill = this.s;
            robotButtonsEnabled = true;
            skillButtonsEnabled = false;
        }
    }
}

let robotButtonsEnabled = false;

class RobotButton extends Button {
    constructor(x, y, w, h, r) {
        super(x, y, w, h);
        this.r = r;
    }

    update() {
        this.enabled = robotButtonsEnabled;
    }

    onClick() {
        selectedSkill.target = this.r;
        selectedSkill.use();
        robotButtonsEnabled = false;
        skillButtonsEnabled = true;
    }
}
