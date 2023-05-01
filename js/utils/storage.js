const set = (name, value) => localStorage.setItem(name, value);

const get = (name) => localStorage.getItem(name) || 'eng';

export { get, set };
