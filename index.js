import Keyboard from './js/keyboard.js';
import createNode from './js/utils/createNode.js';
import { get } from './js/utils/storage.js';

const rows = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const main = createNode('main', 'main', '<h1 class="main__title">Virtual keyboard</h1><textarea class="output" name="keyboard" id="keyboard" spellcheck="false" autocorrect="off" autocomplete="off"></textarea>');
document.body.prepend(main);
const lang = get('lang');
const keyboard = new Keyboard(rows, lang);
keyboard.init();
const description = createNode('div', 'description', `<p>Клавиатура создана в операционной системе Windows.</p>
                                <p>Переключение языка: левые Ctrl + Alt или зажатие левого Ctrl мышью + перетаскивание курсора на левый Alt (также работает в обратном порядке).</p>
                                <p>Для использования Shift, зажмите его мышью, перетащите курсор на нужную кнопку и отпустите зажатие - выбранный символ будет напечатан в поле вывода.</p>`);
main.append(description);
