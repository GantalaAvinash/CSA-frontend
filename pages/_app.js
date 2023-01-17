// disable eslint for indentation
/* eslint-disable react/jsx-indent */
import Head from 'next/head';
import '../styles/globals.css';
import React from 'react';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Cyber Security MREC</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://stijndv.com" />
            <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        </Head>
        <Component {...pageProps} key={Math.random()} />
    </>
);
export default MyApp;
