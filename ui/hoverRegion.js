var hoverRegions = [];

function hoverUpdate() {
    for (let i = 0; i < hoverRegions.length; i++) {
        let h = hoverRegions[i];
        h.update();
        if (h.enabled && h.checkHover()) {
            h.onHover();
        }
    }
}

function addHover(h) {
    hoverRegions.push(h);
}

function clearHovers() {
    hoverRegions = [];
}


class HoverRegion {
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

    onHover() {
        
    }

    update() {

    }
}

robotHoversEnabled = true;

class RobotHoverRegion extends HoverRegion {
    constructor(x, y, w, h, r) {
        super(x, y, w, h);
        this.r = r;
    }

    update() {
        this.r.s = 1;
        this.enabled = robotHoversEnabled;
    }

    onHover() {
        this.r.s = 1.05;
        skillsHighlight = this.r.id;
    }
}
