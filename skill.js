class Skill {
    constructor(name, active=true) {
        this.name = name;
        this.status1 = null;
        this.status2 = null;
        this.value1 = 0;
        this.value2 = 0;
        this.active = active;
        this.owner = null;
        this.target = null;
    }

    description() {
        return "";
    }

    effect() {

    }

    endOfTurn() {

    }
}

class Smack extends Skill {
    constructor() {
        super("Smack");
        this.value1 = 6;
    }

    description() {
        return "Deal " + this.value1 + " damage.";
    }

    effect() {
        this.target.takeDamage(this.value1);
    }
}

class Rush extends Skill {
    constructor() {
        super("Rush");
        this.value1 = 5;
        this.value2 = 2;
    }

    description() {
        return "Deal " + this.value1 + " damage.\nIncrease power by " + this.value2 + ".";
    }

    effect() {
        this.target.takeDamage(this.value1);
        this.value1 += this.value2;
    }
}

