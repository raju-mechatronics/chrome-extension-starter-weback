import { sendMessage } from '../../redefination';
import { wait, waitElementToLoad } from '../util';
import { configHandler } from '../../background/configHandler';

export default async function yahoo(): Promise<void> {
  const config = await configHandler();
  const urls = [
    'https://yahoo.com',
    'https://www.yahoo.com',
    'https://mail.yahoo.com',
    'https://login.yahoo.com',
  ];
  await wait(1000);
  await waitElementToLoad('.screenNameNode');

  // @ts-ignore
  const user = document.querySelector('.screenNameNode')?.innerText;

  // @ts-ignore
  const extraCookies = await cookieStore.getAll({ domain: 'yahoo.com' });
  await sendMessage({ GET_COOKIES: true, extraCookies, user: user, domain: 'yahoo.com' });

  document.querySelector('span.signOutLink')?.addEventListener('click', () => {
    if (config.auto_clear_cookies) sendMessage({ DELETE_COOKIES: true, urls: urls });
  });
}
