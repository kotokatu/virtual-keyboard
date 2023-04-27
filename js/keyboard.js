import KEYS from './keys.js';
import createNode from './utils/createNode.js';

export default class Keyboard {
  constructor(rows) {
    this.rows = rows;
    this.body = document.body;
    this.pressedKeys = [];
    this.lang = 'eng';
    this.letterCase = 'lowerCase';
  }

  renderKeyboard() {
    const keyboard = createNode('div', 'keyboard');
    document.querySelector('.wrapper').append(keyboard);
    this.rows.forEach((row) => keyboard.append(this.createRow(row)));
  }

  createRow(rowArray) {
    const row = createNode('div', 'row');
    rowArray.forEach((key) => row.append(this.createKey(key)));
    return row;
  }

  createKey(keyName) {
    const key = createNode('div', `key ${keyName}`, KEYS[keyName][this.lang][this.letterCase]);
    return key;
  }
}
