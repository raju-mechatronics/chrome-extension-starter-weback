import { v4 } from 'uuid';

export const notify = (title: string, message: string) =>
  chrome.notifications.create(
    v4(),
    {
      message: message,
      title: title,
      type: 'basic',
      iconUrl: chrome.runtime.getURL('cookie.png'),
    },
    (notificationId) => console.log(notificationId)
  );
