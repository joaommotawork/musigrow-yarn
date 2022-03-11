import React from 'react';
import ReactDOM from 'react-dom';
import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';
import '@styles/main.css';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
