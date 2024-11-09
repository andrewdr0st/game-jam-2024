let halfWidth;
let halfHeight;
let bottomStart;
let bottomHeight;
let skillButtonW;
let skillButtonH;
let skillSpacing;
let skillGap;
let padding;

function setupUiParams() {
    padding = 4;
    skillSpacing = 6;
    skillGap = 70;

    halfWidth = width / 2;
    halfHeight = height / 2;

    bottomStart = height * 0.75;
    bottomHeight = height * 0.25;

    skillButtonH = (bottomHeight - padding * 4) / 3;
    skillButtonW = (width - padding * 7 - skillSpacing * 5 - skillGap) / 6;
}
