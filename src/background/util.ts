import { wait } from '../content/util';

export async function waitForTabLoadingComplete(tabid: number) {
  await wait(800);
  let tab = await chrome.tabs.get(tabid);
  while (tab.status !== 'complete') {
    await wait(500);
    console.log('waiting');
    tab = await chrome.tabs.get(tabid);
  }
  return tab;
}
