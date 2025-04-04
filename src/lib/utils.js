import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));

export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getItem = (key) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};
export const removeItem = (key) => localStorage.removeItem(key);

export const isNumeric = (value) => {
  if (typeof value === 'number') return !isNaN(value);
  if (typeof value === 'string') return /^\d+$/.test(value.trim());
  return false;
};
