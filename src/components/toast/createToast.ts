import { ToastType } from "types";

export const doNothing = () => {};

export const listener: {
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
} = {
  setToasts: doNothing,
};

let toastKey = 0;

export const createToast = (toast: ToastType) => {
  toastKey += 1;

  listener.setToasts((prev) => [...prev, { ...toast, key: toastKey }]);
};
