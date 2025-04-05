import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { radioCheckboxes } from './definitions';

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

export const convertFileListsToFiles = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value instanceof FileList && value.length === 1) {
      obj[key] = value[0];
    }
  });
  return obj;
};

export const convertBlobToFile = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value instanceof Blob && !(value instanceof File) && value.size > 0) {
      const file = new File([value], key, { type: value.type });
      obj[key] = file;
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
  // convert Blobs to Files
  data = convertBlobToFile(data);

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
