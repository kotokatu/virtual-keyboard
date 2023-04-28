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
    document.addEventListener('keydown', this.inputKeys);
    document.addEventListener('keyup', this.resetKeys);
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
    key.addEventListener('mousedown', this.inputKeys);
    key.addEventListener('mouseup', this.resetKeys);
    return key;
  };

  inputKeys = (e) => {
    e.preventDefault();
    this.output.focus();
    let cursorPos = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPos);
    const right = this.output.value.slice(cursorPos);
    const keyName = e.code || e.target.id;
    if (keyName !== 'CapsLock') document.querySelector(`.${keyName}`).classList.add('active');
    if (!this.fnKeys.includes(keyName)) {
      this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
      cursorPos += 1;
    } else {
      if (keyName === 'Backspace') {
        this.output.value = `${left.slice(0, -1)}${right}`;
        cursorPos -= 1;
      }
      if (keyName === 'Space') {
        this.output.value = `${left} ${right}`;
        cursorPos += 1;
      }
      if (keyName === 'Delete') {
        this.output.value = `${left}${right.slice(1)}`;
      }
      if (keyName === 'Enter') {
        this.output.value = `${left}\n${right}`;
        cursorPos += 1;
      }
      if (keyName === 'CapsLock') {
        document.querySelector(`.${keyName}`).classList.toggle('active');
        this.layout = this.layout === 'caps' ? 'lowerCase' : 'caps';
        this.switchLayout();
      }
      if (keyName === 'Tab') {
        this.output.value = `${left}\t${right}`;
        cursorPos += 1;
      }
      if (/^Control*/.test(keyName)) {
        if (e.altKey) this.lang = this.lang === 'eng' ? 'rus' : 'eng';
        this.switchLayout();
      }
      if (/^Alt*/.test(keyName)) {
        if (e.ctrlKey) this.lang = this.lang === 'eng' ? 'rus' : 'eng';
        this.switchLayout();
      }
      if (/^Shift*/.test(keyName)) {
        this.layout = 'shift';
        this.switchLayout();
      }
    }
    this.output.setSelectionRange(cursorPos, cursorPos);
  };

  switchLayout = () => {
    document.querySelectorAll('.key').forEach((element) => {
      const key = element;
      key.innerHTML = KEYS[key.id][this.lang][this.layout];
    });
  };

  resetKeys = (e) => {
    const keyName = e.code || e.target.id;
    if (keyName !== 'CapsLock') document.querySelector(`.${keyName}`).classList.remove('active');
    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      this.layout = 'lowerCase';
      this.switchLayout();
    }
  };
}
