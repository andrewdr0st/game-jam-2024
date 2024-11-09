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
}

robotHoversEnabled = true;

class RobotHoverRegion {
    constructor(x, y, w, h, r) {
        super(x, y, w, h);
        this.r = r;
    }

    onHover() {
        this.r.s = 1.1;
    }
}
