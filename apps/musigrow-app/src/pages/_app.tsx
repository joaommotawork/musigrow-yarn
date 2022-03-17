import Tina from '@tina/components/TinaDynamicProvider';
import type { AppProps } from 'next/app';
import React from 'react';
import { store } from '@app/store';
import { Provider } from 'react-redux';
import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';
import '@styles/globals.css';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Tina>
			<Provider store={store}>
				<Head>
					<meta
						name='viewport'
						content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover'
					/>
				</Head>
				<Component {...pageProps} />
			</Provider>
		</Tina>
	);
}

export default MyApp;
