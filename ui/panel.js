
let skillsHighlight = -1;

function updatePanels() {
    skillsHighlight = -1;
}

function drawBottomPanel() {
    fill(115, 110, 130);
    rect(0, bottomStart, width, bottomHeight);

    if (skillsHighlight >= 0) {
        fill(200, 190, 160);
        if (skillsHighlight > 2) {
            rect(skillsHighlight * (skillButtonW + skillSpacing + padding) + skillGap, bottomStart, skillButtonW + padding * 2, bottomHeight);
        } else {
            rect(skillsHighlight * (skillButtonW + skillSpacing + padding), bottomStart, skillButtonW + padding * 2, bottomHeight);
        }
    }
}