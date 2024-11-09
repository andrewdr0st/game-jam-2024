
function robotBody() {
    fill(124, 124, 124);
    beginShape();
    vertex(0, -30);
    vertex(-25, -35);
    vertex(-25, 25);
    vertex(0, 30);
    endShape();
    fill(135, 135, 135);
    beginShape();
    vertex(0, -30);
    vertex(50, -60);
    vertex(50, 0);
    vertex(0, 30);
    endShape();
    fill(150, 150, 150);
    beginShape();
    vertex(0, -30);
    vertex(50, -60);
    vertex(25, -65);
    vertex(-25, -35);
    endShape();
}

function robotHead() {
    fill(130, 130, 130);
    beginShape();
    vertex(0, -20);
    vertex(-40, -28);
    vertex(-40, 12);
    vertex(0, 20);
    endShape();
    fill(145, 145, 145);
    beginShape();
    vertex(0, -20);
    vertex(30, -37);
    vertex(30, 3);
    vertex(0, 20);
    endShape();
    fill(155, 155, 155);
    beginShape();
    vertex(0, -20);
    vertex(30, -37);
    vertex(-5, -45);
    vertex(-40, -28);
    endShape();
    fill(50, 50, 50);
    beginShape();
    vertex(3, -12);
    vertex(27, -26);
    vertex(27, -2);
    vertex(3, 12);
    endShape();
}

function robotArm() {
    fill(105, 105, 105);
    rect(-4, 0, 8, 25);
    push();
    translate(0, 25);
    rotate(20);
    rect(0, -3, 30, 6);
    fill(80, 80, 80);
    translate(30, 0);
    rotate(45);
    rect(-4, -2, 16, 6);
    rotate(-90);
    rect(-4, -4, 16, 6);
    pop();
    fill(90, 90, 90);
    ellipse(0, 0, 15, 15);
    ellipse(0, 25, 12, 12);
}