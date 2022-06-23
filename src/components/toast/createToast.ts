import { ToastType } from "types";

export const listener: {
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
} = {
  setToasts: () => {},
};

let toastKey = 0;

export const createToast = (toast: ToastType) => {
  toastKey += 1;

  listener.setToasts((prev) => [...prev, { ...toast, key: toastKey }]);
};
