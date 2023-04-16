const robot = require('robotjs');
const mouseEvents = require('global-mouse-events');

export class Position {
  execute() {
    //! exemplo de mouse
    robot.setMouseDelay(2);

    const twoPI = Math.PI * 2.0;
    const screenSize = robot.getScreenSize();
    const height = screenSize.height / 2 - 10;
    const width = screenSize.width;

    for (let x = 0; x < width; x++) {
      let y = height * Math.sin((twoPI * x) / width) + height;
      robot.moveMouse(x, y);
    }
  }

  clickMouse() {
    //! pegar a posição do mouse no click
    mouseEvents.on('mousedown', () => {
      const mouse = robot.getMousePos();
      console.log('Posição do mouse após o clique x e y:', mouse.x, mouse.y);
    });
  }
}
