import KEYS from './keys.js';

export default class Keyboard {
  constructor() {
    this.body = document.body;
    this.keys = [];
    this.lang = 'eng';
    this.letterCase = 'lowerCase';
  }

  renderKeyboard() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.innerHTML = `<h1>Виртуальная клавиатура</h1>
                        <textarea class="output" name="" id=""></textarea>`;
    this.body.append(wrapper);
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    wrapper.append(keyboard);
    Object.keys(KEYS).forEach((key) => {
      keyboard.append(this.renderKey(key));
    });
  }

  renderKey(keyName) {
    const key = document.createElement('div');
    key.className = `key ${keyName}`;
    key.innerHTML = KEYS[keyName][this.lang][this.letterCase];
    return key;
  }
}
