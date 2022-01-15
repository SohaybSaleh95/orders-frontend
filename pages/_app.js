import '../styles/globals.css'
import '../styles/login-signup.css'
import '../styles/navbar.css'
import '../styles/public.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ar'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    moment.locale('ar');
  }, [])
  return <>
    <ToastContainer
      hideProgressBar={true}
      position='top-left'
      rtl={true}
    />
    <Head>
      <title>Orders</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
