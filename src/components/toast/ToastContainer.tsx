import React, { useCallback, useEffect, useState } from "react";
import Toast from "./Toast";

import { listener } from "./createToast";
import { ToastType } from "types";

const ToastContainter: React.FC = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    listener.setToasts = setToasts;
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
