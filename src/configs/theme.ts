import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0072",
    },
  },
  typography: {
    fontFamily: '"Mulish", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 45,
          textTransform: "initial",
        },
        sizeSmall: {
          height: 36,
          fontSize: 13,
        },
        sizeLarge: {
          height: 56,
          fontSize: 18,
          fontWeight: 700,
          padding: "0 40px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "#919eab3d 0px 0px 3px 0px, #919eab3d 0px 15px 30px -4px",
          borderRadius: 12,
          padding: 20,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 12,
          fontSize: "14px",
          color: "var(--cl-secondary)",
          fontWeight: 500,
        },
        head: {
          fontWeight: 600,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          tableLayout: "fixed",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "var(--cl-secondary)",
          fontWeight: 500,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: 16,
        },
        sizeSmall: {
          fontSize: 15,
        },
      },
    },
  },
});
