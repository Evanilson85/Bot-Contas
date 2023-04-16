const robot = require('robotjs');

export class ScrollMouses {
  executeBottomPage() {
    const x = 352;
    const y = 240;
    robot.setMouseDelay(2);

    robot.moveMouse(x, y);
    robot.scrollMouse(0, 100);
    setTimeout(function () {}, 2000);
  }
}
