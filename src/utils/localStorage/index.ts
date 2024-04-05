export const APP_KEY = 'APPKEY';

export function getStorage(key: string) {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  return JSON.parse(data!);
}

export function setStorage(key: string, value: unknown) {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
