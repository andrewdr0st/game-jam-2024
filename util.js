
var lastMillis = 0;
var deltaTime = 0;

function calculateDeltaTime() {
    deltaTime = (millis() - lastMillis) * 0.001;
    lastMillis = millis();
}

function drawSprite(f, x, y, s=1, r=0) {
    push();
    translate(x, y);
    rotate(r);
    scale(s); 
    f(); 
    pop(); 
}

function lerpp(x, a, b) {
    return (1 - x) * a + x * b;
}
