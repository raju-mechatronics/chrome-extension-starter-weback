import { v4 } from 'uuid';

export const notify = (title: string, message: string) =>
  chrome.notifications.create(
    v4(),
    {
      message: message,
      title: title,
      type: 'basic',
      iconUrl:
        'https://cdn-icons.flaticon.com/png/512/1689/premium/1689442.png?token=exp=1657971482~hmac=640de078364f5197373ceb45e6200c59',
    },
    (notificationId) => console.log(notificationId)
  );
