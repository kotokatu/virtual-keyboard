import KEYS from './libs/keys.js';
import createNode from './utils/createNode.js';
import { set } from './utils/storage.js';

export default class Keyboard {
  constructor(rows, lang) {
    this.rows = rows;
    this.lang = lang;
    this.layout = 'lowerCase';
    this.output = document.querySelector('.output');
  }

  init = () => {
    this.renderKeyboard();
    document.addEventListener('keydown', this.handleKeys);
    document.addEventListener('keyup', this.resetKeys);
  };

  renderKeyboard = () => {
    this.keyboard = createNode('div', 'keyboard');
    document.querySelector('.main').append(this.keyboard);
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
    key.addEventListener('mousedown', this.handleKeys);
    key.addEventListener('mouseup', this.resetKeys);
    if (keyName !== 'CapsLock') key.addEventListener('mouseleave', this.resetKeys);
    return key;
  };

  handleKeys = (e) => {
    const keyName = e.code || e.target.id;
    if (!KEYS[keyName]) return;
    e.preventDefault();
    this.output.focus();
    let cursorPos = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPos);
    const right = this.output.value.slice(cursorPos);
    if (keyName !== 'CapsLock') document.querySelector(`.${keyName}`).classList.add('active');
    if (keyName === 'MetaLeft') return;
    if (keyName === 'Backspace') {
      this.output.value = `${left.slice(0, -1)}${right}`;
      cursorPos -= 1;
    } else if (keyName === 'Space') {
      this.output.value = `${left} ${right}`;
      cursorPos += 1;
    } else if (keyName === 'Delete') {
      this.output.value = `${left}${right.slice(1)}`;
    } else if (keyName === 'Enter') {
      this.output.value = `${left}\n${right}`;
      cursorPos += 1;
    } else if (keyName === 'CapsLock') {
      document.querySelector(`.${keyName}`).classList.toggle('active');
      switch (this.layout) {
        case 'caps':
          this.layout = 'lowerCase';
          break;
        case 'shiftCaps':
          this.layout = 'shift';
          break;
        case 'lowerCase':
          this.layout = 'caps';
          break;
        case 'shift':
          this.layout = 'shiftCaps';
          break;
        default:
          break;
      }
      this.switchLayout();
    } else if (keyName === 'Tab') {
      this.output.value = `${left}\t${right}`;
      cursorPos += 1;
    } else if (/^Control*/i.test(keyName)) {
      if (e.altKey) this.lang = this.lang === 'eng' ? 'rus' : 'eng';
      set('lang', this.lang);
      this.switchLayout();
    } else if (/^Alt*/i.test(keyName)) {
      if (e.ctrlKey) this.lang = this.lang === 'eng' ? 'rus' : 'eng';
      set('lang', this.lang);
      this.switchLayout();
    } else if (/^Shift*/i.test(keyName)) {
      switch (this.layout) {
        case 'caps':
          this.layout = 'shiftCaps';
          break;
        case 'lowerCase':
          this.layout = 'shift';
          break;
        default:
          break;
      }
      this.switchLayout();
    } else {
      this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
      cursorPos += 1;
    }
    this.output.setSelectionRange(cursorPos, cursorPos);
  };

  switchLayout = () => {
    document.querySelectorAll('.key').forEach((element) => {
      const key = element;
      key.innerHTML = KEYS[key.id]?.[this.lang][this.layout];
    });
  };

  resetKeys = (e) => {
    const keyName = e.code || e.target.id;
    if (!KEYS[keyName]) return;
    if (keyName !== 'CapsLock') document.querySelector(`.${keyName}`).classList.remove('active');
    if (/^Shift*/i.test(keyName)) {
      if (this.layout === 'shift') this.layout = 'lowerCase';
      if (this.layout === 'shiftCaps') this.layout = 'caps';
      this.switchLayout();
    }
  };
}
