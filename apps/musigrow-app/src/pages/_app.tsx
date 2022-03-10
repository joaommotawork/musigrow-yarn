import type { AppProps } from 'next/app';
import React from 'react';
import '@/styles/globals.css';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
