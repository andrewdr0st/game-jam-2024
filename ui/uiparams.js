let halfWidth;
let halfHeight;
let bottomStart;
let bottomHeight;
let skillButtonW;
let skillButtonH;
let padding;

function setupUiParams() {
    padding = 4;

    halfWidth = width / 2;
    halfHeight = height / 2;

    bottomStart = height * 0.8;
    bottomHeight = height / 5;

    skillButtonH = (bottomHeight - padding * 6) / 2;
    skillButtonW = (width - padding * 13) / 12;
}
