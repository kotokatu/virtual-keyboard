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
    this.output.addEventListener('focusout', () => this.output.focus());
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
    key.addEventListener('animationend', () => key.classList.remove('keypress'));
    return key;
  };

  handleDownEvents = (e) => {
    e.preventDefault();
    const keyName = e.code || e.target.id;
    if (!KEYS[keyName]) return;
    this.output.focus();
    if (keyName !== 'CapsLock') document.querySelector(`.${keyName}`).classList.add('active');
    let { start } = this.getTextSelection();
    const { end, left, right } = this.getTextSelection();
    if (keyName === 'MetaLeft' || /^Control*/i.test(keyName) || /^Alt*/i.test(keyName)) {
      return;
    }
    if (/^Shift*/i.test(keyName)) {
      this.shift = true;
      this.switchLayout();
    } else if (keyName === 'Backspace') {
      if (start === end) {
        this.output.value = `${left.slice(0, -1)}${right}`;
        start -= 1;
      } else this.output.value = `${left}${right}`;
    } else if (keyName === 'Space') {
      this.output.value = `${left}\u00A0${right}`;
      start += 1;
    } else if (keyName === 'Delete') {
      if (start === end) this.output.value = `${left}${right.slice(1)}`;
      else this.output.value = `${left}${right}`;
    } else if (keyName === 'Enter') {
      this.output.value = `${left}\n${right}`;
      start += 1;
    } else if (keyName === 'CapsLock') {
      document.querySelector(`.${keyName}`).classList.toggle('active');
      this.caps = !this.caps;
      this.switchLayout();
    } else if (keyName === 'Tab') {
      this.output.value = `${left}\u0009${right}`;
      start += 1;
    } else {
      this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
      start += 1;
    }
    this.output.setSelectionRange(start, start);
  };

  handleUpEvents = (e) => {
    const keyName = e.code || e.target.id;
    if ((this.shift && !e.shiftKey) || /^Shift*/i.test(keyName)) {
      if (KEYS[keyName] && !KEYS[keyName].fn) {
        document.querySelector(`.${keyName}`).classList.add('keypress');
        let { start } = this.getTextSelection();
        const { left, right } = this.getTextSelection();
        this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
        start += 1;
        this.output.setSelectionRange(start, start);
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
    this.removeActiveState();
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

  removeActiveState = () => {
    const activeKeys = this.keyboard.querySelectorAll('.active');
    activeKeys.forEach((key) => {
      if (key.id !== 'CapsLock' && !/^Shift*/i.test(key.id)) key.classList.remove('active');
    });
  };

  getTextSelection = () => ({
    start: this.output.selectionStart,
    end: this.output.selectionEnd,
    left: this.output.value.substr(0, this.output.selectionStart),
    right: this.output.value.slice(this.output.selectionEnd),
  });
}
