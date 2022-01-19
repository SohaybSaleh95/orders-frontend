import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ar'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import '../public/assets/theme/theme-deeporange.css';
import '../public/assets/layout/css/layout-deeporange.css'
import 'font-awesome/css/font-awesome.css';

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
