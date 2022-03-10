import React from 'react';
import '../styles/globals.scss';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </React.Fragment>

}

export default MyApp
