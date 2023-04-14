const robot = require('robotjs');
const mouseEvents = require('global-mouse-events');
import { DataControllerReading } from '../controller/dataReadingController';
// const events = require('events');
// Crie um novo objeto EventEmitter

export class Position {
  execute() {
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

  mouseClickWrite() {
    const data = new DataControllerReading();
    data.executeReading();
    return;
    // return;

    const x = 352;
    const y = 240;
    robot.setMouseDelay(2);

    robot.moveMouse(x, y);

    // robot.setKeyboardDelay(2000);

    robot.mouseClick();

    robot.typeString('Serra dos Cristais');

    robot.keyTap('tab');

    robot.typeString('Diamantina - MG');

    robot.keyTap('tab');

    robot.typeString('Minas Gerais');

    const date = new Date();
    const nameMonth = date.toLocaleDateString('pt-br', { month: 'long' });
    const nameYear = date.toLocaleDateString('pt-br', { year: 'numeric' });

    robot.keyTap('tab');

    robot.typeString(nameMonth);

    robot.keyTap('tab');

    robot.typeString(nameYear);

    robot.keyTap('tab');

    data.executeReading();
  }

  clickMouse() {
    mouseEvents.on('mousedown', () => {
      // Capturar a posição do mouse na área de trabalho
      const mouse = robot.getMousePos();
      console.log('Posição do mouse após o clique x e y:', mouse.x, mouse.y);
      //! x352  y240
    });
    // Imprima a posição do mouse no console
  }
}
