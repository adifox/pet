import Head from 'next/head'

// Components
import Header from '../header'
import Footer from '../footer'

// Styles
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Petexcellenttreatment</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link rel='preload' href='/fonts/Ebrima.ttf' as='font' crossOrigin='' />
      </Head>
      <Header />
      <div className={styles.mainContent}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
