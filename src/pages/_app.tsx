import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "configs/theme";
import "styles/index.scss";
// import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  // const router = useRouter();

  // console.log(router);

  return (
    <ThemeProvider theme={theme}>
      <AnyComponent {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
