import KEYS from './keys.js';
import createNode from './utils/createNode.js';

export default class Keyboard {
  constructor(rows, fnKeys) {
    this.rows = rows;
    this.fnKeys = fnKeys;
    this.pressedKeys = [];
    this.lang = 'eng';
    this.layout = 'lowerCase';
    this.output = document.querySelector('.output');
  }

  init = () => {
    this.renderKeyboard();
    document.addEventListener('keydown', (e) => {
      document.querySelector(`.${e.code}`).classList.add('active');
    });
    document.addEventListener('keyup', (e) => {
      document.querySelector(`.${e.code}`).classList.remove('active');
    });
  };

  renderKeyboard = () => {
    this.keyboard = createNode('div', 'keyboard');
    document.querySelector('.wrapper').append(this.keyboard);
    this.rows.forEach((row) => this.keyboard.append(this.createRow(row)));
  };

  createRow = (rowArray) => {
    const row = createNode('div', 'row');
    rowArray.forEach((key) => row.append(this.createKey(key)));
    return row;
  };

  createKey = (keyName) => {
    const key = createNode('div', `key ${keyName}`, KEYS[keyName][this.lang][this.layout]);
    key.id = keyName;
    if (!this.fnKeys.includes(key.id)) {
      key.addEventListener('click', (e) => {
        e.preventDefault();
        this.output.focus();
        this.printChar(e);
      });
    } else {
      key.addEventListener('click', (e) => {
        e.preventDefault();
        this.output.focus();
        this.printChar(e);
      });
    }
    return key;
  };

  printChar = (e) => {
    this.output.value += e.target.innerText;
  };

  handleFnKeyClicks = (e) => {
    const cursorPoint = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPoint);
    const right = this.output.value.slice(cursorPoint);
    switch (e.target.id) {
      case 'Backspace':
        this.output.value = `${left.slice(0, -1)}${right}`;
        break;
      case 'Space':
        this.output.value = `${left} ${right}`;
        break;
      case 'Delete':
        this.output.value = `${left}${right.slice(1)}`;
        break;
      case 'Enter':
        this.output.value = `${left}\n${right}`;
        break;
      case 'CapsLock':
        this.layout = this.layout === 'caps' ? 'lowerCase' : 'caps';
        this.keyboard.remove();
        this.renderKeyboard();
        break;
      default:
        break;
    }
  };
}
