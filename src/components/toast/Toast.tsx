import React, { useEffect, useRef, useState } from "react";

interface Props {
  type?: boolean;
  message?: { title?: string; content?: string };
  duration?: number;
  onClick?: (e: any) => void;
  onClose?: any;
}

const Toast: React.FC<Props> = ({ type = true, message, duration = 3000, onClose }) => {
  const [state, setState] = useState<"" | "slide-in" | "fade-out">("");

  const timeout = useRef<any>();
  const ref = useRef<any>();
  const { title = "Thông báo", content = "Đây là thông báo!" } = message || {};

  /**
   * Close the toast
   * @param {*} e click event
   */
  const close = (e?: any) => {
    // Prevent click parent when click close
    e?.stopPropagation();

    setState("");
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setState("fade-out");

      timeout.current = setTimeout(() => {
        onClose?.();
      }, 400);
    }, 400);
  };

  useEffect(() => {
    setTimeout(() => setState("slide-in"), 10);
    if (duration) {
      timeout.current = setTimeout(() => {
        close();
      }, duration);
    }
    return () => clearTimeout(timeout.current);
  }, []);

  const isFadeOut = state === "fade-out";

  return (
    <div
      className={`toast ${state} ${type ? "success" : "error"}`}
      ref={ref}
      style={{
        maxHeight: isFadeOut ? 0 : ref.current?.scrollHeight,
        marginBottom: isFadeOut ? 0 : 8,
        padding: isFadeOut ? 0 : 16,
      }}
    >
      <i className={`icon-${type ? "check" : "alert"}-circle`} />
      <div>
        <p className="toast-title">{title}</p>
        <p className="label toast-content">{content}</p>
      </div>
    </div>
  );
};

export default Toast;
