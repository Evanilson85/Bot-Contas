import { openFolder } from './createFolder/index';
import { InitFileS26 } from './files/s26';

const pathFolder = 'C:/Users/evani/Desktop/ContasTeste/';
export class DataControllerReading {
  executeCreateFolderEdit() {
    openFolder(pathFolder);
  }
}
