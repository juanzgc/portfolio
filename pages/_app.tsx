import '../styles/globals.css'
import {Fragment} from 'react';
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes'

import SEO from 'next-seo.config';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class" defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>

    </Fragment>
  )
  
}
export default MyApp
