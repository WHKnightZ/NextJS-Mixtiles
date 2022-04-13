import React, { MutableRefObject } from "react";
import { Button as MuiButton, ButtonProps, CircularProgress } from "@mui/material";

interface Props extends ButtonProps {
  innerRef?: MutableRefObject<any>;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  innerRef,
  loading,
  children,
  disabled,
  className = "",
  size = "small",
  ...rest
}) => {
  const isSmall = size === "small";

  return (
    <MuiButton className={`Button ${className}`} ref={innerRef} disabled={loading || disabled} {...rest} size={size}>
      {loading ? <CircularProgress size={isSmall ? 20 : 24} color="inherit" /> : children}
    </MuiButton>
  );
};

export default Button;
