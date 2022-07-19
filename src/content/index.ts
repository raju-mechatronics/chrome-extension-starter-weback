import { Storage } from '../redefination';
import aol from './aol/aol';
import { getTabId } from './util';
import { aolLoginInit } from './aol/handleLogin';

let clear = true;

console.log(getTabId());

Storage.get('clear').then((e) => {
  clear = e.clear;
  console.log(clear);
});

switch (location.hostname) {
  case 'mail.aol.com':
    aol();
    break;
  case 'login.aol.com':
    aolLoginInit();
    break;
}
