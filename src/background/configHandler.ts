import ky from 'ky';

export async function configHandler(): Promise<{ [p: string]: any }> {
  const configFileURL = chrome.runtime.getURL('config.txt');
  const res = await ky.get(configFileURL);
  const configText = await res.text();
  const configArr = configText
    .split('\n')
    .filter((e) => !!e.trim())
    .map((e) => {
      const conf: { [p: string]: any } = e.split('=');
      if (conf[1].trim() === 'on') conf[1] = true;
      else if (conf[1].trim() === 'off') conf[1] = false;
      else conf[1] = conf[1].trim();
      return { [conf[0].trim()]: conf[1] };
    });
  let configJSON = {};
  configArr.forEach((e) => {
    configJSON = { ...configJSON, ...e };
  });
  return configJSON;
}
