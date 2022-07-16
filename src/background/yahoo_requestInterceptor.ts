export function requestListner() {
  chrome.webRequest.onCompleted.addListener(
    //@ts-ignore
    (details) => {
      console.log(details);
      //   chrome.cookies.getAll({ storeId: details.cookieStoreId });
    },
    { urls: ['https://mail.yahoo.com/b/compose/*', 'https://mail.yahoo.com/ws/v3/batch?*'] },
    ['responseHeaders', 'extraHeaders']
  );
}
