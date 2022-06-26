import React, { useCallback, useEffect, useState } from "react";
import { ToastType } from "types";
import Toast from "./Toast";
import { doNothing, listener } from "./createToast";

const ToastContainter: React.FC = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    listener.setToasts = setToasts;

    return () => {
      listener.setToasts = doNothing;
    };
  }, []);

  const removeToast = useCallback((toastKey: number = 0) => {
    setToasts((prev) => prev.filter((s) => s.key !== toastKey));
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.key} onClose={() => removeToast(toast.key)} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainter;
