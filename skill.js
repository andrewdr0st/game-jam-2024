class Skill {
    constructor(name, active=true) {
        this.name = name;
        this.status1 = null;
        this.status2 = null;
        this.value1 = 0;
        this.value2 = 0;
        this.statusApply = null;
        this.active = active;
        this.animation = 0;
        this.owner = null;
        this.target = null;
    }

    description() {
        return "";
    }

    effect() {

    }

    use() {
        this.owner.target = this.target;
        this.owner.setAnimation(this.animation);
        this.owner.animating = true;
        this.owner.canAct = false;
    }

    endOfTurn() {

    }

    applyStatus(s) {
        if (this.status1 != null) {
            this.status2 = this.status1;
        }
        this.status1 = s;
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
        this.animation = 1;
    }

    description() {
        return "Deal " + this.value1 + " damage.\nIncrease power by " + this.value2 + ".";
    }

    effect() {
        this.target.takeDamage(this.value1);
        this.value1 += this.value2;
    }
}

class Repair extends Skill {
    constructor() {
        super("Repair");
        this.value1 = 5;
        this.animation = 2;
    }

    description() {
        return "Restore " + this.value1 + " hp.";
    }

    effect() {
        this.target.heal(this.value1);
    }
}

class Burn extends Skill {
    constructor() {
        super("Burn", false);
        this.value1 = 2;
    }

    description() {
        return "Take " + this.value1 + " damage at the end of turn.";
    }

    effect() {
        this.owner.takeDamage(this.value1);
    }

    endOfTurn() {
        this.effect();
    }
}
