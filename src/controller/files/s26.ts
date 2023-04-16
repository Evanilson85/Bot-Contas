import { data } from '../../utils/dataReading';
import key from '../../utils/keys';

const robot = require('robotjs');
const { keyTap, setMouseDelay, moveMouse, mouseClick, typeString, setKeyboardDelay } = robot;

export const InitFileS26 = (nameMonth?: string) => {
  setKeyboardDelay(1000);

  keyTap('up', key.wind);

  const x = 352;
  const y = 240;

  setMouseDelay(2);

  moveMouse(x, y);

  mouseClick();

  typeString('Serra dos Cristais');

  keyTap('tab');

  typeString('Diamantina - MG');

  keyTap('tab');

  typeString('Minas Gerais');

  const date = new Date();
  const nameMonthDefault = date.toLocaleDateString('pt-br', { month: 'long' });
  const nameYear = date.toLocaleDateString('pt-br', { year: 'numeric' });

  keyTap('tab');

  typeString(nameMonth ? nameMonth : nameMonthDefault);

  keyTap('tab');

  typeString(nameYear);

  keyTap('tab');

  executeReading();
};

const executeReading = async () => {
  for (let obj of data) {
    await addInfo(obj.data);
    await addInfo(obj.description);
    await addInfo(obj.symbolData);
    await addInfo(obj.inputDonations);
    await addInfo(obj.exitDonations);
    await addInfo(obj.inputBack);
    await addInfo(obj.exitBack);
    await addInfo(obj.inputOther);
    await addInfo(obj.exitOther);
  }
  console.log('Terminou');
};

const addInfo = async (value: any) => {
  //! vai digitar nos campos
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
};
