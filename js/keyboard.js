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
    document.addEventListener('keydown', this.handleDownEvents);
    document.addEventListener('keyup', this.handleUpEvents);
    document.addEventListener('mouseup', this.handleUpEvents);
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
    key.addEventListener('mousedown', this.handleDownEvents);
    if (keyName !== 'CapsLock' && !/^Shift*/i.test(keyName)) key.addEventListener('mouseleave', this.removeActiveState);
    return key;
  };

  handleDownEvents = (e) => {
    const keyName = e.code || e.target.id;
    if (!KEYS[keyName]) return;
    e.preventDefault();
    this.output.focus();
    if (keyName !== 'CapsLock') document.querySelector(`.${keyName}`).classList.add('active');
    let cursorPos = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPos);
    const right = this.output.value.slice(cursorPos);
    if (keyName === 'MetaLeft' || /^Control*/i.test(keyName) || /^Alt*/i.test(keyName)) {
      return;
    }
    if (/^Shift*/i.test(keyName)) {
      this.shift = true;
      this.switchLayout();
    } else if (keyName === 'Backspace') {
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
      this.caps = !this.caps;
      this.switchLayout();
    } else if (keyName === 'Tab') {
      this.output.value = `${left}\t${right}`;
      cursorPos += 1;
    } else {
      this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
      cursorPos += 1;
    }
    this.output.setSelectionRange(cursorPos, cursorPos);
  };

  handleUpEvents = (e) => {
    const keyName = e.code || e.target.id;
    if (/^Shift*/i.test(keyName)) {
      this.shift = false;
      this.switchLayout();
    }
    if (this.shift && e.type === 'mouseup') {
      if (KEYS[keyName] && !KEYS[keyName].fn) {
        let cursorPos = this.output.selectionStart;
        const left = this.output.value.slice(0, cursorPos);
        const right = this.output.value.slice(cursorPos);
        this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
        cursorPos += 1;
        this.output.setSelectionRange(cursorPos, cursorPos);
      }
      document.querySelectorAll('[id*=Shift]').forEach((key) => key.classList.remove('active'));
      this.shift = false;
      this.switchLayout();
    }
    if (/^Control*/i.test(keyName)) {
      if (e.altKey) this.lang = this.lang === 'eng' ? 'rus' : 'eng';
      set('lang', this.lang);
      this.renderLayout();
    }
    if (/^Alt*/i.test(keyName)) {
      if (e.ctrlKey) this.lang = this.lang === 'eng' ? 'rus' : 'eng';
      set('lang', this.lang);
      this.renderLayout();
    }

    this.removeActiveState(e);
  };

  switchLayout = () => {
    if (this.shift && this.caps) this.layout = 'shiftCaps';
    else if (this.shift) this.layout = 'shift';
    else if (this.caps) this.layout = 'caps';
    else this.layout = 'lowerCase';
    this.renderLayout();
  };

  renderLayout = () => {
    document.querySelectorAll('.key').forEach((element) => {
      const key = element;
      key.innerHTML = KEYS[key.id][this.lang][this.layout];
    });
  };

  removeActiveState = (e) => {
    const keyName = e.code || e.target.id;
    if (!KEYS[keyName]) return;
    if (keyName !== 'CapsLock') this.keyboard.querySelector(`.${keyName}`).classList.remove('active');
  };
}
