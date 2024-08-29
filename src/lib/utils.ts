import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function combineClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmail(str: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

export function openTidio() {
  if (window) {
    window?.tidioChatApi.open();
  }
}
