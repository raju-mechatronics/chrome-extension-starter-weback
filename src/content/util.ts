export async function wait(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

export async function waitElementToLoad(
  selector: string,
  delay = 100,
  context: Element | Document = document,
  checkLimit = 50
): Promise<Element | boolean> {
  const el = context.querySelector(selector);
  if (el) return new Promise((res) => res(el));
  return new Promise((resolve) => {
    let interval: any;
    // eslint-disable-next-line prefer-const
    interval = setInterval(() => {
      console.log('waiting for element');
      const el = context.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el);
      }
      if (checkLimit === 0) {
        clearInterval(interval);
        resolve(false);
      }
      checkLimit--;
    }, delay);
  });
}
