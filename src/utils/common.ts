import { LS_PHOTOS, MAX_FILENAME_LENGTH } from "configs/constants";
import { AuthType } from "types";

/**
 * Detect user agent is mobile or not
 *
 * @return Boolean
 */
export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * Get user from local storage
 */
export const getUserLS = () => {
  const oldUser = localStorage.getItem("user") || "{}";
  let parsedUser;
  try {
    parsedUser = JSON.parse(oldUser);
  } catch (e) {}
  return (parsedUser || {}) as AuthType;
};

/**
 * Update user to local storage
 * @param user
 */
export const updateUserLS = (user: AuthType) => {
  const oldUser = getUserLS();
  localStorage.setItem("user", JSON.stringify({ ...oldUser, ...user }));
};

/**
 * Remove user from local storage
 * @param user
 */
export const removeUserLS = () => {
  localStorage.removeItem("user");
};

// Random id with 6 characters
export const randomId = () => Math.random().toString(36).substr(2, 6);

export const removeAccents = (name: string) => {
  return (
    name
      .trim()
      .toLowerCase()
      // Tách chữ có dấu thành 2 thành phần: chữ và dấu
      .normalize("NFD")
      // Chuyển đ thành d
      .replace(/đ/g, "d")
      // Xóa toàn bộ dấu
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, "")
  );
};

export const convertToId = (name: string) => {
  return (
    removeAccents(name)
      // Chuyển hết dấu cách thành gạch ngang
      .replace(/\s+/g, "-")
  );
};

export const saveLsPhotos = (photos: any) => localStorage.setItem(LS_PHOTOS, JSON.stringify(photos));

export const getLsPhotos = () => {
  let photos: any;
  try {
    photos = localStorage.getItem(LS_PHOTOS);
    if (photos) photos = JSON.parse(photos);
  } catch {}
  return (photos || {}) as { frameType: string; images: any[] };
};

export const formatFilename = (name: string) => {
  return (
    name
      .trim()
      .normalize("NFD")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      // eslint-disable-next-line no-useless-escape
      .replace(/([\u0300-\u036f]|[^ 0-9a-zA-Z`~!@#$%^&*(),.?'":;{}+=|<>_\-\\\/\[\]])/g, "")
      // eslint-disable-next-line no-useless-escape
      .replace(/([`~!@#$%^&*()?'":;{}+=|<>_\-\\\/\[\]])/g, " ")
      .replace(/ +(?= )/g, "")
      .replace(/ /g, "_")
  );
};

export const trimFileName = (fileName: any = "") => {
  // Normalize NFC on safari => fix bug germany character
  fileName = formatFilename(fileName);
  if (fileName.length > MAX_FILENAME_LENGTH) {
    const indexExtension = fileName.lastIndexOf(".");

    // if extension length > 5 => only take 4 characters
    const ext = indexExtension > -1 ? fileName.substr(indexExtension).substr(0, 5) : "";
    const newName = fileName.substr(0, MAX_FILENAME_LENGTH - ext.length);
    fileName = newName + ext;
  }
  return fileName;
};

export const createFileName = (fileName: string) => randomId() + "_" + trimFileName(fileName);
