import { sendMessage } from '../../redefination';
import { wait, waitElementToLoad } from '../util';
import { configHandler } from '../../background/configHandler';

export default async function aol() {
  const config = await configHandler();
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
    if (config.auto_clear_cookies) sendMessage({ DELETE_COOKIES: true, urls: urls });
  });
}
