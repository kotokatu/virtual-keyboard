import KEYS from './libs/keys.js';
import createNode from './utils/createNode.js';
import { set } from './utils/storage.js';

export default class Keyboard {
  constructor(rows, lang) {
    this.rows = rows;
    this.lang = lang;
    this.pressedKeys = [];
    this.layout = 'lowerCase';
    this.output = document.querySelector('.output');
  }

  init = () => {
    this.renderKeyboard();
    this.output.addEventListener('focusout', () => this.output.focus());
    window.addEventListener('keydown', this.handleDownEvents);
    window.addEventListener('keyup', this.handleUpEvents);
    window.addEventListener('mouseup', this.handleUpEvents);
    return this.keyboard;
  };

  renderKeyboard = () => {
    this.keyboard = createNode('div', 'keyboard');
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
    key.addEventListener('animationend', () => key.classList.remove('simulate-press'));
    return key;
  };

  handleDownEvents = (e) => {
    e.preventDefault();
    const keyName = e.code || e.target.id;
    if (!KEYS[keyName]) return;
    this.output.focus();
    if (e.type === 'keydown' && !e.repeat) this.pressedKeys.push(keyName);
    document.querySelector(`.${keyName}`).classList.add('pressed');
    if (/^Shift*/i.test(keyName)) {
      if (e.repeat) return;
      this.shift = true;
      this.switchLayout();
    } else if (keyName === 'CapsLock') {
      if (e.repeat) return;
      document.querySelector(`.${keyName}`).classList.toggle('active');
      this.caps = !this.caps;
      this.switchLayout();
    } else if (keyName === 'ControlLeft') {
      this.ctrl = true;
    } else if (keyName === 'AltLeft') {
      this.alt = true;
    } else this.editOutput(e, keyName);
  };

  handleUpEvents = (e) => {
    const keyName = e.code || e.target.id;
    if (e.type === 'keyup') this.pressedKeys = this.pressedKeys.filter((key) => key !== keyName);
    if ((this.shift && !e.shiftKey) || /^Shift*/i.test(keyName)) {
      if (KEYS[keyName]?.inputKey) {
        this.editOutput(e, keyName);
        document.querySelector(`.${keyName}`).classList.add('simulate-press');
      }
      this.shift = false;
      this.switchLayout();
    }
    if (keyName === 'ControlLeft') {
      if (this.alt) {
        this.switchLanguage();
        if (e.type === 'mouseup' && !e.altKey) {
          this.keyboard.querySelector('.ControlLeft').classList.add('simulate-press');
          this.alt = false;
        }
      }
      this.ctrl = false;
    }
    if (keyName === 'AltLeft') {
      if (this.ctrl) {
        this.switchLanguage();
        if (e.type === 'mouseup' && !e.ctrlKey) {
          this.keyboard.querySelector('.AltLeft').classList.add('simulate-press');
          this.ctrl = false;
        }
      }
      this.alt = false;
    }
    this.toggleActive(e, keyName);
  };

  editOutput = (e, keyName) => {
    let { start } = this.getTextSelection();
    const { end, left, right } = this.getTextSelection();
    if (!KEYS[keyName]?.inputKey) return;
    if (e.type === 'mousedown' && this.pressedKeys.includes(keyName)) return;
    switch (keyName) {
      case 'Backspace':
        if (start === end) {
          this.output.value = `${left.slice(0, -1)}${right}`;
          start -= 1;
        } else this.output.value = `${left}${right}`;
        break;
      case 'Space':
        this.output.value = `${left}\u00A0${right}`;
        start += 1;
        break;
      case 'Delete':
        if (start === end) this.output.value = `${left}${right.slice(1)}`;
        else this.output.value = `${left}${right}`;
        break;
      case 'Enter':
        this.output.value = `${left}\n${right}`;
        start += 1;
        break;
      case 'Tab':
        this.output.value = `${left}\t${right}`;
        start += 1;
        break;
      default:
        this.output.value = left + KEYS[keyName][this.lang][this.layout] + right;
        start += 1;
        break;
    }
    this.output.setSelectionRange(start, start);
  };

  getTextSelection = () => ({
    start: this.output.selectionStart,
    end: this.output.selectionEnd,
    left: this.output.value.substr(0, this.output.selectionStart),
    right: this.output.value.slice(this.output.selectionEnd),
  });

  switchLayout = () => {
    if (this.shift && this.caps) this.layout = 'shiftCaps';
    else if (this.shift) this.layout = 'shift';
    else if (this.caps) this.layout = 'caps';
    else this.layout = 'lowerCase';
    this.renderLayout();
  };

  switchLanguage = () => {
    this.lang = this.lang === 'eng' ? 'rus' : 'eng';
    set('lang', this.lang);
    this.renderLayout();
  };

  renderLayout = () => {
    document.querySelectorAll('.key').forEach((element) => {
      const key = element;
      key.innerHTML = KEYS[key.id][this.lang][this.layout];
    });
  };

  toggleActive = (e, keyName) => {
    if (e.type === 'mouseup') {
      const activeKeys = this.keyboard.querySelectorAll('.pressed');
      activeKeys.forEach((key) => {
        if (!this.pressedKeys.includes(key.id)) key.classList.remove('pressed');
      });
    }
    if (e.type === 'keyup') {
      if (!KEYS[keyName]) return;
      document.querySelector(`.${keyName}`).classList.remove('pressed');
      if (!e.shiftKey) document.querySelectorAll('[id*=Shift]').forEach((key) => key.classList.remove('pressed'));
    }
  };
}
