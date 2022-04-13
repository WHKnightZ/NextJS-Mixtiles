import React, { useRef, useState } from "react";
import { Box, Divider, MenuItem, Typography, Avatar, IconButton, Popover } from "@mui/material";
import { DEFAULT_AVATAR } from "configs/constants";

const AccountPopover: React.FC = () => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const menuOptions = [
    {
      label: "Câu hỏi thường gặp",
      icon: "plus",
      linkTo: "#",
    },
    {
      label: "Câu hỏi thường gặp",
      icon: "plus",
      linkTo: "#",
    },
    {
      label: "Câu hỏi thường gặp",
      icon: "plus",
      linkTo: "#",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 34,
          height: 34,
        }}
      >
        <Avatar src={DEFAULT_AVATAR} alt="avatar" style={{ width: 34, height: 34 }} />
      </IconButton>

      <Popover
        className="MenuPopover"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.5,
            width: 250,
            borderRadius: "8px",
            pb: 2,
          },
        }}
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 250 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="body2" noWrap style={{ color: "var(--cl-secondary)" }}>
            Người dùng
          </Typography>
          <Typography variant="subtitle1" noWrap textOverflow="ellipsis" style={{ color: "var(--cl-secondary)" }}>
            Nguyễn Khánh
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {menuOptions.map((option) => (
          <MenuItem
            key={option.label}
            // component={RouterLink}
            // to={option.linkTo}
            // onClick={() => {
            //   handleClose();
            //   option.onClick?.();
            // }}
            sx={{ typography: "body2", py: 1.5, px: 2.5 }}
            style={{ color: "var(--cl-secondary)" }}
          >
            <Box mr={2} display="flex" alignItems="center">
              <i className={`icon-sm ${option.icon}`} />
            </Box>
            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default AccountPopover;
