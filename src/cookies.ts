import { Cookies } from './redefination';

export async function removeAllCookies(url: string): Promise<void> {
  const cookies = await Cookies.getAll({ url });
  for (const cookie of cookies) {
    Cookies.remove({ url: url, name: cookie.name });
  }
}

export function deleteAllCookies() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}
