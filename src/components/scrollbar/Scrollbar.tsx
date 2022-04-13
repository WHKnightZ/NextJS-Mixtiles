import React from "react";

interface Props {
  className?: string;
  [key: string]: any;
}

const Scrollbar: React.FC<Props> = ({ children, className = "", ...rest }) => {
  return (
    <div {...rest} className={`Scrollbar ${className}`}>
      {children}
    </div>
  );
};

export default Scrollbar;
