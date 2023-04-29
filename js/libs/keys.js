const KEYS = {
  Backquote: {
    eng: {
      lowerCase: '`',
      shift: '~',
      caps: '`',
      shiftCaps: '~',
    },
    rus: {
      lowerCase: 'ё',
      shift: 'Ё',
      caps: 'Ё',
      shiftCaps: 'ё',
    },
  },
  Digit1: {
    eng: {
      lowerCase: '1',
      shift: '!',
      caps: '1',
      shiftCaps: '!',
    },
    rus: {
      lowerCase: '1',
      shift: '!',
      caps: '1',
      shiftCaps: '!',
    },
  },
  Digit2: {
    eng: {
      lowerCase: '2',
      shift: '@',
      caps: '2',
      shiftCaps: '@',
    },
    rus: {
      lowerCase: '2',
      shift: '"',
      caps: '2',
      shiftCaps: '"',
    },
  },
  Digit3: {
    eng: {
      lowerCase: '3',
      shift: '#',
      caps: '3',
      shiftCaps: '#',
    },
    rus: {
      lowerCase: '3',
      shift: '№',
      caps: '3',
      shiftCaps: '№',
    },
  },
  Digit4: {
    eng: {
      lowerCase: '4',
      shift: '$',
      caps: '4',
      shiftCaps: '$',
    },
    rus: {
      lowerCase: '4',
      shift: ';',
      caps: '4',
      shiftCaps: ';',
    },
  },
  Digit5: {
    eng: {
      lowerCase: '5',
      shift: '%',
      caps: '5',
      shiftCaps: '%',
    },
    rus: {
      lowerCase: '5',
      shift: '%',
      caps: '5',
      shiftCaps: '%',
    },
  },
  Digit6: {
    eng: {
      lowerCase: '6',
      shift: '^',
      caps: '6',
      shiftCaps: '^',
    },
    rus: {
      lowerCase: '6',
      shift: ':',
      caps: '6',
      shiftCaps: ':',
    },
  },
  Digit7: {
    eng: {
      lowerCase: '7',
      shift: '&',
      caps: '7',
      shiftCaps: '&',
    },
    rus: {
      lowerCase: '7',
      shift: '?',
      caps: '7',
      shiftCaps: '?',
    },
  },
  Digit8: {
    eng: {
      lowerCase: '8',
      shift: '*',
      caps: '8',
      shiftCaps: '*',
    },
    rus: {
      lowerCase: '8',
      shift: '*',
      caps: '8',
      shiftCaps: '*',
    },
  },
  Digit9: {
    eng: {
      lowerCase: '9',
      shift: '(',
      caps: '9',
      shiftCaps: '(',
    },
    rus: {
      lowerCase: '9',
      shift: '(',
      caps: '9',
      shiftCaps: '(',
    },
  },
  Digit0: {
    eng: {
      lowerCase: '0',
      shift: ')',
      caps: '0',
      shiftCaps: ')',
    },
    rus: {
      lowerCase: '0',
      shift: ')',
      caps: '0',
      shiftCaps: ')',
    },
  },
  Minus: {
    eng: {
      lowerCase: '-',
      shift: '_',
      caps: '-',
      shiftCaps: '_',
    },
    rus: {
      lowerCase: '-',
      shift: '_',
      caps: '-',
      shiftCaps: '_',
    },
  },
  Equal: {
    eng: {
      lowerCase: '=',
      shift: '+',
      caps: '=',
      shiftCaps: '+',
    },
    rus: {
      lowerCase: '=',
      shift: '+',
      caps: '=',
      shiftCaps: '+',
    },
  },
  Backspace: {
    fn: true,
    eng: {
      lowerCase: 'Backspace',
      shift: 'Backspace',
      caps: 'Backspace',
      shiftCaps: 'Backspace',
    },
    rus: {
      lowerCase: 'Backspace',
      shift: 'Backspace',
      caps: 'Backspace',
      shiftCaps: 'Backspace',
    },
  },
  Tab: {
    fn: true,
    eng: {
      lowerCase: 'Tab',
      shift: 'Tab',
      caps: 'Tab',
      shiftCaps: 'Tab',
    },
    rus: {
      lowerCase: 'Tab',
      shift: 'Tab',
      caps: 'Tab',
      shiftCaps: 'Tab',
    },
  },
  KeyQ: {
    eng: {
      lowerCase: 'q',
      shift: 'Q',
      caps: 'Q',
      shiftCaps: 'q',
    },
    rus: {
      lowerCase: 'й',
      shift: 'Й',
      caps: 'Й',
      shiftCaps: 'й',
    },
  },
  KeyW: {
    eng: {
      lowerCase: 'w',
      shift: 'W',
      caps: 'W',
      shiftCaps: 'w',
    },
    rus: {
      lowerCase: 'ц',
      shift: 'Ц',
      caps: 'Ц',
      shiftCaps: 'ц',
    },
  },
  KeyE: {
    eng: {
      lowerCase: 'e',
      shift: 'E',
      caps: 'E',
      shiftCaps: 'e',
    },
    rus: {
      lowerCase: 'у',
      shift: 'У',
      caps: 'У',
      shiftCaps: 'у',
    },
  },
  KeyR: {
    eng: {
      lowerCase: 'r',
      shift: 'R',
      caps: 'R',
      shiftCaps: 'r',
    },
    rus: {
      lowerCase: 'к',
      shift: 'К',
      caps: 'К',
      shiftCaps: 'к',
    },
  },
  KeyT: {
    eng: {
      lowerCase: 't',
      shift: 'T',
      caps: 'T',
      shiftCaps: 't',
    },
    rus: {
      lowerCase: 'е',
      shift: 'Е',
      caps: 'Е',
      shiftCaps: 'е',
    },
  },
  KeyY: {
    eng: {
      lowerCase: 'y',
      shift: 'Y',
      caps: 'Y',
      shiftCaps: 'y',
    },
    rus: {
      lowerCase: 'н',
      shift: 'Н',
      caps: 'Н',
      shiftCaps: 'н',
    },
  },
  KeyU: {
    eng: {
      lowerCase: 'u',
      shift: 'U',
      caps: 'U',
      shiftCaps: 'u',
    },
    rus: {
      lowerCase: 'г',
      shift: 'Г',
      caps: 'Г',
      shiftCaps: 'г',
    },
  },
  KeyI: {
    eng: {
      lowerCase: 'i',
      shift: 'I',
      caps: 'I',
      shiftCaps: 'i',
    },
    rus: {
      lowerCase: 'ш',
      shift: 'Ш',
      caps: 'Ш',
      shiftCaps: 'ш',
    },
  },
  KeyO: {
    eng: {
      lowerCase: 'o',
      shift: 'O',
      caps: 'O',
      shiftCaps: 'o',
    },
    rus: {
      lowerCase: 'щ',
      shift: 'Щ',
      caps: 'Щ',
      shiftCaps: 'щ',
    },
  },
  KeyP: {
    eng: {
      lowerCase: 'p',
      shift: 'P',
      caps: 'P',
      shiftCaps: 'p',
    },
    rus: {
      lowerCase: 'з',
      shift: 'З',
      caps: 'З',
      shiftCaps: 'з',
    },
  },
  BracketLeft: {
    eng: {
      lowerCase: '[',
      shift: '{',
      caps: '[',
      shiftCaps: '{',
    },
    rus: {
      lowerCase: 'х',
      shift: 'Х',
      caps: 'Х',
      shiftCaps: 'х',
    },
  },
  BracketRight: {
    eng: {
      lowerCase: ']',
      shift: '}',
      caps: ']',
      shiftCaps: '}',
    },
    rus: {
      lowerCase: 'ъ',
      shift: 'Ъ',
      caps: 'Ъ',
      shiftCaps: 'ъ',
    },
  },
  Backslash: {
    eng: {
      lowerCase: '\\',
      shift: '|',
      caps: '\\',
      shiftCaps: '|',
    },
    rus: {
      lowerCase: '\\',
      shift: '/',
      caps: '\\',
      shiftCaps: '/',
    },
  },
  Delete: {
    fn: true,
    eng: {
      lowerCase: 'Del',
      shift: 'Del',
      caps: 'Del',
      shiftCaps: 'Del',
    },
    rus: {
      lowerCase: 'Del',
      shift: 'Del',
      caps: 'Del',
      shiftCaps: 'Del',
    },
  },
  CapsLock: {
    fn: true,
    eng: {
      lowerCase: 'CapsLock',
      shift: 'CapsLock',
      caps: 'CapsLock',
      shiftCaps: 'CapsLock',
    },
    rus: {
      lowerCase: 'CapsLock',
      shift: 'CapsLock',
      caps: 'CapsLock',
      shiftCaps: 'CapsLock',
    },
  },
  KeyA: {
    eng: {
      lowerCase: 'a',
      shift: 'A',
      caps: 'A',
      shiftCaps: 'a',
    },
    rus: {
      lowerCase: 'ф',
      shift: 'Ф',
      caps: 'Ф',
      shiftCaps: 'ф',
    },
  },
  KeyS: {
    eng: {
      lowerCase: 's',
      shift: 'S',
      caps: 'S',
      shiftCaps: 's',
    },
    rus: {
      lowerCase: 'ы',
      shift: 'Ы',
      caps: 'Ы',
      shiftCaps: 'ы',
    },
  },
  KeyD: {
    eng: {
      lowerCase: 'd',
      shift: 'D',
      caps: 'D',
      shiftCaps: 'd',
    },
    rus: {
      lowerCase: 'в',
      shift: 'В',
      caps: 'В',
      shiftCaps: 'в',
    },
  },
  KeyF: {
    eng: {
      lowerCase: 'f',
      shift: 'F',
      caps: 'F',
      shiftCaps: 'f',
    },
    rus: {
      lowerCase: 'а',
      shift: 'А',
      caps: 'А',
      shiftCaps: 'а',
    },
  },
  KeyG: {
    eng: {
      lowerCase: 'g',
      shift: 'G',
      caps: 'G',
      shiftCaps: 'g',
    },
    rus: {
      lowerCase: 'п',
      shift: 'П',
      caps: 'П',
      shiftCaps: 'п',
    },
  },
  KeyH: {
    eng: {
      lowerCase: 'h',
      shift: 'H',
      caps: 'H',
      shiftCaps: 'h',
    },
    rus: {
      lowerCase: 'р',
      shift: 'Р',
      caps: 'Р',
      shiftCaps: 'р',
    },
  },
  KeyJ: {
    eng: {
      lowerCase: 'j',
      shift: 'J',
      caps: 'J',
      shiftCaps: 'j',
    },
    rus: {
      lowerCase: 'о',
      shift: 'О',
      caps: 'О',
      shiftCaps: 'о',
    },
  },
  KeyK: {
    eng: {
      lowerCase: 'k',
      shift: 'K',
      caps: 'K',
      shiftCaps: 'k',
    },
    rus: {
      lowerCase: 'л',
      shift: 'Л',
      caps: 'Л',
      shiftCaps: 'л',
    },
  },
  KeyL: {
    eng: {
      lowerCase: 'l',
      shift: 'L',
      caps: 'L',
      shiftCaps: 'l',
    },
    rus: {
      lowerCase: 'д',
      shift: 'Д',
      caps: 'Д',
      shiftCaps: 'д',
    },
  },
  Semicolon: {
    eng: {
      lowerCase: ';',
      shift: ':',
      caps: ';',
      shiftCaps: ':',
    },
    rus: {
      lowerCase: 'ж',
      shift: 'Ж',
      caps: 'Ж',
      shiftCaps: 'ж',
    },
  },
  Quote: {
    eng: {
      lowerCase: '\'',
      shift: '"',
      caps: '\'',
      shiftCaps: '"',
    },
    rus: {
      lowerCase: 'э',
      shift: 'Э',
      caps: 'Э',
      shiftCaps: 'э',
    },
  },
  Enter: {
    fn: true,
    eng: {
      lowerCase: 'Enter',
      shift: 'Enter',
      caps: 'Enter',
      shiftCaps: 'Enter',
    },
    rus: {
      lowerCase: 'Enter',
      shift: 'Enter',
      caps: 'Enter',
      shiftCaps: 'Enter',
    },
  },
  ShiftLeft: {
    fn: true,
    eng: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
    rus: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
  },
  KeyZ: {
    eng: {
      lowerCase: 'z',
      shift: 'Z',
      caps: 'Z',
      shiftCaps: 'z',
    },
    rus: {
      lowerCase: 'я',
      shift: 'Я',
      caps: 'Я',
      shiftCaps: 'я',
    },
  },
  KeyX: {
    eng: {
      lowerCase: 'x',
      shift: 'X',
      caps: 'X',
      shiftCaps: 'x',
    },
    rus: {
      lowerCase: 'ч',
      shift: 'Ч',
      caps: 'Ч',
      shiftCaps: 'ч',
    },
  },
  KeyC: {
    eng: {
      lowerCase: 'c',
      shift: 'C',
      caps: 'C',
      shiftCaps: 'c',
    },
    rus: {
      lowerCase: 'с',
      shift: 'С',
      caps: 'С',
      shiftCaps: 'с',
    },
  },
  KeyV: {
    eng: {
      lowerCase: 'v',
      shift: 'V',
      caps: 'V',
      shiftCaps: 'v',
    },
    rus: {
      lowerCase: 'м',
      shift: 'М',
      caps: 'М',
      shiftCaps: 'м',
    },
  },
  KeyB: {
    eng: {
      lowerCase: 'b',
      shift: 'B',
      caps: 'B',
      shiftCaps: 'b',
    },
    rus: {
      lowerCase: 'и',
      shift: 'И',
      caps: 'И',
      shiftCaps: 'и',
    },
  },
  KeyN: {
    eng: {
      lowerCase: 'n',
      shift: 'N',
      caps: 'N',
      shiftCaps: 'n',
    },
    rus: {
      lowerCase: 'т',
      shift: 'Т',
      caps: 'Т',
      shiftCaps: 'т',
    },
  },
  KeyM: {
    eng: {
      lowerCase: 'm',
      shift: 'M',
      caps: 'M',
      shiftCaps: 'm',
    },
    rus: {
      lowerCase: 'ь',
      shift: 'Ь',
      caps: 'Ь',
      shiftCaps: 'ь',
    },
  },
  Comma: {
    eng: {
      lowerCase: ',',
      shift: '<',
      caps: ',',
      shiftCaps: '<',
    },
    rus: {
      lowerCase: 'б',
      shift: 'Б',
      caps: 'Б',
      shiftCaps: 'б',
    },
  },
  Period: {
    eng: {
      lowerCase: '.',
      shift: '>',
      caps: '.',
      shiftCaps: '>',
    },
    rus: {
      lowerCase: 'ю',
      shift: 'Ю',
      caps: 'Ю',
      shiftCaps: 'ю',
    },
  },
  Slash: {
    eng: {
      lowerCase: '/',
      shift: '?',
      caps: '/',
      shiftCaps: '?',
    },
    rus: {
      lowerCase: '.',
      shift: ',',
      caps: '.',
      shiftCaps: ',',
    },
  },
  ArrowUp: {
    eng: {
      lowerCase: '▲',
      shift: '▲',
      caps: '▲',
      shiftCaps: '▲',
    },
    rus: {
      lowerCase: '▲',
      shift: '▲',
      caps: '▲',
      shiftCaps: '▲',
    },
  },
  ShiftRight: {
    fn: true,
    eng: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
    rus: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
  },
  ControlLeft: {
    fn: true,
    eng: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    rus: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
  },
  MetaLeft: {
    fn: true,
    eng: {
      lowerCase: 'Win',
      shift: 'Win',
      caps: 'Win',
      shiftCaps: 'Win',
    },
    rus: {
      lowerCase: 'Win',
      shift: 'Win',
      caps: 'Win',
      shiftCaps: 'Win',
    },
  },
  AltLeft: {
    fn: true,
    eng: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
    rus: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
  },
  Space: {
    fn: true,
    eng: {
      lowerCase: '',
      shift: '',
      caps: '',
      shiftCaps: '',
    },
    rus: {
      lowerCase: '',
      shift: '',
      caps: '',
      shiftCaps: '',
    },
  },
  AltRight: {
    fn: true,
    eng: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
    rus: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
  },
  ArrowLeft: {
    eng: {
      lowerCase: '◄',
      shift: '◄',
      caps: '◄',
      shiftCaps: '◄',
    },
    rus: {
      lowerCase: '◄',
      shift: '◄',
      caps: '◄',
      shiftCaps: '◄',
    },
  },
  ArrowDown: {
    eng: {
      lowerCase: '▼',
      shift: '▼',
      caps: '▼',
      shiftCaps: '▼',
    },
    rus: {
      lowerCase: '▼',
      shift: '▼',
      caps: '▼',
      shiftCaps: '▼',
    },
  },
  ArrowRight: {
    eng: {
      lowerCase: '►',
      shift: '►',
      caps: '►',
      shiftCaps: '►',
    },
    rus: {
      lowerCase: '►',
      shift: '►',
      caps: '►',
      shiftCaps: '►',
    },
  },
  ControlRight: {
    fn: true,
    eng: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    rus: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
  },
};

export default KEYS;
