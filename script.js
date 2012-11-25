
document.body.contentEditable = 'true';
document.designMode = 'on';

DI = document.images;
DIL = DI.length;

function preventDefault(event) {
    event.preventDefault();
    event.returnValue = false;
    return false;
}

function A() {
    for (i = 0; i - DIL; i++) {
        DIS = DI[i].style;
        DIS.position = 'relative';
        DIS.left = (Math.random() * 2 - 1) + "px";
    }
    R++
}
setInterval('A()', 1);
void(0);