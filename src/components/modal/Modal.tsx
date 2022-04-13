import React from "react";
import { Breakpoint, Dialog, DialogTitle } from "@mui/material";

interface Props {
  show: boolean;
  title: string;
  close?: any;
  size?: Breakpoint;
  onBackdropClick?: any;
}

const Modal: React.FC<Props> = ({ show, title, children, size = "xs", ...rest }) => {
  return (
    <Dialog className="Modal" open={show} fullWidth maxWidth={size} {...rest}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
