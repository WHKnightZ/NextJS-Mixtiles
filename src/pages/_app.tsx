import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "configs/theme";
import { ToastContainer } from "components";
// import { useRouter } from "next/router";

import "styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  // const router = useRouter();

  // console.log(router);

  return (
    <ThemeProvider theme={theme}>
      <AnyComponent {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
