import { Storage } from '../redefination';
import aol from './aol';
import yahoo from './yahoo';

let clear = true;

Storage.get('clear').then((e) => {
  clear = e.clear;
  console.log(clear);
});

switch (location.hostname) {
  case 'www.aol.com':
    aol();
    break;
  case 'mail.aol.com':
    aol();
    break;
  case 'www.yahoo.com':
    yahoo();
    break;
  case 'mail.yahoo.com':
    yahoo();
    break;
}
