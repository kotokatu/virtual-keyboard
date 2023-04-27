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
      if (!this.fnKeys.includes(e.code)) {
        this.handleInputKeys(e);
      } else {
        this.handleFnKeys(e);
      }
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
      key.addEventListener('mousedown', this.handleInputKeys);
    } else {
      key.addEventListener('mousedown', this.handleFnKeys);
    }
    key.addEventListener('mouseup', (e) => {
      document.querySelector(`.${e.target.id}`).classList.remove('active');
    });
    return key;
  };

  handleInputKeys = (e) => {
    e.preventDefault();
    this.output.focus();
    const keyName = e.code || e.target.id;
    document.querySelector(`.${keyName}`).classList.add('active');
    this.output.value += KEYS[keyName][this.lang][this.layout];
  };

  handleFnKeys = (e) => {
    e.preventDefault();
    this.output.focus();
    const keyName = e.code || e.target.id;
    document.querySelector(`.${keyName}`).classList.add('active');
    let cursorPoint = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPoint);
    const right = this.output.value.slice(cursorPoint);
    switch (keyName) {
      case 'Backspace':
        this.output.value = `${left.slice(0, -1)}${right}`;
        cursorPoint -= 1;
        break;
      case 'Space':
        this.output.value = `${left} ${right}`;
        cursorPoint += 1;
        break;
      case 'Delete':
        this.output.value = `${left}${right.slice(1)}`;
        break;
      case 'Enter':
        this.output.value = `${left}\n${right}`;
        cursorPoint += 1;
        break;
      case 'CapsLock':
        this.layout = this.layout === 'caps' ? 'lowerCase' : 'caps';
        this.keyboard.remove();
        this.renderKeyboard();
        break;
      case 'Tab':
        this.output.value = `${left}\t${right}`;
        cursorPoint += 1;
        break;
      default:
        break;
    }
    this.output.setSelectionRange(cursorPoint, cursorPoint);
  };
}
