import Tina from '@tina/components/TinaDynamicProvider.js';
import type { AppProps } from 'next/app';
import React from 'react';
import { store } from '@app/store';
import { Provider } from 'react-redux';
import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';
import '@styles/globals.css';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Tina>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Tina>
	);
}

export default MyApp;
