import '@/styles/globals.css';
import theme from '@/theme';
import '@fontsource/nunito';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
//import '@fortawesome/fontawesome-svg-core/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: any) => page);

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
