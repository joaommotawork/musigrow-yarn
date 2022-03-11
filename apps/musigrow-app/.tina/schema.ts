
import { defineSchema, defineConfig, TinaCMS } from 'tinacms';

export default defineSchema({
	collections: [
		{
			label: 'Blog Posts',
			name: 'posts',
			path: 'content/posts',
			fields: [
				{
					type: 'string',
					label: 'Title',
					name: 'title',
				},
				{
					type: 'string',
					label: 'Blog Post Body',
					name: 'body',
					isBody: true,
					ui: {
						component: 'textarea',
					},
				},
			],
		},
	],
});

// Your tina config
// ==============
const branch = 'main';
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
	process.env.NODE_ENV == 'development'
		? 'http://localhost:4001/graphql'
		: `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
	apiURL,
	cmsCallback: (cms): any => {
		//  add your CMS callback code here (if you want)

		// The Route Mapper
		/**
		 * 1. Import `tinacms` and `RouteMappingPlugin`
		 **/
		import('tinacms').then(({ RouteMappingPlugin }) => {
			/**
			 * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
			 **/
			const RouteMapping = new RouteMappingPlugin((collection, document) => {
				return undefined;
			});
			/**
			 * 3. Add the `RouteMappingPlugin` to the `cms`.
			 **/
			cms.plugins.add(RouteMapping);
		});
	},
});
