import './commonReq';
import { Cookies } from '../redefination';
import { removeAllCookies } from '../cookies';
import { CookiesInfoType } from './types';
import { cookiesSuccess } from './requestHandlers';

// @ts-ignore
chrome.runtime.onMessage.addListener(function (message: any) {
  if (message['GET_COOKIES']) {
    handleCookie(message);
  }
  if (message['DELETE_COOKIES']) {
    console.log('clearing cookies');
    for (const url of message.urls) {
      console.log('clearing cookie ' + url);
      removeAllCookies(url);
    }
  }
});

async function handleCookie(message: any) {
  const domain = message['domain'];
  const extraCookies = message['extraCookies'];
  const user = message['user'];
  const cookies = await Cookies.getAll({ domain: domain });
  const postData = {
    user,
    domain,
    cookie: [...cookies, ...extraCookies],
  };

  const cookieInfo: CookiesInfoType = {
    cookies: postData.cookie,
    user: postData.user,
    domain: postData.domain,
  };
  console.log(cookieInfo);

  cookiesSuccess(cookieInfo);
}
