import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { base64Strings, radioCheckboxes } from './definitions';

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

/**
 * Converts a base64 data URL to a File object.
 * @param {string} base64Data - The base64 data URL.
 * @param {string} fileName - The name of the file to create (e.g., 'signature.png').
 * @returns {File|Blob} - A File object (or Blob fallback) that can be uploaded or saved.
 */
export const base64ToFile = (base64Data, fileName) => {
  if (!base64Data.includes(',')) {
    return '';
  }

  const [header, data] = base64Data.split(',');
  const mimeMatch = header.match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';

  const byteString = atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  try {
    return new File([uint8Array], fileName, { type: mime });
  } catch {
    const blob = new Blob([uint8Array], { type: mime });
    blob.name = fileName;
    return blob;
  }
};

export const convertFileListsToFiles = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value instanceof FileList && value.length === 1) {
      obj[key] = value[0];
    }
  });
  return obj;
};

export const convertBase64ToFile = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (base64Strings.includes(key)) {
      obj[key] = base64ToFile(value, key);
    }
  });

  return obj;
};

export const convertAgreementsToString = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (radioCheckboxes.includes(key)) {
      obj[key] = value[0];
    }
  });

  return obj;
};

export const parseFormData = (data) => {
  // convert Base64 strings to Files
  data = convertBase64ToFile(data);

  // convert FileLists to Files
  data = convertFileListsToFiles(data);

  //convert checkbox agreement array to string
  data = convertAgreementsToString(data);

  //convert date object to date
  const rawDate = new Date(data.date_of_birth);
  const formattedDate = rawDate.toLocaleDateString('en-US');
  data.date_of_birth = formattedDate;

  return data;
};

export const convertToFormData = (obj) => {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(`${key}[]`, item);
      });
    } else if (value) {
      formData.append(key, value);
    }
  });

  return formData;
};
