const robot = require('robotjs');

export class ScrollMouse {
  executeBottomPage() {
    robot.scrollMouse(-14, 'down');
    setTimeout(function () {}, 2000);
  }
}
