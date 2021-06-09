import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import GlobalStyles from 'styles/global'
import AppProvider from '../hooks'
import { Toaster } from 'react-hot-toast'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Head>
        <title>No Crowd</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta
          name="description"
          content="No Crowd"
        />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color="#53141E"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App
