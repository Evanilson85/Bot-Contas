import { data } from '../utils/dataReading';
import { ScrollMouse } from './mouseEvent/scrollMouse';
const robot = require('robotjs');

export class DataControllerReading {
  executeHeader() {}

  async executeReading() {
    // data.forEach((item, index) => {
    //   console.log(item);
    // });
    const tes = new ScrollMouse();
    tes.executeBottomPage();

    return;
    for (let obj of data) {
      await this.addInfo(obj.data);
      await this.addInfo(obj.description);
      await this.addInfo(obj.symbolData);
      await this.addInfo(obj.inputDonations);
      await this.addInfo(obj.exitDonations);
      await this.addInfo(obj.inputBack);
      await this.addInfo(obj.exitBack);
      await this.addInfo(obj.inputOther);
      await this.addInfo(obj.exitOther);

      // console.log('Nome: ' + obj.data + ', Idade: ' + obj.description);
    }
    console.log('Terminou');
  }

  async addInfo(value: any) {
    return new Promise((resolve, reject) => {
      if (value) {
        robot.typeString(value);
        robot.keyTap('tab');
        console.log(value);
        resolve(true);
      } else {
        console.log('tab --------');
        resolve(robot.keyTap('tab'));
      }
    });
  }
}
