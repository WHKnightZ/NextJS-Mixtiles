import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "configs/theme";
import "styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <ThemeProvider theme={theme}>
      <AnyComponent {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
